import { useState, useEffect } from "react";
import Footer from "../components/shared/Footer";
import Header from "../components/shared/Header";
import { FilterIcon, XIcon, Heart, ShoppingCart, ChevronDown } from "lucide-react"
import Sidebar from "../components/shared/Sidebar";
import { Link } from "react-router-dom";
import { Product } from "../types/Product";
import {sampleCategory} from "../data/category-data";
import sampleProduct from "../data/product-data";
import Navbar from "../components/shared/Navbar";
import { ProductCardSkeleton } from "../components/ui/Skeleton";
import { getCategoryStyle } from "../utils/style";
import { Helmet } from "react-helmet-async";

export default function Products() {
  const [isLoading, setIsLoading] = useState(true)
  const [hoveredProduct, setHoveredProduct] = useState<number | null>(null)
  const [sortBy, setSortBy] = useState("featured")
  const [showSortDropdown, setShowSortDropdown] = useState(false)
  const [selectedFilters, setSelectedFilters] = useState<string[]>([])
  const [showFilterDropdown, setShowFilterDropdown] = useState(false)
  const [currentProductList, setCurrentProductList] = useState<Product[] | null>(sampleProduct)

  // Simulate loading
  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1500)
    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    if (selectedFilters.length > 0) {
      setCurrentProductList(sampleProduct.filter(product => selectedFilters.includes(product.category.toLowerCase())))
    } else {
      setCurrentProductList(sampleProduct)
    }
  }, [selectedFilters])

  const sortOptions: { value: string; label: string }[] = [
    { value: "featured", label: "Featured" },
    { value: "price-low", label: "Price: Low to High" },
    { value: "price-high", label: "Price: High to Low" },
    { value: "name-asc", label: "Name: A to Z" },
    { value: "name-desc", label: "Name: Z to A" },
    { value: "newest", label: "Newest First" },
  ]

  const filterOptions = sampleCategory.map(category => ({
    value: category.name.toLowerCase(),
    label: category.name,
    count: category.amount
  }))

  // Ensure only one dropdown is open at a time
  const handleSortClick = () => {
    setShowSortDropdown(!showSortDropdown)
    setShowFilterDropdown(false)
  }

  const handleFilterClick = () => {
    setShowFilterDropdown(!showFilterDropdown)
    setShowSortDropdown(false)
  }

  const handleFilterSelect = (filterValue: string) => {
    setSelectedFilters(prev => 
      prev.includes(filterValue) 
        ? prev.filter(f => f !== filterValue)
        : [...prev, filterValue]
    )
  }

  const handleSortChange = (sortValue: string) => {
    setSortBy(sortValue)
    setShowSortDropdown(false)
    if (currentProductList) {
    switch (sortValue) {
      case "price-low":
        setCurrentProductList(currentProductList.sort((a:Product, b:Product) => { return a.price - b.price}))
        break
      case "price-high":
        setCurrentProductList(currentProductList.sort((a:Product, b:Product) => { return b.price - a.price}))
        break
      case "name-asc":
        setCurrentProductList(currentProductList.sort((a:Product, b:Product) => { return a.title.localeCompare(b.title)}))
        break
      case "name-desc":
        setCurrentProductList(currentProductList.sort((a:Product, b:Product) => { return b.title.localeCompare(a.title)}))
        break
      case "newest":
        setCurrentProductList(currentProductList.sort((a:Product, b:Product) => { return b.id - a.id}))  
        break
        default:
          setCurrentProductList(currentProductList)
      }
    }
  }

  const handleResetFilters = () => {
    setSelectedFilters([])
    setCurrentProductList(sampleProduct)
  }

  const removeFilter = (filterValue: string) => {
    setSelectedFilters(prev => prev.filter(f => f !== filterValue))
    setCurrentProductList(sampleProduct)
  }

  const ProductCard = (product: Product) => {
    const isHovered = hoveredProduct === product.id
    const categoryStyle = getCategoryStyle(product.category)
    
    // Debug logging
    // console.log(`Product: ${product.title}, Category: "${product.category}", Style:`, categoryStyle)

    return (
      <article 
        className="group relative flex flex-col bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden h-80"
        key={product.title}
        onMouseEnter={() => setHoveredProduct(product.id)}
        onMouseLeave={() => setHoveredProduct(null)}
      >
        {/* Product Image */}
        <div className="relative overflow-hidden h-40 flex-shrink-0">
          <div className="w-full h-full bg-gradient-to-br from-gray-100 to-gray-200 animate-pulse group-hover:scale-105 transition-transform duration-300"></div>
          
          {/* Quick Actions Overlay */}
          <div className={`absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center gap-4 ${isHovered ? 'opacity-100' : 'opacity-0'}`}>
            <button className="bg-white rounded-full p-2 shadow-lg hover:bg-gray-100 transition-colors" aria-label="Add to wishlist">
              <Heart size={20} className="text-gray-600" />
            </button>
            <button className="bg-white rounded-full p-2 shadow-lg hover:bg-gray-100 transition-colors" aria-label="Add to cart">
              <ShoppingCart size={20} className="text-gray-600" />
            </button>
          </div>
        </div>

        {/* Product Info */}
        <div className="p-4 space-y-2 flex-1 flex flex-col">
          <Link 
            to={`/product/${product.id + 1}`}
            className="block flex-1"
          >
            <h3 className="font-semibold text-base text-gray-900 hover:text-blue-600 transition-colors line-clamp-2 mb-2 leading-tight">
              {product.title}
            </h3>
            <p className="text-gray-500 text-xs line-clamp-3 leading-relaxed flex-1">
              {product.description}
            </p>
          </Link>
          <div className="flex items-center justify-between pt-2 mt-auto">
            <span className="text-lg font-bold text-gray-900">${product.price.toLocaleString()}</span>
            <span 
              className={`category-tag category-${product.category.toLowerCase()} ${categoryStyle.bg} ${categoryStyle.text}`}
              title={`Category: ${product.category}`}
            >
              {product.category}
            </span>
          </div>
        </div>
      </article>
    )
  }

  return (
    <>
    <Helmet>
      <title>Laptop Website | Products</title>
      <meta name="description" content="Products" />
    </Helmet>
      <Header />
      <Navbar />
      
      {/* Main Content */}
      <main className="flex min-h-screen bg-gray-50">
        {/* Sidebar Navigation */}
        <Sidebar />
        
        {/* Products Section */}
        <section className="flex-1 p-6 lg:p-8">
          {/* Page Header */}
          <header className="mb-8">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div>
                <h1 className="text-3xl lg:text-4xl font-bold text-gray-900">Products</h1>
                <p className="text-gray-600 mt-1">Discover our latest collection of high-quality products</p>
              </div>
            </div>
          </header>

          {/* Products Controls */}
          <nav className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
            {/* Filter and Sort Controls */}
            <div className="flex items-center gap-4">
              {/* Filter Dropdown */}
              <div className="relative">
                <button
                  onClick={handleFilterClick}
                  className="flex items-center gap-2 bg-white border border-gray-300 rounded-lg px-4 py-2 text-gray-700 hover:bg-gray-50 transition-all duration-200"
                  aria-label="Filter products"
                  aria-expanded={showFilterDropdown}
                >
                  <FilterIcon size={16} />
                  <span className="font-medium">
                    {selectedFilters.length > 0 ? `${selectedFilters.length} filters` : "Filter"}
                  </span>
                  <ChevronDown size={16} className={`transition-transform duration-200 ${showFilterDropdown ? "rotate-180" : ""}`} />
                </button>
                
                {showFilterDropdown && (
                  <div className="absolute left-0 top-full mt-1 bg-white border border-gray-200 rounded-lg shadow-lg z-10 min-w-[250px] max-h-64 overflow-y-auto">
                    <div className="p-3 border-b border-gray-100">
                      <h3 className="text-sm font-semibold text-gray-900">Categories</h3>
                    </div>
                    <div className="p-2">
                      {filterOptions.map((option) => (
                        <label
                          key={option.value}
                          className="flex items-center justify-between px-3 py-2 hover:bg-gray-50 rounded cursor-pointer"
                        >
                          <div className="flex items-center gap-3">
                            <input
                              type="checkbox"
                              checked={selectedFilters.includes(option.value)}
                              onChange={() => handleFilterSelect(option.value)}
                              className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                            />
                            <span className="text-sm text-gray-700">{option.label}</span>
                          </div>
                          <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded-full">
                            {option.count}
                          </span>
                        </label>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Sort Dropdown */}
              <div className="relative">  
                <button
                  onClick={handleSortClick}
                  className="flex items-center gap-2 bg-white border border-gray-300 rounded-lg px-4 py-2 text-gray-700 hover:bg-gray-50 transition-all duration-200"
                  aria-label="Sort products"
                  aria-expanded={showSortDropdown}
                >
                  <span className="font-medium">Sort by: {sortOptions.find(option => option.value === sortBy)?.label}</span>
                  <ChevronDown size={16} className={`transition-transform duration-200 ${showSortDropdown ? "rotate-180" : ""}`} />
                </button>
                
                {showSortDropdown && (
                  <div className="absolute right-0 top-full mt-1 bg-white border border-gray-200 rounded-lg shadow-lg z-10 min-w-[200px]">
                    {sortOptions.map((option) => (
                      <button
                        key={option.value}
                        onClick={() => handleSortChange(option.value)}
                        className={`w-full text-left px-4 py-2 text-sm hover:bg-gray-50 transition-colors ${
                          sortBy === option.value ? "bg-blue-50 text-blue-700" : "text-gray-700"
                        }`}
                      >
                        {option.label}
                      </button>
                    ))}
                  </div>
                )}
              </div>
              <button onClick={handleResetFilters} className="px-4 py-2 text-gray-700 hover:bg-gray-50 transition-all duration-200">Reset Filters</button>
            </div>

            {/* Product Count - Moved to Right Side */}
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <span>Showing {currentProductList?.length || 0} of {sampleProduct.length} products</span>
            </div>
          </nav>

          {/* Selected Filters Display */}
          {selectedFilters.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-6">
              {selectedFilters.map((filter) => (
                <div 
                  key={filter} 
                  className="flex items-center gap-2 bg-blue-100 text-blue-700 text-sm font-medium px-3 py-1.5 rounded-full"
                >
                  <span>{filterOptions.find(opt => opt.value === filter)?.label}</span>
                  <button
                    onClick={() => removeFilter(filter)}
                    className="hover:text-blue-800 transition-colors"
                    aria-label={`Remove ${filter} filter`}
                  >
                    <XIcon size={12} />
                  </button>
                </div>
              ))}
            </div>
          )}

          {/* Products Grid */}
          <section aria-label="Products grid">
            {isLoading ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-6">
                {[...Array(10)].map((_, index) => (
                  <ProductCardSkeleton key={index} />
                ))}
              </div>
            ) : currentProductList && currentProductList.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-6">
                {currentProductList.map(ProductCard)}
              </div>
            ) : (
              <div className="text-center py-12">
                <p className="text-gray-500 text-lg">No products found matching your criteria.</p>
                <button 
                  onClick={handleResetFilters}
                  className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Clear Filters
                </button>
              </div>
            )}
          </section>
        </section>
      </main>
      
      <Footer />
    </>
  )
} 
