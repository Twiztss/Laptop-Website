import Footer from "./Footer";
import Header from "./Header";
import Hero from "./Hero";

export default function App() {
  return (
    <main className="flex flex-col justify-between w-full h-screen">
      <Header />
      <Hero />
      <Footer />
    </main>
  )
}
