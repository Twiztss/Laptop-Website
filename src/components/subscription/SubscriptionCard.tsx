import { useState, useEffect } from "react";
import { MemberTier } from "../../types/Users";
import { Star, Award, CrownIcon, Check } from "lucide-react";
import Button from "../ui/Button";

export const SubscriptionCard = ({ subscription, index, isYearly }: { subscription: MemberTier, index: number, isYearly: boolean }) => {
    const [isVisible, setIsVisible] = useState(false);

    const getYearlyPrice = (monthlyPrice: number) => {
        return (monthlyPrice * 12 * 0.8).toFixed(2); // 20% discount for yearly
    };
    
    const getPriceDisplay = (price: number) => {
        if (price === 0) return "Free";
        return isYearly ? `$${getYearlyPrice(price)}` : `$${price}`;
    };
    
    const getPeriodDisplay = () => {
        return isYearly ? "/ year" : "/ month";
    };

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.1 }
        );

        const element = document.getElementById(`subscription-${subscription.id}`);
        if (element) {
            observer.observe(element);
        }

        return () => observer.disconnect();
    }, [subscription.id]);

    const isPopular = subscription.title === "Gold";
    const isCurrent = subscription.title === "Regular";
    const isPlatinum = subscription.title === "Platinum";
    const isDiamond = subscription.title === "Diamond";

    // Color scheme mapping
    const getCardColors = () => {
        if (isDiamond) {
            return {
                iconBg: 'bg-gradient-to-br from-cyan-400 to-blue-600',
                iconColor: 'text-white',
                badgeBg: 'bg-gradient-to-r from-cyan-500 to-blue-600',
                buttonBg: 'bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700'
            };
        } else if (isPlatinum) {
            return {
                iconBg: 'bg-gradient-to-br from-slate-400 to-gray-600',
                iconColor: 'text-white',
                badgeBg: 'bg-gradient-to-r from-slate-500 to-gray-600',
                buttonBg: 'bg-gradient-to-r from-slate-500 to-gray-600 hover:from-slate-600 hover:to-gray-700'
            };
        } else if (isPopular) {
            return {
                iconBg: 'bg-gradient-to-br from-yellow-400 to-orange-500',
                iconColor: 'text-white',
                badgeBg: 'bg-gradient-to-r from-yellow-400 to-orange-500',
                buttonBg: 'bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600'
            };
        } else if (isCurrent) {
            return {
                iconBg: 'bg-gradient-to-br from-blue-600 to-purple-600',
                iconColor: 'text-white',
                badgeBg: 'bg-gradient-to-r from-blue-600 to-purple-600',
                buttonBg: 'bg-gray-100 text-gray-600 border-2 border-gray-200'
            };
        } else {
            return {
                iconBg: 'bg-gradient-to-br from-gray-100 to-gray-200',
                iconColor: 'text-gray-600',
                badgeBg: 'bg-gradient-to-r from-blue-600 to-purple-600',
                buttonBg: 'bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700'
            };
        }
    };

    const colors = getCardColors();

    // Calculate card width based on plan type
    const getCardWidth = () => {
        if (isPlatinum || isDiamond) {
            return 'w-1/2'; // 50% width for Platinum and Diamond (2 cards)
        }
        return 'w-1/3'; // 33.33% width for Regular, Silver, and Gold (3 cards)
    };

    return (
        <div 
            id={`subscription-${subscription.id}`}
            key={subscription.title} 
            className={`relative flex flex-col h-[600px] justify-between items-center gap-4 ${getCardWidth()} p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-blue-200 transform hover:-translate-y-2 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{ animationDelay: `${index * 100}ms` }}
        >
            {/* Popular Badge */}
            {isPopular && (
                <div className={`absolute -top-4 left-1/2 transform -translate-x-1/2 ${colors.badgeBg} text-white font-semibold text-sm px-6 py-2 rounded-full shadow-lg`}>
                    <div className="flex items-center gap-2">
                        <Star size={16} />
                        <span>Most Popular</span>
                    </div>
                </div>
            )}

            {/* Current Plan Badge */}
            {isCurrent && (
                <div className={`absolute -top-4 left-1/2 transform -translate-x-1/2 ${colors.badgeBg} text-white font-semibold text-sm px-6 py-2 rounded-full shadow-lg`}>
                    <span>Current Plan</span>
                </div>
            )}

            {/* Premium Badges */}
            {isPlatinum && (
                <div className={`absolute -top-4 left-1/2 transform -translate-x-1/2 ${colors.badgeBg} text-white font-semibold text-sm px-6 py-2 rounded-full shadow-lg`}>
                    <div className="flex items-center gap-2">
                        <Award size={16} />
                        <span>Premium</span>
                    </div>
                </div>
            )}

            {isDiamond && (
                <div className={`absolute -top-4 left-1/2 transform -translate-x-1/2 ${colors.badgeBg} text-white font-semibold text-sm px-6 py-2 rounded-full shadow-lg`}>
                    <div className="flex items-center gap-2">
                        <CrownIcon size={16} />
                        <span>Ultimate</span>
                    </div>
                </div>
            )}

            {/* Icon */}
            <div className="mt-6">
                <div className={`w-16 h-16 rounded-2xl flex items-center justify-center shadow-lg ${colors.iconBg}`}>
                    <CrownIcon 
                        width={32} 
                        height={32} 
                        className={colors.iconColor}
                    />
                </div>
            </div>

            {/* Title */}
            <h2 className="text-xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent text-center">
                {subscription.title}
            </h2>

            {/* Features Count */}
            <p className="text-gray-500 text-sm font-medium text-center">
                {subscription.benefits.length} features included
            </p>

            {/* Price */}
            <div className="flex flex-col items-center">
                <h1 className="text-3xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
                    {getPriceDisplay(subscription.price)}
                </h1>
                <p className="text-sm text-gray-500 font-medium">
                    {getPeriodDisplay()}
                </p>
            </div>

            {/* Description */}
            <p className="text-center text-xs text-gray-600 leading-relaxed">
                {subscription.description}
            </p>

            {/* Benefits List */}
            <div className="flex flex-col gap-2 w-full flex-1 overflow-y-auto">
                {subscription.benefits.map((benefit, idx) => (
                    <div key={idx} className="flex items-start gap-2">
                        <div className="w-4 h-4 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                            <Check size={10} className="text-green-600" />
                        </div>
                        <span className="text-xs text-gray-600 leading-relaxed">{benefit}</span>
                    </div>
                ))}
            </div>

            {/* Action Button */}
            <Button 
                className={`w-full py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 text-white shadow-lg hover:shadow-xl ${
                    isCurrent 
                        ? 'bg-gray-100 text-gray-600 border-2 border-gray-200 cursor-not-allowed' 
                        : colors.buttonBg
                }`}
                disabled={isCurrent}
            >
                {isCurrent ? 'Current Plan' : 'Subscribe Now'}
            </Button>
        </div>
    );
};