import logo from "../../assets/StoryMation.png"

export default function Navbar({setPage}) {
    return (
        <div className="w-full bg-200 h-[70px] flex justify-center items-center">
            <img onClick={() => {setPage(0)}} className="h-[50px] hover:cursor-pointer" src={logo}></img>
        </div>
    )
}