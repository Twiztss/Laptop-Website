import { useState } from "react"
import { Heart, Laptop2, LogOut, Menu, ShoppingCart, Sparkle, UserCircle, X } from "lucide-react"
import { Link } from "react-router-dom"

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/features", label: "Features" },
  { to: "/products", label: "Products" },
  { to: "/how-to-use", label: "How to use" },
  { to: "/about-us", label: "About Us" },
]

export default function Header() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  // Test credential
  const [loggedIn, setLoggedIn] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-gray-100 bg-white shadow-sm">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 md:px-6 lg:px-10">
        {/* Mobile menu button */}
        <button
          className="rounded-md p-2 text-gray-700 hover:bg-gray-100 md:hidden"
          onClick={() => setIsSidebarOpen(true)}
          aria-label="Open menu"
        >
          <Menu size={24} />
        </button>

        {/* Desktop navigation */}
        <nav className="hidden md:hidden lg:block">
          <ul className="flex gap-6">
            {navLinks.map((link) => (
              <li key={link.to}>
                <Link
                  to={link.to}
                  className="text-sm font-semibold text-gray-700 transition-colors hover:text-gray-900"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Logo - centered */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          <Link to="/" className="block">
            <Laptop2 size={32} className="text-gray-900" />
          </Link>
        </div>

        {/* Action icons */}
        <div className="md:flex md:items-center md:gap-4 hidden">
          <Link
            to="/favorite"
            className="rounded-md p-1.5 text-gray-700 transition-colors hover:bg-gray-100 hover:text-gray-900"
            aria-label="Favorites"
          >
            <Heart size={20} />
          </Link>
          <Link
            to="/cart"
            className="rounded-md p-1.5 text-gray-700 transition-colors hover:bg-gray-100 hover:text-gray-900"
            aria-label="Cart"
          >
            <ShoppingCart size={20} />
          </Link>
          {loggedIn ? 
          <>
            <Link
              to={loggedIn ? "/profile" : "/auth"}
              className="rounded-md p-1.5 text-gray-700 transition-colors hover:bg-gray-100 hover:text-gray-900"
              aria-label="Profile"
            >
              <UserCircle size={20} />
            </Link>
            <button className="rounded-md p-1.5 text-gray-700 transition-colors hover:bg-gray-100 hover:text-gray-900" onClick={() => {setLoggedIn(false)}}>
              <LogOut size={16} />
            </button>
          </> 
          : 
          <div className="md:flex hidden items-center gap-2">
            <Link
              to="/sign-up"
              className="rounded-md px-3 py-1.5 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-100 hover:text-gray-900 border border-gray-300 hover:border-gray-400"
              aria-label="Sign Up"
            >
              Sign Up
            </Link>
            <Link
              to="/sign-in"
              className="rounded-md px-3 py-1.5 text-sm font-medium bg-gradient-to-r from-blue-600 to-purple-600 text-white transition-all duration-200 hover:from-blue-700 hover:to-purple-700 shadow-sm hover:shadow-md"
              aria-label="Sign In"
            >
              Sign In
            </Link>
            <button onClick={() => {setLoggedIn(true)}}>
              <Sparkle size={16} className="text-blue-600" />
            </button>
          </div>
          }
        </div>
      </div>

      {/* Mobile sidebar */}
      <div
        className={`fixed inset-0 z-50 transform bg-black bg-opacity-50 transition-opacity duration-300 ${
          isSidebarOpen ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
        onClick={() => setIsSidebarOpen(false)}
      >
        <div
          className={`absolute left-0 top-0 h-full w-64 transform bg-white p-4 shadow-lg transition-transform duration-300 ${
            isSidebarOpen ? "translate-x-0" : "-translate-x-full"
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="mb-6 flex items-center justify-between">
            <Link to="/" className="flex items-center gap-2">
              <Laptop2 size={32} />
            </Link>
            <button
              className="rounded-md p-1.5 text-gray-700 hover:bg-gray-100"
              onClick={() => setIsSidebarOpen(false)}
              aria-label="Close menu"
            >
              <X size={20} />
            </button>
          </div>

          <nav className="mb-8">
            <p className="mb-2 text-xs font-medium uppercase text-gray-500">Menu</p>
            <ul className="space-y-1">
              {navLinks.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="flex w-full rounded-md px-3 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-100 hover:text-gray-900"
                    onClick={() => setIsSidebarOpen(false)}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <p className="mb-2 text-xs font-medium uppercase text-gray-500">Account</p>
            <ul className="space-y-1">
              <li>
                <Link
                  to="/favorite"
                  className="flex w-full items-center gap-3 rounded-md px-3 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-100 hover:text-gray-900"
                  onClick={() => setIsSidebarOpen(false)}
                >
                  <Heart size={18} color="gray" />
                  <span>Favorites</span>
                </Link>
              </li>
              <li>
                <Link
                  to="/cart"
                  className="flex w-full items-center gap-3 rounded-md px-3 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-100 hover:text-gray-900"
                  onClick={() => setIsSidebarOpen(false)}
                >
                  <ShoppingCart size={18} color="gray" />
                  <span>Cart</span>
                </Link>
              </li>
              {loggedIn ? 
              <>
                <Link
                  to={loggedIn ? "/profile" : "/auth"}
                  className="flex w-full items-center gap-3 rounded-md px-3 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-100 hover:text-gray-900"
                  onClick={() => setIsSidebarOpen(false)}
                >
                  <UserCircle size={18} color="gray" />
                  <span>Profile</span>
                </Link>
                <button className="flex w-full items-center gap-3 rounded-md px-3 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-100 hover:text-gray-900" onClick={() => {setLoggedIn(false)}}>
                  <LogOut size={16} />
                  <span>Logout</span>
                </button>
              </> : 
              <>
                <Link to="/auth" className="flex w-full items-center gap-3 rounded-md px-3 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-100 hover:text-gray-900" onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
                  <span>Sign Up</span>
                </Link>
                <Link to="/auth" className="flex w-full items-center gap-3 rounded-md px-3 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-100 hover:text-gray-900" onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
                  <span>Sign In</span>
                </Link>
                <button onClick={() => {setLoggedIn(true)}} className="flex w-full items-center gap-3 rounded-md px-3 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-100 hover:text-gray-900">
                  <Sparkle size={16} className="text-blue-600" />
                </button>
              </>
              }
            </ul>
          </div>
        </div>
      </div>
    </header>
  )
}

