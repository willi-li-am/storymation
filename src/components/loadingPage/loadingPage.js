import { useEffect } from "react"

export default function LoadingPage({setPage, scenes, numberScenes}){
    console.log(scenes)
    return (
        <div className="bg-500 w-full min-h-screen flex items-center justify-center">
            <p className="text-white justify-center font-sg text-[32px]">
                Loading story, images and sprites!
            </p>
        </div>
    )
}