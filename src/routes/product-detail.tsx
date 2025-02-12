import { Heart, ShoppingCart, Star } from "lucide-react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { Link, useParams } from "react-router-dom";
import { Product, Version } from "../types/Product";
import sampleProduct from "../data/product-data";
import Navbar from "../components/Navbar";
import { sampleReview } from "../data/review-data";
import { Review } from "../types/Users";

const Testimony = () => {

  const TestimonyCard = (product : Review) => {
    return (
      <div className="flex flex-col w-1/5 gap-4 aspect-video p-6 shadow-md rounded-md" key={product.title}>
        <div className="flex gap-4">
          <div className="bg-gray-100 w-1/6 aspect-square rounded-full"></div>
          <div className="flex-col gap-2">
            <h1 className="font-bold text-xl cursor-pointer">
              <Link to={`/product/${product.id + 1}`}>{product.user}</Link>
            </h1>
            <p className="text-gray-400 text-sm font-medium">{product.email}</p>
          </div>
        </div>
        <div className="flex gap-2 items-center">
          <Star width={24} height={24}/>
          <h2 className="font-bold text-2xl">{product.score}/5</h2>
        </div>
        <div className="flex flex-col gap-1">
          <h3 className="text-xl font-semibold">{product.title}</h3>
          <p className="text-gray-400 text-md font-medium">{product.description}</p>
        </div>
      </div>
    )
  }

  return (
    <section className="flex flex-col m-10 gap-6 h-full w-full">
      <h1 className="text-2xl font-bold">Customer Review</h1>
      <p className="text-gray-400 text-lg font-semibold -mt-4">{sampleReview.reduce((prev, cur) => prev + (cur.score/sampleReview.length),0)} out of {sampleReview.length} reviews</p>
      <div className="flex gap-6 w-full">
          {sampleReview.slice(0,5).map(TestimonyCard)}
      </div>
    </section>

  )
}

const InterestProduct = () => {

  const InterestCard = (product : Product) => {
    return (
      <div className="flex flex-col w-1/5 gap-4 justify-between aspect-square" key={product.title}>
        <div className="self-center w-full aspect-square bg-gray-100 rounded-t-lg"></div>
        <div className="flex-col gap-2">
          <h1 className="font-bold text-xl cursor-pointer">
            <Link to={`/product/${product.id + 1}`}>{product.title}</Link>
          </h1>
          <p className="text-gray-400 text-sm font-medium">{product.category}</p>
          <big className="text-xl font-semibold">$ {product.price}</big>
        </div>
      </div>
    )
  }

  return (
    <section className="flex flex-col m-10 gap-6 h-full w-full">
      <h1 className="text-2xl font-bold">Similar products you may be interested</h1>
      <div className="flex gap-6 w-full">
          {sampleProduct.slice(0,5).map(InterestCard)}
      </div>
    </section>
  )
}

const Thumbnail = (product : Product) => {
  return (
    <section className="flex flex-col m-10 gap-6 w-full items-center">
      <h2 className="text-xl">More information on {product.title}</h2>
      <div className="w-full aspect-video bg-gray-100"></div>
      <h2 className="text-xl">{product.description}</h2>
    </section>
  )
}

export default function ProductDetail() {

  let params = useParams()
  let productIndex : number = Number(params.productId) - 1
  const currentProduct : Product = sampleProduct[productIndex]

  const Version1 = (version : Version) => {
    return (
      <div className="flex items-center justify-center w-1/6 aspect-square bg-gray-100 rounded-lg cursor-pointer" key={version.title}></div>
    )
  }

  const Version2 = (version : Version) => {
    return (
      <div className="flex items-center justify-center w-1/6 aspect-video border-gray-300 border-2 rounded-lg cursor-pointer text-gray-400 text-sm text-bold" key={version.title}>{version.title}</div>
    )
  }

  return (
    <body className="flex flex-col w-full h-screen justify-between">
        <Header />
        <Navbar />
          <main className="flex flex-col mx-10 h-full max-w-full items-center overflow-y-scroll overflow-x-hidden">
            <div className="flex p-10 w-2/3 h-full">
              <div className="w-1/2 h-5/6 bg-gray-100 rounded-2xl"></div>
              <article className="flex flex-col px-10 py-5 gap-8 w-1/2">
                <h1 className="text-4xl font-bold">{currentProduct.title}</h1>
                <p className="text-xl text-gray-400 font-normal -mt-6">{currentProduct.category}</p>
                <p className="text-2xl font-semibold -mt-6">{currentProduct.price} USD</p>
                <div className="flex flex-col gap-4">
                  <h2 className="text-xl font-semibold">Select version</h2>
                  <div className="flex gap-2">
                    {currentProduct.version1.map(Version1)}
                  </div>
                </div>
                <div className="flex flex-col gap-4">
                  <h2 className="text-xl font-semibold">Select version 2</h2>
                  <div className="flex gap-2">
                    {currentProduct.version2?.map(Version2)}
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
            <Thumbnail {...currentProduct} />
            <Testimony />
            <InterestProduct />
          </main>
        <Footer />
    </body>
  )
}
