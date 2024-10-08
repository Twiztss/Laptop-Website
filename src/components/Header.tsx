import { Link } from "react-router-dom"

export default function Header() {
  return (
    <header className="flex justify-between items-center w-full bg-white px-10 py-5 sticky">
        <div className="flex gap-10 font-bold text-xs">
            <Link to={"/"}>Home</Link>
            <Link to={"/features"}>Features</Link>
            <Link to={"/products"}>Products</Link>
            <Link to={"/how-to-use"}>How to use</Link>
            <Link to={"/about-us"}>About Us</Link>
        </div>
        <img src="" alt="" className="rounded-xl aspect-square w-[48px] absolute ml-[46.25%] border-black border-solid border-2"></img>
        <button className="border-gray-300 font-bold rounded-full border-solid border-2 py-2 px-6 text-sm">Get Started</button>
    </header>
  )
}
