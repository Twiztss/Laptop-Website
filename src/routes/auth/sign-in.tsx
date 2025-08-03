import { Gem, Globe, Laptop2 } from "lucide-react"
import Button from "../../components/ui/Button"
import { Link } from "react-router-dom"

export default function SignIn({ handleClick } : any) {
    return (
        <div className="flex flex-col w-full min-h-screen justify-center items-center bg-gradient-to-b from-gray-50 to-white p-4">
            <main className="flex flex-col w-full max-w-md mx-auto h-auto min-h-[600px] shadow-xl border border-gray-200 px-8 py-10 gap-6 rounded-2xl items-center bg-white">
                <div className="flex flex-col items-center gap-4">
                    <div className="p-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full">
                        <Laptop2 width={32} height={32} className="text-white"/>
                    </div>
                    <h1 className="text-3xl font-bold bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent">Sign in</h1>
                </div>
                
                <form className="flex flex-col gap-4 w-full">
                    <div className="flex flex-col gap-1.5 w-full">
                        <label className="font-semibold text-gray-700 text-sm">Email</label>
                        <input 
                            type="text" 
                            className="px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-200 text-gray-900 placeholder-gray-400" 
                            placeholder="Enter your credentials"
                        />
                    </div>
                    <div className="flex flex-col gap-1.5 w-full">
                        <label className="font-semibold text-gray-700 text-sm">Password</label>
                        <input 
                            type="password" 
                            className="px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-200 text-gray-900 placeholder-gray-400" 
                            placeholder="Enter your password"
                        />
                    </div>
                </form>
                
                <div className="flex flex-col gap-4 w-full">
                    <Button 
                        type="primary" 
                        className="w-full py-3.5 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white border-0 shadow-md hover:shadow-lg transition-all duration-200 transform hover:scale-[1.02]"
                    >
                        Sign in
                    </Button>
                </div>
                
                <button className="flex justify-center items-center text-sm text-gray-500 hover:text-gray-700 transition-all duration-200">
                    <Link to="/forgot-password" className="text-blue-600 hover:text-blue-700 underline cursor-pointer font-medium transition-colors duration-200">
                        Forget Password?
                    </Link>
                </button>

                <div className="flex items-center w-full gap-4">
                    <hr className="flex-1 border-gray-300"/>
                    <span className="text-sm font-medium text-gray-500 px-4">or</span>
                    <hr className="flex-1 border-gray-300"/>
                </div>

                <div className="flex justify-between gap-3 w-full">
                    <button className="flex gap-2 justify-center items-center bg-white border-2 border-gray-300 text-gray-700 py-3 rounded-xl w-1/2 font-semibold hover:border-gray-400 hover:bg-gray-50 transition-all duration-200">
                        <Gem width={14} height={14} />
                        <span className="text-sm">Sign in with API</span>
                    </button>
                    <button className="flex gap-2 justify-center items-center bg-white border-2 border-gray-300 text-gray-700 py-3 rounded-xl w-1/2 font-semibold hover:border-gray-400 hover:bg-gray-50 transition-all duration-200">
                        <Globe width={14} height={14} />
                        <span className="text-sm">Sign in with API 2</span>
                    </button>
                </div>
                
                <p className="text-center text-sm text-gray-600">
                    Don't have an account?{" "}
                    <span 
                        onClick={handleClick} 
                        className="text-blue-600 hover:text-blue-700 underline cursor-pointer font-medium transition-colors duration-200"
                    >
                        <Link to="/sign-up" onClick={() => {handleClick()}} className="text-blue-600 hover:text-blue-700 underline cursor-pointer font-medium transition-colors duration-200">
                            Sign up
                        </Link>
                    </span>
                </p>
            </main>
        </div>
    )
}