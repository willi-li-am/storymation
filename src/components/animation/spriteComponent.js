import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function SpriteComponent({actions, img, time, dimensions})
{
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

    return (
        <div className="w-full">
            <motion.div
                className="w-20 h-20 bg-red-600"
                animate={{x: x, y: y}}
                transition={{ease: "linear", duration: 0.01}}
            />
        </div>
    )
}