import { useEffect, useState } from "react"
import PreviewImage from "./previewImage"

export default function ImageView({showBar, scenes, setCurrentScene}){
    const [selected, setSelected] = useState(0)

    useEffect(() =>
    {
        setCurrentScene(selected)
    }, [selected])

    return(
        <div className="absolute max-w-[calc(65vw)] bg-100 h-[100px] duration-500 mb-[50px] flex justify-center items-center" style={{opacity: showBar? "100%" : "0%"}}>
            {scenes.map((value, index) => {
                return(
                    <PreviewImage value = {value} index = {index} selected={selected} setSelected={setSelected}></PreviewImage>
                )
            })}

        </div>
    )
}