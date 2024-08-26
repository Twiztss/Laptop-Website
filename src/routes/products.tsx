import Footer from "../components/Footer";
import Header from "../components/Header";


type tagData = {
  id : number,
  name : string,
  url : string,
}

const data : tagData[] = [
  {
    id : 0,
    name : "",
    url : "",    
  },
]

export default function Products() {

  const tagRender = (tag : tagData) => {
    return (
      <li className="style-none" key = {tag.name ? tag.name : ""}>
            <img src={tag.url ? tag.url : ""} alt="" />
            <p className="text-lg font-semibold">{tag.name ? tag.name : ""}</p>
      </li>
    )
  }

  return (
    <main className="flex flex-col w-full h-screen justify-between">
      <Header />
      <section className="flex flex-col gap-10 m-10 h-5/6">
        <h1 className="text-4xl font-bold">Products</h1>
      </section>
      <section>
        <h2 className="text-2xl font-bold">Categories</h2>
        <div className="flex flex-wrap">
          {data.map(tagRender)}
        </div>
      </section>
      <Footer />
    </main>
  )
}
