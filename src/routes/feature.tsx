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
]

type featureProps = {
  id : number,
  name : string,
  description : string,
  url : string,
}

const FeatureHero = ({ data } : any) => {

  const renderFeature = (feature : featureProps) => {
    return (
      <section className="flex justify-between m-10 h-5/6 w-3/4" key = {feature.id}>
        <div className="">
          <h2 className="text-2xl font-bold">{feature.name}</h2>
          <p className="text-gray-500 font-medium">{feature.description}</p>
        </div>
        <img src={feature.url? feature.url : ""} alt="" className="border-white border-2 border-solid w-24" />
      </section>
    )
  }

  return (
    <div className="flex flex-col gap-10 items-center">
      {data.map(renderFeature)}
    </div>
  )
}

const FeatureCard = ({ data } : any) => {
  
  const renderCard = (feature : featureProps) => {
    return (
      <div className="bg-gray-300 flex flex-col gap-4 px-6 py-4 rounded-lg items-center text-center" key = {feature.id}>
        <img src={feature.url? feature.url : ""} alt="" />
        <div>
          <h1>{feature.name}</h1>
          <p>{feature.description}</p>
        </div>
        <button className="bg-gray-500 text-white font-semibold px-6 py-2 rounded-full">Learn more</button>
      </div>
    )
  }

  return (
    <div className="flex flex-col gap-10 self-center items-center">
      <h2 className="font-bold text-2xl">Why this product?</h2>
      <div className="flex gap-10">
        {data.map(renderCard)}
      </div>
    </div>
  )
}

export default function Feature() {
  return (
    <main className="flex flex-col w-full h-screen justify-between">
      <Header />
        <section className="flex flex-col px-10 py-4">    
          <h1 className="text-4xl font-bold text-center">Features</h1>
          <p className="text-center">Description</p>
          <FeatureHero data = {data}/>
          <FeatureCard data = {data}/>
          <Footer />
        </section>
    </main>
  )
}
