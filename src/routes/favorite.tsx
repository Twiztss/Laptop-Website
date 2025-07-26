import Footer from "../components/shared/Footer"
import Header from "../components/shared/Header"
import { Link } from "react-router-dom"
import Navbar from "../components/shared/Navbar"
import { useState, useEffect } from "react"
import sampleProduct from "../data/product-data"
import { Product } from "../types/Product"
import { Heart, ShoppingCart, Trash2 } from "lucide-react"
import { ProductCardSkeleton } from "../components/ui/Skeleton"
import { getCategoryStyle } from "../utils/style"

interface FavoriteItemProps {
    product: Product
    onRemoval: (productId: number) => void
}

const FavoriteItem = ({ product, onRemoval }: FavoriteItemProps) => {
    const [isHovered, setIsHovered] = useState(false)

    return (
        <article 
            className="group relative flex flex-col bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {/* Product Image */}
            <div className="relative overflow-hidden">
                <div className="w-full h-48 bg-gradient-to-br from-gray-100 to-gray-200 animate-pulse group-hover:scale-105 transition-transform duration-300"></div>
                
                {/* Quick Actions Overlay */}
                <div className={`absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center gap-4 ${isHovered ? 'opacity-100' : 'opacity-0'}`}>
                    <button 
                        className="bg-white rounded-full p-2 shadow-lg hover:bg-gray-100 transition-colors" 
                        aria-label="Add to cart"
                    >
                        <ShoppingCart size={20} className="text-gray-600" />
                    </button>
                    <button 
                        className="bg-red-500 rounded-full p-2 shadow-lg hover:bg-red-600 transition-colors" 
                        onClick={() => onRemoval(product.id)}
                        aria-label="Remove from favorites"
                    >
                        <Trash2 size={20} className="text-white" />
                    </button>
                </div>

                {/* Favorite Badge */}
                <div className="absolute top-3 right-3">
                    <div className="bg-red-500 text-white rounded-full p-2 shadow-lg">
                        <Heart size={16} className="fill-current" />
                    </div>
                </div>
            </div>

            {/* Product Info */}
            <div className="p-4 space-y-2">
                <Link 
                    to={`/product/${product.id + 1}`}
                    className="block"
                >
                    <h3 className="font-semibold text-lg text-gray-900 hover:text-blue-600 transition-colors line-clamp-2">
                        {product.title}
                    </h3>
                </Link>
                <p className="text-gray-500 text-sm line-clamp-2">
                    {product.description.length >= 50 ? product.description.slice(0, 50) + "..." : product.description}
                </p>
                <div className="flex items-center justify-between pt-2">
                    <span className="text-xl font-bold text-gray-900">${product.price}</span>
                    <span className={`text-xs bg-gray-100 px-2 py-1 rounded-full ${getCategoryStyle(product.category).bg} ${getCategoryStyle(product.category).text}`}>
                        {product.category}
                    </span>
                </div>
            </div>
        </article>
    )
}

export default function Favorite() {
    const [favorites, setFavorites] = useState<Product[]>([])
    const [isLoading, setIsLoading] = useState(true)

    // Simulate loading and initialize favorites
    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false)
            setFavorites(sampleProduct.slice(1, 5)) // Start with 4 favorite items
        }, 1200)
        return () => clearTimeout(timer)
    }, [])

    const removeItem = (productId: number) => {
        setFavorites(prev => prev.filter(item => item.id !== productId))
    }

    return (
        <div className="flex flex-col min-h-screen bg-gray-50">
            <Header />
            <Navbar />
            
            {/* Main Content */}
            <main className="flex-1 p-6 lg:p-8">
                <div className="max-w-7xl mx-auto">
                    {/* Page Header */}
                    <header className="mb-8">
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                            <div>
                                <h1 className="text-3xl lg:text-4xl font-bold text-gray-900">Favorites</h1>
                                <p className="text-gray-600 mt-1">
                                    {favorites.length > 0 
                                        ? `You have ${favorites.length} favorite item${favorites.length !== 1 ? 's' : ''}`
                                        : "Your favorite items will appear here"
                                    }
                                </p>
                            </div>
                            
                            {favorites.length > 0 && (
                                <div className="flex items-center gap-2 text-sm text-gray-600">
                                    <span>Showing {favorites.length} favorite{favorites.length !== 1 ? 's' : ''}</span>
                                </div>
                            )}
                        </div>
                    </header>

                    {/* Favorites Grid */}
                    <section aria-label="Favorites grid">
                        {isLoading ? (
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-6">
                                {[...Array(4)].map((_, index) => (
                                    <ProductCardSkeleton key={index} />
                                ))}
                            </div>
                        ) : favorites.length > 0 ? (
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-6">
                                {favorites.map((product) => (
                                    <FavoriteItem 
                                        key={product.id}
                                        product={product}
                                        onRemoval={removeItem}
                                    />
                                ))}
                            </div>
                        ) : (
                            <div className="flex flex-col items-center justify-center py-16 text-center">
                                <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mb-6">
                                    <Heart size={32} className="text-gray-400" />
                                </div>
                                <h2 className="text-2xl font-semibold text-gray-900 mb-2">No favorites yet</h2>
                                <p className="text-gray-600 mb-8 max-w-md">
                                    Items you mark as favorite will appear here. Start exploring our products to build your collection.
                                </p>
                                <Link 
                                    to="/products"
                                    className="bg-black hover:bg-gray-800 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200"
                                >
                                    Browse Products
                                </Link>
                            </div>
                        )}
                    </section>
                </div>
            </main>
            
            <Footer />
        </div>
    )
}