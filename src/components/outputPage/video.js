import { useState, useEffect, useRef } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPlay, faPause } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";
import SpriteComponent from "../animation/spriteComponent";

export default function VideoAnimate({ setShowBar, scenes, currentScene, setCurrentScene }) {
    let scene = scenes[currentScene]

    // Playing
    const [playing, setPlaying] = useState(true)
    const x = playing ? -30 : 0
    const refreshRate = 60

    // Time tracking
    const [startTime, setStartTime] = useState(Date.now())
    const [time, setTime] = useState(0)

    // Update time
    useEffect(() => {
        const interval = setInterval(() => {
            if (playing && time <= scene["length"]) {
                setTime(time + 1 / refreshRate);
            }

            if (time > scene["length"])
            {
                console.log("Implement scene switch")
                setCurrentScene(currentScene + 1);
                setPlaying(false);
                setTime(0);
            }

        }, 1000 / refreshRate);
        return () => clearInterval(interval);
    }, [playing, time]);

    // height and width of window
    const [dimensions, setDimensions] = useState([0, 0])
    const ref = useRef(null)

    return (
        <div
            className="relative aspect-video bg-300 w-[75vw] flex justify-end items-end overflow-hidden"
        >
            <div className="absolute w-full h-full flex-col" ref={ref}>
                {
                    useEffect(() =>
                    {
                        setDimensions([ref.current.clientWidth, ref.current.clientHeight]);
                    },[])
                }
                <input
                    type="range"
                    className="absolute transparent h-[10px] w-full cursor-pointer appearance-none border-transparent bg-200 bottom-[8px]"
                    id="customRange1"
                    step="0.1"
                    onChange={e => { setTime(scene["length"] * e.target.value / 100) }}
                    value={time / scene["length"] * 100}
                />
                {scene.Characters.map(character =>
                    <SpriteComponent
                        actions={character.Actions} time={time} className="absolute" ref={ref} dimensions={dimensions}
                    />
                )}
            </div>
            <button onClick={() => { setPlaying(!playing) }} className="group w-full h-full flex items-center justify-center text-8xl">
                <motion.div
                    className="text-white w-60 h-60 text-center flex items-center justify-center"
                    animate={{ opacity: playing ? 0 : 0.7 }}
                    whileHover={{ scale: 1.1, opacity: playing ? 0.5 : 0.7 }}
                    whileTap={{ scale: 0.9 }}
                    transition={{ type: "spring", stiffness: 600, damping: 22 }}
                >
                    <FontAwesomeIcon icon={playing ? faPause : faPlay}></FontAwesomeIcon>
                </motion.div>
            </button>
        </div>
    )
}