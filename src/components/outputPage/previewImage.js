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

            <MiniPreview>
                {/*"map over value to get all the images and then put them in preview component"*/}
                <PreviewComponent img = "https://assets.stickpng.com/images/580b57fcd9996e24bc43c1ed.png" position={{x: "20%", y: "50%"}} size={"10%"}></PreviewComponent>
                <PreviewComponent img = "https://e7.pngegg.com/pngimages/742/816/png-clipart-coke-coke-drink-thumbnail.png" position={{x: "50%", y: "20%"}} size={"10%"}></PreviewComponent>
            </MiniPreview>
        </div>
    )
}