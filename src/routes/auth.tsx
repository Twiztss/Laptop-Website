import { Gem, Globe, Laptop2 } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

const Login = ({ handleClick } : any) => {
    return (
        <main className="flex flex-col w-1/4 h-2/3 shadow-lg border-2 border-gray-200 px-20 py-8 gap-8 rounded-2xl items-center">
            <Laptop2 width={48} height={48} className="self-center"/>
            <h1 className="text-4xl font-bold">Sign in</h1>
            <div className="flex flex-col gap-4 w-full">
                <button className="flex gap-2 justify-center items-center bg-slate-800 text-white py-3 rounded-full w-full">
                    <Gem width={16} height={16} />
                    <p className="font-semibold">Sign in with API</p>
                </button>
                <button className="flex gap-2 justify-center items-center bg-slate-800 text-white py-3 rounded-full w-full">
                    <Globe width={16} height={16} />
                    <p className="font-semibold">Sign in with API 2</p>
                </button>
            </div>
            <div className="flex flex-col w-full">
                <hr className="bg-black border-black relative w-full"/>
                <p className="absolute text-lg font-normal -my-5 bg-white px-2 py-1 self-center">or</p>
            </div>
            <input type="text" className="border-2 border-gray-300 w-full text-gray-300 px-4 py-3" value={"Phone, Email, or Username"} />
            <div className="flex flex-col gap-4 w-full">
                <button className="flex gap-2 justify-center items-center bg-black text-white py-3 rounded-full w-full">
                    <p className="font-semibold">Next</p>
                </button>
                <button className="flex gap-2 justify-center items-center border-black border-2 py-3 rounded-full w-full">
                    <p className="font-semibold">Forget Password ?</p>
                </button>
                <p className="font-medium text-sm">Don't have an account? <span onClick={handleClick} className="text-blue-700 underline cursor-pointer">Sign in</span></p>
            </div>
        </main>
    )
}

const SignIn = ({ handleClick } : any) => {
    return (
        <main className="flex flex-col w-1/4 h-2/3 shadow-lg border-2 border-gray-200 px-20 py-8 gap-8 rounded-2xl items-center">
            <Laptop2 width={48} height={48} className="self-center"/>
            <h1 className="text-4xl font-bold">Join Us</h1>
            <div className="flex flex-col gap-4 w-full">
                <button className="flex gap-2 justify-center items-center bg-slate-800 text-white py-3 rounded-full w-full">
                    <Gem width={16} height={16} />
                    <p className="font-semibold">Sign in with API</p>
                </button>
                <button className="flex gap-2 justify-center items-center bg-slate-800 text-white py-3 rounded-full w-full">
                    <Globe width={16} height={16} />
                    <p className="font-semibold">Sign in with API 2</p>
                </button>
            </div>
            <div className="flex flex-col w-full">
                <hr className="bg-black border-black relative w-full"/>
                <p className="absolute text-lg font-normal -my-5 bg-white px-2 py-1 self-center">or</p>
            </div>
            <div className="flex flex-col gap-4 w-full">
                <button className="flex gap-2 justify-center items-center bg-black text-white py-3 rounded-full w-full">
                    <p className="font-semibold">Create an account</p>
                </button>
                <p className="font-medium text-sm">By signing up, you agree to the <Link to={""} className="text-blue-500 cursor-pointer">Terms of Service</Link> and <Link to={""} className="text-blue-500">Privacy Policy</Link>, including <Link to={""} className="text-blue-500 cursor-pointer">Cookie Use</Link></p>
                <p className="font-medium text-sm">Already have an account? <span onClick={handleClick}className="text-blue-700 underline cursor-pointer">Login</span></p>
            </div>
        </main>
    )
}

export default function Auth() {

    const [haveAccount, setAccount] = useState(true)

    const handleClick = () => {
        setAccount(!haveAccount)
    }

    return (
        <body className="flex flex-col w-full h-screen justify-center items-center">
            {haveAccount ? <Login handleClick={handleClick} /> : <SignIn handleClick={handleClick} />}
        </body>
    )
}
