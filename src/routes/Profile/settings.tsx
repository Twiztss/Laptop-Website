import { Banknote, Check, CircleAlert, DiamondIcon, EyeClosed, EyeIcon, Gift, IdCard, Pencil } from "lucide-react";
import { Users } from "../../types/Users";
import { useState } from "react";
import CreatableSelect from "react-select/creatable";
import { Link } from "react-router-dom";
import { sampleInvoice } from "../../data/user-data";
import { Invoice } from "../../types/Payment";

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

const AddressCard = ( user : Users ) => {
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
                    <p className="font-medium text-lg">Country</p>
                    <h3 className="text-lg font-semibold text-gray-400">{user.payment.billingAddress.country}</h3>
                </div>
                <div className="flex flex-col gap-2 w-1/2">
                    <p className="font-medium text-lg">City/State</p>
                    <h3 className="text-lg font-semibold text-gray-400">{user.payment.billingAddress.state}</h3>
                </div>
            </div>
            <div className="flex w-1/2 justify-between">
                <div className="flex flex-col gap-2 w-1/2">
                    <p className="font-medium text-lg">City/State 2</p>
                    <h3 className="text-lg font-semibold text-gray-400">{user.payment.billingAddress.state}</h3>
                </div>
                <div className="flex flex-col gap-2 w-1/2">
                    <p className="font-medium text-lg">Postal Code</p>
                    <h3 className="text-lg font-semibold text-gray-400">{user.payment.billingAddress.postal}</h3>
                </div>
            </div>
        </article>
    )
}

const PaymentCard = (user : Users ) => {

    const [currentPayment, setCurrentPayment] = useState(paymentOption[4])
    const [cardInfo, setCardInfo] = useState(user.payment)

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
                        <input onChange={handleForm} type="text" className="border-2 border-gray-200 rounded-md p-2 text-gray-400" id="firstName" value={cardInfo.cardName} required />
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
                        <input onChange={handleForm} type="text" className="border-2 border-gray-200 rounded-md p-2 text-gray-400" id="email" value={cardInfo.billingAddress.address1} required />
                    </div>
                    <input onChange={handleForm} type="text" className="border-2 border-gray-200 rounded-md p-2 text-gray-400" id="phoneNumber" value={cardInfo.billingAddress.address2} />
                    <div className="flex justify-center gap-4">
                        <div className="flex flex-col justify-center gap-2 w-1/2">
                            <p className="font-semibold text-lg">State/Province</p>
                            <input onChange={handleForm} type="text" className="border-2 border-gray-200 rounded-md p-2 text-gray-400" id="message" value={cardInfo.billingAddress.state} required />
                        </div>
                        <div className="flex flex-col justify-center gap-2 w-1/2">
                            <p className="font-semibold text-lg">Postal Code</p>
                            <input onChange={handleForm} type="text" className="border-2 border-gray-200 rounded-md p-2 text-gray-400" id="message" value={cardInfo.billingAddress.postal} required />
                        </div>
                    </div>
                    <div className="flex flex-col justify-center gap-2">
                        <p className="font-semibold text-lg">Country</p>
                        <input onChange={handleForm} type="text" className="border-2 border-gray-200 rounded-md p-2 text-gray-400" id="email" value={cardInfo.billingAddress.country} required />
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
                    <p className="font-medium text-lg">Username</p>
                    <h3 className="text-lg font-semibold text-gray-400">{user.userName}</h3>
                </div>
                <div className="flex flex-col gap-2 w-1/2">
                    <p className="font-medium text-lg">User ID</p>
                    <div className="flex items-center gap-6">
                        <h3 className="text-lg font-semibold text-gray-400">{isDisplayed ? user.userId : "*****"}</h3>
                        {isDisplayed ? <EyeIcon width={16} height={16} onClick={() => setIsDisplayed(!isDisplayed)}/> : <EyeClosed width={16} height={16} onClick={() => setIsDisplayed(!isDisplayed)} />}
                    </div>
                </div>
            </div>
            <div className="flex w-1/2 justify-between">
                <div className="flex flex-col gap-2 w-1/2">
                    <p className="font-medium text-lg">Email Address</p>
                    <h3 className="text-lg font-semibold text-gray-400">{user.email}</h3>
                </div>
                <div className="flex flex-col gap-2 w-1/2">
                    <p className="font-medium text-lg">Phone Number</p>
                    <h3 className="text-lg font-semibold text-gray-400">(603) 588-7174</h3>
                </div>
            </div>
            <div className="flex w-1/2 justify-between">
                <div className="flex flex-col gap-2 w-full">
                    <p className="font-medium text-lg">Description</p>
                    <h3 className="text-lg font-semibold text-gray-400">Ad ex est officia officia fugiat minim anim do ex duis velit aute.</h3>
                </div>
            </div>
        </article>
    )
}

