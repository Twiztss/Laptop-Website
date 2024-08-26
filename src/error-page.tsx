import { Link, useRouteError } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";

export default function ErrorPage() {
    const error = useRouteError()
    console.error(error)
  return (
    <main className="flex flex-col w-full h-screen">
      <Header />
        <div className="m-5 border-black border-2 border-solid h-5/6 flex justify-center items-center">
            <div className="flex flex-col gap-4 text-center">
                <h1 className="text-2xl font-bold">Sorry!</h1>
                <p>An unexpected error has orcurred.</p>
                <i className="font-semibold">Route Error</i>
                <button className="bg-gray-700 text-white font-bold py-4 px-10 rounded-full"><Link to={"/"}>Return to Home Page</Link></button>
            </div>
        </div>
      <Footer />
    </main>
  )
}
