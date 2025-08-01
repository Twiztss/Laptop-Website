import { Link } from "react-router-dom";
import FooterFull from "../components/shared/FooterFull";
import Header from "../components/shared/Header";
import { useEffect, useRef, useState } from "react";

const data : {id: number, step: string, stepInfo: string}[] = [
  {
    id : 0,
    step : "Browse and Select Your Laptop",
    stepInfo : "Start by exploring our extensive collection of laptops. Use the search filters to narrow down your options by brand, price range, specifications, or features. Click on any laptop that catches your interest to view detailed specifications, customer reviews, and high-quality images.",
  },
  {
    id : 1,
    step : "Add to Cart and Review",
    stepInfo : "Once you've found your perfect laptop, click the 'Add to Cart' button. You can continue shopping or proceed to your cart to review your selection. In the cart, you can adjust quantities, remove items, or add accessories and warranty options before checkout.",
  },
  {
    id : 2,
    step : "Complete Your Order",
    stepInfo : "Proceed to checkout where you'll enter your shipping address, select your preferred delivery method, and choose your payment option. We accept major credit cards, PayPal, and other secure payment methods. Review your order summary and confirm your purchase.",
  },
  {
    id : 3,
    step : "Track Your Delivery",
    stepInfo : "After placing your order, you'll receive a confirmation email with your order number and tracking information. You can track your package's journey from our warehouse to your doorstep through our website or the provided tracking link. Most orders are delivered within 3-5 business days.",
  },
]

export default function HowToUse() {
  const [visibleSteps, setVisibleSteps] = useState<Set<number>>(new Set());
  const stepRefs = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const stepId = parseInt(entry.target.getAttribute('data-step-id') || '0');
          if (entry.isIntersecting) {
            setVisibleSteps(prev => new Set([...prev, stepId]));
          }
        });
      },
      {
        threshold: 0.3,
        rootMargin: '0px 0px -100px 0px'
      }
    );

    stepRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  const renderInstruction = (data : {id: number, step: string, stepInfo: string}) => {
    const isVisible = visibleSteps.has(data.id);
    
    return (
      <article 
        key={data.id} 
        ref={(el) => (stepRefs.current[data.id] = el)}
        data-step-id={data.id}
        className={`flex flex-col gap-8 w-full transition-all duration-700 ease-out transform ${
          isVisible 
            ? 'opacity-100 translate-y-0' 
            : 'opacity-0 translate-y-8'
        }`}
      >
        <div className="flex items-start gap-6">
          <div className="bg-gray-600 rounded-full w-12 h-12 text-white flex items-center justify-center font-bold text-lg shadow-lg flex-shrink-0">
            {data.id + 1}
          </div>
          <div className="flex-1">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">{data.step}</h2>
            <p className="text-gray-600 leading-relaxed">{data.stepInfo}</p>
          </div>
        </div>
        
        {/* Step connector line */}
        {data.id < 3 && (
          <div className="w-0.5 h-16 bg-gradient-to-b from-gray-600 to-gray-300 ml-6"></div>
        )}
      </article>
    )
  }

  return (
    <main className="flex flex-col w-full items-center min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <Header />
      <section className="flex flex-col gap-16 mx-8 my-16 max-w-4xl w-full px-4">
        <div className="text-center mb-8">
          <h1 className="text-5xl font-bold text-gray-800 mb-4">How to Order</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Follow these simple steps to order your perfect laptop from our website
          </p>
        </div>
        
        <div className="flex flex-col gap-8">
          {data.map(renderInstruction)}
        </div>
        
        {/* Final CTA */}
        <div className="text-center mt-12 p-8 bg-gray-50 rounded-2xl border border-gray-100">
          <h3 className="text-2xl font-bold text-gray-800 mb-4">Ready to Get Started?</h3>
          <p className="text-gray-600 mb-6">
            Now that you know how easy it is to order, why not browse our selection of laptops?
          </p>
          <button className="bg-gray-600 hover:bg-gray-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-200 shadow-lg">
            <Link to="/products">Browse Laptops</Link>
          </button>
        </div>
      </section>
      <FooterFull />
    </main>
  )
}