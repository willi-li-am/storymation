export default function ImageView({position}){
    return(
        <div className="absolute w-[calc(60vw+100px)] bg-100 h-[100px] duration-500 mb-[50px]" style={{opacity: position? "100%" : "0%"}}>
            <></>
            
        </div>
    )
}