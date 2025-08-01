import { useState } from "react";
import { Users } from "../../types/Users";
import { SettingsSection } from "./SettingsSection";
import { EyeClosed, EyeIcon, Mail, Pencil, Phone, Save, User, X } from "lucide-react";
import Button from "../ui/Button";

export const PersonInfoCard = ({ user }: { user: Users }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);
    const [userInfo, setUserInfo] = useState({
        userName: user.userName,
        userId: user.userId,
        email: user.email,
        phoneNumber: user.phoneNumber,
        description: user.description || ""
    });

    const handleSave = () => {
        setIsEditing(false);
        // TODO: Implement save functionality
    };

    const handleCancel = () => {
        setUserInfo({
            userName: user.userName,
            userId: user.userId,
            email: user.email,
            phoneNumber: user.phoneNumber,
            description: user.description || ""
        });
        setIsEditing(false);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        if (isEditing) {
            const { name, value } = e.target;
            setUserInfo(prev => ({ ...prev, [name]: value }));
        }
    };

    return (
        <SettingsSection 
            title="Personal Information" 
            description="Update your personal details and contact information"
        >
            <div className="space-y-6">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                    <div className="flex items-center gap-3">
                        <User className="w-5 h-5 text-gray-500" />
                        <h3 className="text-lg font-semibold text-gray-900">Account Details</h3>
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
                                    Save Changes
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
                                Edit Information
                            </Button>
                        )}
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                        <label className="text-sm font-medium text-gray-700">Username</label>
                        <input
                            type="text"
                            name="userName"
                            value={userInfo.userName}
                            onChange={handleChange}
                            disabled={!isEditing}
                            className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:bg-gray-50 disabled:text-gray-500"
                        />
                    </div>

                    <div className="space-y-2">
                        <label className="text-sm font-medium text-gray-700">User ID</label>
                        <div className="relative">
                            <input
                                type={isPasswordVisible ? "text" : "password"}
                                name="userId"
                                value={isPasswordVisible ? userInfo.userId : "••••••••"}
                                onChange={handleChange}
                                disabled={!isEditing}
                                className="w-full px-3 py-2 pr-10 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:bg-gray-50 disabled:text-gray-500"
                            />
                            <button
                                type="button"
                                onClick={() => setIsPasswordVisible(!isPasswordVisible)}
                                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                            >
                                {isPasswordVisible ? <EyeIcon className="w-4 h-4" /> : <EyeClosed className="w-4 h-4" />}
                            </button>
                        </div>
                    </div>

                    <div className="space-y-2">
                        <label className="text-sm font-medium text-gray-700">Email Address</label>
                        <div className="relative">
                            <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                            <input
                                type="email"
                                name="email"
                                value={userInfo.email}
                                onChange={handleChange}
                                disabled={!isEditing}
                                className="w-full pl-10 pr-3 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:bg-gray-50 disabled:text-gray-500"
                            />
                        </div>
                    </div>

                    <div className="space-y-2">
                        <label className="text-sm font-medium text-gray-700">Phone Number</label>
                        <div className="relative">
                            <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                            <input
                                type="tel"
                                name="phoneNumber"
                                value={userInfo.phoneNumber}
                                onChange={handleChange}
                                disabled={!isEditing}
                                className="w-full pl-10 pr-3 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:bg-gray-50 disabled:text-gray-500"
                            />
                        </div>
                    </div>
                </div>

                <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">Bio</label>
                    <textarea
                        name="description"
                        value={userInfo.description}
                        onChange={handleChange}
                        disabled={!isEditing}
                        rows={3}
                        className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:bg-gray-50 disabled:text-gray-500 resize-none"
                        placeholder="Tell us about yourself..."
                    />
                </div>
            </div>
        </SettingsSection>
    );
};