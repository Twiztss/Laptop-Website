import { Globe } from "lucide-react"

type Query = {
    title : string,
    option : string[],
}

const footerOption : Query[] = [
    {
        title : "About Us",
        option : [
            "Company Overview",
            "Careers",
            "Contact Us",
        ]
    },
    {
        title : "Customer Service",
        option : [
            "Request Service",
            "Shipping and Delivery",
            "Order Tracking",
            "Returns",
            "Help Center",
        ]
    },
    {
        title : "Terms & Condition",
        option : [
            "Privacy Policy",
            "Return Policy",
            "Newsletter Agreement",
            "Standards & Regulations",
        ]
    },
    {
        title : "Follow Us",
        option : [
            "Facebook",
            "Instagram",
            "X (formerly Twitter)",
            "Youtube",
        ]
    },
]

export default function FooterFull() {

    const date = new Date()

    return (
        <footer className="flex flex-col bg-white p-16 gap-10 w-full sticky">
            <section className="flex justify-between">
                {footerOption.map(item => {
                    return <FooterOption {...item} />
                })}
                <div className="flex gap-4 items-center justify-end self-start w-1/5">
                    <Globe color="gray"/>
                    <p className="text-gray-400 text-md font-bold cursor-pointer">English</p>
                </div>
            </section>
            <section className="flex justify-between">
                <h1 className="text-base font-semibold">Laptop Website</h1>
                <div className="flex gap-5 text-sm text-gray-400">
                    <p>@{date.getFullYear()}</p>
                    <p>All rights reserved</p>
                </div>
            </section>
        </footer>
  )
}

const FooterOption = (option : Query) => {
    return (
        <article className="flex flex-col gap-6">
            <h3 className="font-bold text-md">{option.title}</h3>
            <div className="flex flex-col gap-3">
                {option.option.map(item => {
                    return <p className="text-gray-400 font-semibold text-sm cursor-pointer">{item}</p>
                })}
            </div>
        </article>
    )
}
