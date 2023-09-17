import { useState } from "react";
import AnimateFrame from "./videoFrame";

export default function OutputPage(props){

    const [currentScene, setCurrentScene] = useState(0);

    return(
        <div className="w-full h-full min-h-screen flex flex-col justify-around items-center bg-500 overflow-hidden">
            <AnimateFrame setPage={props.setPage} setScenes={props.setScenes} currentScene={currentScene} setCurrentScene={setCurrentScene} scenes={props.scenes}  music={props.music} setMusic={props.setMusic} numberScene={props.numberScene} setNumberScene={props.setNumberScene}/>
        </div>
    )
}