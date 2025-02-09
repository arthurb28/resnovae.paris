import Image from "next/image"
import Link from "next/link"
import { ChevronDown } from "lucide-react"

const apartments = [
  {
    id: 1,
    name: "Rue de la Muette",
    image: "https://i.imgur.com/wLXZPsw.jpeg",
  },
  {
    id: 2,
    name: "Rue d'Achères",
    image: "https://i.imgur.com/m5x3Spm.jpeg",
  },
  {
    id: 3,
    name: "Avenue Faidherbe (en cours)",
    image: "https://i.imgur.com/DLuPoJC.jpeg",
  },
]

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="h-screen flex flex-col items-center justify-center relative">
        {/* Background Image */}
        <Image src="https://i.imgur.com/PqlCbhT.jpeg" alt="Background" fill className="object-cover" priority />
        {/* Overlay to ensure text readability */}
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <h1 className="text-6xl md:text-8xl font-bold text-white text-center tracking-wider relative z-10">
          RES NOVAE
        </h1>
        {/* Scroll indicator */}
        <div className="absolute bottom-8 animate-bounce z-10">
          <ChevronDown className="text-white w-8 h-8" />
        </div>
      </section>

      {/* Apartment Sections */}
      {apartments.map((apartment) => (
        <section key={apartment.id} className="h-screen relative flex items-center justify-center group">
          {/* Background Image */}
          <div className="absolute inset-0 w-full h-full">
            <Image
              src={apartment.image || "/placeholder.svg"}
              alt={apartment.name}
              fill
              className="object-cover"
              priority
            />
          </div>
          {/* Overlay */}
          <div className="absolute inset-0 bg-black bg-opacity-50 group-hover:bg-opacity-30 transition-all duration-500"></div>

          {/* Content */}
          <Link
            href={`/appartement/${apartment.id}`}
            className="relative z-10 transform hover:scale-105 transition-transform duration-300"
          >
            <h2 className="text-4xl md:text-6xl font-bold text-white text-center">{apartment.name}</h2>
            <p className="text-white text-center mt-4 text-lg md:text-xl">Découvrir le projet →</p>
          </Link>
        </section>
      ))}
    </div>
  )
}

