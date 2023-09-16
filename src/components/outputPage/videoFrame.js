import { useEffect, useRef, useState } from "react";
import ImageView from "./imageView";
import VideoAnimate from "./video";

export default function AnimateFrame() {

    const [position, setPosition] = useState(false);
    const videoRef = useRef(null)
    const handleParentHover = () => {
        setPosition(true)
      };
    
      const handleParentMouseLeave = () => {
        setPosition(false)
      };
    
      useEffect(() => {
        const parentElement = videoRef.current;
    
        if (parentElement) {
          parentElement.addEventListener('mouseenter', handleParentHover);
          parentElement.addEventListener('mouseleave', handleParentMouseLeave);
          console.log(parentElement)
    
          return () => {
            parentElement.removeEventListener('mouseenter', handleParentHover);
            parentElement.removeEventListener('mouseleave', handleParentMouseLeave);
          };
        }
      });

    return(
        <div ref={videoRef} className="aspect-video bg-300 w-[75vw] flex justify-center items-end overflow-hidden">
            <VideoAnimate setPosition={setPosition}></VideoAnimate>
            <ImageView position = {position}></ImageView>
        </div>
    )
}