const SubscriptionCard = ( user : Users ) => {

    const date = new Date()

    return (
        <article className="border-gray-50 border-2 shadow-sm rounded-lg p-8 flex flex-col gap-6 w-full">
            <div className="flex justify-between items-center">
                <h1 className="font-bold text-2xl">Subscriptions</h1>
            </div>
            <div className="flex w-1/2 justify-between">
                <div className="flex flex-col gap-2 w-1/2">
                    <p className="font-semibold text-lg">Current Tier</p>
                    <div className="flex gap-2 items-center">
                        <DiamondIcon width={24} height={24} color={user.memberTier.color} /> 
                        <h3 className="text-2xl font-bold" color={user.memberTier.color}>{user.memberTier.title }</h3>
                    </div>
                </div>
                <div className="flex flex-col gap-2 w-1/2">
                    <p className="font-medium text-lg">Next Payment</p>
                    <h3 className="text-lg font-semibold text-gray-400">{(date.getMonth()) + "/" + (date.getDay()) + "/" + date.getFullYear()}</h3>
                    <div className="flex items-center gap-2">
                        <IdCard />
                        <h4 className="text-sm font-semibold">4284-28921-482</h4>
                    </div>
                </div>
            </div>
            <div className="flex w-1/2 gap-2 justify-between">
                <div className="flex flex-col gap-2 w-1/3 p-4 bg-blue-100 rounded-lg">
                    <h2 className="font-semibold text-lg">Plan benefits</h2>
                    <ul className="list-disc px-6 font-semibold flex flex-col gap-1">
                        <li className="">Free Delivery Cost</li>
                        <li className="">Pre-order Discount</li>
                        <li className="">Tiered Discount</li>
                        <li className="">Mix-and-Match Bundle</li>
                    </ul>
                </div>
                <div className="flex flex-col gap-2 w-1/2">
                    <h2 className="font-semibold text-lg">Manage Subscription</h2>
                    <div className="font-semibold flex flex-col gap-2">
                        <div className="flex gap-2 items-center cursor-pointer">
                            <Banknote color="gray"/>
                            <Link className="font-medium text-base text-gray-400" to={"/subscription"}>Change subscription plan</Link>
                        </div>
                        <div className="flex gap-2 items-center cursor-pointer">
                            <Gift color="gray"/>
                            <p className="font-medium text-base text-gray-400">Redeem gift card codes</p>
                        </div>
                        <div className="flex gap-2 items-center cursor-pointer">
                            <CircleAlert color="gray"/>
                            <p className="font-medium text-base text-gray-400">Cancel a subscription</p>
                        </div>
                    </div>
                </div>
            </div>
        </article>
    )
}

const OrderInfo = (user : Users, invoice : Invoice) => {

    const Ordercard = ( user : Users ) => {

        const { id, status, amount, totalPrice} = sampleInvoice[2]

        return (
            <div className="flex justify-between items-center w-full rounded-lg">
                <div className="flex gap-4 w-1/6">
                    <input type="checkbox" name="" id="" />
                    <Link className="font-semibold text-lg" to={""}>Invoice #{id}</Link>
                </div>
                <div className="flex gap-2 w-1/6">
                    <div className="p-2 bg-green-100 flex justify-center items-center gap-2 w-7/12 rounded-full">
                        <Check color={status.color} width={16} height={16}/>
                        <h1 className="font-semibold text-base text-green-600">{status.title}</h1>
                    </div>
                </div>
                <div className="flex gap-4 items-center w-1/4">
                    <div className="bg-gray-200 rounded-full w-10 aspect-square"></div>
                    <div className="flex flex-col">
                        <h3 className="text-base font-medium">{user.userName}</h3>
                        <p className="text-sm text-gray-400">{user.email}</p>
                    </div>
                </div>
                <div className="flex w-1/3 justify-evenly">
                    <h3 className="text-base font-medium w-1/3">{amount}</h3>
                    <h3 className="text-base font-medium w-1/3">{"1/1/2025"}</h3>
                    <h3 className="text-base font-medium w-1/3">USD {totalPrice}</h3>
                </div>
            </div>
        )
    }

    return (
        <article className="border-gray-50 border-2 shadow-sm rounded-lg p-8 flex flex-col gap-6 w-full">
            <div className="flex justify-between items-center">
                <h1 className="font-bold text-2xl">Order</h1>
            </div>
            <div className="flex flex-col w-full gap-6">
                <p className="font-medium text-lg ">Billing History</p>
                <p className="text-base text-gray-400 -mt-6">Review and track your order here.</p>
                <input type="text" value={"Search"} className="text-gray-400 rounded-lg px-4 py-2 border-2 border-gray-100 w-1/3" />
                <div className="flex flex-col gap-4">
                    <div className="flex justify-between items-center w-full -mb-2 mt-2">
                        <h1 className="font-semibold text-base w-1/6">Invoice</h1>
                        <h1 className="font-semibold text-base w-1/6">Status</h1>
                        <h1 className="font-semibold text-base w-1/4">User</h1>
                        <div className="flex w-1/3 items-center justify-evenly">
                            <h3 className="text-base font-medium w-1/3">Amount</h3>
                            <h3 className="text-base font-medium w-1/3">Purchased</h3>
                            <h3 className="text-base font-medium w-1/3">Total</h3>
                        </div>
                    </div>
                    <hr />
                    <Ordercard {...user} {...invoice} />
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
        <PaymentCard {...user} />
        <SubscriptionCard {...user} />
        <OrderInfo {...user} />
    </div>
  )
}
