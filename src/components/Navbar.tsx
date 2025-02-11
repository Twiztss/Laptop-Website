import sampleCategory from "../data/category-data"
import { Category } from "../types/Catogory"

export default function Navbar() {

    const tag = (tag : Category) => {
    return (
        <p className="text-xs font-bold cursor-pointer" key={tag.name}>{tag.name}</p>
        )
    }

    return (
     <nav className="flex border-2 border-gray-100 w-full px-10 py-5 items-center justify-center">
    <div className="flex w-1/2 justify-around">
        {sampleCategory.map(tag)}
    </div>
    </nav>
    )
}
