import Header from "../components/Header";
import Footer from "../components/Footer";
import { useState } from "react";
import { PersonStanding } from "lucide-react";

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

const CommentBox = () => {
  
  const [text, setText] = useState("")
  const [input, setInput] = useState({
    name : "",
    email : "",
    comment : "",
  })
  const [data, setData] = useState({
    name : "",
    email : "",
    comment : "",
  })

  const adjustValue = (e : any) => {
    if (e.target) {
      if (e.target.id == "name") {
        setInput({...input,
          "name" : e.target.value
        })
      } else if (e.target.id == "email") {
        setInput({...input,
          "email" : e.target.value,
        })
      } else if (e.target.id == "comment") {
        setInput({...input,
          "comment" : e.target.value
        })
      }  
    }
  }

  const submitData = () => {
    setData({...input})

    let to_json = data
    let jsoned = JSON.stringify(to_json)
    return jsoned
  }


  return (
    <section className="flex flex-col w-1/2 gap-8 bg-gray-50 shadow-lg px-12 py-10 rounded-lg">
      <h1 className=" text-4xl font-bold self-center">Contact Us</h1>
      <div className="flex flex-col gap-2">
        <h4 className="font-bold text-lg">Name</h4>
        <input id = {"name"} onChange = {(e) => setText(e.target.value)} type="text" className="rounded-lg p-2 shadow-sm" value = {text} />
      </div>
      <div className="flex flex-col gap-2">
        <h4 className="font-bold text-lg">Email address</h4>
        <input id = {"email"} onChange = {adjustValue} type="text" className="rounded-lg p-2 shadow-sm" />
      </div>
      <div className="flex flex-col gap-2">
        <h4 className="font-bold text-lg">Comments</h4>
        <input id = "comment" onChange = {adjustValue} type="" className="rounded-lg p-2 shadow-sm" />
      </div>
      <div className="flex justify-between gap-4">
        <button type="submit" onClick = {submitData} className="p-4 font-bold text-white text-lg bg-gray-400 rounded-xl w-6/12">Submit</button>
        <button type="reset" onClick = {submitData} className="p-4 font-bold border-gray-300 border-2 text-lg rounded-xl w-6/12">Reset</button>
      </div>
    </section>
  )
}

export default function AboutUs() {

  const renderProfile = (data : profile) => {
      return (
        <div className="flex flex-col gap-4 w-1/4" key = {data.id ? data.id : ""}>
            <div className="flex items-center justify-center w-full bg-gray-100 p-4">
              <PersonStanding width={48} height={48} className="self-center"/>
            </div>
            <div className="flex flex-col gap-2">
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
      <body className="flex flex-col p-10 gap-10">
        <section className="flex justify-between items-center">
          <div className="flex flex-col gap-6 w-1/3 mx-10">
            <h1 className="text-4xl font-bold">Eu aliquip veniam dolor consectetur sunt incididunt nisi pariatur quis velit.</h1>
            <p className="text-lg font-normal">Minim aliquip incididunt sunt labore incididunt ad. Deserunt eiusmod aliquip consequat veniam fugiat id commodo enim. Aliqua dolor anim aliqua et. Consectetur nostrud dolor anim qui ex enim ea commodo laboris eiusmod proident amet eiusmod voluptate. Esse reprehenderit in consequat culpa elit non voluptate.</p>
          </div>
          <div className="bg-gray-50  w-1/2 aspect-video rounded-2xl"></div>
        </section>
        <section className="flex flex-col items-center gap-8 mt-10">
          <h2 className="text-3xl font-bold">Key Members</h2>
          <div className="flex flex-cols w-1/2 justify-between">
            {data.map(renderProfile)}
          </div>
        </section>
        <section className="flex flex-col w-full items-center gap-4">
          <CommentBox />
        </section>
      </body>
      <Footer />
    </main>
  )
}
