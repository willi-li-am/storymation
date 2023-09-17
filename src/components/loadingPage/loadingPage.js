import { useEffect } from "react"

export default function LoadingPage({setPage, scenes, numberScenes}){
    console.log(scenes)
    return (
        <div>
            Loaded {scenes.length}/{numberScenes} scenes
        </div>
    )
}