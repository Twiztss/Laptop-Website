import Footer from "../components/Footer";
import Header from "../components/Header";
import sampleCategory from "../data/category-data";
import { Category } from "../types/Catogory";
import { Invoice } from "../types/Payment";
import { sampleInvoice } from "../data/user-data";
import { Check, Headset, LucideTruck, MapPin, MonitorSpeaker, Timer, Truck } from "lucide-react";
import { Product } from "../types/Product";

const currentInvoice : Invoice = sampleInvoice[0]

const DeliveryStatus = () => {
  return (
    <div className="flex justify-between gap-4">
      <div className="flex flex-col w-1/2 bg-gray-50 p-6 rounded-xl border-gray-100 border-2 gap-4">
          <Truck className="bg-white p-3 rounded-full" width={48} height={48}/>
          <h2 className="text-lg font-semibold">Your order has been delivered successfully!</h2>
          <div className="flex justify-between items-center">
            <div className="flex bg-white px-4 py-2 rounded-full border-gray-200 border-2 gap-2 items-center w-1/4 justify-center">
              <Truck />
              <h3 className="font-semibold text-base">Delivery Address</h3>
            </div>
            <img src="/assets/img/arrow-dashed.png" className="aspect-video" width={75}/>
            <div className="flex bg-white px-4 py-2 rounded-full border-gray-200 border-2 gap-2 items-center w-1/4 justify-center">
              <MapPin />
              <h3 className="font-semibold text-base">Billing Address</h3>
            </div>
          </div>
          <div className="bg-white rounded-full w-full">
            <div className="bg-slate-500 sticky rounded-full w-full p-2"></div>
          </div>
      </div>
      <div className="flex w-1/2 justify-between gap-4">
        <div className="flex flex-col justify-between w-1/2 p-6 bg-gray-50 rounded-xl border-gray-100 border-2">
          <LucideTruck className="bg-white p-3 rounded-full" width={48} height={48}/>
          <div className="flex flex-col">
            <h3 className="text-base font-semibold text-gray-400">Arrival Date</h3>
            <p className="text-2xl font-semibold">24 January 2026</p>
          </div>
        </div>
        <div className="flex flex-col justify-between w-1/2 p-6 bg-gray-50 rounded-xl border-gray-100 border-2">
          <Timer className="bg-white p-3 rounded-full" width={48} height={48}/>
          <div className="flex flex-col">
            <h3 className="text-base font-semibold text-gray-400">Estimated Day Left</h3>
            <p className="text-2xl font-semibold">Completed</p>
          </div>
        </div>
      </div>
    </div>
  )
}

const ItemList = () => {

  const ItemCard = (item : Product) => {
    return (
      <div className="flex w-1/2 p-2 rounded-xl border-gray-100 border-2 gap-4" key={item.title}>
        <div className="bg-gray-50 rounded-lg w-32 aspect-square"></div>
        <div className="flex flex-col justify-center">
          <h2 className="text-lg font-semibold">{item.title}</h2>
          <div className="flex items-center gap-1">
            <h3 className="text-md font-medium">USD {item.price}</h3>
            <h3 className="text-md text-gray-400 font-medium">x 1</h3>
          </div>
          <div className="flex items-center gap-1">
            <h3 className="text-md text-gray-400 font-medium">Category : </h3>
            <h3 className="text-md font-medium">{item.category}</h3>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="flex justify-between gap-4">
      {currentInvoice.product.map(ItemCard)}
    </div>
  )
}

const PriceSummary = () => {
  return (
    <>
      <div className="flex w-full justify-between" >
        <p className="text-lg font-semibold">Total Price ({currentInvoice.amount} Products)</p>
        <p className="text-lg font-semibold">USD {currentInvoice.totalPrice}</p>
      </div>
      <div className="flex gap-4 self-center w-full justify-between items-center">
        <p className="text-md font-medium text-gray-400 italic">Thank you for your purchase!</p>
        <div className="flex gap-4">
          <button className="flex gap-2 items-center bg-black px-4 py-1 rounded-full">
            <Headset color="white" width={16} height={16} />
            <p className="font-medium text-sm text-white">Contact Support</p>
          </button>
          <button className="flex gap-4 items-center px-4 py-1 border-black border-2 rounded-full">
            <MonitorSpeaker width={16} height={16} />
            <p className="font-medium text-sm">Report a problem</p>
          </button>
        </div>
      </div>
    </>
  )
}

export default function OrderDetail () {

  const tag = (tag : Category) => {
    return (
      <p className="text-xs font-bold cursor-pointer" key={tag.name}>{tag.name}</p>
    )
  }

  return (
    <div className="flex flex-col w-full h-screen justify-between overflow-y-scroll">
      <Header />
      <nav className="flex border-2 border-gray-100 w-full px-10 py-5 items-center justify-center">
        <div className="flex w-1/2 justify-around">
          {sampleCategory.map(tag)}
        </div>
      </nav>
      <main className="flex flex-col mx-10 my-6 h-full max-w-full gap-6">
        <h1 className="text-2xl font-bold">Order Detail</h1>
        <article className="flex flex-col p-4 border-2 border-gray-100 rounded-lg h-full gap-4">
            <div className="flex items-center justify-between">
              <div className="flex flex-col">
                <h3 className="text-base text-gray-400 font-normal">OrderID</h3>
                <p className="text-lg font-semibold">#{currentInvoice.id}</p>
              </div>
              <div className="p-2 bg-green-100 flex justify-center items-center px-4 py-2 gap-2 rounded-full">
                  <Check color={"green"} width={16} height={16}/>
                  <h1 className="font-semibold text-base text-green-600">{currentInvoice.status.title}</h1>
              </div>
            </div>
            <DeliveryStatus />
            <div className="flex gap-4 items-center">
              <p className="text-lg font-semibold">Items</p>
              <div className="bg-gray-100 px-2 rounded-lg">{currentInvoice.amount}</div>
            </div>
            <ItemList />
            <PriceSummary />
        </article>
      </main>
      <Footer/>
    </div>
  )
}
