import { EyeClosed, EyeIcon, Pencil } from "lucide-react";
import { Users } from "../../types/Users";
import { useState } from "react";
import CreatableSelect from "react-select/creatable";

const paymentOption : any = [
    { value: 'mastercard', label: 'Mastercard' },
    { value: 'visa', label: 'Visa' },
    { value: 'paypal', label: 'Paypal' },
    { value: 'bank_transfer', label: 'Bank Transfer' },
    { value: 'none', label: 'None' },
  ]

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

const PaymentCard = () => {

    const [currentPayment, setCurrentPayment] = useState(paymentOption[4])
    const [cardInfo, setCardInfo] = useState({
        option : currentPayment.value,
        nameCard : "First Name",
        cardNumber : "7067322681023",
        cvv : "297",
        date : (new Date()),
    })

    const handleOption = (e : Event) => {
        setCurrentPayment(e)
    }

    const handleForm = (e : any) => {
        const { id, value } = e.target 
        setCardInfo((userInput : any) => ({...userInput,
          [id] : value
        })
        )
    }

    const PaymentHistory = () => {
        return (
            <div className="flex flex-col w-full gap-4">
                <p className="font-medium text-lg ">Billing History</p>
                <hr />
                <div className="flex flex-col gap-4">
                    <div className="flex justify-between items-center w-full -mb-2 mt-2">
                        <h1 className="font-semibold text-base w-1/6">Product</h1>
                        <h1 className="font-semibold text-base w-1/4">User</h1>
                        <div className="flex w-1/3 items-center justify-evenly">
                            <h3 className="text-base font-medium w-1/3">Type</h3>
                            <h3 className="text-base font-medium w-1/3">Date</h3>
                            <h3 className="text-base font-medium w-1/3">Cost</h3>
                        </div>
                    </div>
                    <hr />
                    <div className="flex justify-between items-center w-full rounded-lg">
                        <div className="flex gap-4 w-1/6">
                        <input type="checkbox" name="" id="" />
                        <h1 className="font-semibold text-base">Product 1</h1>
                        </div>
                        <div className="flex gap-4 items-center w-1/4">
                            <div className="bg-gray-200 rounded-full w-10 aspect-square"></div>
                            <div className="flex flex-col">
                                <h3 className="text-base font-medium">Name</h3>
                                <p className="text-sm text-gray-400">Name</p>
                            </div>
                        </div>
                        <div className="flex w-1/3 justify-evenly">
                            <h3 className="text-base font-medium w-1/3">Type 1</h3>
                            <h3 className="text-base font-medium w-1/3">{cardInfo.date.getFullYear()}/{cardInfo.date.getMonth() + 1}/{cardInfo.date.getDate()}</h3>
                            <h3 className="text-base font-medium w-1/3">USD 100.00</h3>
                        </div>
                    </div>
                    
                </div>
            </div>
        )
    }

    const PaymentInfo = () => {
        return (
            <div className="flex flex-col w-5/12 justify-between gap-4">
                <div className="flex gap-4 w-full">
                    <div className="flex flex-col gap-2 justify-center w-full">
                        <p className="font-semibold text-lg">Name on card</p>
                        <input onChange={handleForm} type="text" className="border-2 border-gray-200 rounded-md p-2 text-gray-400" id="firstName" value={cardInfo.nameCard} required />
                    </div>
                </div>
                <div className="flex gap-4">
                    <div className="flex flex-col justify-center gap-2 w-7/12">
                        <p className="font-semibold text-lg">Card number</p>
                        <input onChange={handleForm} type="text" className="border-2 border-gray-200 rounded-md p-2 text-gray-400" id="email" value={cardInfo.cardNumber} required />
                    </div>
                    <div className="flex flex-col justify-center gap-2 w-1/6">
                    <p className="font-semibold text-lg">CVV</p>
                    <input onChange={handleForm} type="text" className="border-2 border-gray-200 rounded-md p-2 text-gray-400" id="phoneNumber" value={cardInfo.cvv} />
                    </div>
                    <div className="flex flex-col justify-center gap-2 w-1/4">
                    <p className="font-semibold text-lg">Expiry Date</p>
                    <input onChange={handleForm} type="text" className="border-2 border-gray-200 rounded-md p-2 text-gray-400" id="message" value={cardInfo.date.getUTCFullYear() + "/" + (cardInfo.date.getMonth() + 1)} required />
                    </div>
                </div>
                <div className="flex flex-col gap-4">
                    <div className="flex flex-col justify-center gap-2">
                        <p className="font-semibold text-lg">Billing Address</p>
                        <input onChange={handleForm} type="text" className="border-2 border-gray-200 rounded-md p-2 text-gray-400" id="email" value={cardInfo.cardNumber} required />
                    </div>
                    <input onChange={handleForm} type="text" className="border-2 border-gray-200 rounded-md p-2 text-gray-400" id="phoneNumber" value={cardInfo.cvv} />
                    <div className="flex justify-center gap-4">
                        <div className="flex flex-col justify-center gap-2 w-1/2">
                            <p className="font-semibold text-lg">State/Province</p>
                            <input onChange={handleForm} type="text" className="border-2 border-gray-200 rounded-md p-2 text-gray-400" id="message" value={cardInfo.date.getUTCFullYear() + "/" + (cardInfo.date.getMonth() + 1)} required />
                        </div>
                        <div className="flex flex-col justify-center gap-2 w-1/2">
                            <p className="font-semibold text-lg">Postal Code</p>
                            <input onChange={handleForm} type="text" className="border-2 border-gray-200 rounded-md p-2 text-gray-400" id="message" value={cardInfo.date.getUTCFullYear() + "/" + (cardInfo.date.getMonth() + 1)} required />
                        </div>
                    </div>
                    <div className="flex flex-col justify-center gap-2">
                        <p className="font-semibold text-lg">Country</p>
                        <input onChange={handleForm} type="text" className="border-2 border-gray-200 rounded-md p-2 text-gray-400" id="email" value={cardInfo.cardNumber} required />
                    </div>
                </div>
            </div>
        )
    }

    return (
        <article className="border-gray-50 border-2 shadow-sm rounded-lg p-8 flex flex-col gap-6 w-full">
            <div className="flex justify-between items-center">
                <h1 className="font-bold text-2xl">Payment</h1>
                <button className="border-gray-100 border-2 flex items-center gap-2 px-4 py-2 rounded-md">
                    <Pencil width={16} height={16} color="gray" />
                    <p className="font-semibold text-md text-gray-400">Edit</p>
                </button>
            </div>
            <p className="font-semibold text-md text-gray-300 -mt-6">View and update your payments.</p>
            <div className="flex w-full gap-16">
                <div className="flex flex-col w-1/3 gap-2">
                    <p className="font-medium text-lg ">Payment Option</p>
                    <CreatableSelect
                        className="basic-single"
                        classNamePrefix="select"
                        defaultValue={currentPayment}
                        name="color"
                        options={paymentOption}
                        onChange={handleOption}
                        
                    />
                </div>
                <PaymentInfo />
            </div>
            <PaymentHistory />
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

export default function Settings( user : Users ) {

    return (
    <div className="flex flex-col gap-6">
        <ProfileCard {...user} />
        <InfoCard {...user} />
        <AddressCard {...user} />
        <PaymentCard />
    </div>
  )
}
