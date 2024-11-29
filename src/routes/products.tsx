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
]

const data_prod = [
  {
    id : 0,
    name : "Pizza",
    tag : "Whatever",
    description : "Description 1",
    price : 100,
    qt : 20,
  },
  {
    id : 1,
    name : "Pizza",
    tag : "Whatever",
    description : "Description 1",
    price : 100,
    qt : 20,
  },
  {
    id : 2,
    name : "Pizza",
    tag : "Whatever",
    description : "Description 1",
    price : 100,
    qt : 20,
  },
]


export default function Products() {
  const prodRender = (prod : prodData) => {
    return (
      <div className="flex flex-col p-6 border-2 border-gray-200 w-1/6 gap-4 rounded-lg">
        <div className="self-center w-[100px] border-2 border-gray-300 aspect-square"></div>
        <div>
          <h1 className="font-bold text-lg">{prod.name}</h1>
          <p className="text-gray-400 text-sm font-medium">{prod.description}</p>
          <big className="text-xl font-semibold">{prod.price} USD</big>
        </div>
        <button className=""></button>
      </div>
    )
  }


  const tagRender = (tag : tagData) => {
    return (
      <div className="flex gap-2 justify-between items-center rounded-full bg-slate-200 px-8 py-2 cursor-pointer" key = {tag.name ? tag.name : ""}>
            {tag.url ? <img src = {tag.url}/> : <div className="rounded-full w-5 h-5 border-2 border-black aspect-square"></div>}
            <p className="text-lg font-semibold">{tag.name ? tag.name : ""}</p>
      </div>
    )
  }

  return (
    <main className="flex flex-col w-full h-screen justify-between">
      <Header />
      <section className="flex flex-col gap-10 m-10 h-5/6">
        <h1 className="text-4xl font-bold">Products</h1>
        <div className="flex gap-6">
          {data_prod.map(prodRender)}
        </div>
      </section>
      <section className="flex flex-col gap-10 m-10 h-5/6">
        <h2 className="text-2xl font-bold">Categories</h2>
        <div className="flex flex-wrap gap-4">
          {data.map(tagRender)}
        </div>
      </section>
      <Footer />
    </main>
  )
} 
