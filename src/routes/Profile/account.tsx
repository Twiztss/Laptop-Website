import { EyeClosed, EyeIcon, Pencil } from "lucide-react";
import { Users } from "../../types/Users";
import { useState } from "react";

const ProfileCard = (user : Users) => {
    return (
        <article className="border-gray-50 border-2 shadow-sm rounded-lg p-8 flex gap-8 w-full">
            <div className="bg-gray-100 w-1/12 aspect-square"></div>
            <div className="flex flex-col gap-1 w-11/12">
                <div className="flex items-center justify-between">
                    <h1 className="font-bold text-2xl">{user.userName}</h1>
                    <button className="border-gray-100 border-2 flex items-center gap-2 px-4 py-2 rounded-md">
                        <Pencil width={16} height={16} color="gray" />
                        <p className="font-semibold text-md text-gray-400">Edit</p>
                    </button>
                </div>
                <p className="font-medium text-md text-gray-400 -my-2">Incididunt id sint veniam magna culpa minim velit nisi non occaecat.</p>
                <p className="font-medium text-md text-gray-300 my-1">United States of America</p>
            </div>
        </article>
    )
}

const AddressCard = (user : Users) => {
    return (
        <article className="border-gray-50 border-2 shadow-sm rounded-lg p-8 flex flex-col gap-6 w-full">
            <div className="flex justify-between items-center">
                <h1 className="font-bold text-2xl">Address</h1>
                <button className="border-gray-100 border-2 flex items-center gap-2 px-4 py-2 rounded-md">
                    <Pencil width={16} height={16} color="gray" />
                    <p className="font-semibold text-md text-gray-400">Edit</p>
                </button>
            </div>
            <div className="flex w-1/2 justify-between">
                <div className="flex flex-col gap-2 w-1/2">
                    <p className="font-medium text-lg text-gray-300">Country</p>
                    <h3 className="text-lg font-semibold text-gray-400">United States of America</h3>
                </div>
                <div className="flex flex-col gap-2 w-1/2">
                    <p className="font-medium text-lg text-gray-300">City/State</p>
                    <h3 className="text-lg font-semibold text-gray-400">New Hampshire</h3>
                </div>
            </div>
            <div className="flex w-1/2 justify-between">
                <div className="flex flex-col gap-2 w-1/2">
                    <p className="font-medium text-lg text-gray-300">City/State 2</p>
                    <h3 className="text-lg font-semibold text-gray-400">{user.email}</h3>
                </div>
                <div className="flex flex-col gap-2 w-1/2">
                    <p className="font-medium text-lg text-gray-300">Postal Code</p>
                    <h3 className="text-lg font-semibold text-gray-400">AS564178969</h3>
                </div>
            </div>
        </article>
    )
}

const InfoCard = (user : Users) => {

    const [isDisplayed, setIsDisplayed] = useState(false)

    return (
        <article className="border-gray-50 border-2 shadow-sm rounded-lg p-8 flex flex-col gap-6 w-full">
            <div className="flex justify-between items-center">
                <h1 className="font-bold text-2xl">Personal Information</h1>
                <button className="border-gray-100 border-2 flex items-center gap-2 px-4 py-2 rounded-md">
                    <Pencil width={16} height={16} color="gray" />
                    <p className="font-semibold text-md text-gray-400">Edit</p>
                </button>
            </div>
            <div className="flex w-1/2 justify-between">
                <div className="flex flex-col gap-2 w-1/2">
                    <p className="font-medium text-lg text-gray-300">Username</p>
                    <h3 className="text-lg font-semibold text-gray-400">{user.userName}</h3>
                </div>
                <div className="flex flex-col gap-2 w-1/2">
                    <p className="font-medium text-lg text-gray-300">User ID</p>
                    <div className="flex items-center gap-6">
                        <h3 className="text-lg font-semibold text-gray-400">{isDisplayed ? user.userId : "*****"}</h3>
                        {isDisplayed ? <EyeIcon width={16} height={16} onClick={() => setIsDisplayed(!isDisplayed)}/> : <EyeClosed width={16} height={16} onClick={() => setIsDisplayed(!isDisplayed)} />}
                    </div>
                </div>
            </div>
            <div className="flex w-1/2 justify-between">
                <div className="flex flex-col gap-2 w-1/2">
                    <p className="font-medium text-lg text-gray-300">Email Address</p>
                    <h3 className="text-lg font-semibold text-gray-400">{user.email}</h3>
                </div>
                <div className="flex flex-col gap-2 w-1/2">
                    <p className="font-medium text-lg text-gray-300">Phone Number</p>
                    <h3 className="text-lg font-semibold text-gray-400">(603) 588-7174</h3>
                </div>
            </div>
            <div className="flex w-1/2 justify-between">
                <div className="flex flex-col gap-2 w-full">
                    <p className="font-medium text-lg text-gray-300">Description</p>
                    <h3 className="text-lg font-semibold text-gray-400">Ad ex est officia officia fugiat minim anim do ex duis velit aute.</h3>
                </div>
            </div>
        </article>
    )
}

export default function Account( user : Users ) {

    return (
    <div className="flex flex-col gap-6">
        <ProfileCard {...user} />
        <InfoCard {...user} />
        <AddressCard {...user} />
    </div>
  )
}
