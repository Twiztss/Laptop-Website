import Header from "../components/Header"
import Footer from "../components/Footer"

const data : object[] = [
  {
    id : 0,
    name : "Feature 1",
    description : "Description 1",
    url : "",
  },
  {
    id : 1,
    name : "Feature 2",
    description : "Description 2",
    url : "",
  },
  {
    id : 2,
    name : "Feature 3",
    description : "Description 3",
    url : "",
  },
  {
    id : 3,
    name : "Feature 4",
    description : "Description 4",
    url : "",
  },
  {
    id : 4,
    name : "Feature 5",
    description : "Description 5",
    url : "",
  },
  {
    id : 5,
    name : "Feature 6",
    description : "Description 6",
    url : "",
  },
]

type featureProps = {
  id : number,
  name : string,
  description : string,
  url : string,
}

const FeatureCard = ({ data } : any) => {
  
  const renderCard = (feature : featureProps) => {
    return (
      <div className="bg-white flex flex-col px-8 py-12 rounded-md drop-shadow-lg w-1/4 gap-2" key = {feature.id}>
        <div className="border-gray-200 border-2 w-[50px] aspect-square rounded-full"></div>
        <img src={feature.url? feature.url : ""} alt="" />
        <div className="">
          <h1 className = "text-lg font-bold">{feature.name}</h1>
          <p className="text-gray-500 text-sm font-medium">{feature.description}</p>
          <button className="">Next</button>
        </div>
      </div>
    )
  } 

  return (
    <div className="flex flex-col m-10 gap-10 self-center items-center w-full">
      <h2 className="font-bold text-2xl">Why this product?</h2>
      <div className="flex px-8 py-4 gap-10 w-full justify-center flex-wrap"> 
        {data.map(renderCard)}
      </div>
    </div>
  )
}

export default function Feature() {
  return (
    <main className="flex flex-col w-full h-screen justify-between">
      <Header />
        <section className="flex flex-col px-10 py-4 bg-slate-200">
          <div className="flex flex-col gap-6 my-10 items-center">
            <h1 className="text-center text-6xl font-bold">Features</h1>
            <p className="text-center font-base text-gray-500 text-md w-5/12">Feature description describing how good the product actually is within few sentences captivating potential customers  .</p>
            <div className="flex gap-4">
              <button className="bg-gray-700 text-white px-8 py-3 rounded-full">Register</button>
              <button className="border-gray-700 border-solid border-2 py-3 px-8 rounded-full">Explore</button>
            </div>
          </div>  
        </section>
        <FeatureCard data = {data}/>
        {/* <FeatureHero data = {data}/>   */}
        <section className="flex flex-col px-10 py-4 items-center">
          <h1 className="text-3xl font-bold">Sponsored by</h1>
        </section>
        <Footer />
    </main>
  )
}
