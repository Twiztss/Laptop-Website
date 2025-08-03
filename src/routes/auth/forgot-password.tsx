import { Laptop2 } from "lucide-react"
import Button from "../../components/ui/Button"
import { useState } from "react"

export default function ForgotPassword() {
    const [email, setEmail] = useState("")
    const [success, setSuccess] = useState(false)

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value)
    }

    const handleResetPassword = () => {
        console.log(email)
        setSuccess(true)
    }

    return (
        <div className="flex flex-col w-full min-h-screen justify-center items-center bg-gradient-to-b from-gray-50 to-white p-4">
            <main className="flex flex-col w-full max-w-md mx-auto h-auto min-h-[300px] shadow-xl border border-gray-200 px-8 py-10 gap-6 rounded-2xl items-center bg-white">
                <div className="flex flex-col items-center gap-4">
                    <div className="p-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full">
                        <Laptop2 width={32} height={32} className="text-white"/>
                    </div>
                    <h1 className="text-3xl font-bold bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent">{success ? "Confirmation Email Sent" : "Forgot Password"}</h1>
                </div>
                {!success ? 
                <>
                <form className="flex flex-col gap-4 w-full">
                    <div className="flex flex-col gap-1.5 w-full">
                        <label className="font-semibold text-gray-700 text-sm">Email</label>
                        <input type="email" onChange={handleChange} className="px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-200 text-gray-900 placeholder-gray-400" placeholder="Enter your email" />
                    </div>
                </form>
                <div className="flex flex-col gap-4 w-full">
                    <Button 
                        type="primary" 
                        className="w-full py-3.5 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white border-0 shadow-md hover:shadow-lg transition-all duration-200 transform hover:scale-[1.02]"
                        onClick={handleResetPassword}
                    >
                        Reset Password
                    </Button>
                </div>
                </>
                : 
                <div className="flex flex-col gap-4 w-full">
                    <p className="text-gray-500 text-sm text-center leading-relaxed w-5/6 mx-auto">
                        We've sent you an email to reset your password. Please check your email and follow the instructions to reset your password.
                    </p>
                    <Button 
                        type="primary" 
                        className="w-full py-3.5 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white border-0 shadow-md hover:shadow-lg transition-all duration-200 transform hover:scale-[1.02]"
                        onClick={() => {window.location.href = "/sign-in"}}
                    >
                        Back to Sign In
                    </Button>
                </div>}
            </main>
        </div>
    )
}