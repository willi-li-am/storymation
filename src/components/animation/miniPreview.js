export default function MiniPreview({children, bg}){
    return(
        <div className="w-full h-full">
            <img className="object-cover w-full h-full" src = {bg}></img>
            <div className="w-full h-full relative mt-[-100px]">
                {children}
            </div>
        </div>
    )
}