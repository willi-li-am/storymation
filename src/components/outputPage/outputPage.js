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

const rawScene2 = 
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
                    Position: "10%, 50%",
                    time: "0"
                },
                {
                    Position: "80%, 50%",
                    time: "5"
                },
            ]
        },
        {
            Type: "Human",
            Description: "A mother, dressed in an apron, holding a frying pan",
            Size: "25%",
            Actions: [
                {
                    Position: "10%, 40%",
                    time: "0"
                },
                {
                    Position: "80%, 60%",
                    time: "5"
                },
            ]
        }
    ]
}

const rawScene3 =
{
    "type":"story",
    "Characters":[
       {
          "Type":"Human",
          "Actions":[
             {
                "Position":"50%, 70%",
                "Time":"0"
             },
             {
                "Position":"50%, 60%",
                "Time":"3"
             },
             {
                "Position":"50%, 50%",
                "Time":"6"
             },
             {
                "Position":"50%, 40%",
                "Time":"9"
             },
             {
                "Position":"50%, 30%",
                "Time":"12"
             }
          ],
          "Size":"20%",
          "Sprite":"https://oaidalleapiprodscus.blob.core.windows.net/private/org-56zDS7RGR1YiG67bQLR0Mrje/user-TrU0oM6TIzG704eWUHaoJqQr/img-LGlx6AA9sEBfSl8ZMDzJHmYr.png?st=2023-09-17T06%3A06%3A14Z&se=2023-09-17T08%3A06%3A14Z&sp=r&sv=2021-08-06&sr=b&rscd=inline&rsct=image/png&skoid=6aaadede-4fb3-4698-a8f6-684d7786b067&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2023-09-16T22%3A56%3A52Z&ske=2023-09-17T22%3A56%3A52Z&sks=b&skv=2021-08-06&sig=HP84HCjC0nmdRrTPnkO%2BzHv8UclNoiVVrli0/ryY6ow%3D"
       }
    ],
    "length":"9",
    "Background":"https://oaidalleapiprodscus.blob.core.windows.net/private/org-56zDS7RGR1YiG67bQLR0Mrje/user-TrU0oM6TIzG704eWUHaoJqQr/img-wXaaUZXL1hR5ZZUOyosUz3k7.png?st=2023-09-17T06%3A06%3A22Z&se=2023-09-17T08%3A06%3A22Z&sp=r&sv=2021-08-06&sr=b&rscd=inline&rsct=image/png&skoid=6aaadede-4fb3-4698-a8f6-684d7786b067&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2023-09-16T22%3A59%3A28Z&ske=2023-09-17T22%3A59%3A28Z&sks=b&skv=2021-08-06&sig=4l8QTndUJqonvUghZYbMbz%2BPXEgioaS%2Bct7yafMoPTI%3D"
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
    Receive(JSON.stringify({type: "scene", value: rawScene2}));
    //rawScene["Characters"][0]["Actions"]["Position"] = "0%, 0%";
    //rawScene["Characters"][1]["Actions"]["Position"] = "0%, 0%";

    const [currentScene, setCurrentScene] = useState(0);

    return(
        <div className="w-full h-full min-h-screen flex flex-col justify-around items-center bg-500 overflow-hidden">
            <AnimateFrame setPage={props.setPage} currentScene={currentScene} setCurrentScene={setCurrentScene} scenes={scenes}/>
        </div>
    )
}