import { Banknote, Calendar, Check, CircleAlert, DiamondIcon, Gift, IdCard } from "lucide-react";
import { Link } from "react-router-dom";
import { SettingsSection } from "./SettingsSection";
import { Users } from "../../types/Users";

export const SubscriptionSection = ({ user }: { user: Users }) => {
    const date = new Date();

    return (
        <SettingsSection 
            title="Subscription Management" 
            description="Manage your subscription plan and billing preferences"
        >
            <div className="space-y-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <div className="space-y-4">
                        <div className="flex items-center gap-3">
                            <h3 className="text-lg font-semibold text-gray-900">Current Plan</h3>
                        </div>
                        
                        <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-6 border border-blue-100">
                            <div className="flex items-center gap-3 mb-4">
                                <DiamondIcon className="w-8 h-8" style={{ color: user.memberTier.color }} />
                                <h4 className="text-2xl font-bold" style={{ color: user.memberTier.color }}>
                                    {user.memberTier.title}
                                </h4>
                            </div>
                            
                            <div className="space-y-2">
                                <div className="flex items-center gap-2 text-sm text-gray-600">
                                    <Calendar className="w-4 h-4" />
                                    <span>Next payment: {date.getMonth() + 1}/{date.getDate()}/{date.getFullYear()}</span>
                                </div>
                                <div className="flex items-center gap-2 text-sm text-gray-600">
                                    <IdCard className="w-4 h-4" />
                                    <span>ID: 4284-28921-482</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="space-y-4">
                        <h3 className="text-lg font-semibold text-gray-900">Plan Benefits</h3>
                        <div className="bg-gray-50 rounded-lg p-4">
                            <ul className="space-y-2">
                                <li className="flex items-center gap-2 text-sm">
                                    <Check className="w-4 h-4 text-green-500" />
                                    Free Delivery Cost
                                </li>
                                <li className="flex items-center gap-2 text-sm">
                                    <Check className="w-4 h-4 text-green-500" />
                                    Pre-order Discount
                                </li>
                                <li className="flex items-center gap-2 text-sm">
                                    <Check className="w-4 h-4 text-green-500" />
                                    Tiered Discount
                                </li>
                                <li className="flex items-center gap-2 text-sm">
                                    <Check className="w-4 h-4 text-green-500" />
                                    Mix-and-Match Bundle
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="border-t border-gray-200 pt-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Subscription Actions</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                        <Link 
                            to="/subscription"
                            className="flex items-center gap-3 p-4 border border-gray-200 rounded-lg hover:border-blue-300 hover:bg-blue-50 transition-colors"
                        >
                            <Banknote className="w-5 h-5 text-gray-500" />
                            <div>
                                <div className="font-medium text-gray-900">Change Plan</div>
                                <div className="text-sm text-gray-500">Upgrade or downgrade</div>
                            </div>
                        </Link>
                        
                        <button className="flex items-center gap-3 p-4 border border-gray-200 rounded-lg hover:border-green-300 hover:bg-green-50 transition-colors text-left">
                            <Gift className="w-5 h-5 text-gray-500" />
                            <div>
                                <div className="font-medium text-gray-900">Redeem Gift Card</div>
                                <div className="text-sm text-gray-500">Apply gift codes</div>
                            </div>
                        </button>
                        
                        <button className="flex items-center gap-3 p-4 border border-gray-200 rounded-lg hover:border-red-300 hover:bg-red-50 transition-colors text-left">
                            <CircleAlert className="w-5 h-5 text-gray-500" />
                            <div>
                                <div className="font-medium text-gray-900">Cancel Subscription</div>
                                <div className="text-sm text-gray-500">End your plan</div>
                            </div>
                        </button>
                    </div>
                </div>
            </div>
        </SettingsSection>
    );
};