import { hover } from "@testing-library/user-event/dist/hover"
import { useEffect, useState } from "react"

export default function PreviewImage({img, index, selected, setSelected}){
    
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
        <img src = "" 
        onClick={() => {setSelected(index)}} onMouseEnter={()=> setHovered(true)} onMouseLeave={() => setHovered(false)} 
        className="h-[100px] w-[200px] bg-200 duration-200 hover:cursor-pointer object-cover" 
        style={{minWidth: hovered || clicked? "150px" : "20px", borderColor: clicked? "red" : "white", borderWidth: clicked? "2px" : "1px"}}>

        </img>
    )
}