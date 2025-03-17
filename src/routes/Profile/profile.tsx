import { useState } from "react";
import Footer from "../../components/shared/Footer";
import Header from "../../components/shared/Header";
import Sidebar from "../../components/shared/Sidebar";
import { sampleUsers } from "../../data/user-data";
import Settings from "./settings";
import Navbar from "../../components/shared/Navbar";

export default function Profile() {

    const [currentPage, setCurrentPage] = useState("Account")

    const handleClick = (e : any) => {
        setCurrentPage(e.target.id)
    }

    return (
    <body className="flex flex-col w-full h-screen justify-between overflow-y-scroll">
        <Header />
        <Navbar />
        <main className="flex w-full h-full">
            <Sidebar handleClick={handleClick}/>
            <section className="flex flex-col gap-6 m-10 w-4/5 overflow-y-scroll">
                <nav className="flex justify-between">
                    <h1 className="text-2xl font-bold">{currentPage}</h1>
                </nav>
                <Settings {...sampleUsers[1]}/>
            </section>
        </main>
        <Footer />
    </body>
    )
}
