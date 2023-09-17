import { useState } from "react";
import AnimateFrame from "./videoFrame";

// Test raw-scene (expected format)
const rawScene = 
{
    Background: "A cozy, well-lit kitchen with pots and pans hanging overhead, a wooden table in the center, and a refrigerator to the right",
    length: 6,
    Characters: [
        {
            Type: "Human",
            Description: "A male robber, dressed in all black with a mask and a sack",
            Size: "25%",
            Actions: [
                {
                    Position: "50%, 50%",
                    time: "0"
                },
                {
                    Position: "20%, 5%",
                    time: "2"
                },
                {
                    Position: "85%, 50%",
                    time: "6"
                }
            ]
        },
        {
            Type: "Human",
            Description: "A mother, dressed in an apron, holding a frying pan",
            Size: "25%",
            Actions: [
                {
                    Position: "80%, 50%",
                    time: "0"
                },
                {
                    Position: "40%, 60%",
                    time: "3"
                },
                {
                    Position: "20%, 10%",
                    time: "6"
                }
            ]
        }
    ]
}

let scenes = []
let sceneCount = 0

function Receive(json)
{
    let obj = JSON.parse(json);
    let type = obj["type"];
    let val = obj["value"];

    if (type === "numberScenes")
    {
        sceneCount = val;
    }
    else if (type === "scene")
    {
        // Parse into friendly scene type
        let newScene = {
            Background: val["Background"],
            length: val["length"],
            Characters: [],
        }

        for (let character of val["Characters"])
        {
            let newCharacter = {
                Size: parseFloat(character["Size"].split("%")[0]) / 100,
                Actions: []
                // Sprite ???
            }

            for (let action of character["Actions"])
            {
                const pos = action["Position"].split(",");
                let newAcc = {
                    x: parseFloat(pos[0]) / 100,
                    y: parseFloat(pos[1]) / 100,
                    time: parseFloat(action["time"]),
                }
                newCharacter["Actions"].push(newAcc);
            }

            newScene["Characters"].push(newCharacter);
        }

        scenes.push(newScene);
    }
}

export default function OutputPage(props){

    Receive(JSON.stringify({type: "numberScenes", value: 1}));
    Receive(JSON.stringify({type: "scene", value: rawScene}));
    Receive(JSON.stringify({type: "scene", value: rawScene}));
    scenes[1]["Characters"][0]["Actions"]["Position"] = "100%, 100%";

    const [currentScene, setCurrentScene] = useState(0);

    return(
        <div className="w-full h-full min-h-screen flex flex-col justify-around items-center bg-500 overflow-hidden">
            <AnimateFrame setPage={props.setPage} currentScene={currentScene} setCurrentScene={setCurrentScene} scene={scenes[currentScene]}/>
        </div>
    )
}