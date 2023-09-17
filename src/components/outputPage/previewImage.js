import { hover } from "@testing-library/user-event/dist/hover"
import { useEffect, useState } from "react"
import MiniPreview from "../animation/miniPreview"
import PreviewComponent from "../animation/previewComponent"

export default function PreviewImage({index, selected, setSelected, value}){
    
    const [hovered, setHovered] = useState(false)
    const [clicked, setClicked] = useState(false)

    useEffect(() => {
        if (index == selected){
            setClicked(true)
        }
        else if (clicked === true){
            setClicked(false)
        }
    }, [selected])

    return(
        <div src = "" 
        onClick={() => {setSelected(index)}} onMouseEnter={()=> setHovered(true)} onMouseLeave={() => setHovered(false)} 
        className="h-[100px] w-[200px] bg-200 duration-200 hover:cursor-pointer object-cover overflow-hidden" 
        style={{minWidth: hovered || clicked? "150px" : "20px", borderColor: clicked? "red" : "white", borderWidth: clicked? "2px" : "1px"}}>

            <MiniPreview bg={value["Background"]}>
                {value["Characters"].map((character, index) => {
                    return(
                        <PreviewComponent img = {character["Sprite"]} position={{x: (character["Actions"][0]["x"] * 100)+"%", y: (character["Actions"][0]["y"]* 100)+"%"}} size={character["Size"]}></PreviewComponent>
                    )
                })}
            </MiniPreview>
        </div>
    )
}