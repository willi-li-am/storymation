
function Explanation()
{
    return(
        <div className="flex flex-col gap-3">
            <h2 className="text-4xl">Explanation</h2>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
        </div>
    )
}

function Prompt()
{
    return(
        <div className="flex flex-col items-end gap-5">
            <textarea className="w-full h-44 p-4 bg-400 rounded-xl min-h-40 max-h50">
            </textarea>
            <button class="bg-100 hover:bg-blue-200 text-500 font-bold py-2 px-4 rounded">
            Button
            </button>
        </div>
    )
}

export default function InputPage(){
    return(
        <>
<<<<<<< HEAD
            <div className="p-10 bg-500 min-h-screen flex flex-col items-center text-100">
                <div className="flex flex-col w-2/3 max-w-2xl gap-7 ">
                    <Explanation/>
                    <Prompt/>
=======
            <div className="p-10 flex flex-col items-center">
                <div className="flex w-2/3 gap-5 text-white">
                    <h2 className="text-2xl">Explanation</h2>
>>>>>>> 821e1f5c47c591aaf362a06a58554d6792dad844
                    <p className="text-white">Hello world!</p>
                </div>
            </div>
        </>
    )
}