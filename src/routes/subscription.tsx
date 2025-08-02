import { Sparkles } from "lucide-react";
import Footer from "../components/shared/Footer";
import Header from "../components/shared/Header";
import { sampleTier } from "../data/user-data";
import { useState, useEffect } from "react";
import Button from "../components/ui/Button";
import { SubscriptionCard } from "../components/subscription/SubscriptionCard";

export default function Subscription() {
    const [isYearly, setIsYearly] = useState(false);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    return (
        <main className="flex flex-col w-full min-h-screen bg-gradient-to-b from-gray-50 to-white">
            <Header />
            
            <main className="flex flex-col p-6 gap-8">
                {/* Hero Section */}
                <section className="flex justify-center items-center py-6">
                    <div className={`flex flex-col gap-6 w-full max-w-4xl text-center transition-all duration-1000 ${
                        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                    }`}>
                        <div className="flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-full text-sm font-medium w-fit mx-auto">
                            <Sparkles size={16} />
                            <span>Choose Your Plan</span>
                        </div>
                        
                        <h1 className="text-4xl font-bold bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent">
                            Reduced Prices, At a Reduced Cost
                        </h1>
                        
                        <p className="text-base text-gray-600 max-w-2xl mx-auto leading-relaxed">
                            Our subscriptions offer wide ranges of benefits hand-picked for you at a reasonable price including monthly and annual payments.
                        </p>

                        {/* Billing Toggle */}
                        <div className="flex items-center justify-center gap-4 mt-2">
                            <span className={`text-sm font-medium ${
                                !isYearly ? 'text-gray-900' : 'text-gray-500'
                            }`}>
                                Monthly
                            </span>
                            <button
                                onClick={() => setIsYearly(!isYearly)}
                                className={`relative w-16 h-8 rounded-full ${
                                    isYearly ? 'bg-gradient-to-r from-blue-600 to-purple-600' : 'bg-gray-300'
                                }`}
                            >
                                <div className={`absolute top-1 w-6 h-6 bg-white rounded-full shadow-md ${
                                    isYearly ? 'translate-x-8' : 'translate-x-1'
                                }`} />
                            </button>
                            <span className={`text-sm font-medium ${
                                isYearly ? 'text-gray-900' : 'text-gray-500'
                            }`}>
                                Yearly
                            </span>
                        </div>
                    </div>
                </section>

                {/* Subscription Cards Container */}
                <div className="w-full max-w-6xl mx-auto">
                    {/* First Row - Regular, Silver, Gold */}
                    <section className="flex gap-6 w-full justify-center items-center mb-8">
                        {sampleTier.slice(0,3).map((subscription, index) => (
                            <SubscriptionCard 
                                key={subscription.id} 
                                subscription={subscription} 
                                index={index} 
                                isYearly={isYearly}
                            />
                        ))}
                    </section>

                    {/* Second Row - Platinum, Diamond */}
                    <section className="flex gap-6 w-full justify-center items-center">
                        {sampleTier.slice(3,5).map((subscription, index) => (
                            <SubscriptionCard 
                                key={subscription.id} 
                                subscription={subscription} 
                                index={index + 3} 
                                isYearly={isYearly}
                            />
                        ))}
                    </section>
                </div>

                {/* Additional Info */}
                <section className="text-center p-6 bg-gradient-to-br from-gray-50 to-white rounded-2xl border border-gray-100 shadow-lg w-full max-w-6xl mx-auto">
                    <h3 className="text-lg font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent mb-3">
                        Need Help Choosing?
                    </h3>
                    <p className="text-gray-600 mb-4 text-sm">
                        Our team is here to help you find the perfect subscription plan for your needs.
                    </p>
                    <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 text-sm px-6 py-2">
                        Contact Support
                    </Button>
                </section>
            </main>
            
            <Footer />
        </main>
    );
}
