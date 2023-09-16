import { useState, useEffect } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPlay, faPause } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";
import SpriteComponent from "../animation/spriteComponent";

const actions =
    [
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

const scene =
{
    Background: "A cozy, well-lit kitchen with pots and pans hanging overhead, a wooden table in the center, and a refrigerator to the right",
    Duration: 6,
    Characters: [
        {
            Type: "Human",
            Description: "A male robber, dressed in all black with a mask and a sack",
            Size: "25%",
            Actions: [
                {
                    x: 10,
                    y: 50,
                    time: 0
                },
                {
                    x: 400,
                    y: 100,
                    time: 2
                }
            ]
        },
        {
            Type: "Human",
            Description: "A mother, dressed in an apron, holding a frying pan",
            Size: "25%",
            Actions: [
                {
                    x: 80,
                    y: 50,
                    time: 0
                },
                {
                    x: 400,
                    y: 100,
                    time: 3
                },
                {
                    x: 500,
                    y: 400,
                    time: 6
                }
            ]
        }
    ]
}

const scenes = [scene, scene, scene]

export default function VideoAnimate({ setShowBar }) {
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
            if (playing && time <= scene.Duration)
            {
                setTime(time + 1 / refreshRate);
            }

            if (time > scene.Duration) setPlaying(false);

        }, 1000 / refreshRate);
        return () => clearInterval(interval);
    }, [playing, time]);

    return (
        <div
            className="relative aspect-video bg-300 w-[75vw] flex justify-end items-end overflow-hidden"
        >
            <div className="absolute w-full h-full flex-col">
                <input
                    type="range"
                    className="absolute transparent h-[8px] w-full cursor-pointer appearance-none border-transparent bg-200 bottom-[8px]"
                    id="customRange1"
                    onChange={e => { setTime(scene.Duration * e.target.value / 100)}}
                    value={time / scene.Duration * 100}
                />
                {scene.Characters.map(character => <SpriteComponent actions={character.Actions} time={time} className="absolute" />)}
            </div>
            <button onClick={() => { setPlaying(!playing) }} className="group w-full h-full flex items-center justify-center text-8xl">
                <motion.div
                    className="text-white/0 text-white w-60 h-60 text-center flex items-center justify-center"
                    animate={{ opacity: playing ? 0 : 0.7 }}
                    whileHover={{ scale: 1.1, opacity: playing ? 0.5 : 0.7 }}
                    whileTap={{ scale: 0.9 }}
                    transition={{ type: "spring", stiffness: 600, damping: 22 }}
                >
                    <FontAwesomeIcon icon={playing ? faPause : faPlay }></FontAwesomeIcon>
                </motion.div>
            </button>
        </div>
    )
}