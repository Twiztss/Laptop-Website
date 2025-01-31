import { useState } from "react";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Sidebar from "../../components/Sidebar";
import sampleCategory from "../../data/category-data";
import { Category } from "../../types/Catogory";
import { sampleUsers } from "../../data/user-data";
import Settings from "./settings";

export default function Profile() {

    const [currentPage, setCurrentPage] = useState("Account")

    const handleClick = (e : any) => {
        setCurrentPage(e.target.id)
    }

    const tag = (tag : Category) => {
        return (
            <p className="text-xs font-bold cursor-pointer">{tag.name}</p>
        )
        }

    return (
    <body className="flex flex-col w-full h-screen justify-between overflow-y-scroll">
        <Header />
        <nav className="flex border-2 border-gray-100 w-full px-10 py-5 items-center justify-center">
        <div className="flex w-1/2 justify-around">
            {sampleCategory.map(tag)}
        </div>
        </nav>
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
