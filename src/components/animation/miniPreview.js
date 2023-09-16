export default function MiniPreview({children, bg}){
    return(
        <div className="w-full h-full">
            <img className="object-cover w-full h-full" src = "https://img.freepik.com/free-vector/hand-painted-watercolor-pastel-sky-background_23-2148902771.jpg"></img>
            <div className="w-full h-full relative mt-[-100px]">
                {children}
            </div>
        </div>
    )
}