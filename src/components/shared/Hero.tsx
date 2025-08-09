import { Link } from "react-router-dom";
import Button from "../ui/Button";
import { Search, Sparkles } from "lucide-react";
import { useState, useEffect } from "react";
import { Product } from "../../types/Product";
import sampleProduct from "../../data/product-data";

export default function Hero() {
  const [search, setSearch] = useState("");
  const [result, setResult] = useState<Product[] | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Trigger animation on mount
    setIsVisible(true);
  }, []);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
    if (e.target.value.length > 2) {
      setResult(sampleProduct.filter((product: Product) => product.title.toLowerCase().includes(e.target.value.toLowerCase())));
    } else {
      setResult(null);
    }
  }

  return (
    <section className="relative flex justify-center items-center bg-gradient-to-br from-gray-50 via-white to-gray-100 mx-4 md:mx-10 my-8 h-[85vh] rounded-3xl shadow-lg overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-50/30 to-purple-50/30"></div>
      <div className="absolute top-10 right-10 w-32 h-32 bg-blue-200/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-10 left-10 w-24 h-24 bg-purple-200/20 rounded-full blur-2xl animate-pulse delay-1000"></div>
      
      <div className={`flex flex-col gap-8 md:gap-12 justify-center items-center w-full max-w-6xl px-6 md:px-12 transition-all duration-1000 ease-out ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}>
        {/* Header Section */}
        <div className="flex flex-col gap-6 justify-center items-center text-center w-full">
          <div className="flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-medium animate-fade-in-up">
            <Sparkles size={16} />
            <span>Discover Amazing Products</span>
          </div>
          
          <h1 className="md:text-6xl lg:text-7xl text-4xl font-bold bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent leading-tight animate-fade-in-up animation-delay-200">
            Find Your Perfect
            <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Tech Companion
            </span>
          </h1>
          
          <p className="md:text-xl text-lg text-gray-600 max-w-2xl leading-relaxed animate-fade-in-up animation-delay-400">
            Discover cutting-edge laptops and electronics that match your lifestyle. 
            Quality, performance, and innovation in every product.
          </p>
        </div>

        {/* Search Section */}
        <div className="flex flex-col items-center w-full max-w-2xl gap-4 animate-fade-in-up animation-delay-600">
          <div className="relative flex items-center w-full group">
            <input 
              value={search} 
              onChange={handleSearch} 
              className="w-full rounded-2xl px-6 py-4 pr-16 border-2 border-gray-200 bg-white/80 backdrop-blur-sm transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 text-lg shadow-lg hover:shadow-xl" 
              type="text" 
              placeholder="Search for laptops, accessories, and more..." 
            />
            <Button 
              className="absolute right-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              <Search size={20} />
            </Button>
          </div>

          {/* Search Results */}
          {result && result.length > 0 && (
            <div className="w-full bg-white/95 backdrop-blur-sm rounded-2xl shadow-2xl border border-gray-100 overflow-hidden animate-fade-in-up">
              <div className="p-4 border-b border-gray-100">
                <h3 className="text-sm font-semibold text-gray-700">Search Results</h3>
              </div>
              <div className="max-h-64 overflow-y-auto">
                {result.map((product: Product) => (
                  <Link 
                    key={product.id} 
                    to={`/product/${product.id + 1}`} 
                    className="flex items-center gap-4 p-4 hover:bg-gray-50 transition-all duration-200 border-b border-gray-100 last:border-b-0 group"
                  >
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-100 to-purple-100 rounded-lg flex items-center justify-center">
                      <span className="text-lg font-bold text-gray-600">{product.title.charAt(0)}</span>
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                        {product.title}
                      </h3>
                      <p className="text-sm text-gray-500">
                        {product.category} • ${product.price}
                      </p>
                    </div>
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity">
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}
          
          {search.length > 2 && result && result.length === 0 && (
            <div className="w-full bg-white/95 backdrop-blur-sm rounded-2xl p-6 text-center shadow-lg animate-fade-in-up">
              <p className="text-gray-500 font-medium">No products found</p>
              <p className="text-sm text-gray-400 mt-1">Try adjusting your search terms</p>
            </div>
          )}
        </div>

        {/* Quick Actions */}
        <div className="flex flex-wrap justify-center gap-4 animate-fade-in-up animation-delay-800">
          <Button 
            type="primary" 
            className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
          >
            <Link to="/products">Browse All Products</Link>
          </Button>
          <Button 
            type="secondary" 
            className="bg-white/80 backdrop-blur-sm border-2 border-gray-200 hover:border-blue-500 hover:bg-blue-50 transition-all duration-300 transform hover:scale-105"
          >
            <Link to="/features">View Features</Link>
          </Button>
        </div>
      </div>

      <style>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
        }
        
        .animation-delay-200 {
          animation-delay: 0.2s;
        }
        
        .animation-delay-400 {
          animation-delay: 0.4s;
        }
        
        .animation-delay-600 {
          animation-delay: 0.6s;
        }
        
        .animation-delay-800 {
          animation-delay: 0.8s;
        }
      `}</style>
    </section>
  )
}
