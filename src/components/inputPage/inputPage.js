import { faAngleDoubleRight } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useState } from "react";

function Explanation() {
    return (
        <div className="flex flex-col gap-5">
            <h2 className="text-6xl">Usage</h2>
            <p className="text-lg">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
        </div>
    )
}


function Prompt() {
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
                    onClick={SendPrompt}>
                <div className="flex flex-row items-center h-full w-200 gap-3 group-hover:-translate-x-20 transition-all pl-1">
                    <p className="pr-9">Submit</p>
                    <FontAwesomeIcon icon = {faAngleDoubleRight}></FontAwesomeIcon>
                </div>
            </button>
        </div>
    )
}

export default function InputPage() {
    return (
        <>
            <div className="p-20 bg-500 min-h-screen flex flex-col items-center text-100 font-sg">
                <div className="flex flex-col w-4/5 max-w-4xl gap-7 ">
                    <Explanation />
                    <Prompt />
                </div>
            </div>
        </>
    )
}