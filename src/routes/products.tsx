import { useState } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { FilterIcon, Plus, XIcon } from "lucide-react"

type tagData = {  
  id : number,
  name : string,
  url : string,
  amount : number,
}

type prodData = {
  id : number,
  tag : string,
  description : string,
  name : string,
  price : number,
  qt : number,
}

const data : tagData[] = [
  {
    id : 0,
    name : "Laptops",
    url : "",
    amount : 45    
  },
  {
    id : 1,
    name : "Display",
    url : "",
    amount : 37,    
  },
  {
    id : 2,
    name : "Components",
    url : "",
    amount : 12,    
  },
  {
    id : 3,
    name : "Gadgets",
    url : "",
    amount : 23,    
  },
  {
    id : 4,
    name : "Misc",
    url : "",
    amount : 20,    
  },
]

const data_prod = [
  {
    id : 0,
    name : "Pizza",
    tag : "Whatever",
    description : "Proident proident duis quis consectetur in.",
    price : 100,
    qt : 20,
  },
  {
    id : 1,
    name : "Pizza",
    tag : "Whatever",
    description : "Cillum sunt laboris occaecat laboris.",
    price : 100,
    qt : 20,
  },
  {
    id : 2,
    name : "Pizza",
    tag : "Whatever",
    description : "Laboris commodo fugiat aute irure exercitation est eiusmod ea duis eu non est cupidatat esse.",
    price : 100,
    qt : 20,
  },
]


export default function Products() {
  const [isFilter, setIsFilter] = useState(false)
  const [filterInput, setFilterInput] = useState("")
  const [selected, setSelected] = useState(true)

  const prodRender = (prod : prodData) => {
    return (
      <div className="flex flex-col w-1/6 gap-4 rounded-lg shadow-md justify-between">
        <div className="self-center w-full bg-gray-100 aspect-square rounded-t-lg"></div>
        <div className="flex-col px-4 py-2 g-6">
          <h1 className="font-bold text-xl tracking-wider">{prod.name}</h1>
          <p className="text-gray-400 text-sm font-medium mb-2">{prod.description.length >= 20 ? prod.description.slice(0,20) + ". . ." : prod.description}</p>
          <big className="text-xl text-slate-500 font-semibold">{prod.price} USD</big>
        </div>
        <button className=""></button>
      </div>
    )
  }

  const tagRender = (tag : tagData) => {
    return (
      <p className="text-xs font-bold">{tag.name}</p>
    )
  }

  const categoryRender = (tag : tagData) => {
    return (
      <div className="flex bg-gray-50 px-4 py-2 shadow-sm rounded-md justify-between items-center">
        <p className="font-semibold">{tag.name}</p>
        <div className="flex gap-4">
          <p className="rounded-full bg-gray-400 px-3 py-1 text-white font-medium text-sm">{tag.amount}</p>
          <button><Plus width={12} height={12} className="cursor-pointer"/></button>
        </div>
      </div>
    )
  }

  const selectTag = (selected : boolean) => { setSelected(!selected) }

  const selectedRender = (tag : tagData) => {
    return (
      <div className="flex bg-gray-300 text-sm font-semibold px-2 py-1 justify-between items-center gap-2">
        <p>{tag.name}</p>
        <XIcon onClick={() => selectTag(!selected)} width={12} height={12} className="cursor-pointer" />
      </div>
    )
  }

  return (
    <main className="flex flex-col w-full h-screen justify-between gap-8">
      <Header />
      <div className={`${isFilter ? "flex-col" : "hidden"} absolute bg-black w-full h-full justify-self-center self-center opacity-20`}></div>
      <nav className={`${isFilter ? "flex flex-col" : "hidden"}  gap-6 absolute mt-[12.5%] bg-gray-100 w-1/3 justify-self-center rounded-lg self-center p-10`}>
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold">Filter By Category</h1>
          <XIcon onClick={() => setIsFilter(false)} className="cursor-pointer" width={64} />
        </div>
        <input type="text" className="w-1/2 shadow-md px-4 py-1 text-gray-300 text-sm font-normal rounded-full" onChange={(e) => setFilterInput(e.target.value)} value={filterInput ? filterInput : "Category"} />
        <div className="flex space-x-4">{data.map(selectedRender)}</div>
        <div className="flex flex-col gap-2">
          {data.map(categoryRender)}
        </div>
      </nav>
      <nav className="flex border-2 border-gray-100 w-full px-10 py-5 items-center justify-center -mt-8">
        <div className="flex w-1/2 justify-around">
          {data.map(tagRender)}
        </div>
      </nav>
      <section className="flex flex-col gap-6 mx-10 h-5/6">
        <nav className="flex justify-between">
          <h1 className="text-3xl font-bold">Products</h1>
          <div className="flex gap-2 cursor-pointer" onClick={() => setIsFilter(!isFilter)}>
            <FilterIcon width={32}/>
            <h3 className="text-md font-semibold">Filter by</h3>
          </div>
        </nav>
        <div className="flex gap-6">
          {data_prod.map(prodRender)}
        </div>
      </section>
      <Footer />
    </main>
  )
} 
