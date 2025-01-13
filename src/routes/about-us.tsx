import Header from "../components/Header";
import Footer from "../components/Footer";
import { useState } from "react";

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
        <h4 className="font-semibold text-lg">What's your name?</h4>
        <input id = {"name"} onChange = {(e) => setText(e.target.value)} type="text" className="rounded-lg p-2" value = {text} />
      </div>
      <div className="flex flex-col gap-2">
        <h4 className="font-semibold text-lg">Your email address</h4>
        <input id = {"email"} onChange = {adjustValue} type="text" className="rounded-lg p-2" />
      </div>
      <div className="flex flex-col gap-2">
        <h4 className="font-semibold text-lg">Your inquiries / comments</h4>
        <input id = "comment" onChange = {adjustValue} type="" className="rounded-lg p-2" />
      </div>
        <button type="submit" onClick = {submitData} className="p-4 font-bold text-lg bg-gray-500 rounded-xl">Submit</button>
    </section>
  )
}

  return (
    <main className="flex flex-col w-full h-screen justify-between gap-8">
      <Header />
      {/* Overview, Please render later thanks */}
      <body className="flex flex-col p-10 gap-10 items-center">
        <section className="flex flex-col items-center gap-6">
          <h1 className="text-4xl font-bold">About Us</h1>
          <p className="text-gray-600 text-xl font-semibold w-1/2 text-center">Minim aliquip incididunt sunt labore incididunt ad. Deserunt eiusmod aliquip consequat veniam fugiat id commodo enim. Aliqua dolor anim aliqua et. Consectetur nostrud dolor anim qui ex enim ea commodo laboris eiusmod proident amet eiusmod voluptate. Esse reprehenderit in consequat culpa elit non voluptate.</p>
        </section>
        <section className="flex gap-10 mt-10 justify-center my-8">
          {data.map(renderProfile)}
        </section>
        <section className="flex flex-col w-full items-center gap-4">
          <CommentBox />
          <h1 className="font-bold">Input Test</h1>
          <p>{}</p>
        </section>
      </body>
      <Footer />
    </main>
  )
}
