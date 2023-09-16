import AnimateFrame from "./videoFrame";

export default function OutputPage(props){

    return(
        <div className="w-full h-full min-h-screen flex flex-col justify-around items-center bg-500 overflow-hidden">
            <AnimateFrame setPage={props.setPage}></AnimateFrame>
        </div>
    )
}