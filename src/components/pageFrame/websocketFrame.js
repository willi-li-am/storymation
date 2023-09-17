import InputPage from "../inputPage/inputPage"
import PageFrame from "./pageFrame"
import { useRef, useEffect, useState } from "react"
import LoadingPage from "../loadingPage/loadingPage";
import OutputPage from "../outputPage/outputPage";

let first = false;

export default function SocketFrame({children, newQuery, setNewQuery, setPage, page}){
    const [scenes, setScenes] = useState([])
    const [numberScene, setNumberScene] = useState(0)
    const [music, setMusic] = useState(false)
    const inputRef = useRef(null)

    function Receive(json)
    {
        // Parse into friendly scene type
        let newScene = {
            Background: json["Background"],
            length: json["length"],
            Characters: [],
        }

        for (let character of json["Characters"])
        {
            let newCharacter = {
                Size: parseFloat(character["Size"].split("%")[0]) / 100,
                Actions: [],
                Link : character["Sprite"]
            }

            for (let action of character["Actions"])
            {
                const pos = action["Position"].split(",");
                let newAcc = {
                    x: parseFloat(pos[0]) / 100,
                    y: parseFloat(pos[1]) / 100,
                    time: parseFloat(action["time"]),
                }
                newCharacter["Actions"].push(newAcc);
            }

            newScene["Characters"].push(newCharacter);
        }

        return newScene;

    }

    useEffect(() => {
        function openSocket(newQuery){
            if(newQuery !== ""){
                const ws = new WebSocket("ws://localhost:5500")
                ws.onopen = () => {
                    console.log("opened")
                    try{
                        ws.send(newQuery)
                    }
                    catch(e){
                        console.log(e)
                    }
                }
                ws.onmessage = (message) => {
                    console.log(message["data"])
                    let data = message["data"]
                    try{
                        data = JSON.parse(message["data"])
                    }
                    catch{
                
                    }
                    if (data["type"] == "success"){
                        ws.close()
                        setNewQuery("")
                    }
                    else if(data["type"] == "numberScenes"){
                        setNumberScene(data["value"])
                    }

                    else if (data["type"] == "story"){
                        const transData = Receive(data)
                        setScenes([...scenes, transData])
                    }

                    else if (data["type"] == "youtube"){
                        setMusic(data["value"])
                    }

                    else{
                        console.log(data)
                    }
                }
                ws.onclose = () => {
                    console.log("Websocket closed successfully")
                }
            }
        }

        openSocket(newQuery)

    }, [newQuery])

    return(
        <>
        {page == 0? 
            <PageFrame setPage = {setPage}>
                <InputPage newQuery = {newQuery} setPage={setPage} setNewQuery={setNewQuery} inputRef={inputRef}></InputPage>
            </PageFrame>
        : <></>}
        {page == 1?
          <LoadingPage></LoadingPage>
        : <></>}
        {page == 2? 
          <OutputPage scenes={scenes} setScenes={setScenes} music={music} setMusic={setMusic} setPage={setPage} numberScene={numberScene} setNumberScene={setNumberScene}></OutputPage>
        : <></>}
        </>
    )
}