import { Heart } from "lucide-react"
import Footer from "../components/shared/Footer"
import Header from "../components/shared/Header"
import { Link } from "react-router-dom"
import { useState } from "react"
import sampleProduct from "../data/product-data"
import Navbar from "../components/shared/Navbar"
import { Product } from "../types/Product"
import Button from "../components/ui/Button"
import { Helmet } from "react-helmet-async"

interface itemProp {
    title : string,
    amount : number,
    price : number,
    onItemChange : (e : any) => void,
    onRemoval : (e : any) => void,
}

export type calcProp = {
    item : number[]
}

const CartItem = ({title, amount, price, onItemChange, onRemoval} : itemProp) => {

    return (
        <>
            <div className="flex gap-6">
                <div className="flex flex-col w-5/12 gap-4">
                    <div className="bg-gray-200 aspect-square"></div>
                    <div className="flex justify-between w-full gap-2">
                        <div className="flex gap-4 border-2 border-gray-100 rounded-full px-4 py-2 justify-center items-center w-2/3">
                            <button name={title} id={"minus"} onClick={onItemChange}>-</button>
                            <p className="font-medium">{amount}</p>
                            <button name={title} id={"plus"} onClick={onItemChange}>+</button>
                        </div>
                        <button className="flex justify-center border-2 border-gray-100 rounded-full p-4 w-1/3 items-center"><Heart width={16} height={16}/></button>
                    </div>
                </div>
                <div className="flex justify-between w-full mt-2">
                    <div>
                        <h2 className="text-lg font-semibold">{title}</h2>
                        <h4 className="text-base text-gray-500 font-normal">Magna sint do qui tempor culpa.</h4>
                        <h4 className="text-base text-gray-500 font-normal">{"Option 1"} / {"Option 2"}</h4>
                        <h4 className="text-base text-gray-500 font-normal">{"Option 3"} : {"Blank"}</h4>
                    </div>
                    <div className="flex flex-col justify-between">
                        <p className="text-lg font-semibold">{(amount * price).toFixed(2)} USD</p>
                        <button name={title} className="text-sm font-semibold p-4" onClick={onRemoval}>Remove Item</button>
                    </div>
                </div>
            </div>
            <hr className="w-full"/>
        </>
    )
}

const Total = ({item} : calcProp) => {

    const subTotal : number = Math.round(item.reduce((prev, cur) => prev + cur,0))

    return (
        <section className="flex flex-col gap-6 w-1/6 sticky">
            <h1 className="text-4xl font-bold">Total</h1>
            <div className="flex gap-6">
                <div className="flex flex-col gap-2 mt-4 w-full">
                    <div className="flex justify-between">
                        <h2 className="text-lg font-normal">Sub-Total</h2>
                        <h2 className="text-lg font-normal">$ {subTotal}</h2>
                    </div>
                    <div className="flex justify-between">
                        <h2 className="text-lg font-normal">Additional Fees</h2>
                        <h2 className="text-lg font-normal">None</h2>
                    </div>
                    <hr className="w-full my-4"/>
                    <div className="flex justify-between">
                        <h2 className="text-lg font-semibold">Total</h2>
                        <h2 className="text-lg font-semibold">$ {subTotal}</h2>
                    </div>
                    <hr className="w-full my-4"/>
                    <div className="flex flex-col w-full gap-4">
                        <Button className="py-3 font-medium" type="secondary"><Link to={"/checkout"} className="font-bold">Guest Checkout</Link></Button>
                        <Button className="py-4 font-medium" type="primary"><Link to={"/checkout"} className="text-white font-bold">Member Checkout</Link></Button>
                    </div>
                </div>
            </div>
        </section>
  )
}

export default function Cart() {

    const [cartItem, setCartItem] = useState([...sampleProduct.slice(1,3)])
    
    const changeItem = (e : any) => {
        const { name, id } = e.target
        setCartItem((prev) => {
            let thisItem : any = cartItem.find(item => item.title == name)
            if (thisItem) {
                const updatedCart = prev.map((item : Product) => {
                    if (item.title == thisItem.title) {
                        if (id == "plus") {
                            return {...item, amount : item.amount + 1}
                        } else if (id == "minus")
                            return {...item, amount : item.amount - 1}
                    } else {
                        return item
                    }
                })
                return updatedCart
            } else {
                return [...prev, {...thisItem, amount : thisItem.amount}]   
            }
        } )
    }

    const removeItem = (e : any) => {
        const { name } = e.target
        setCartItem(prev => {
            return prev.filter(item => item.title != name)
        })
    }

    return (
    <>
    <Helmet>
        <title>Laptop Website | Cart</title>
        <meta name="description" content="Cart" />
    </Helmet>
    <main className="flex flex-col w-full h-screen justify-between">
        <Header />
        <Navbar />
        <main className="flex m-10 h-5/6 gap-10 justify-center overflow-y-scroll">
            <section className="flex flex-col gap-8 w-1/3">
                <h1 className="text-4xl font-bold">Cart</h1>
                {cartItem.length != 0 ? <>{cartItem.map((item) => {
                    return (
                        <CartItem
                            title={item.title}
                            amount={item.amount}
                            price={item.price}
                            onItemChange={changeItem}
                            onRemoval={removeItem}
                            key={item.title}
                        />
                    )
                })}</> : <h4 className="text-lg font-semibold -mt-4">There is no item in your shopping cart.</h4>}
            </section>
            <Total item={cartItem.map(item => item.amount * item.price)}/>
        </main>
        <Footer />
    </main>
    </>
    )
}
