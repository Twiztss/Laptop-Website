import Footer from "../components/Footer"
import Header from "../components/Header"
import { Link } from "react-router-dom"
import Navbar from "../components/Navbar"
import { useState } from "react"
import sampleProduct from "../data/product-data"
import { Product } from "../types/Product"

interface itemProp {
    id : number,
    title : string,
    price : number,
    onRemoval : (e : any) => void,
}

const FavoriteItem = ({ id, title, price, onRemoval } : itemProp) => {
    return (
        <div className="flex flex-col w-1/6 gap-4 rounded-lg shadow-md justify-between aspect-video">
            <div className="self-center w-full aspect-square bg-gray-100 rounded-t-lg"></div>
            <div className="flex-col px-6 pt-4 pb-6 gap-4">
                <h1 className="font-bold text-2xl cursor-pointer">
                    <Link to={`/product/${id + 1}`}>{title}</Link>
                </h1>
                <p className="text-gray-400 text-sm font-medium mb-2">{"Ea ullamco ea amet esse in ad eu anim dolore irure."}</p>
                <div className="flex justify-between">
                    <p className="text-xl text-slate-500 font-semibold">{price} USD</p>
                    <button className="text-red-400 font-semibold" name={title} onClick={onRemoval}>Remove</button>
                </div>
            </div>
        </div>
    )
}

export default function Favorite() {

    const [favorite, setFavorite] = useState(sampleProduct.slice(1,3))

    const removeItem = (e : any) => {
        const { name } = e.target 
        setFavorite(prev => {
            return prev.filter(item => item.title != name)
        })
    }

    return (
        <body className="flex flex-col w-full h-screen justify-between">
            <Header />
            <Navbar />
            <main className="flex flex-col m-10 h-5/6">
                <h1 className="text-4xl font-bold">Favorites (x{favorite.length})</h1>
                <div className={`${favorite.length != 0 ? "justify-start flex" : "justify-center items-center"} flex flex-wrap py-10 gap-6`}>
                    {favorite.length != 0 ? <>{favorite.map((item : Product) => {
                        return (
                            <FavoriteItem 
                                id={item.id}
                                title={item.title}
                                price={item.price}
                                onRemoval={removeItem}
                                key={item.title}
                            />
                        )
                    })}</> : <h2 className="text-lg font-semibold justify-self-center align-center">Item listed as favorite will appear here.</h2> }
                </div>
            </main>
            <Footer />
        </body>
    )
}