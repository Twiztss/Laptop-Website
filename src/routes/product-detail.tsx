import { Heart, ShoppingCart, Star, ArrowLeft } from "lucide-react";
import Footer from "../components/shared/Footer";
import Header from "../components/shared/Header";
import { Link, useParams, useNavigate } from "react-router-dom";
import { Product, Version } from "../types/Product";
import sampleProduct from "../data/product-data";
import Navbar from "../components/shared/Navbar";
import { sampleReview } from "../data/review-data";
import { Review } from "../types/Users";
import { useState, useEffect } from "react";
import { ProductDetailSkeleton, ReviewCardSkeleton, ProductCardSkeleton } from "../components/ui/Skeleton";
import { getCategoryStyle } from "../utils/style";

const Testimony = () => {
  const [isLoading, setIsLoading] = useState(true);
  const reviews = sampleReview.slice(0, Math.random() * 10)

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  const TestimonyCard = (product: Review) => {
    // Generate star rating display
    const renderStars = (score: number) => {
      return Array.from({ length: 5 }, (_, index) => (
        <Star 
          key={index} 
          size={16} 
          className={index < score ? "text-yellow-400 fill-current" : "text-gray-300"} 
        />
      ));
    };

    return (
      <div className="flex flex-col bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow p-6 space-y-4" key={product.title}>
        <div className="flex gap-4">
          <div className="w-12 h-12 bg-gradient-to-br from-blue-200 to-blue-300 rounded-full flex items-center justify-center text-blue-600 font-semibold text-lg">
            {product.user.split(' ').map(n => n[0]).join('').toUpperCase()}
          </div>
          <div className="flex-1 space-y-1">
            <h3 className="font-semibold text-gray-900 hover:text-blue-600 transition-colors">
              {product.user}
            </h3>
            <p className="text-gray-500 text-xs">{product.email}</p>
          </div>
        </div>
        <div className="flex gap-2 items-center">
          <div className="flex gap-1">
            {renderStars(product.score)}
          </div>
          <span className="text-sm text-gray-600 ml-2">{product.score}/5</span>
        </div>
        <div className="space-y-2">
          <h4 className="font-semibold text-gray-900 line-clamp-1">{product.title}</h4>
          <p className="text-gray-600 text-sm line-clamp-4 leading-relaxed">{product.description}</p>
        </div>
      </div>
    )
  }

  return (
    <section className="py-12 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Customer Reviews</h2>
          <div className="flex items-center gap-6 text-gray-600">
            <div className="flex items-center gap-2">
              <div className="flex gap-1">
                {Array.from({ length: 5 }, (_, index) => (
                  <Star 
                    key={index} 
                    size={20} 
                    className={index < Math.round(reviews.reduce((prev, cur) => prev + cur.score, 0) / reviews.length) ? "text-yellow-400 fill-current" : "text-gray-300"} 
                  />
                ))}
              </div>
              <span className="font-semibold text-lg">
                {(reviews.reduce((prev, cur) => prev + cur.score, 0) / reviews.length).toFixed(1)}
              </span>
            </div>
            <span>•</span>
            <span>{reviews.length} verified reviews</span>
            <span>•</span>
            <span className="text-green-600 font-medium">
              {Math.round((reviews.filter(r => r.score >= 4).length / reviews.length) * 100)}% recommend
            </span>
          </div>
        </div>
        
        {isLoading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[...Array(6)].map((_, index) => (
              <ReviewCardSkeleton key={index} />
            ))}
          </div>
        ) : (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {reviews.map(TestimonyCard)}
            </div>
          </>
        )}
      </div>
    </section>
  )
}

