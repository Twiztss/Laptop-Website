import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section className="flex justify-center items-center bg-gray-100 mx-10 my-0 h-5/6 rounded-3xl">
        <div className="flex flex-col gap-5 justify-center items-center">
            <h1 className="text-7xl font-bold tracking-wider">Insert Product Slogan</h1>
            <p className="text-lg">Ut pariatur ex ea nulla officia deserunt aliquip esse consectetur officia.</p>
            <button className="bg-gray-700 text-white font-bold py-4 px-10 rounded-full"><Link to={"/products/"}>Explore the option</Link></button>
        </div>
    </section>
  )
}
