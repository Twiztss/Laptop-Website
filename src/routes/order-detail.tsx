import { Check, Headset, MapPin, MonitorSpeaker, Timer, Truck } from "lucide-react"
import Navbar from "../components/shared/Navbar"
import Header from "../components/shared/Header"
import Footer from "../components/shared/Footer"

type Product = {
  id: string
  title: string
  price: number
  category: string
  image?: string
}

type OrderStatus = {
  id: string
  title: string
  color: string
}

type Invoice = {
  id: string
  userId: string
  product: Product[]
  amount: number
  totalPrice: number
  status: OrderStatus
  arrivalDate: string
  isCompleted: boolean
}

const currentInvoice: Invoice = {
  id: "INV-2023-0001",
  userId: "user123",
  product: [
    {
      id: "prod1",
      title: "MacBook Pro M2",
      price: 1999,
      category: "Laptops",
      image: "/placeholder.svg",
    },
    {
      id: "prod2",
      title: "Magic Keyboard",
      price: 149,
      category: "Accessories",
      image: "/placeholder.svg",
    },
  ],
  amount: 2,
  totalPrice: 2148,
  status: {
    id: "completed",
    title: "Completed",
    color: "green",
  },
  arrivalDate: "24 January 2026",
  isCompleted: true,
}

export default function OrderDetail() {
  return (
    <>
      <Header />
      <Navbar />
      <div className="container mx-auto max-w-5xl px-4 py-6 md:py-8">
        <h1 className="mb-6 text-2xl font-bold">Order Detail</h1>

        <div className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm md:p-6">
          {/* Order header */}
          <div className="mb-6 flex flex-col justify-between gap-3 border-b border-gray-100 pb-4 sm:flex-row sm:items-center">
            <div>
              <h3 className="text-sm text-gray-500">Order ID</h3>
              <p className="text-lg font-semibold">#{currentInvoice.id}</p>
            </div>

            <div className="flex items-center gap-2 self-start rounded-full bg-green-50 px-4 py-1.5">
              <Check className="h-4 w-4 text-green-600" />
              <span className="text-sm font-medium text-green-600">{currentInvoice.status.title}</span>
            </div>
          </div>

          {/* Delivery status */}
          <div className="mb-6">
            <h2 className="mb-4 text-lg font-semibold">Delivery Status</h2>

            <div className="grid gap-4 md:grid-cols-2">
              {/* Main status card */}
              <div className="rounded-lg border border-gray-200 bg-gray-50 p-4">
                <div className="mb-4 flex items-center gap-3">
                  <div className="rounded-full bg-white p-2 shadow-sm">
                    <Truck className="h-5 w-5 text-gray-700" />
                  </div>
                  <h3 className="text-sm font-medium">Your order has been delivered successfully!</h3>
                </div>

                <div className="mb-4 flex flex-wrap items-center justify-between gap-2">
                  <div className="flex items-center gap-2 rounded-full border border-gray-200 bg-white px-3 py-1.5">
                    <Truck className="h-4 w-4" />
                    <span className="text-xs font-medium">Delivery Address</span>
                  </div>

                  <div className="hidden md:block">
                    {/* <Image src="/placeholder.svg" alt="Dashed arrow" width={60} height={20} className="opacity-60" /> */}
                  </div>

                  <div className="flex items-center gap-2 rounded-full border border-gray-200 bg-white px-3 py-1.5">
                    <MapPin className="h-4 w-4" />
                    <span className="text-xs font-medium">Billing Address</span>
                  </div>
                </div>

                <div className="h-2 w-full overflow-hidden rounded-full bg-white">
                  <div className="h-full w-full rounded-full bg-gray-800"></div>
                </div>
              </div>

              {/* Delivery info cards */}
              <div className="grid grid-cols-2 gap-4">
                <div className="flex flex-col justify-between rounded-lg border border-gray-200 bg-gray-50 p-4">
                  <div className="mb-2 rounded-full bg-white p-2 shadow-sm w-fit">
                    <Truck className="h-5 w-5 text-gray-700" />
                  </div>
                  <div>
                    <h3 className="text-xs text-gray-500">Arrival Date</h3>
                    <p className="text-base font-semibold sm:text-lg">{currentInvoice.arrivalDate}</p>
                  </div>
                </div>

                <div className="flex flex-col justify-between rounded-lg border border-gray-200 bg-gray-50 p-4">
                  <div className="mb-2 rounded-full bg-white p-2 shadow-sm w-fit">
                    <Timer className="h-5 w-5 text-gray-700" />
                  </div>
                  <div>
                    <h3 className="text-xs text-gray-500">Estimated Day Left</h3>
                    <p className="text-base font-semibold sm:text-lg">Completed</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Items section */}
          <div className="mb-6">
            <div className="mb-3 flex items-center gap-2">
              <h2 className="text-lg font-semibold">Items</h2>
              <span className="rounded-md bg-gray-100 px-2 py-0.5 text-sm font-medium">{currentInvoice.amount}</span>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {currentInvoice.product.map((item) => (
                <div key={item.id} className="flex gap-3 rounded-lg border border-gray-200 bg-white p-3 shadow-sm">
                  <div className="h-20 w-20 flex-shrink-0 rounded-md bg-gray-100"></div>
                  <div className="flex flex-col justify-center">
                    <h3 className="font-medium">{item.title}</h3>
                    <div className="flex items-center gap-1">
                      <span className="text-sm font-medium">USD {item.price}</span>
                      <span className="text-sm text-gray-500">x 1</span>
                    </div>
                    <div className="flex flex-wrap items-center gap-1">
                      <span className="text-xs text-gray-500">Category:</span>
                      <span className="text-xs font-medium">{item.category}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Price summary */}
          <div className="border-t border-gray-100 pt-4">
            <div className="mb-4 flex justify-between">
              <p className="font-medium">Total Price ({currentInvoice.amount} Products)</p>
              <p className="font-semibold">USD {currentInvoice.totalPrice}</p>
            </div>

            <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
              <p className="text-sm italic text-gray-500">Thank you for your purchase!</p>

              <div className="flex w-full flex-col gap-2 sm:w-auto sm:flex-row">
                <button className="inline-flex items-center justify-center gap-2 rounded-md bg-gray-900 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-gray-800">
                  <Headset className="h-4 w-4" />
                  <span>Contact Support</span>
                </button>

                <button className="inline-flex items-center justify-center gap-2 rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-50">
                  <MonitorSpeaker className="h-4 w-4" />
                  <span>Report a problem</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    <Footer />
    </>
  )
}

