import Footer from "../components/Footer";
import Header from "../components/Header";

const data = [
  {
    id : 0,
    step : "bare",
    stepInfo : "new",
  },
  {
    id : 1,
    step : "down",
    stepInfo : "unit",
  },
  {
    id : 2,
    step : "daily",
    stepInfo : "gave",
  },
  {
    id : 3,
    step : "such",
    stepInfo : "silk",
  },
]

export default function HowToUse() {

  const renderInstruction = (data : any) => {
    return (
      <div className="flex flex-col gap-4" key = {data.step}>
          <div className="bg-red-400 rounded-full w-10 h-10 text-white flex items-center justify-center font-bold">{data.id + 1}</div>
          <h1 className="text-3xl font-bold">{data.step}</h1>
          <p className="font-semibold text-gray-300">{data.stepInfo}</p>
      </div>
    )
  }

  return (
    <main className="flex flex-col w-full h-screen justify-between">
      <Header />
      <section className="flex flex-col gap-10 m-10 h-5/6">
        <h1 className="text-4xl font-bold">How to use?</h1>
        {data.map(renderInstruction)}
      </section>
      <Footer />
    </main>
  )
}