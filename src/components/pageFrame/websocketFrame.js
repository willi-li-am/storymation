import InputPage from "../inputPage/inputPage"
import PageFrame from "./pageFrame"
import { useRef, useEffect, useState } from "react"
import LoadingPage from "../loadingPage/loadingPage";
import OutputPage from "../outputPage/outputPage";

let first = false;

export default function SocketFrame({children, newQuery, setNewQuery, setPage, page}){
    const [scenes, setScenes] = useState([])
    const [music, setMusic] = useState(false)
    const inputRef = useRef(null)

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

                    else if (data["type"] == "story"){
                        setScenes([...scenes, data])
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
          <OutputPage scenes={scenes} setScenes={setScenes} music={music} setMusic={setMusic} setPage={setPage}></OutputPage>
        : <></>}
        </>
    )
}