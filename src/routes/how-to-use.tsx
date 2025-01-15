import Footer from "../components/Footer";
import Header from "../components/Header";

const data = [
  {
    id : 0,
    step : "Aute proident duis commodo ut eu officia non sunt anim ullamco qui officia sunt aliquip.",
    stepInfo : "Quis aute exercitation nisi aliquip ad in occaecat cupidatat voluptate ipsum consequat. Do deserunt eiusmod adipisicing ut elit quis magna. Elit sit ipsum ad esse laboris et. Proident ea elit magna voluptate veniam. Amet sunt culpa id magna pariatur est officia adipisicing eu. Occaecat amet labore quis duis enim est reprehenderit esse est et excepteur deserunt in. Consequat qui officia magna mollit commodo qui esse.",
  },
  {
    id : 1,
    step : "Lorem commodo cillum veniam laborum eu adipisicing laboris.",
    stepInfo : "Laborum proident laborum voluptate voluptate veniam tempor dolor excepteur enim sunt. Et sunt sint incididunt voluptate dolor amet quis eu nulla officia ipsum quis consectetur. Anim est laboris dolor voluptate amet in nulla officia nisi cupidatat eu eiusmod do veniam. Laborum amet velit excepteur veniam. Consequat do ex labore voluptate sint eiusmod cupidatat aliquip aliqua nostrud nulla do ullamco. Irure id esse deserunt voluptate ullamco dolor.",
  },
  {
    id : 2,
    step : "Cillum tempor consequat deserunt laboris nisi veniam aute ut officia officia mollit laboris anim sint.",
    stepInfo : "Ipsum nulla voluptate nostrud cupidatat. Velit veniam aliqua aute enim ea. Dolore ea amet exercitation consectetur nisi adipisicing laborum amet ex.",
  },
  {
    id : 3,
    step : "Nisi ipsum sit fugiat ullamco consequat ad laboris consequat laborum est.",
    stepInfo : "Incididunt sunt sunt aliquip eu. Adipisicing tempor elit esse deserunt dolore culpa duis mollit. Adipisicing anim voluptate laboris eu nostrud eu anim laboris deserunt labore quis occaecat esse consequat. Sit reprehenderit commodo irure ut aute qui irure Lorem minim eiusmod pariatur Lorem. Exercitation excepteur tempor irure ad ullamco. Voluptate adipisicing proident commodo minim pariatur enim consequat aute aliqua adipisicing cupidatat nisi in. Commodo quis ipsum commodo amet magna eu duis ipsum culpa qui culpa anim incididunt.",
  },
]

export default function HowToUse() {

  const renderInstruction = (data : any) => {
    return (
      <div className="flex flex-col gap-6 w-full" key = {data.step}>
          <div className="bg-gray-400 rounded-full w-10 h-10 text-white flex items-center justify-center font-bold">{data.id + 1}</div>
          <h1 className="text-3xl font-bold">{data.step}</h1>
          <p className="font-normal text-lg text-gray-300">{data.stepInfo}</p>
      </div>
    )
  }

  return (
    <main className="flex flex-col w-full items-center">
      <Header />
      <section className="flex flex-col gap-10 mx-16 my-10 h-5/6 w-1/2">
        <h1 className="text-4xl font-bold self-center">How to use?</h1>
        <p className="text-gray-400 font-semibold self-center"></p>
        {data.map(renderInstruction)}
      </section>
      <Footer />
    </main>
  )
}