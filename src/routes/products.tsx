import { useState } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { FilterIcon, Plus, XIcon } from "lucide-react"
import Sidebar from "../components/Sidebar";
import { Link } from "react-router-dom";
import sampleCategory from "../data/category-data";
import sampleProduct from "../data/product-data";
import { Product } from "../types/Product";
import { Category } from "../types/Catogory";

export default function Products() {
  const [isFilter, setIsFilter] = useState(false)
  const [filterInput, setFilterInput] = useState("")
  const [selected, setSelected] = useState(true)

  const prodRender = (prod : Product) => {
    return (
      <div className="flex flex-col w-1/5 gap-4 rounded-lg shadow-md justify-between aspect-square">
        <div className="self-center w-full h-2/3 bg-gray-100 rounded-t-lg"></div>
        <div className="flex-col px-6 py-4 g-6">
          <h1 className="font-bold text-xl tracking-wider cursor-pointer">
            <Link to={`/product/${prod.id + 1}`}>{prod.title}</Link>
          </h1>
          <p className="text-gray-400 text-sm font-medium mb-2">{prod.description.length >= 20 ? prod.description.slice(0,20) + ". . ." : prod.description}</p>
          <big className="text-xl text-slate-500 font-semibold">{prod.price} USD</big>
        </div>
        <button className=""></button>
      </div>
    )
  }

  const tag = (tag : Category) => {
    return (
      <p className="text-xs font-bold cursor-pointer">{tag.name}</p>
    )
  }

  const categoryRender = (tag : Category) => {
    return (
      <div className="flex bg-gray-50 px-4 py-2 shadow-sm rounded-md justify-between items-center"> 
        <p className="font-semibold cursor-pointer">{tag.name}</p>
        <div className="flex gap-4">
          <p className="rounded-full bg-gray-400 px-3 py-1 text-white font-medium text-sm">{tag.amount}</p>
          <button><Plus width={12} height={12} className="cursor-pointer"/></button>
        </div>
      </div>
    )
  }

  const selectTag = (selected : boolean) => { setSelected(!selected) }

  const selectedRender = (tag : Category) => {
    return (
      <div className="flex bg-gray-300 text-sm font-semibold px-2 py-1 justify-between items-center gap-2">
        <p>{tag.name}</p>
        <XIcon onClick={() => selectTag(!selected)} width={12} height={12} className="cursor-pointer" />
      </div>
    )
  }

  return (
    <body className="flex flex-col w-full h-screen justify-between">
      <Header />
      <div className={`${isFilter ? "flex-col" : "hidden"} absolute bg-black w-full h-full justify-self-center self-center opacity-20`}></div>
      <nav className={`${isFilter ? "flex flex-col" : "hidden"}  gap-6 absolute mt-[12.5%] bg-gray-100 w-1/3 justify-self-center rounded-lg self-center p-10`}>
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold">Filter By Category</h1>
          <XIcon onClick={() => setIsFilter(false)} className="cursor-pointer" width={64} />
        </div>
        <input type="text" className="w-1/2 shadow-md px-4 py-1 text-gray-300 text-sm font-normal rounded-full" onChange={(e) => setFilterInput(e.target.value)} value={filterInput ? filterInput : "Category"} />
        <div className="flex flex-wrap gap-4">{sampleCategory.map(selectedRender)}</div>
        <div className="flex flex-col gap-2">
          {sampleCategory.map(categoryRender)}
        </div>
      </nav>
      <nav className="flex border-2 border-gray-100 w-full px-10 py-5 items-center justify-center">
        <div className="flex w-1/2 justify-around">
          {sampleCategory.map(tag)}
        </div>
      </nav>
      <main className="flex w-full h-full">
        <Sidebar />
        <section className="flex flex-col gap-6 m-10 w-4/5 overflow-y-scroll">
          <nav className="flex justify-between">
            <h1 className="text-3xl font-bold">Products</h1>
            <div className="flex gap-2 cursor-pointer" onClick={() => setIsFilter(!isFilter)}>
              <FilterIcon width={32}/>
              <h3 className="text-md font-semibold mr-8">Filter by</h3>
            </div>
          </nav>
          <div className="flex gap-6">
            {sampleProduct.map(prodRender)}
          </div>
          </section>
      </main>
      <Footer />
    </body>
  )
} 
