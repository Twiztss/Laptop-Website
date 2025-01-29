import { Link } from "react-router-dom"
import { Heart, Laptop2Icon, ShoppingCart, UserCircle } from "lucide-react"

export default function Header() {

  // Test credential
  const isLoggedIn = true

  return (
    <header className="flex justify-between items-center w-full bg-white px-10 py-6 sticky">
        <div className="flex gap-10 font-bold text-xs">
            <Link to={"/"}>Home</Link>
            <Link to={"/features"}>Features</Link>
            <Link to={"/products"}>Products</Link>
            <Link to={"/how-to-use"}>How to use</Link>
            <Link to={"/about-us"}>About Us</Link>
        </div>
        {/* <img src="" alt="" className="rounded-xl aspect-square w-[48px] absolute ml-[46.25%] border-black border-solid border-2"></img> */}
        <Laptop2Icon width={48} height={48} className="absolute ml-[46.25%]"/>
        <div className="flex gap-6">
          <Link to={"/favorite"}><Heart width={24} height={24}/></Link>
          <Link to={"/cart"}><ShoppingCart width={24} height={24}/></Link>
          <Link to={`${isLoggedIn ? "/profile" : "/auth"}`}><UserCircle width={24} height={24}/></Link>
        </div>
    </header>
  )
}
