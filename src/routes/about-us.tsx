import Header from "../components/Header";
import Footer from "../components/Footer";
import { useState } from "react";
import { Headphones, Mail, MessageCircle , PhoneCall, VideoIcon, SpeechIcon, Map } from "lucide-react";
import { Staffs } from "../types/Users";
import { sampleStaffs } from "../data/user-data";

const ContactForm = () => {

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
    <section className="flex gap-10 justify-center w-3/4 mt-10">
      <div className="flex flex-col w-1/2 gap-8">
        <div className="flex flex-col w-full gap-2">
          <h2 className="text-xl font-semibold">Call Us</h2>
          <p className="text-md font-normal text-gray-600">Call our support team 24/7.</p>
          <div className="flex gap-2 items-center">
            <PhoneCall width={16} height={16} />
            <h4 className="text-lg font-semibold">571283-18-0248</h4>
          </div>
        </div>
        <div className="flex flex-col w-full gap-2">
          <h4 className="text-xl font-semibold">Chat with Us</h4>
          <p className="text-md font-normal text-gray-600">Speak directly with our support specialist,</p>
          <div className="flex flex-col gap-1 items-start">
            <button className="text-lg font-semibold flex gap-2 items-center">
              <MessageCircle width={16} height={16} />
              <p>Start a live chat.</p>
            </button>
            <button className="text-lg font-semibold flex gap-2 items-center">
              <Mail width={16} height={16}/>
              <p>Sent us an email.</p>
            </button>
            <button className="text-lg font-semibold flex gap-2 items-center">
              <SpeechIcon width={16} height={16} />
              <p>Message us on social media.</p>
            </button>
          </div>
        </div>
        <div className="flex flex-col w-full gap-2">
          <h4 className="text-xl font-semibold">Visit us</h4>
          <p className="text-md font-normal text-gray-600">Our store located at Singapore around the block.</p>
          <button className="text-md font-semibold flex gap-2 items-center">
              <Map width={16} height={16} />
              <p>Sindo Building 66 Tannery Lane #01-04a</p>
          </button>
        </div>
      </div>
      <div className="flex flex-col gap-4 w-5/6">
        <div className="flex gap-4 w-full">
          <div className="flex flex-col gap-2 justify-center w-1/2">
            <p className="font-semibold text-lg">First Name</p>
            <input onChange={handleChange} type="text" className="border-2 border-gray-200 rounded-md p-2 text-gray-400" id="firstName" value={userInput.firstName} required />
          </div>
          <div className="flex flex-col justify-center gap-2 w-1/2">
            <p className="font-semibold text-lg">Last Name</p>
            <input onChange={handleChange} type="text" className="border-2 border-gray-200 rounded-md p-2 text-gray-400" id="lastName" value={userInput.lastName} required />
          </div>
        </div>
        <div className="flex flex-col justify-center gap-2 w-full">
          <p className="font-semibold text-lg">Email</p>
          <input onChange={handleChange} type="text" className="border-2 border-gray-200 rounded-md p-2 text-gray-400" id="email" value={userInput.email} required />
        </div>
        <div className="flex flex-col justify-center gap-2 w-full">
          <p className="font-semibold text-lg">Phone Number</p>
          <input onChange={handleChange} type="text" className="border-2 border-gray-200 rounded-md p-2 text-gray-400" id="phoneNumber" value={userInput.phoneNumber} />
        </div>
        <div className="flex flex-col justify-center gap-2 w-full">
          <p className="font-semibold text-lg">Message</p>
          <input onChange={handleChange} type="text" className="border-2 border-gray-200 rounded-md p-2 text-gray-400" id="message" value={userInput.message} required />
        </div>
        <button type="submit" className="flex items-center bg-black text-white font-semibold px-8 py-4 rounded-full justify-center mt-4">Send Message</button>
      </div>
    </section>
  )
}

export default function AboutUs() {

  const Profile = (data : Staffs) => {
      return (
        <div className="flex flex-col gap-2 w-1/6 aspect-square shadow-md bg-gray-100 items-center justify-end p-5" key = {data.userId ? data.userId : ""}>
            <div className="flex flex-col gap-2 bg-white justify-self-center px-4 py-3 w-full">
              <h1 className="text-lg font-bold">{data.name ? data.name : ""}</h1>
              <p className="text-gray-400 font-normal -mt-2">{data.role ? data.role : ""}</p>
            </div>
          </div>
      )
  }

  return (
    <main className="flex flex-col w-full h-screen justify-between gap-8">
      <Header />
      {/* Overview, Please render later thanks */}
      <body className="flex flex-col p-10 gap-10">
        <section className="flex justify-center items-center py-10">
          <div className="flex flex-col gap-8 w-1/2 mx-10 text-center">
            <h1 className="text-5xl font-bold">We are the team dedicate in developments of electronics.</h1>
            <p className="text-lg font-normal text-gray-700 self-center w-2/3">Our staffs are able to consult and provide supports regarding maintenance and building components at reasonable price.</p>
            <div className="flex gap-4 justify-center">
              <button className="flex gap-2 items-center bg-black text-white px-8 py-3 rounded-full font-semibold"><VideoIcon width={24} height={24}/>Book a call.</button>
              <button className="flex gap-2 items-center border-2 border-black px-8 py-3 rounded-full font-semibold"><Headphones width={24} height={24}/>Contact Us.</button>
            </div>
          </div>
        </section>
        <section className="flex flex-col items-center gap-8 mt-10">
          <h2 className="text-3xl font-bold">Key Members</h2>
          <div className="flex flex-cols w-full justify-center gap-8">
            {sampleStaffs.map(Profile)}
          </div>
        </section>
        <section className="flex flex-col w-full items-center mt-10">
          <ContactForm />
        </section>
      </body>
      <Footer />
    </main>
  )
}
