import Header from "../components/shared/Header"
import { ArrowRight, Compass, Computer, FastForward, InspectionPanel, Origami, Terminal } from "lucide-react"
import FooterFull from "../components/shared/FooterFull"
import Button from "../components/ui/Button"
import { Link } from "react-router-dom"

const data : object[] = [
  {
    id : 0,
    name : "Feature 1",
    description : "Irure et exercitation Lorem cupidatat amet do eiusmod in aliquip in anim.",
    url : "",
  },
  {
    id : 1,
    name : "Feature 2",
    description : "Aute proident minim labore magna consequat ea deserunt.",
    url : "",
  },
  {
    id : 2,
    name : "Feature 3",
    description : "Description Nisi aute amet sunt tempor cillum cupidatat occaecat labore veniam elit adipisicing.",
    url : "",
  },
  {
    id : 3,
    name : "Feature 4",
    description : "Aliqua deserunt do enim nisi.",
    url : "",
  },
  {
    id : 4,
    name : "Feature 5",
    description : "Ex excepteur occaecat esse consectetur.",
    url : "",
  },
  {
    id : 5,
    name : "Feature 6",
    description : "Commodo velit veniam culpa ex est magna.",
    url : "",
  },
]

type featureProps = {
  id : number,
  name : string,
  description : string,
  url : string,
}

const FeatureCard = (feature : featureProps) => {
  return (
    <div className="bg-white flex flex-col px-4 py-8 rounded-lg drop-shadow-lg w-1/4 gap-2 items-center" key = {feature.id}>
      <div className="bg-gray-50 w-full aspect-video rounded-md"></div>
      <FastForward width={64} height={64} className="-mt-8 bg-gray-100 p-4 rounded-full"/>
      <img src={feature.url? feature.url : ""} alt="" />
      <div className="flex flex-col text-center w-1/2 gap-2">
        <h1 className = "text-2xl font-bold">{feature.name}</h1>
        <p className="text-gray-400 text-md font-normal">{feature.description}</p>
      </div>
    </div>
  )
} 

const FeatureSection = ({ data } : any) => {

  return (
    <section className="flex flex-col m-10 gap-10 self-center items-center w-full">
      <h2 className="text-3xl font-bold">Why this product?</h2>
      <div className="flex px-8 py-4 gap-10 w-full justify-center flex-wrap"> 
        {data.map(FeatureCard)}
      </div>
    </section>
  )
}

const Feature2Card = (feature : featureProps) => {
  return (
    <article className="flex flex-col w-5/12 bg-gray-100 rounded-2xl aspect-video p-8 justify-end">
      <div className="flex flex-col justify-center gap-4">
        <h1 className="font-bold text-4xl">{feature.name + ".1"}</h1>
        <p className="font-normal text-lg">{feature.description.length > 40 ? feature.description.slice(0,40) : feature.description}</p>
        <Button className="self-start bg-gray-300 px-6">
          <p className="font-semibold text-base">Explore</p>
          <ArrowRight width={16} height={16} />
        </Button>
      </div>
    </article>
  )
}

const FeatureSection2 = ({ data } : any) => {

  return (
    <>
      <h2 className="text-3xl font-bold self-center my-5">What's new?</h2>
      <section className="flex px-8 py-4 gap-6 w-full mx-10 justify-center self-center flex-wrap"> 
        {data.slice(0,4).map(Feature2Card)}
      </section>
    </>
  )
}

const Sponsor = () => {
  
  return (
    <section className="flex flex-col px-10 py-4 items-center gap-12 my-10">
          <h1 className="text-3xl font-bold">Sponsored by</h1>
          <div className="flex justify-between w-1/2">
            <Origami width={32} height={32}/> 
            <Compass width={32} height={32}/> 
            <Computer width={32} height={32}/> 
            <InspectionPanel width={32} height={32}/> 
            <Terminal width={32} height={32}/> 
          </div>
        </section>
  )
}

export default function Feature() {
  return (
    <body className="flex flex-col w-full h-screen justify-between">
      <Header />
      <section className="flex flex-col px-8 py-16 bg-gray-100 h-5/6">
        <div className="flex flex-col gap-6 my-10 items-center h-3/4">
          <h1 className="text-center text-6xl font-bold tracking-wider">Features</h1>
          <p className="text-center font-normal text-gray-700 text-lg w-5/12">Feature description describing how good the product actually is within few sentences captivating potential customers  .</p>
          <div className="flex gap-4">
            <Button className="px-8 py-3 transition-all duration-300 hover:bg-gray-600 hover:text-white" type="primary"><Link to="/auth">Register</Link></Button>
            <Button className="px-8 py-3 transition-all duration-300 hover:bg-gray-900 hover:text-white" type="secondary"><Link to="/products" className="hover:text-white transition-all duration-300">Explore</Link></Button>
          </div>
        </div>  
      </section>
      <FeatureSection data = {data}/>
      <FeatureSection2 data={data} />
      <Sponsor />

      <FooterFull />
    </body>
  )
}
