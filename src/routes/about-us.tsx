import Header from "../components/shared/Header";
import { Headphones, Mail, MessageCircle , PhoneCall, VideoIcon, SpeechIcon, Map } from "lucide-react";
import { Staffs } from "../types/Users";
import { sampleStaffs } from "../data/user-data";
import Button from "../components/ui/Button";
import FooterFull from "../components/shared/FooterFull";
import Form from "../components/ui/Forms";

const ContactForm = () => {

  return (
    <section className="flex md:flex-row flex-col gap-10 justify-center md:w-3/4 w-full mt-10">
      <div className="flex flex-col md:justify-start justify-center md:w-1/2 w-full gap-8">
        <div className="flex flex-col w-full gap-2">
          <h4 className="text-lg font-semibold">Call Us</h4>
          <p className="text-md font-normal text-gray-600">Call our support team 24/7.</p>
          <div className="flex gap-2 items-center">
            <PhoneCall width={16} height={16} color="darkgray" />
            <h5 className="text-base font-semibold text-gray-700">571283-18-0248</h5>
          </div>
        </div>
        <div className="flex flex-col w-full gap-2">
          <h4 className="text-lg font-semibold">Chat with Us</h4>
          <p className="text-md font-normal text-gray-600">Speak directly with our support specialist,</p>
          <div className="flex flex-col gap-1 items-start">
            <button className="text-lg font-semibold flex gap-2 items-center">
              <MessageCircle width={16} height={16} color="darkgray" />
              <h5 className="text-base font-semibold text-gray-700">Start a live chat.</h5>
            </button>
            <button className="text-lg font-semibold flex gap-2 items-center">
              <Mail width={16} height={16} color="darkgray" />
              <h5 className="text-base font-semibold text-gray-700">Sent us an email.</h5>
            </button>
            <button className="text-lg font-semibold flex gap-2 items-center">
              <SpeechIcon width={16} height={16} color="darkgray" />
              <h5 className="text-base font-semibold text-gray-700">Message us on social media.</h5>
            </button>
          </div>
        </div>
        <div className="flex flex-col w-full gap-2">
          <h4 className="text-lg font-semibold">Visit us</h4>
          <p className="text-md font-normal text-gray-600">Our store located at Singapore around the block.</p>
          <button className="text-md font-semibold flex gap-2 items-center">
              <Map width={16} height={16} color="darkgray" />
              <h5 className="text-base font-semibold text-gray-700">Sindo Building 66 Tannery Lane #01-04a</h5>
          </button>
        </div>
      </div>
      <Form />
    </section>
  )
}

export default function AboutUs() {

  const Profile = (data: Staffs) => {
    return (
      <div
        className="group relative overflow-hidden rounded-lg bg-white shadow-md transition-all hover:shadow-lg sm:w-full md:w-full"
        key={data.userId ?? ""}
      >
        {/* Background gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent opacity-0 transition-opacity group-hover:opacity-100"></div>
  
        {/* Profile content */}
        <div className="aspect-square w-full bg-gray-100">
          {/* If there's an image, display it */}
          {data.imageUrl ? (
            <img
              src={data.imageUrl || "/placeholder.svg"}
              alt={data.name ?? "Staff member"}
              className="h-full w-full object-cover"
            />
          ) : (
            <div className="bg-gray-100 aspect-square w-full"></div>
          ) }
        </div>
  
        {/* Info section */}
        <div className="absolute bottom-0 w-full transform transition-transform duration-300 group-hover:translate-y-0">
          <div className="bg-white p-4">
            <h3 className="text-lg font-bold text-gray-900 line-clamp-1">{data.name ?? ""}</h3>
            <p className="text-sm text-gray-500">{data.role ?? ""}</p>
          </div>
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
          <div className="flex flex-col gap-8 md:w-1/2 w-full mx-10 text-center">
            <h1 className="md:text-5xl text-4xl font-bold">We are the team dedicate in developments of electronics.</h1>
            <p className="text-lg font-normal text-gray-700 self-center w-2/3">Our staffs are able to consult and provide supports regarding maintenance and building components at reasonable price.</p>
            <div className="flex gap-4 justify-center">
              <Button type="primary" className="px-8 py-3"><VideoIcon width={24} height={24}/>Book a call.</Button>
              <Button type="secondary" className="px-8 py-3"><Headphones width={24} height={24}/>Contact Us.</Button>
            </div>
          </div>
        </section>
        <section className="container mx-auto px-4 py-12">
          <h1 className="mb-12 text-center text-3xl font-bold">Our Member</h1>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {sampleStaffs.map((staff) => (
              <Profile key={staff.userId} {...staff} />
            ))}
          </div>
        </section>
        <section className="flex flex-col w-full items-center">
          <ContactForm />
        </section>
      </body>
      <FooterFull />
    </main>
  )
}
