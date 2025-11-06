"use client"

import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"
import Image from "next/image"
import { useEffect, useState } from "react"
import { ArrowRight, Play, Sparkles, TrendingUp, Award, BookOpen, Newspaper } from "lucide-react"

export function HeroSection() {
  const [isVisible, setIsVisible] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    setIsVisible(true)
    
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 20,
        y: (e.clientY / window.innerHeight) * 20,
      })
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  return (
    <section className="relative h-screen overflow-visible pt-16 md:pt-24 lg:pt-20 pb-0">
      <div className="relative container mx-auto px-4 sm:px-6 py-1 md:py-4 lg:py-4 max-w-7xl h-full flex items-center z-10">
        <div className="grid lg:grid-cols-2 gap-4 md:gap-8 lg:gap-8 items-center w-full">
          <div className="space-y-3 md:space-y-5 lg:space-y-6 max-w-2xl mx-auto lg:mx-0">
            {/* Badge animado */}
          

            <div className="space-y-2 md:space-y-4">
              <h1 className={"text-2xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-light leading-[1.1] transition-all duration-1000 " + (isVisible ? "opacity-100 translate-y-0 delay-100" : "opacity-0 translate-y-8")}>
                <span className="block text-white/90 mb-1">Tu Visión Inmobiliaria,</span>
                <span className="block bg-gradient-to-r from-[#D4C5A0] via-[#E4D5B0] to-[#D4C5A0] bg-clip-text text-transparent animate-gradient bg-[length:200%_auto]">
                  Nuestra Realidad
                </span>
              </h1>
              
              <div className={"flex flex-wrap items-center gap-2 transition-all duration-1000 " + (isVisible ? "opacity-100 translate-y-0 delay-200" : "opacity-0 translate-y-8")}>
                <div className="group flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 hover:border-[#D4C5A0]/30 transition-all duration-300">
                  <TrendingUp className="w-3.5 h-3.5 text-[#D4C5A0] group-hover:scale-110 transition-transform" />
                  <span className="text-white/70 text-xs font-medium">15+ años</span>
                </div>
                <div className="group flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 hover:border-[#D4C5A0]/30 transition-all duration-300">
                  <Award className="w-3.5 h-3.5 text-[#D4C5A0] group-hover:scale-110 transition-transform" />
                  <span className="text-white/70 text-xs font-medium">+500 operaciones</span>
                </div>
              </div>
            </div>

            <p className={"text-sm sm:text-lg md:text-xl lg:text-xl text-white/70 font-light leading-relaxed max-w-xl transition-all duration-1000 " + (isVisible ? "opacity-100 translate-y-0 delay-300" : "opacity-0 translate-y-8")}>
              Transformo proyectos inmobiliarios en inversiones exitosas con{" "}
              <span className="text-[#D4C5A0] font-medium">estrategia profesional</span>,{" "}
              <span className="text-[#D4C5A0] font-medium">experiencia comprobada</span> y{" "}
              <span className="text-[#D4C5A0] font-medium">dedicación absoluta</span>.
            </p>

            <div className={"hidden lg:flex flex-wrap gap-2 transition-all duration-1000 " + (isVisible ? "opacity-100 translate-y-0 delay-400" : "opacity-0 translate-y-8")}>
              <Button asChild size="lg" className="group relative bg-gradient-to-r from-[#D4C5A0] to-[#E4D5B0] text-[#1c1c1e] hover:shadow-[0_0_40px_rgba(212,197,160,0.4)] transition-all duration-500 rounded-full px-5 sm:px-6 py-3 sm:py-5 text-sm sm:text-base font-medium overflow-hidden">
                <a href="https://wa.me/5491234567890" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 sm:gap-3 relative z-10">
                  <span className="relative z-10">Conoce más</span>
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform relative z-10" />
                  <div className="absolute inset-0 bg-gradient-to-r from-[#E4D5B0] to-[#D4C5A0] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </a>
              </Button>
          
            </div>

            
          </div>

          <div className="relative max-w-2xl mx-auto lg:mx-0 lg:max-w-sm xl:max-w-md">
            <div className="grid grid-cols-2 gap-2.5 lg:gap-2.5">
              {/* Main large image */}
              <div className={"col-span-2 relative aspect-[16/10] lg:aspect-[16/11] rounded-2xl lg:rounded-2xl overflow-hidden group transition-all duration-1000 " + (isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95")}>
                <div className="absolute inset-0 bg-gradient-to-br from-[#D4C5A0]/20 to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <Image 
                  src="/images/design-mode/DSC00078.JPG.jpeg" 
                  alt="Pablo Castañeda" 
                  fill 
                  className="object-cover object-[center_20%] group-hover:scale-110 transition-transform duration-700" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent z-10" />
                <div className="absolute bottom-2.5 lg:bottom-4 left-2.5 lg:left-4 right-2.5 lg:right-4 z-20">
                  <div className="flex items-end justify-between">
                    <div>
                      <p className="text-white/60 text-[10px] mb-0.5">Experto en</p>
                      <p className="text-white text-sm lg:text-lg font-light">Bienes Raíces Premium</p>
                    </div>
                    <div className="w-8 h-8 lg:w-10 lg:h-10 rounded-full bg-[#D4C5A0]/20 backdrop-blur-xl border border-[#D4C5A0]/30 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <ArrowRight className="w-3.5 h-3.5 lg:w-4 lg:h-4 text-[#D4C5A0]" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Video preview */}
              <div className={"relative aspect-square lg:aspect-square rounded-xl lg:rounded-xl overflow-hidden group transition-all duration-1000 delay-200 " + (isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95")}>
                <video 
                  autoPlay 
                  muted 
                  loop 
                  playsInline 
                  className="absolute inset-0 w-full h-full object-cover object-[center_20%] group-hover:scale-110 transition-transform duration-700"
                >
                  <source src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/7.%20COMO%20ELEGIR%20MI%20PROPIEDAD-2-pLu5cIzdVdbv0kanLkhilngkuzUaUb.mp4" type="video/mp4" />
                </video>
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors z-10" />
                <Dialog>
                  <DialogTrigger asChild>
                    <button className="absolute inset-0 z-20 flex items-center justify-center">
                      <div className="w-10 h-10 lg:w-14 lg:h-14 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center group-hover:scale-110 group-hover:bg-white transition-all duration-300 shadow-2xl">
                        <Play className="w-4 h-4 lg:w-6 lg:h-6 text-[#1c1c1e] ml-0.5" fill="currentColor" />
                      </div>
                    </button>
                  </DialogTrigger>
                  <DialogContent className="max-w-4xl w-full p-0 bg-black border-0">
                    <video controls autoPlay className="w-full h-auto">
                      <source src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/7.%20COMO%20ELEGIR%20MI%20PROPIEDAD-2-pLu5cIzdVdbv0kanLkhilngkuzUaUb.mp4" type="video/mp4" />
                    </video>
                  </DialogContent>
                </Dialog>
              </div>

              {/* Blog card */}
              <a 
                href="#blog" 
                className={"relative aspect-square lg:aspect-square rounded-xl lg:rounded-xl overflow-hidden p-2.5 lg:p-3.5 bg-gradient-to-br from-[#D4C5A0]/10 via-[#E4D5B0]/5 to-transparent border border-[#D4C5A0]/20 backdrop-blur-xl group hover:border-[#D4C5A0]/40 hover:bg-gradient-to-br hover:from-[#D4C5A0]/15 hover:via-[#E4D5B0]/10 transition-all duration-1000 delay-300 cursor-pointer " + (isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95")}
              >
                <div className="h-full flex flex-col justify-between">
                  <div>
                    <div className="mb-2 group-hover:scale-110 transition-transform origin-left duration-300">
                      <div className="w-8 h-8 lg:w-10 lg:h-10 rounded-full bg-gradient-to-br from-[#D4C5A0]/20 to-[#E4D5B0]/20 border border-[#D4C5A0]/30 flex items-center justify-center group-hover:rotate-12 transition-transform duration-300">
                        <Newspaper className="w-4 h-4 lg:w-5 lg:h-5 text-[#D4C5A0]" />
                      </div>
                    </div>
                    <h3 className="text-white text-sm lg:text-base font-medium mb-1 group-hover:text-[#D4C5A0] transition-colors">Blog</h3>
                    <p className="text-white/60 text-[10px] lg:text-[10px] xl:text-xs leading-tight">Tips y consejos inmobiliarios</p>
                  </div>
                  <div className="flex items-center gap-1.5 text-[#D4C5A0] text-[10px] group-hover:translate-x-2 transition-transform">
                    <span className="font-medium">Leer más</span>
                    <ArrowRight className="w-3 h-3 group-hover:scale-110 transition-transform" />
                  </div>
                </div>
                
                {/* Efecto de brillo al hover */}
                <div className="absolute inset-0 bg-gradient-to-tr from-[#D4C5A0]/0 via-[#D4C5A0]/5 to-[#D4C5A0]/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Partículas decorativas */}
                <div className="absolute top-2 right-2 w-1 h-1 rounded-full bg-[#D4C5A0]/40 opacity-0 group-hover:opacity-100 group-hover:animate-ping transition-opacity" />
                <div className="absolute bottom-3 left-3 w-1 h-1 rounded-full bg-[#E4D5B0]/40 opacity-0 group-hover:opacity-100 group-hover:animate-pulse transition-opacity delay-75" />
              </a>
            </div>

            {/* Floating elements */}
            <div className={"absolute -top-4 -right-4 w-20 h-20 rounded-full bg-gradient-to-br from-[#D4C5A0]/30 to-transparent blur-2xl animate-float-3 " + (isVisible ? "opacity-100" : "opacity-0")} />
            <div className={"absolute -bottom-6 -left-6 w-24 h-24 rounded-full bg-gradient-to-tr from-[#D4C5A0]/20 to-transparent blur-3xl animate-float-4 " + (isVisible ? "opacity-100" : "opacity-0")} />
          </div>

          {/* Botón móvil - debajo del contenido multimedia */}
          <div className={"lg:hidden flex justify-center transition-all duration-1000 " + (isVisible ? "opacity-100 translate-y-0 delay-500" : "opacity-0 translate-y-8")}>
            <Button asChild size="lg" className="group relative bg-gradient-to-r from-[#D4C5A0] to-[#E4D5B0] text-[#1c1c1e] hover:shadow-[0_0_40px_rgba(212,197,160,0.4)] transition-all duration-500 rounded-full px-6 py-3 text-sm font-medium overflow-hidden">
              <a href="https://wa.me/5491234567890" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 relative z-10">
                <span className="relative z-10">Conoce más</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform relative z-10" />
                <div className="absolute inset-0 bg-gradient-to-r from-[#E4D5B0] to-[#D4C5A0] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </a>
            </Button>
          </div>
        </div>
      </div>

     
    </section>
  )
}
