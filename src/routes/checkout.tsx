import Footer from "../components/shared/Footer"
import Header from "../components/shared/Header"
import { calcProp } from "./cart"
import sampleProduct from "../data/product-data"
import { useState } from "react"
import Button from "../components/ui/Button"
import { Helmet } from "react-helmet-async"

const StepData = [
    { id : 1, description : "Contact Information" },
    { id : 2, description : "Billing Information" },
    { id : 3, description : "Payment Information" },
]

const Step = ({ step, id }  : any) => {
    return (
        <div className={`${step + 1 >= id ? "bg-black" : "bg-gray-600"} flex items-center px-4 py-2 rounded-full text-white font-bold`}>
            <p>{id}</p>
        </div>
    )
}

const CheckoutStep = ({ step } : any) => {

    return (
        <section className="flex gap-4 w-full py-5 justify-center">
            <div className="flex flex-col w-2/3 gap-4">
                <h2 className="text-lg font-semibold">Step {StepData[step].id} : {StepData[step].description}</h2>
                <div className="flex items-center justify-between gap-4">
                    {StepData.map(item => {
                        return (
                            <Step key={item.id} id={item.id} step={step} />
                        )
                    })}
                </div>
            </div>
        </section>
    )
}

const PaymentForm = () => {

    const [userInput, setUserInput] = useState({
        firstName : "First Name",
        lastName : "Last Name",
        email : "Email",
        phoneNumber : "+1(555) 000-0000",
        message : "Leave us a message",
      })
    
      const handleChange = (e : any) => {
        const { id, value } = e.target 
        setUserInput((userInput : any) => ({...userInput,
          [id] : value
        })
        )
      }

    return (
        <section className="flex flex-col gap-4 w-5/6">
            <div className="flex gap-4 w-full">
                <div className="flex flex-col justify-center gap-1">
                    <p className="font-semibold text-lg">First Name</p>
                    <input onChange={handleChange} type="text" className="border-2 border-gray-200 rounded-md p-2 text-gray-400 w-full" id="firstName" value={userInput.firstName} required />
                </div>
                <div className="flex flex-col justify-center gap-1">
                    <p className="font-semibold text-lg">Last Name</p>
                    <input onChange={handleChange} type="text" className="border-2 border-gray-200 rounded-md p-2 text-gray-400 w-full" id="lastName" value={userInput.lastName} required />
                </div>
            </div>
            <div className="flex flex-col justify-center gap-1 w-full">
                <p className="font-semibold text-lg">Email</p>
                <input onChange={handleChange} type="text" className="border-2 border-gray-200 rounded-md p-2 text-gray-400" id="email" value={userInput.email} required />
            </div>
            <div className="flex flex-col justify-center gap-1">
                <p className="font-semibold text-lg">Phone Number</p>
                <input onChange={handleChange} type="text" className="border-2 border-gray-200 rounded-md p-2 text-gray-400" id="phoneNumber" value={userInput.phoneNumber} />
            </div>
            <div className="flex flex-col justify-center w-full gap-1">
                <p className="font-semibold text-lg">Message</p>
                <input onChange={handleChange} type="text" className="border-2 border-gray-200 rounded-md p-2 text-gray-400" id="message" value={userInput.message} required />
            </div>
      </section>
    )
}

const Total = ({ item } : calcProp) => {

    const subTotal : number = Math.round(item.reduce((prev, cur) => prev + cur,0))

    return (
        <section className="flex flex-col gap-6 w-1/6 sticky">
            <h1 className="text-4xl font-bold">Total</h1>
            <div className="flex gap-6">
                <div className="flex flex-col gap-2 mt-4 w-full">
                    <div className="flex justify-between">
                        <h2 className="text-lg font-normal">Sub-Total</h2>
                        <h2 className="text-lg font-normal">$ {subTotal}</h2>
                    </div>
                    <div className="flex justify-between">
                        <h2 className="text-lg font-normal">Additional Fees</h2>
                        <h2 className="text-lg font-normal">None</h2>
                    </div>
                    <hr className="w-full my-4"/>
                    <div className="flex justify-between">
                        <h2 className="text-lg font-semibold">Total</h2>
                        <h2 className="text-lg font-semibold">$ {subTotal}</h2>
                    </div>
                    <hr className="w-full my-4"/>
                </div>
            </div>
            <div className="flex flex-col">
                <h2 className="text-xl font-semibold">Terms & Condition</h2>
                <div className="flex gap-4">
                    <input type="checkbox" name="" id="" />
                    <p className="text-sm">I agree to the Terms & Condition when purchasing this order.</p>
                </div>
            </div>
        </section>
  )
}

export default function Checkout () {

    const [step, setStep] = useState(0)

    const handleStep = (e : any) => {
        const { name } = e.target
        if ( name === "next") {
            if (step < StepData.length - 1) {
                setStep(prev => prev + 1)
            }
        } else if ( name === "back") {
            if (step > 0) {
                setStep(prev => prev - 1)
            }
        }
    }

    const cartItem = [...sampleProduct.slice(1,3)]

    return (
        <>
        <Helmet>
            <title>Laptop Website | Checkout</title>
            <meta name="description" content="Checkout" />
        </Helmet>
        <main className="flex flex-col w-full h-screen justify-between">
            <Header />
            <CheckoutStep step={step} />
            <main className="flex m-10 h-5/6 gap-10 justify-center">
                <section className="flex flex-col gap-8 w-1/3">
                    <h1 className="text-4xl font-bold">{StepData[step].description}</h1>
                    <div className="flex flex-col gap-6 overflow-y-scroll">
                        <PaymentForm />
                        <div className="flex gap-4">
                            <Button name="back" onClick={handleStep} className="w-1/6" type="secondary">Back</Button>
                            <Button name="next" onClick={handleStep} className="w-1/6" type="primary">Next</Button>
                        </div>
                    </div>
                </section>
                <Total item={cartItem.map(item => item.amount * item.price)}/>
            </main>
            <Footer />
        </main>
        </>
    )
}
