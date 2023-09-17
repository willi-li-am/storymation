import InputPage from "../inputPage/inputPage"
import PageFrame from "./pageFrame"
import { useRef, useEffect, useState } from "react"
import LoadingPage from "../loadingPage/loadingPage";
import OutputPage from "../outputPage/outputPage";

let first = false;

export default function SocketFrame({children, newQuery, setNewQuery, setPage, page}){
    const [scenes, setScenes] = useState([])
    const [ready, setReady] = useState(false)
    const inputRef = useRef(null)

    useEffect(() => {
        function openSocket(newQuery){
            if(newQuery !== ""){
                const ws = new WebSocket("ws://localhost:5500")
                ws.onopen = () => {
                    console.log("opened")
                    try{
                        ws.send(newQuery)
                        setReady(!ready)
                    }
                    catch(e){
                        console.log(e)
                    }
                }
                ws.onmessage = (message) => {
                    console.log(message["data"])
                }
            }
        }

        openSocket(newQuery)
        console.log(newQuery)

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
          <OutputPage setPage={setPage}></OutputPage>
        : <></>}
        </>
    )
}