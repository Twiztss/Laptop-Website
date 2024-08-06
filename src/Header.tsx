export default function Header() {
  return (
    <div className="flex justify-between items-center w-full bg-white px-10 py-5 sticky">
        <div className="flex gap-10 font-bold text-xs">
            <a href="">Features</a>
            <a href="">How to use</a>
            <a href="">Licenses</a>
            <a href="">Pricing</a>
        </div>
        <img src="" alt="" className="rounded-xl aspect-square w-[48px] absolute ml-[45%] border-black border-solid border-2"/>
        <button className="border-gray-300 font-bold rounded-full border-solid border-2 py-2 px-6 text-sm">Get Started</button>
    </div>
  )
}
