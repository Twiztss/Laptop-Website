import { useState } from "react";
import { Users } from "../../types/Users";
import { sampleInvoice } from "../../data/user-data";
import { Check, Search } from "lucide-react";
import { Link } from "react-router-dom";
import { SettingsSection } from "./SettingsSection";

export const OrderInfoCard = ({ user }: { user: Users }) => {
    const [searchTerm, setSearchTerm] = useState("");

    const OrderCard = () => {
        const { id, status, amount, totalPrice } = sampleInvoice[2];

        return (
            <tr className="border-b border-gray-100 hover:bg-gray-50">
                <td className="py-4 px-4">
                    <div className="flex items-center gap-3">
                        <input type="checkbox" className="rounded" />
                        <Link 
                            to={`/order/${id + 1}`}
                            className="font-medium text-blue-600 hover:text-blue-800"
                        >
                            Invoice #{id}
                        </Link>
                    </div>
                </td>
                <td className="py-4 px-4">
                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm">
                        <Check className="w-4 h-4" />
                        {status.title}
                    </div>
                </td>
                <td className="py-4 px-4">
                    <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-gray-200 rounded-full"></div>
                        <div>
                            <div className="font-medium">{user.userName}</div>
                            <div className="text-sm text-gray-500">{user.email}</div>
                        </div>
                    </div>
                </td>
                <td className="py-4 px-4">{amount}</td>
                <td className="py-4 px-4">1/1/2025</td>
                <td className="py-4 px-4 font-medium">USD {totalPrice}</td>
            </tr>
        );
    };

    return (
        <SettingsSection 
            title="Order History" 
            description="Review and track your past orders and invoices"
        >
            <div className="space-y-6">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                    <div className="flex items-center gap-3">
                        <h3 className="text-lg font-semibold text-gray-900">Order Search</h3>
                    </div>
                    
                    <div className="relative">
                        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                        <input
                            type="text"
                            placeholder="Search orders..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent w-full sm:w-64"
                        />
                    </div>
                </div>

                <div className="overflow-x-auto">
                    <table className="w-full">
                        <thead>
                            <tr className="border-b border-gray-200">
                                <th className="text-left py-3 px-4 font-medium text-gray-700">Invoice</th>
                                <th className="text-left py-3 px-4 font-medium text-gray-700">Status</th>
                                <th className="text-left py-3 px-4 font-medium text-gray-700">User</th>
                                <th className="text-left py-3 px-4 font-medium text-gray-700">Amount</th>
                                <th className="text-left py-3 px-4 font-medium text-gray-700">Date</th>
                                <th className="text-left py-3 px-4 font-medium text-gray-700">Total Price</th>
                            </tr>
                        </thead>
                        <tbody>
                            <OrderCard />
                        </tbody>
                    </table>
                </div>
            </div>
        </SettingsSection>
    );
};