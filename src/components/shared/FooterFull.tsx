import { Globe } from "lucide-react"
import { Link } from "react-router-dom"

type Query = {
  title: string
  option: string[]
}

const footerOption: Query[] = [
  {
    title: "About Us",
    option: ["Company Overview", "Careers", "Contact Us"],
  },
  {
    title: "Customer Service",
    option: ["Request Service", "Shipping and Delivery", "Order Tracking", "Returns", "Help Center"],
  },
  {
    title: "Terms & Condition",
    option: ["Privacy Policy", "Return Policy", "Newsletter Agreement", "Standards & Regulations"],
  },
  {
    title: "Follow Us",
    option: ["Facebook", "Instagram", "X (formerly Twitter)", "Youtube"],
  },
]

export default function FooterFull() {
  const date = new Date()

  return (
    <footer className="w-full bg-white px-4 py-8 md:px-8 lg:px-16">
      <div className="mx-auto max-w-7xl">
        <section className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
          {footerOption.map((item, index) => (
            <FooterOption key={index} {...item} />
          ))}

          <div className="flex items-center justify-start sm:justify-end lg:col-span-1">
            <button className="flex items-center gap-2 rounded-md px-3 py-2 transition-colors hover:bg-gray-100">
              <Globe size={18} className="text-gray-500" />
              <span className="text-sm font-medium text-gray-600">English</span>
            </button>
          </div>
        </section>

        <div className="mt-10 border-t border-gray-200 pt-6">
          <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
            <h1 className="text-base font-semibold text-gray-800">Laptop Website</h1>
            <div className="flex gap-5 text-sm text-gray-500">
              <p>©{date.getFullYear()}</p>
              <p>All rights reserved</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

const FooterOption = (option: Query) => {
  return (
    <div className="flex flex-col gap-4">
      <h3 className="text-sm font-bold text-gray-800">{option.title}</h3>
      <nav className="flex flex-col gap-2">
        {option.option.map((item, index) => (
          <Link to={"#"} key={index} className="text-sm text-gray-500 transition-colors hover:text-gray-900">
            {item}
          </Link>
        ))}
      </nav>
    </div>
  )
}

