import Footer from "../components/Footer"
import Header from "../components/Header"
import { Link } from "react-router-dom"

const FavoriteItem = () => {
    return (
        <div className="flex flex-col w-1/6 gap-4 rounded-lg shadow-md justify-between aspect-video">
            <div className="self-center w-full aspect-square bg-gray-100 rounded-t-lg"></div>
            <div className="flex-col px-6 py-4 g-6">
                <h1 className="font-bold text-xl tracking-wider cursor-pointer">
                <Link to={``}>{"Product 1"}</Link>
                </h1>
                <p className="text-gray-400 text-sm font-medium mb-2">{"Ea ullamco ea amet esse in ad eu anim dolore irure."}</p>
                <big className="text-xl text-slate-500 font-semibold">{100} USD</big>
            </div>
            <button className=""></button>
        </div>
    )
}

export default function Favorite() {

    let haveFavorite = true

    return (
        <body className="flex flex-col w-full h-screen justify-between">
            <Header />
            <nav className="flex border-2 border-gray-100 w-full px-10 py-4 items-center justify-center">
                <div className="flex w-1/2 justify-around">
                    <h4>{"<<<< Promotional Content >>>>"}</h4>
                </div>
            </nav>
            <main className="flex flex-col m-10 h-5/6">
                <h1 className="text-4xl font-bold">Favorites</h1>
                <div className={`${haveFavorite ? "justify-start" : "justify-center items-center"} flex flex-col py-10`}>
                    {haveFavorite ? <><FavoriteItem /></> : <h2 className="text-lg font-semibold justify-self-center align-center">Item listed as favorite will appear here.</h2> }
                </div>
            </main>
            <Footer />
        </body>
    )
}