import { Heart, Minus, Plus } from "lucide-react"
import Footer from "../components/Footer"
import Header from "../components/Header"
import { Link } from "react-router-dom"
import { useState } from "react"

const CartItem = () => {

    const [itemAmount, setItemAmount] = useState(1)

    return (
        <>
            <div className="flex gap-6">
                <div className="flex flex-col w-5/12 gap-4">
                    <div className="bg-gray-200 aspect-square"></div>
                    <div className="flex justify-between">
                        <div className="flex gap-4 border-2 border-gray-100 rounded-full px-4 py-2 items-center">
                            <button onClick={() => {itemAmount == 1 ? setItemAmount(1) :setItemAmount(itemAmount - 1)}}><Minus width={16} height={16}/></button>
                            <p className="font-medium">{itemAmount}</p>
                            <button onClick={() => setItemAmount(itemAmount + 1)}><Plus width={16} height={16}/></button>
                        </div>
                        <button className="border-2 border-gray-100 rounded-full p-4"><Heart width={16} height={16}/></button>
                    </div>
                </div>
                <div className="flex justify-between w-full mt-2">
                    <div>
                        <h2 className="text-lg font-semibold">Product 1</h2>
                        <h4 className="text-base text-gray-500 font-normal">Magna sint do qui tempor culpa.</h4>
                        <h4 className="text-base text-gray-500 font-normal">{"Option 1"} / {"Option 2"}</h4>
                        <h4 className="text-base text-gray-500 font-normal">{"Option 3"} : {"Blank"}</h4>
                    </div>
                    <p className="text-lg font-semibold">{itemAmount * 100} USD</p>
                </div>
            </div>
            <hr className="w-full"/>
        </>
    )
}

export default function Cart() {

    // Test item rendering
    let haveItem = true

    return (
    <body className="flex flex-col w-full h-screen justify-between">
        <Header />
        <nav className="flex border-2 border-gray-100 w-full px-10 py-4 items-center justify-center">
            <div className="flex w-1/2 justify-around">
                <h4>{"<<<< Promotional Content >>>>"}</h4>
            </div>
        </nav>
        <main className="flex m-10 h-5/6 gap-10 justify-center">
            <section className="flex flex-col gap-8 w-1/3">
                <h1 className="text-4xl font-bold">Cart</h1>
                {haveItem ? <><CartItem /><CartItem /></> : <h4 className="text-lg font-semibold -mt-4">There is no item in your shopping cart.</h4>}
            </section>
            <section className="flex flex-col gap-6 w-1/6">
                <h1 className="text-4xl font-bold">Total</h1>
                <div className="flex gap-6">
                    <div className="flex flex-col gap-2 mt-4 w-full">
                        <div className="flex justify-between">
                            <h2 className="text-lg font-normal">Sub-Total</h2>
                            <h2 className="text-lg font-normal">N/A</h2>
                        </div>
                        <div className="flex justify-between">
                            <h2 className="text-lg font-normal">Additional Fees</h2>
                            <h2 className="text-lg font-normal">None</h2>
                        </div>
                        <hr className="w-full my-4"/>
                        <div className="flex justify-between">
                            <h2 className="text-lg font-semibold">Total</h2>
                            <h2 className="text-lg font-semibold">N/A</h2>
                        </div>
                        <hr className="w-full my-4"/>
                        <div className="flex flex-col w-full gap-4">
                            <button className="flex border-2 border-black w-full justify-center items-center px-8 py-4 rounded-full"><Link to={""} className="font-bold">Guest Checkout</Link></button>
                            <button className="flex bg-black w-full justify-center items-center px-8 py-4 rounded-full"><Link to={""} className="text-white font-bold">Member Checkout</Link></button>
                        </div>
                    </div>
                </div>
            </section>
        </main>
        <Footer />
    </body>
    )
}
