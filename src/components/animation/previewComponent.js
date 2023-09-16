import { useRef } from "react"

export default function PreviewComponent({img, size, position}){

    return (
        <div className="absolute w-full h-full flex items-end" style={{bottom: `calc(${position["y"]} - ${size})`}}>
            <img className="relative" src={img} style={{width: size, marginLeft: position["x"]}}></img>
        </div>
    )
}