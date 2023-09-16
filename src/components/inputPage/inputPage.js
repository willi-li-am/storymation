import { faAngleDoubleRight } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useState } from "react";

function Explanation() {
    return (
        <div className="flex flex-col gap-5">
            <h2 className="text-6xl">Usage</h2>
            <p className="text-lg">
            Storymation transforms text stories into vibrant animations. Just input your narrative, and it creates captivating animated tales. It's perfect for writers and educators looking to add visual storytelling to their repertoire. Elevate your storytelling with Storymation's easy-to-use platform today!
            </p>
        </div>
    )
}


function Prompt({setPage}) {
    const [promptContent, setPromptContent] = useState('');

    function SendPrompt()
    {
        console.log(promptContent)
    }

    return (
        <div className="flex flex-col items-end gap-5">
            <textarea
                className="w-full h-80 p-4 bg-400 rounded-xl min-h-40 max-h50 outline-none"
                onChange={e => setPromptContent(e.target.value)}
            />
            <button className="group bg-100 hover:bg-blue-200 text-500 font-bold rounded w-20 h-9 p-2"
                    onClick={() => {SendPrompt(); setPage(2)}}>
                <div className="flex flex-row items-center h-full w-200 gap-3 group-hover:-translate-x-20 transition-all pl-1">
                    <p className="pr-9">Submit</p>
                    <FontAwesomeIcon icon = {faAngleDoubleRight}></FontAwesomeIcon>
                </div>
            </button>
        </div>
    )
}

export default function InputPage({setPage}) {
    return (
        <>
            <div className="p-20 pt-10 bg-500 h-[calc(100vh-70px)] flex flex-col items-center text-100 font-sg">
                <div className="flex flex-col w-4/5 max-w-4xl gap-7 ">
                    <Explanation />
                    <Prompt setPage={setPage} />
                </div>
            </div>
        </>
    )
}