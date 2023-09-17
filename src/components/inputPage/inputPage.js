import { faAngleDoubleRight } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useEffect, useState, useLayoutEffect, useRef } from "react";

import { motion } from "framer-motion";

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


function Prompt({setPage, inputRef, setNewQuery, newQuery}) {

    function SendPrompt()
    {
        setNewQuery(inputRef.current.value)
        setPage(2)
    }

    return (
        <div className="flex flex-col items-end gap-5">
            <textarea 
                ref = {inputRef}
                className="w-full h-80 p-4 bg-400 rounded-xl min-h-40 max-h50 outline-none"
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

export default function InputPage({newQuery, setPage, setNewQuery, inputRef}) {

    return (
        <>
            <div className="p-20 bg-500 min-h-screen flex flex-col items-center text-100 font-sg">
                <div className="flex flex-col w-4/5 max-w-4xl gap-7 ">
                    <Explanation />
                    <Prompt inputRef = {inputRef} setPage = {setPage} setNewQuery = {setNewQuery} newQuery={newQuery}/>
                </div>
            </div>
        </>
    )
}