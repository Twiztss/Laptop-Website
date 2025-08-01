import { Users } from "../../types/Users";
import { SettingsSection } from "./SettingsSection";
import { MapPin, Pencil, Save, User, X } from "lucide-react";
import Button from "../ui/Button";
import { useState } from "react";

export const ProfileCard = ({ user }: { user: Users }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [profileData, setProfileData] = useState({
        userName: user.userName,
        description: user.description || "No description provided",
        location: "United States of America"
    });

    const handleSave = () => {
        setIsEditing(false);
        // TODO: Implement save functionality
    };

    const handleCancel = () => {
        setProfileData({
            userName: user.userName,
            description: user.description || "No description provided",
            location: "United States of America"
        });
        setIsEditing(false);
    };

    return (
        <SettingsSection 
            title="Profile Information" 
            description="Manage your public profile information"
        >
            <div className="flex flex-col lg:flex-row gap-6 lg:gap-8">
                <div className="flex-shrink-0">
                    <div className="w-24 h-24 md:w-32 md:h-32 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                        <User className="w-12 h-12 md:w-16 md:h-16 text-white" />
                    </div>
                </div>
                
                <div className="flex-1 space-y-4">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                        <div className="flex-1">
                            {isEditing ? (
                                <input
                                    type="text"
                                    value={profileData.userName}
                                    onChange={(e) => setProfileData(prev => ({ ...prev, userName: e.target.value }))}
                                    className="text-2xl font-bold text-gray-900 bg-gray-50 border border-gray-200 rounded-lg px-3 py-2 w-full focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                />
                            ) : (
                                <h1 className="text-2xl font-bold text-gray-900">{profileData.userName}</h1>
                            )}
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
                                        Save
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
                                    Edit Profile
                                </Button>
                            )}
                        </div>
                    </div>
                    
                    <div>
                        {isEditing ? (
                            <textarea
                                value={profileData.description}
                                onChange={(e) => setProfileData(prev => ({ ...prev, description: e.target.value }))}
                                className="w-full bg-gray-50 border border-gray-200 rounded-lg px-3 py-2 text-gray-600 focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                                rows={3}
                            />
                        ) : (
                            <p className="text-gray-600">{profileData.description}</p>
                        )}
                    </div>
                    
                    <div className="flex items-center gap-2 text-gray-500">
                        <MapPin className="w-4 h-4" />
                        <span>{profileData.location}</span>
                    </div>
                </div>
            </div>
        </SettingsSection>
    );
};