import { CrownIcon } from "lucide-react";
import Footer from "../components/shared/Footer";
import Header from "../components/shared/Header";
import { MemberTier } from "../types/Users";
import { sampleTier } from "../data/user-data";

export default function Subscription() {

    const SubscriptionCard = (subscription : MemberTier) => {
        return (
            <div key={subscription.title} className="shadow-lg flex flex-col h-full justify-betwen items-center gap-6 w-1/4 p-8 rounded-lg hover:scale-105 transition-all duration-300">
                {subscription.title == "Regular" ? <div className="bg-gray-900 text-white font-semibold text-md px-12 py-1 rounded-t-lg absolute -mt-16 flex justify-center hover:scale-105 transition-all duration-300">Current</div> : null}
                <CrownIcon width={32} height={32} color={subscription.color}/>
                <h2 className="text-3xl font-bold">{subscription.title}</h2>
                <p className="text-gray-400 font-base -mt-4">{subscription.benefits.length} features</p>
                <div className="flex flex-col items-center">
                    <h1 className="text-4xl font-bold">{subscription.price}</h1>
                    <p className="text-base text-gray-400 font-semibold -mt-1">/ month</p>
                </div>
                <p className="text-center text-base text-gray-400 font-base">{subscription.description}</p>
                <button className={`bg-gray-900 px-12 py-3 rounded-full text-white font-semibold btn-${subscription.title.toLowerCase()} transition-all duration-300`}>Subscribe</button>
            </div>
        )
    }

    return (
        <main className="flex flex-col w-full h-screen justify-between gap-8">
            <Header />
                <main className="flex flex-col p-10 gap-10">
                    <section className="flex justify-center items-center py-10">
                    <div className="flex flex-col gap-8 w-1/2 mx-10 text-center">
                        <h1 className="text-5xl font-bold">Reduced Prices, At a Reduced Cost</h1>
                        <p className="text-lg font-normal text-gray-700 self-center w-2/3">Our subscriptions offers wide ranges of benefits hand-picked for you at a reasonable price including month and annual payments.</p>
                    </div>
                    </section>
                    <section className="flex gap-8 w-5/6 self-center justify-center -mt-4">
                        {sampleTier.map(SubscriptionCard)}
                    </section>
                </main>
            <Footer />
        </main>
    )
}
