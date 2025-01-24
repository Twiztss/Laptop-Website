import { Heart, ShoppingCart } from "lucide-react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { Category } from "../types/Catogory";
import sampleCategory from "../data/category-data";
import { useParams } from "react-router-dom";
import { Product } from "../types/Product";
import sampleProduct from "../data/product-data";


export default function ProductDetail() {

  let params = useParams()
  let productIndex : number = Number(params.productId) - 1
  const currentProduct : Product = sampleProduct[productIndex]

  const Version = () => {
    return (
      <div className="flex items-center justify-center w-1/6 aspect-square bg-gray-100 rounded-lg cursor-pointer"></div>
    )
  }

  const Version_2 = () => {
    return (
      <div className="flex items-center justify-center w-1/6 aspect-video border-gray-300 border-2 rounded-lg cursor-pointer"></div>
    )
  }

  const tag = (tag : Category) => {
    return (
      <p className="text-xs font-bold cursor-pointer">{tag.name}</p>
    )
  }

  return (
    <body className="flex flex-col w-full h-screen justify-between">
        <Header />
        <nav className="flex border-2 border-gray-100 w-full px-10 py-5 items-center justify-center">
          <div className="flex w-1/2 justify-around">
            {sampleCategory.map(tag)}
          </div>
        </nav>
          <main className="flex flex-col mx-10 h-full max-w-full items-center">
            <div className="flex p-10 w-2/3 h-full">
              <div className="w-1/2 h-5/6 bg-gray-100 rounded-2xl"></div>
              <article className="flex flex-col px-10 py-5 gap-8 w-1/2">
                <h1 className="text-4xl font-bold">{currentProduct.title}</h1>
                <p className="text-xl text-gray-400 font-normal -mt-6">{currentProduct.category}</p>
                <p className="text-2xl font-semibold -mt-6">{currentProduct.price} USD</p>
                <div className="flex flex-col gap-4">
                  <h2 className="text-xl font-semibold">Select version</h2>
                  <div className="flex gap-2">
                    <Version />
                    <Version />
                    <Version />
                  </div>
                </div>
                <div className="flex flex-col gap-4">
                  <h2 className="text-xl font-semibold">Select version 2</h2>
                  <div className="flex gap-2">
                    <Version_2 />
                    <Version_2 />
                    <Version_2 />
                    <Version_2 />
                    <Version_2 />
                  </div>
                </div>
                <div className="flex flex-col gap-4">
                  <button className="font-bold text-lg flex gap-2 justify-center bg-black px-8 py-4 text-white rounded-full">
                    <ShoppingCart width={24} height={24} color="white"/>
                    <p>Add to Cart</p>
                  </button>
                  <button className="flex font-bold text-lg border-gray-300 border-2 rounded-full px-8 py-4 gap-2 items-center justify-center">
                    <Heart width={24} height={24} />
                    <p>Wishlist</p>
                  </button>
                </div>
                <p className="text-lg text-gray-500">{currentProduct.description}</p>
              </article>
            </div>
          </main>
        <Footer />
    </body>
  )
}
