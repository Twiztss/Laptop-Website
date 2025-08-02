import Header from "../components/shared/Header"
import { ArrowRight, Compass, Computer, FastForward, InspectionPanel, Origami, Terminal, Sparkles, Shield, Truck, Star, CreditCard, RotateCcw, Package } from "lucide-react"
import FooterFull from "../components/shared/FooterFull"
import Button from "../components/ui/Button"
import { Link } from "react-router-dom"
import { featureData, promotionData } from "../data/feature-data"
import { useState, useEffect } from "react"

type featureProps = {
  id : number,
  name : string,
  description : string,
  url : string,
}

const featureIcons = [
  Truck, 
  Star, 
  Shield, 
  CreditCard, 
  RotateCcw, 
  Package, 
]

const FeatureCard = ({ feature, index }: { feature: featureProps, index: number }) => {
  const [isVisible, setIsVisible] = useState(false)
  const IconComponent = featureIcons[feature.id] || FastForward

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    const element = document.getElementById(`feature-${feature.id}`)
    if (element) {
      observer.observe(element)
    }

    return () => observer.disconnect()
  }, [feature.id])

  return (
    <div 
      id={`feature-${feature.id}`}
      className={`bg-white/80 backdrop-blur-sm flex flex-col px-6 py-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 w-full max-w-sm gap-4 items-center border border-gray-100 hover:border-blue-200 transform hover:-translate-y-2 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
      style={{ animationDelay: `${index * 100}ms` }}
    >
      <div className="relative">
        <div className="bg-gradient-to-br from-blue-50 to-purple-50 w-24 h-24 rounded-2xl flex items-center justify-center shadow-lg">
          <IconComponent 
            width={40} 
            height={40} 
            className="text-blue-600"
          />
        </div>
        <div className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center">
          <span className="text-white text-xs font-bold">{feature.id + 1}</span>
        </div>
      </div>
      
      <div className="flex flex-col text-center gap-3">
        <h3 className="text-xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
          {feature.name}
        </h3>
        <p className="text-gray-600 text-sm leading-relaxed">
          {feature.description}
        </p>
      </div>
    </div>
  )
} 

const FeatureSection = ({ data }: { data: featureProps[] }) => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    const element = document.getElementById('feature-section')
    if (element) {
      observer.observe(element)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section 
      id="feature-section"
      className={`flex flex-col py-20 px-8 gap-12 items-center w-full transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
    >
      <div className="text-center space-y-4">
        <div className="flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-full text-sm font-medium w-fit mx-auto">
          <Sparkles size={16} />
          <span>Why Choose Us</span>
        </div>
        <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent">
          Why This Product?
        </h2>
        <p className="text-gray-600 text-lg max-w-2xl mx-auto">
          Discover what makes our products stand out from the competition
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-7xl"> 
        {data.map((feature, index) => (
          <FeatureCard key={feature.id} feature={feature} index={index} />
        ))}
      </div>
    </section>
  )
}

