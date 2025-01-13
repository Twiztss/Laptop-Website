import Footer from "../components/Footer";
import Header from "../components/Header";

type tagData = {  
  id : number,
  name : string,
  url : string,
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
    name : "Tag 1",
    url : "",    
  },
  {
    id : 1,
    name : "Tag 2",
    url : "",    
  },
  {
    id : 2,
    name : "Tag 3",
    url : "",    
  },
  {
    id : 2,
    name : "Tag 3",
    url : "",    
  },
  {
    id : 2,
    name : "Tag 3",
    url : "",    
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
  const prodRender = (prod : prodData) => {
    return (
      <div className="flex flex-col w-1/6 gap-4 rounded-lg shadow-md justify-between">
        <div className="self-center w-full bg-gray-100 aspect-square"></div>
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

  return (
    <main className="flex flex-col w-full h-screen justify-between gap-8">
      <Header />
      <nav className="flex border-2 border-gray-100 w-full px-10 py-5 items-center justify-center -mt-8">
        <div className="flex w-1/2 justify-around">
          {data.map(tagRender)}
        </div>
      </nav>
      <section className="flex flex-col gap-6 mx-10 h-5/6">
        <h2 className="text-3xl font-bold">Filter by Category</h2>
        <select name="" id="" className="w-1/12 text-sm text-gray-400">
          <li>Lol</li>
        </select>
      </section>
      <section className="flex flex-col gap-6 mx-10 h-5/6">
        <h1 className="text-3xl font-bold">Products</h1>
        <div className="flex gap-6">
          {data_prod.map(prodRender)}
        </div>
      </section>
      <Footer />
    </main>
  )
} 
