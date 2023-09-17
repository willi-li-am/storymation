import { useEffect, useRef, useState } from "react";
import ImageView from "./imageView";
import VideoAnimate from "./video";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDoubleLeft, faDownload } from "@fortawesome/free-solid-svg-icons";

export default function AnimateFrame({setPage, currentScene, setCurrentScene, scenes}) {
    let scene = scenes[currentScene];

    const [showBar, setShowBar] = useState(false);
    const videoRef = useRef(null)
    const handleParentHover = () => {
        setShowBar(true)
      };
    
      const handleParentMouseLeave = () => {
        setShowBar(false)
      };
    
      useEffect(() => {
        const parentElement = videoRef.current;
    
        if (parentElement) {
          parentElement.addEventListener('mouseenter', handleParentHover);
          parentElement.addEventListener('mouseleave', handleParentMouseLeave);
    
          return () => {
            parentElement.removeEventListener('mouseenter', handleParentHover);
            parentElement.removeEventListener('mouseleave', handleParentMouseLeave);
          };
        }
      });


    return(
        <div className="flex flex-col justify-center items-center space-y-[20px]">
            <div ref={videoRef} className="aspect-video bg-300 w-[75vw] flex justify-center items-end overflow-hidden">
                <VideoAnimate setShowBar={setShowBar} currentScene={currentScene} setCurrentScene={setCurrentScene} scenes={scenes}></VideoAnimate>
                <ImageView showBar = {showBar}></ImageView>
            </div>
            <div className="w-[calc(75vw-50px)] h-[10px] flex justify-between">
                <button onClick={() => {setPage(0)}} className="group bg-100 hover:bg-blue-200 text-500 font-bold rounded w-20 h-9 p-2">
                    <div className="flex flex-row items-center h-full w-200 gap-3 group-hover:-translate-x-20 transition-all pl-1">
                        <p className="mr-9">Return</p>
                        <FontAwesomeIcon icon = {faAngleDoubleLeft}></FontAwesomeIcon>
                    </div>
                </button>
                <button className="group bg-100 hover:bg-blue-200 text-500 font-bold rounded w-20 h-9 p-2">
                    <div className="flex flex-row items-center h-full w-200 gap-3 group-hover:-translate-x-20 transition-all pl-1">
                        <p className="pr-9">Export</p>
                        <FontAwesomeIcon icon = {faDownload}></FontAwesomeIcon>
                    </div>
                </button>
            </div>
        </div>
    )
}