const InterestProduct = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 800);
    return () => clearTimeout(timer);
  }, []);

  const InterestCard = (product: Product) => {
    const categoryStyle = getCategoryStyle(product.category)
    console.log(`Product: ${product.title}, Category: "${product.category}", Style:`, categoryStyle)

    return (
      <div className="group bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden" key={product.title}>
        <div className="relative overflow-hidden">
          <div className="w-full h-48 bg-gradient-to-br from-gray-100 to-gray-200 group-hover:scale-105 transition-transform duration-300"></div>
        </div>
        <div className="p-4 space-y-2">
          <Link to={`/product/${product.id + 1}`}>
            <h3 className="font-semibold text-gray-900 hover:text-blue-600 transition-colors line-clamp-2">
              {product.title}
            </h3>
          </Link>
          <p className={`text-xs w-fit px-2 py-1 rounded-full category-tag category-${product.category.toLowerCase()} ${categoryStyle.bg} ${categoryStyle.text}`}>{product.category}</p>
          <p className="text-gray-500 text-sm line-clamp-3">{product.description.slice(0, 50)}...</p>
          <div className="flex items-center justify-between pt-2">
            <span className="text-xl font-bold text-gray-900">${product.price}</span>
          </div>
        </div>
      </div>
    )
  }

  return (
    <section className="py-12 px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Similar products you may be interested in</h2>
        
        {isLoading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-6">
            {[...Array(5)].map((_, index) => (
              <ProductCardSkeleton key={index} />
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-6">
            {sampleProduct.slice(0, 5).map(InterestCard)}
          </div>
        )}
      </div>
    </section>
  )
}

const Thumbnail = (product: Product) => {
  return (
    <section className="py-12 px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center space-y-8">
        <h2 className="text-3xl font-bold text-gray-900">More information about {product.title}</h2>
        <div className="w-full h-64 lg:h-96 bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl animate-pulse"></div>
        <p className="text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto">{product.description}</p>
      </div>
    </section>
  )
}

export default function ProductDetail() {
  const params = useParams();
  const navigate = useNavigate();
  const productIndex: number = Number(params.productId) - 1;
  const currentProduct: Product = sampleProduct[productIndex];
  const [isLoading, setIsLoading] = useState(true);
  const [selectedVersion1, setSelectedVersion1] = useState<number>(0);
  const [selectedVersion2, setSelectedVersion2] = useState<number>(0);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1200);
    return () => clearTimeout(timer);
  }, []);

  const Version1 = (version: Version, index: number) => {
    const isSelected = selectedVersion1 === index;
    return (
      <button
        key={version.title}
        onClick={() => setSelectedVersion1(index)}
        className={`w-16 h-16 rounded-lg border-2 transition-all duration-200 ${
          isSelected 
            ? 'border-blue-500 bg-blue-50 shadow-md' 
            : 'border-gray-200 bg-gray-100 hover:border-gray-300'
        }`}
      />
    )
  }

  const Version2 = (version: Version, index: number) => {
    const isSelected = selectedVersion2 === index;
    return (
      <button
        key={version.title}
        onClick={() => setSelectedVersion2(index)}
        className={`px-4 py-2 rounded-lg border-2 transition-all duration-200 text-sm font-medium ${
          isSelected 
            ? 'border-blue-500 bg-blue-50 text-blue-700 shadow-md' 
            : 'border-gray-200 bg-gray-100 text-gray-600 hover:border-gray-300'
        }`}
      >
        {version.title}
      </button>
    )
  }

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Header />
        <Navbar />
        <div className="py-8 px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <ProductDetailSkeleton />
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <Navbar />
      
      <main className="py-8 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Back Button */}
          <button
            onClick={() => navigate(-1)}
            className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors mb-8"
          >
            <ArrowLeft size={20} />
            <span>Back to Products</span>
          </button>

          {/* Product Detail */}
          <div className="bg-white rounded-2xl shadow-sm overflow-hidden mb-12">
            <div className="flex flex-col lg:flex-row">
              {/* Product Image */}
              <div className="lg:w-1/2 p-8">
                <div className="w-full h-96 lg:h-[500px] bg-gradient-to-br from-gray-100 to-gray-200 rounded-xl animate-pulse"></div>
              </div>

              {/* Product Info */}
              <div className="lg:w-1/2 p-8 space-y-6">
                <div className="space-y-2">
                  <h1 className="text-4xl lg:text-5xl font-bold text-gray-900">{currentProduct.title}</h1>
                  <p className={`text-xl rounded-full category-text-${currentProduct.category.toLowerCase()}`}>{currentProduct.category}</p>
                  <p className="text-3xl font-bold text-gray-900">${currentProduct.price}</p>
                </div>

                {/* Version Selection */}
                <div className="space-y-4">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">Select Version</h3>
                    <div className="flex gap-3">
                      {currentProduct.version1.map((version, index) => Version1(version, index))}
                    </div>
                  </div>
                  
                  {currentProduct.version2 && (
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-3">Select Configuration</h3>
                      <div className="flex gap-3 flex-wrap">
                        {currentProduct.version2.map((version, index) => Version2(version, index))}
                      </div>
                    </div>
                  )}
                </div>

                {/* Action Buttons */}
                <div className="space-y-4 pt-4">
                  <button className="w-full bg-black hover:bg-gray-800 text-white font-semibold py-4 px-6 rounded-xl transition-colors duration-200 flex items-center justify-center gap-3">
                    <ShoppingCart size={20} />
                    Add to Cart
                  </button>
                  <button className="w-full border-2 border-gray-300 hover:border-gray-400 text-gray-700 font-semibold py-4 px-6 rounded-xl transition-colors duration-200 flex items-center justify-center gap-3">
                    <Heart size={20} />
                    Add to Wishlist
                  </button>
                </div>

                {/* Description */}
                <div className="pt-6 border-t border-gray-200">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Description</h3>
                  <p className="text-gray-600 leading-relaxed">{currentProduct.description}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Thumbnail {...currentProduct} />
      <Testimony />
      <InterestProduct />
      
      <Footer />
    </div>
  )
}
