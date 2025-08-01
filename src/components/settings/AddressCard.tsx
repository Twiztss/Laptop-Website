import { useState } from "react";
import { Address } from "../../types/Payment";
import { SettingsSection } from "./SettingsSection";
import { MapPin, Pencil, Save, X } from "lucide-react";
import Button from "../ui/Button";

export const AddressCard = ({ address }: { address: Address }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [currentAddress, setCurrentAddress] = useState({ ...address });

    const handleSave = () => {
        setIsEditing(false);
        // TODO: Implement save functionality
    };

    const handleCancel = () => {
        setCurrentAddress({ ...address });
        setIsEditing(false);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (isEditing) {
            const { name, value } = e.target;
            setCurrentAddress(prev => ({ ...prev, [name]: value }));
        }
    };

    return (
        <SettingsSection 
            title="Shipping Address" 
            description="Manage your default shipping address"
        >
            <div className="space-y-6">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                    <div className="flex items-center gap-3">
                        <MapPin className="w-5 h-5 text-gray-500" />
                        <h3 className="text-lg font-semibold text-gray-900">Address Details</h3>
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
                                    Save Address
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
                                Edit Address
                            </Button>
                        )}
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                        <label className="text-sm font-medium text-gray-700">Country</label>
                        <input
                            type="text"
                            name="country"
                            value={currentAddress.country}
                            onChange={handleChange}
                            disabled={!isEditing}
                            className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:bg-gray-50 disabled:text-gray-500"
                        />
                    </div>

                    <div className="space-y-2">
                        <label className="text-sm font-medium text-gray-700">Street Address</label>
                        <input
                            type="text"
                            name="address1"
                            value={currentAddress.address1}
                            onChange={handleChange}
                            disabled={!isEditing}
                            className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:bg-gray-50 disabled:text-gray-500"
                        />
                    </div>

                    <div className="space-y-2">
                        <label className="text-sm font-medium text-gray-700">City/State</label>
                        <input
                            type="text"
                            name="state"
                            value={currentAddress.state}
                            onChange={handleChange}
                            disabled={!isEditing}
                            className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:bg-gray-50 disabled:text-gray-500"
                        />
                    </div>

                    <div className="space-y-2">
                        <label className="text-sm font-medium text-gray-700">Postal Code</label>
                        <input
                            type="text"
                            name="postal"
                            value={currentAddress.postal}
                            onChange={handleChange}
                            disabled={!isEditing}
                            className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:bg-gray-50 disabled:text-gray-500"
                        />
                    </div>
                </div>
            </div>
        </SettingsSection>
    );
};