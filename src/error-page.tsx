"use client"

import { Link } from "react-router-dom"
import { useEffect, useState } from "react"
import { AlertCircle } from "lucide-react"
import Header from "./components/shared/Header"
import Footer from "./components/shared/Footer"

export default function ErrorPage() {
  const [mounted, setMounted] = useState(false)

  // Animation effect when component mounts
  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex flex-1 items-center justify-center px-4 py-12">
        <div
          className={`max-w-md text-center transition-all duration-500 ${
            mounted ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
          }`}
        >
          <div className="mb-6 flex justify-center">
            <div className="relative">
              <div className="absolute -inset-0.5 animate-pulse rounded-full bg-red-100"></div>
              <div className="relative rounded-full bg-white p-1">
                <AlertCircle size={64} className="text-red-500" />
              </div>
            </div>
          </div>

          <h1 className="mb-3 text-2xl font-bold text-gray-900 sm:text-3xl">Page Not Found</h1>

          <p className="mb-6 text-gray-600">
            Sorry, we couldn't find the page you're looking for. The page might have not been added yet or temporarily unavailable right now. We will be adding more pages soon.
          </p>

          <div className="space-y-3 sm:flex sm:space-x-4 sm:space-y-0 justify-center">
            <Link
              to="/"
              className="inline-flex w-full items-center justify-center rounded-md bg-gray-900 px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-2 sm:w-auto"
            >
              Return Home
            </Link>

            <Link
              to="/contact"
              className="inline-flex w-full items-center justify-center rounded-md border border-gray-300 bg-white px-5 py-2.5 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-2 sm:w-auto"
            >
              Contact Support
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

