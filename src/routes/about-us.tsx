import Header from "../components/Header";
import Footer from "../components/Footer";

const data : profile[] = [
  {
    id : 0,
    name : "Victoria Morton",
    role : "Director",
    url : "http://afbo.mh/je"
  },
  {
    id : 1,
    name : "Curtis Austin",
    role : "Substitute",
    url : "http://ihfaw.cd/vaika",
  },
  {
    id : 2,
    name : "Nancy Keller",
    role : "Vice President",
    url : "http://fi.nu/lecnemuz",
  },
]

type profile = {
  id : number,
  name : string,
  role : string,
  url : string,
}

export default function AboutUs() {

  const renderProfile = (data : profile) => {
      return (
        <div className="flex flex-col items-center gap-4" key = {data.id ? data.id : ""}>
            <img src={data.url ? data.url : ""} alt="" className="border-2 border-solid border-black w-12 aspect-square rounded-full"/>
            <div className="flex flex-col gap-2 items-center">
              <h1 className="text-2xl font-bold">{data.name ? data.name : ""}</h1>
              <p className="text-gray-400 font-semibold">{data.role ? data.role : ""}</p>
            </div>
          </div>
      )
  }

  return (
    <main className="flex flex-col w-full h-screen justify-between gap-8">
      <Header />
      {/* Overview, Please render later thanks */}
      <body className="flex flex-col p-10 gap-10 items-center">
        <section className="flex flex-col items-center gap-6">
          <h1 className="text-4xl font-bold">About Us</h1>
          <p className="text-gray-600 text-xl font-semibold w-1/2 text-center">Board farm stove market aside dance quite riding cake football season cow quietly fast thread whispered disease atmosphere beauty forest income throughout electric whale.</p>
        </section>
        <section className="flex gap-10 mt-10">
          {data.map(renderProfile)}
        </section>
      </body>
      <Footer />
    </main>
  )
}
