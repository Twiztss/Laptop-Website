import { Link } from "react-router-dom";
import Button from "../ui/Button";
import { Search } from "lucide-react";

export default function Hero() {
  return (
    <section className="flex justify-center items-center bg-gray-100 mx-10 my-0 h-5/6 rounded-3xl">
        <div className="flex flex-col gap-5 justify-center items-center">
            <h1 className="text-7xl font-bold tracking-wider">Insert Product Slogan</h1>
            <p className="text-lg">Ut pariatur ex ea nulla officia deserunt aliquip esse consectetur officia.</p>
            <div className="flex items-center w-1/2 justify-center">
              <input className="px-8 py-3 rounded-full border-2 border-gray-200" type="text" placeholder="Explore the option" />
              <Button className="aboslute -ml-16">
                <Link to={"/products/"} />
                <Search color="gray" width={16} height={16}/>
              </Button>
            </div>
        </div>
    </section>
  )
}
