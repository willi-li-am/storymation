import { useState } from "react"
import PreviewImage from "./previewImage"

export default function ImageView({position}){
    const testArray = ["","","","","","","","","","","",""]
    const [selected, setSelected] = useState(0)
    function handleSelect(index){
        setSelected(index)
    }
    return(
        <div className="absolute max-w-[calc(65vw)] bg-100 h-[100px] duration-500 mb-[50px] flex justify-center items-center" style={{opacity: position? "100%" : "0%"}}>
            {testArray.map((value, index) => {
                return(
                    <PreviewImage index = {index} selected={selected} setSelected={setSelected}></PreviewImage>
                )
            })}

        </div>
    )
}