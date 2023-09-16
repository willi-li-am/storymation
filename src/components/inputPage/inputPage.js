import { faAngleDoubleRight } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useEffect, useState, useLayoutEffect } from "react";

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


const ActionTest = [
    {
        time: 0,
        x: 10,
        y: 0,
    },
    {
        time: 4,
        x: 200,
        y: 100,
    },
    {
        time: 3,
        x: 400,
        y: 0,
    },
    {
        time: 9,
        x: -20,
        y: 100,
    },
]

function IDK({ actions, time })
{
    const [x, setX] = useState(0);
    const [y, setY] = useState(0);

    function lerp(a, b, t)
    {
        return a + t * (b - a);
    }

    function update()
    {
        var localT = time;
        var currentAction = 0;

        for (var cur = actions.length - 1; cur >= 0; --cur) {
            if (localT >= actions[cur].time) {
                localT -= actions[cur].time;
                currentAction = cur;
                break;
            }
        }

        var actionTime = currentAction === actions.length - 1 ? 0 :
            actions[currentAction + 1].time - actions[currentAction].time;

        var t = localT / actionTime;

        if (actionTime == 0) {
            // clip
            // --currentAction;
            // localT = actions[currentAction].time;
        }
        else {
            console.log(time)
            setX(lerp(actions[currentAction].x, actions[currentAction + 1].x, t));
            setY(lerp(actions[currentAction].y, actions[currentAction + 1].y, t));
        }
    }
    useEffect(()=> {
        update()
    },[time])

    return (
        <div className="w-full">
            <motion.div
                className="w-20 h-20 bg-red-600"
                animate={{x, y}}
            />
        </div>
    )
}


export default function InputPage() {
    const [startTime, setStartTime] = useState(Date.now())
    const [time, setTime] = useState(0)
    const refreshRate = 60

    useEffect(() => {
        const interval = setInterval(() => {
            setTime((Date.now() - startTime) / 1000);
        }, 1000/refreshRate);

        return () => clearInterval(interval);
    }, []);

    return (
        <>
            <div className="p-20 bg-500 min-h-screen flex flex-col items-center text-100 font-sg">
                <div className="flex flex-col w-4/5 max-w-4xl gap-7 ">
                    <Explanation />
                    <Prompt />
                    <IDK actions={ActionTest} time={time}/>
                </div>
            </div>
        </>
    )
}