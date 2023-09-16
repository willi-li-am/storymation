import Navbar from "../navBar/navBar";

export default function PageFrame({children, setPage}){
    return(
        <div className="w-full min-h-screen bg-500">
            <Navbar setPage = {setPage}></Navbar>
            <div  className="w-full min-h-[calc(100vh-70px)]">{children}</div>
        </div>
    )
}