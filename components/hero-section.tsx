"use client"

import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"
import Image from "next/image"
import { useEffect, useState } from "react"
import { ArrowRight, Play } from "lucide-react"

export function HeroSection() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="relative min-h-screen bg-[#1c1c1e] overflow-hidden pt-20 md:pt-24">
      <div className="absolute bottom-0 right-0 w-[700px] h-[700px] bg-[#4a4a3a]/25 rounded-full blur-[180px] animate-float-1" />
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-[#5a5a4a]/20 rounded-full blur-[160px] animate-float-2" />
      <div className="absolute top-1/3 right-0 w-[800px] h-[800px] bg-[#5a5a3a] rounded-full blur-[120px] opacity-30 animate-float-3" />

      <div className="relative container mx-auto px-6 py-6 md:py-12">
        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          <div className="relative w-full lg:hidden order-1">
            <div
              className={`relative aspect-[3/4] w-full max-w-sm mx-auto rounded-2xl overflow-hidden transition-all duration-1000 ${isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"}`}
            >
              <Image
                src="/images/design-mode/DSC00078.JPG.jpeg"
                alt="Pablo Castañeda"
                fill
                className="object-cover"
              />
              <div className="absolute bottom-6 right-6 text-right">
                <p className="text-white text-2xl md:text-3xl font-serif italic">
                  <span className="pencil-circle-svg">tu negocio</span>, tus reglas
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-6 md:space-y-8 lg:pt-8 order-2 lg:order-1">
            <div className="space-y-6">
              <h1
                className={`text-white text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-light leading-tight transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
              >
                
Te ayudo a emprender en el Real Estate, con libertad de horarios, ingresos en dólares y{" "}
                <span className="pencil-circle-svg inline-block">sin letra chica</span>
              </h1>
              <div
                className={`transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0 delay-300" : "opacity-0 translate-y-8"}`}
              >
                <Button
                  asChild
                  size="sm"
                  className="bg-[#D4C5A0] text-[#1c1c1e] hover:bg-[#E4D5B0] hover:scale-105 transition-all duration-300 rounded-full px-8 py-6 text-sm font-medium shadow-lg hover:shadow-xl"
                >
                  <a
                    href="https://wa.me/5491234567890"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3"
                  >
                    <ArrowRight className="w-4 h-4" />
                    Hablemos de tu futuro
                  </a>
                </Button>
              </div>
            </div>

            <div
              className={`relative w-full max-w-sm h-48 md:h-56 rounded-lg overflow-hidden shadow-2xl bg-black lg:hidden ${isVisible ? "opacity-100 translate-y-0 delay-500" : "opacity-0 translate-y-8"}`}
            >
              <video autoPlay muted loop playsInline className="absolute inset-0 w-full h-full object-contain">
                <source
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/7.%20COMO%20ELEGIR%20MI%20PROPIEDAD-2-pLu5cIzdVdbv0kanLkhilngkuzUaUb.mp4"
                  type="video/mp4"
                />
              </video>
              <Dialog>
                <DialogTrigger asChild>
                  <Button
                    size="sm"
                    className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-white/90 text-[#1c1c1e] hover:bg-white hover:scale-105 transition-all duration-300 rounded-full px-6 py-2 text-sm font-medium shadow-lg"
                  >
                    <Play className="w-4 h-4 mr-2" />
                    Ver video
                  </Button>
                </DialogTrigger>
                <DialogContent className="max-w-4xl w-full p-0 bg-black border-0">
                  <video controls autoPlay className="w-full h-auto">
                    <source
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/7.%20COMO%20ELEGIR%20MI%20PROPIEDAD-2-pLu5cIzdVdbv0kanLkhilngkuzUaUb.mp4"
                      type="video/mp4"
                    />
                  </video>
                </DialogContent>
              </Dialog>
            </div>
          </div>

          <div className="hidden lg:flex lg:flex-col gap-8 order-3 lg:order-2">
            <div
              className={`relative w-full h-64 rounded-lg overflow-hidden shadow-2xl bg-black ${isVisible ? "opacity-100 translate-y-0 delay-500" : "opacity-0 translate-y-8"}`}
            >
              <video autoPlay muted loop playsInline className="absolute inset-0 w-full h-full object-contain">
                <source
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/7.%20COMO%20ELEGIR%20MI%20PROPIEDAD-2-pLu5cIzdVdbv0kanLkhilngkuzUaUb.mp4"
                  type="video/mp4"
                />
              </video>
              <Dialog>
                <DialogTrigger asChild>
                  <Button
                    size="sm"
                    className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-white/90 text-[#1c1c1e] hover:bg-white hover:scale-105 transition-all duration-300 rounded-full px-6 py-2 text-sm font-medium shadow-lg z-10"
                  >
                    <Play className="w-4 h-4 mr-2" />
                    Ver video
                  </Button>
                </DialogTrigger>
                <DialogContent className="max-w-4xl w-full p-0 bg-black border-0">
                  <video controls autoPlay className="w-full h-auto">
                    <source
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/7.%20COMO%20ELEGIR%20MI%20PROPIEDAD-2-pLu5cIzdVdbv0kanLkhilngkuzUaUb.mp4"
                      type="video/mp4"
                    />
                  </video>
                </DialogContent>
              </Dialog>
            </div>

            <div
              className={`relative aspect-[3/4] max-w-md mx-auto rounded-2xl overflow-hidden transition-all duration-1000 ${isVisible ? "opacity-100 scale-100 delay-700" : "opacity-0 scale-95"}`}
            >
              <Image
                src="/images/design-mode/DSC00078.JPG.jpeg"
                alt="Pablo Castañeda"
                fill
                className="object-cover"
              />
              <div className="absolute bottom-8 right-6 text-right">
                <p className="text-white text-3xl md:text-4xl font-serif italic">
                  <span className="pencil-circle-svg">tu negocio</span>, tus reglas
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
