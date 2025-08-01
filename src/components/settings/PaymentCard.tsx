import { useState } from "react";
import { Users } from "../../types/Users";
import { CreditCard, Pencil, Save, X } from "lucide-react";
import Button from "../ui/Button";
import { SettingsSection } from "./SettingsSection";
import CreatableSelect from "react-select/creatable";

const paymentOption : any = [
    { value: 'mastercard', label: 'Mastercard' },
    { value: 'visa', label: 'Visa' },
    { value: 'paypal', label: 'Paypal' },
    { value: 'bank_transfer', label: 'Bank Transfer' },
    { value: 'none', label: 'None' },
  ]

export const PaymentCard = ({ user }: { user: Users }) => {
    const [currentPayment, setCurrentPayment] = useState(paymentOption[4]);
    const [cardInfo, setCardInfo] = useState(user.payment);
    const [isEditing, setIsEditing] = useState(false);

    const handleOption = (option: any) => {
        setCurrentPayment(option);
    };

    const handleForm = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { id, value } = e.target;
        setCardInfo(prev => ({ ...prev, [id]: value }));
    };

    const handleSave = () => {
        setIsEditing(false);
        // TODO: Implement save functionality
    };

    const handleCancel = () => {
        setCardInfo(user.payment);
        setIsEditing(false);
    };

    const PaymentHistory = () => (
        <div className="space-y-4">
            <div className="flex items-center gap-3">
                <CreditCard className="w-5 h-5 text-gray-500" />
                <h3 className="text-lg font-semibold text-gray-900">Payment History</h3>
            </div>
            
            <div className="overflow-x-auto">
                <table className="w-full">
                    <thead>
                        <tr className="border-b border-gray-200">
                            <th className="text-left py-3 px-4 font-medium text-gray-700">Product</th>
                            <th className="text-left py-3 px-4 font-medium text-gray-700">User</th>
                            <th className="text-left py-3 px-4 font-medium text-gray-700">Type</th>
                            <th className="text-left py-3 px-4 font-medium text-gray-700">Date</th>
                            <th className="text-left py-3 px-4 font-medium text-gray-700">Amount</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="border-b border-gray-100 hover:bg-gray-50">
                            <td className="py-3 px-4">
                                <div className="flex items-center gap-3">
                                    <input type="checkbox" className="rounded" />
                                    <span className="font-medium">Product 1</span>
                                </div>
                            </td>
                            <td className="py-3 px-4">
                                <div className="flex items-center gap-3">
                                    <div className="w-8 h-8 bg-gray-200 rounded-full"></div>
                                    <div>
                                        <div className="font-medium">{user.userName}</div>
                                        <div className="text-sm text-gray-500">{user.email}</div>
                                    </div>
                                </div>
                            </td>
                            <td className="py-3 px-4">Type 1</td>
                            <td className="py-3 px-4">
                                {cardInfo.date.getFullYear()}/{cardInfo.date.getMonth() + 1}/{cardInfo.date.getDate()}
                            </td>
                            <td className="py-3 px-4 font-medium">USD 100.00</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );

    const PaymentInfo = () => (
        <div className="space-y-6">
            <div className="flex items-center gap-3">
                <CreditCard className="w-5 h-5 text-gray-500" />
                <h3 className="text-lg font-semibold text-gray-900">Payment Information</h3>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="space-y-4">
                    <div className="space-y-2">
                        <label className="text-sm font-medium text-gray-700">Name on Card</label>
                        <input
                            type="text"
                            id="cardName"
                            value={cardInfo.cardName}
                            onChange={handleForm}
                            disabled={!isEditing}
                            className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:bg-gray-50 disabled:text-gray-500"
                        />
                    </div>

                    <div className="space-y-2">
                        <label className="text-sm font-medium text-gray-700">Card Number</label>
                        <input
                            type="text"
                            id="cardNumber"
                            value={cardInfo.cardNumber}
                            onChange={handleForm}
                            disabled={!isEditing}
                            className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:bg-gray-50 disabled:text-gray-500"
                        />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                            <label className="text-sm font-medium text-gray-700">CVV</label>
                            <input
                                type="text"
                                id="cvv"
                                value={cardInfo.cvv}
                                onChange={handleForm}
                                disabled={!isEditing}
                                className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:bg-gray-50 disabled:text-gray-500"
                            />
                        </div>
                        <div className="space-y-2">
                            <label className="text-sm font-medium text-gray-700">Expiry Date</label>
                            <input
                                type="text"
                                id="expiryDate"
                                value={`${cardInfo.date.getUTCFullYear()}/${cardInfo.date.getMonth() + 1}`}
                                onChange={handleForm}
                                disabled={!isEditing}
                                className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:bg-gray-50 disabled:text-gray-500"
                            />
                        </div>
                    </div>
                </div>

                <div className="space-y-4">
                    <div className="space-y-2">
                        <label className="text-sm font-medium text-gray-700">Billing Address</label>
                        <input
                            type="text"
                            id="billingAddress1"
                            value={cardInfo.billingAddress.address1}
                            onChange={handleForm}
                            disabled={!isEditing}
                            className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:bg-gray-50 disabled:text-gray-500"
                        />
                    </div>

                    <div className="space-y-2">
                        <label className="text-sm font-medium text-gray-700">Address Line 2</label>
                        <input
                            type="text"
                            id="billingAddress2"
                            value={cardInfo.billingAddress.address2}
                            onChange={handleForm}
                            disabled={!isEditing}
                            className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:bg-gray-50 disabled:text-gray-500"
                        />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                            <label className="text-sm font-medium text-gray-700">State/Province</label>
                            <input
                                type="text"
                                id="billingState"
                                value={cardInfo.billingAddress.state}
                                onChange={handleForm}
                                disabled={!isEditing}
                                className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:bg-gray-50 disabled:text-gray-500"
                            />
                        </div>
                        <div className="space-y-2">
                            <label className="text-sm font-medium text-gray-700">Postal Code</label>
                            <input
                                type="text"
                                id="billingPostal"
                                value={cardInfo.billingAddress.postal}
                                onChange={handleForm}
                                disabled={!isEditing}
                                className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:bg-gray-50 disabled:text-gray-500"
                            />
                        </div>
                    </div>

                    <div className="space-y-2">
                        <label className="text-sm font-medium text-gray-700">Country</label>
                        <input
                            type="text"
                            id="billingCountry"
                            value={cardInfo.billingAddress.country}
                            onChange={handleForm}
                            disabled={!isEditing}
                            className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:bg-gray-50 disabled:text-gray-500"
                        />
                    </div>
                </div>
            </div>
        </div>
    );

    return (
        <SettingsSection 
            title="Payment Methods" 
            description="Manage your payment methods and view transaction history"
        >
            <div className="space-y-8">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                    <div className="flex items-center gap-3">
                        <CreditCard className="w-5 h-5 text-gray-500" />
                        <h3 className="text-lg font-semibold text-gray-900">Payment Settings</h3>
                    </div>
                    
                    <div className="flex gap-2">
                        {isEditing ? (
                            <>
                                <Button 
                                    type="primary" 
                                    className="px-4 py-2 text-sm"
                                    onClick={handleSave}
                                >
                                    <Save className="w-4 h-4" />
                                    Save Payment
                                </Button>
                                <Button 
                                    type="secondary" 
                                    className="px-4 py-2 text-sm"
                                    onClick={handleCancel}
                                >
                                    <X className="w-4 h-4" />
                                    Cancel
                                </Button>
                            </>
                        ) : (
                            <Button 
                                type="secondary" 
                                className="px-4 py-2 text-sm"
                                onClick={() => setIsEditing(true)}
                            >
                                <Pencil className="w-4 h-4" />
                                Edit Payment
                            </Button>
                        )}
                    </div>
                </div>

                <div className="space-y-6">
                    <div className="space-y-2">
                        <label className="text-sm font-medium text-gray-700">Preferred Payment Method</label>
                        <CreatableSelect
                            className="basic-single"
                            classNamePrefix="select"
                            value={currentPayment}
                            name="paymentMethod"
                            options={paymentOption}
                            onChange={handleOption}
                            isDisabled={!isEditing}
                            styles={{
                                control: (base) => ({
                                    ...base,
                                    borderColor: '#e5e7eb',
                                    '&:hover': { borderColor: '#3b82f6' },
                                    '&:focus-within': { borderColor: '#3b82f6', boxShadow: '0 0 0 2px rgba(59, 130, 246, 0.1)' }
                                })
                            }}
                        />
                    </div>

                    <PaymentInfo />
                </div>

                <div className="border-t border-gray-200 pt-8">
                    <PaymentHistory />
                </div>
            </div>
        </SettingsSection>
    );
};