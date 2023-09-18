import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function SpriteComponent({character, img, time, dimensions})
{
    let actions = character.Actions;
    const [x, setX] = useState(actions[0].x * dimensions[0]);
    const [y, setY] = useState(actions[0].y * dimensions[1]);

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
            setX(lerp(actions[currentAction].x, actions[currentAction + 1].x, t) * dimensions[0]);
            setY(lerp(actions[currentAction].y, actions[currentAction + 1].y, t) * dimensions[1]);
        }
    }
    useEffect(()=> {
        update()
    },[time])

    // console.log(character)

    return (
        <div className="absolute">
            <motion.div
                className="w-20 h-20"
                animate={{x: x, y: y, scale: character.Size * 6 * 2}}
                transition={{ease: "linear", duration: 0.01}}
            >
                <img className=""
                src={character.Link}>
                </img>
            </motion.div>
        </div>
    )
}