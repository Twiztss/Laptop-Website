import { useState } from "react"
import { Link } from "react-router-dom"
import { ChevronDown } from "lucide-react"
import sampleCategory from "../../data/category-data"

export default function Navbar() {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)

  const toggleDropdown = (categoryId: string) => {
    if (activeDropdown === categoryId) {
      setActiveDropdown(null)
    } else {
      setActiveDropdown(categoryId)
    }
  }

  return (
    <nav className="hidden border-b border-gray-100 bg-white md:block">
      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        <ul className="flex justify-center">
          {sampleCategory.map((category) => (
            <li key={category.id} className="relative">
              <button
                className="flex items-center gap-1 px-4 py-3 text-sm font-semibold text-gray-700 transition-colors hover:text-gray-900"
                onMouseEnter={() => toggleDropdown(category.id)}
                onMouseLeave={() => toggleDropdown(category.id)}
                aria-expanded={activeDropdown === category.id}
                aria-controls={`dropdown-${category.id}`}
              >
                {category.name}
                <ChevronDown
                  size={16}
                  className={`transition-transform duration-200 ${activeDropdown === category.id ? "rotate-180" : ""}`}
                />
              </button>

              {/* Dropdown menu */}
              {category.subcategories && (
                <div
                  id={`dropdown-${category.id}`}
                  className={`absolute left-0 z-10 min-w-[200px] rounded-md border border-gray-100 bg-white py-2 shadow-lg transition-all ${
                    activeDropdown === category.id ? "visible opacity-100" : "invisible opacity-0"
                  }`}
                >
                  {category.subcategories.map((subcategory) => (
                    <Link
                      key={subcategory.id}
                      to={`/category/${category.slug}/${subcategory.slug}`}
                      className="block px-4 py-2 text-sm text-gray-700 transition-colors hover:bg-gray-50 hover:text-gray-900"
                    >
                      {subcategory.name}
                    </Link>
                  ))}

                  <div className="mt-2 border-t border-gray-100 pt-2">
                    <Link
                      to={`/category/${category.slug}`}
                      className="block px-4 py-2 text-sm font-semibold text-gray-700 transition-colors hover:bg-gray-50 hover:text-gray-900"
                    >
                      View All {category.name}
                    </Link>
                  </div>
                </div>
              )}
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}