const Feature2Card = ({ feature, index }: { feature: featureProps, index: number }) => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    const element = document.getElementById(`feature2-${feature.id}`)
    if (element) {
      observer.observe(element)
    }

    return () => observer.disconnect()
  }, [feature.id])

  return (
    <article 
      id={`feature2-${feature.id}`}
      className={`flex flex-col w-full max-w-md bg-gradient-to-br from-gray-50 to-white rounded-3xl p-8 justify-end shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-blue-200 transform hover:-translate-y-2 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
      style={{ animationDelay: `${index * 150}ms` }}
    >
      <div className="flex flex-col justify-center gap-6">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center">
            <span className="text-white font-bold text-lg">{feature.id + 1}</span>
          </div>
          <h3 className="font-bold text-2xl bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
            {feature.name}
          </h3>
        </div>
        <p className="font-normal text-gray-600 leading-relaxed">
          {feature.description.length > 60 ? feature.description.slice(0, 60) + '...' : feature.description}
        </p>
        <Button className="self-start bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
          <span className="font-semibold text-sm">Explore</span>
          <ArrowRight width={16} height={16} />
        </Button>
      </div>
    </article>
  )
}

const NewFeatureSection = ({ data }: { data: featureProps[] }) => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    const element = document.getElementById('feature-section2')
    if (element) {
      observer.observe(element)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section 
      id="feature-section2"
      className={`flex flex-col py-20 px-8 gap-12 items-center w-full bg-gradient-to-br from-gray-50 via-white to-gray-100 transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
    >
      <div className="text-center space-y-4">
        <div className="flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-full text-sm font-medium w-fit mx-auto">
          <Sparkles size={16} />
          <span>Latest Updates</span>
        </div>
        <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent">
          What's New?
        </h2>
        <p className="text-gray-600 text-lg max-w-2xl mx-auto">
          Stay updated with our latest features and improvements
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full max-w-7xl"> 
        {data.slice(0, 4).map((feature, index) => (
          <Feature2Card key={feature.id} feature={feature} index={index} />
        ))}
      </div>
    </section>
  )
}

const Sponsor = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    const element = document.getElementById('sponsor-section')
    if (element) {
      observer.observe(element)
    }

    return () => observer.disconnect()
  }, [])
  
  return (
    <section 
      id="sponsor-section"
      className={`flex flex-col py-16 px-8 items-center gap-12 transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
    >
      <div className="text-center space-y-4">
        <h2 className="text-3xl font-bold bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent">
          Trusted by Industry Leaders
        </h2>
        <p className="text-gray-600">Partners who believe in our vision</p>
      </div>
      
      <div className="flex justify-center items-center gap-12 flex-wrap">
        {[Origami, Compass, Computer, InspectionPanel, Terminal].map((Icon, index) => (
          <div 
            key={index}
            className="w-16 h-16 bg-gradient-to-br from-gray-100 to-white rounded-2xl flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 border border-gray-200"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <Icon width={32} height={32} className="text-gray-600"/>
          </div>
        ))}
      </div>
    </section>
  )
}

export default function Feature() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <div className="flex flex-col w-full min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="relative flex justify-center items-center bg-gradient-to-br from-gray-50 via-white to-gray-100 mx-4 md:mx-10 my-8 h-[70vh] rounded-3xl shadow-lg overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-50/30 to-purple-50/30"></div>
        <div className="absolute top-10 right-10 w-32 h-32 bg-blue-200/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 left-10 w-24 h-24 bg-purple-200/20 rounded-full blur-2xl animate-pulse delay-1000"></div>
        
        <div className={`flex flex-col gap-8 md:gap-12 justify-center items-center w-full max-w-6xl px-6 md:px-12 transition-all duration-1000 ease-out ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <div className="flex flex-col gap-6 justify-center items-center text-center w-full">
            <div className="flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-medium">
              <Sparkles size={16} />
              <span>Discover Our Features</span>
            </div>
            
            <h1 className="md:text-6xl lg:text-7xl text-4xl font-bold bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent leading-tight">
              Amazing
              <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Features
              </span>
            </h1>
            
            <p className="md:text-xl text-lg text-gray-600 max-w-2xl leading-relaxed">
              Explore the cutting-edge features that make our products stand out. 
              Quality, innovation, and user experience at its finest.
            </p>
          </div>

          <div className="flex gap-4">
            <Button 
              className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              <Link to="/auth">Get Started</Link>
            </Button>
            <Button 
              className="px-8 py-3 bg-white/80 backdrop-blur-sm border-2 border-gray-200 hover:border-blue-500 hover:bg-blue-50 transition-all duration-300 transform hover:scale-105"
            >
              <Link to="/products" className="hover:text-blue-600 transition-all duration-300">Explore Products</Link>
            </Button>
          </div>
        </div>
      </section>

      <FeatureSection data={featureData}/>
      <NewFeatureSection data={promotionData} />
      <Sponsor />

      <FooterFull />
    </div>
  )
}
