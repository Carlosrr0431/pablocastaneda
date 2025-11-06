"use client""use client"



import { Button } from "@/components/ui/button"import { Button } from "@/components/ui/button"

import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"

import Image from "next/image"import Image from "next/image"

import { useEffect, useState } from "react"import { useEffect, useState } from "react"

import { ArrowRight, Play, Sparkles } from "lucide-react"import { ArrowRight, Play, Sparkles, TrendingUp, Award } from "lucide-react"



export function HeroSection() {export function HeroSection() {

  const [isVisible, setIsVisible] = useState(false)  const [isVisible, setIsVisible] = useState(false)

  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })



  useEffect(() => {  useEffect(() => {

    setIsVisible(true)    setIsVisible(true)

        

    const handleMouseMove = (e: MouseEvent) => {    const handleMouseMove = (e: MouseEvent) => {

      setMousePosition({      setMousePosition({

        x: (e.clientX / window.innerWidth) * 20,        x: (e.clientX / window.innerWidth) * 20,

        y: (e.clientY / window.innerHeight) * 20,        y: (e.clientY / window.innerHeight) * 20,

      })      })

    }    }



    window.addEventListener("mousemove", handleMouseMove)    window.addEventListener("mousemove", handleMouseMove)

    return () => window.removeEventListener("mousemove", handleMouseMove)    return () => window.removeEventListener("mousemove", handleMouseMove)

  }, [])  }, [])



  return (  return (

    <section className="relative min-h-screen bg-gradient-to-br from-[#0a0a0a] via-[#1c1c1e] to-[#0a0a0a] overflow-hidden pt-24 md:pt-28 lg:pt-32">    <section className="relative min-h-screen bg-gradient-to-br from-[#0a0a0a] via-[#1c1c1e] to-[#0a0a0a] overflow-hidden pt-20 md:pt-24 lg:pt-28">

      {/* Animated gradient orbs */}      <div 

      <div         className="absolute top-0 left-0 w-[600px] h-[600px] bg-gradient-to-br from-[#D4C5A0]/20 via-[#8B7E3F]/10 to-transparent rounded-full blur-[120px] animate-float-1"

        className="absolute top-0 left-0 w-[600px] h-[600px] bg-gradient-to-br from-[#D4C5A0]/20 via-[#8B7E3F]/10 to-transparent rounded-full blur-[120px] animate-float-1"        style={{ transform: "translate(" + mousePosition.x + "px, " + mousePosition.y + "px)" }}

        style={{ transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)` }}      />

      />      <div 

      <div         className="absolute bottom-0 right-0 w-[800px] h-[800px] bg-gradient-to-tl from-[#D4C5A0]/15 via-[#B8A76B]/10 to-transparent rounded-full blur-[140px] animate-float-2"

        className="absolute bottom-0 right-0 w-[800px] h-[800px] bg-gradient-to-tl from-[#D4C5A0]/15 via-[#B8A76B]/10 to-transparent rounded-full blur-[140px] animate-float-2"        style={{ transform: "translate(-" + mousePosition.x + "px, -" + mousePosition.y + "px)" }}

        style={{ transform: `translate(-${mousePosition.x}px, -${mousePosition.y}px)` }}      />

      />      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-[#D4C5A0]/5 rounded-full blur-[160px] animate-pulse-slow" />

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-[#D4C5A0]/5 rounded-full blur-[160px] animate-pulse-slow" />

      <div className="absolute inset-0 bg-[linear-gradient(rgba(212,197,160,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(212,197,160,0.03)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,#000_70%,transparent_100%)]" />

      {/* Grid pattern overlay */}

      <div className="absolute inset-0 bg-[linear-gradient(rgba(212,197,160,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(212,197,160,0.03)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,#000_70%,transparent_100%)]" />      <div className="relative container mx-auto px-4 sm:px-6 py-6 md:py-8 lg:py-12 max-w-7xl">

        <div className="grid lg:grid-cols-2 gap-8 md:gap-10 lg:gap-16 items-center">

      <div className="relative container mx-auto px-6 py-4 md:py-6 lg:py-8 max-w-7xl">          <div className="space-y-5 md:space-y-6 lg:space-y-8 max-w-2xl mx-auto lg:mx-0">

        <div className="grid lg:grid-cols-2 gap-8 md:gap-10 lg:gap-14 items-center">            <div className={"inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#D4C5A0]/10 border border-[#D4C5A0]/20 backdrop-blur-xl transition-all duration-1000 hover:scale-105 hover:bg-[#D4C5A0]/20 " + (isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8")}>

          {/* Left content */}              <Sparkles className="w-4 h-4 text-[#D4C5A0] animate-pulse" />

          <div className="space-y-6 md:space-y-7 max-w-2xl mx-auto lg:mx-0">              <span className="text-[#D4C5A0] text-xs sm:text-sm font-light tracking-wider">Asesor Inmobiliario Premium</span>

            <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#D4C5A0]/10 border border-[#D4C5A0]/20 backdrop-blur-xl transition-all duration-1000 hover:scale-105 hover:bg-[#D4C5A0]/20 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>            </div>

              <Sparkles className="w-4 h-4 text-[#D4C5A0] animate-pulse" />

              <span className="text-[#D4C5A0] text-sm font-light tracking-wider">Asesor Inmobiliario Premium</span>            <div className="space-y-4 md:space-y-5">

            </div>              <h1 className={"text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-light leading-[0.9] transition-all duration-1000 " + (isVisible ? "opacity-100 translate-y-0 delay-100" : "opacity-0 translate-y-8")}>

                <span className="block text-white/90">Pablo</span>

            <div className="space-y-5">                <span className="block bg-gradient-to-r from-[#D4C5A0] via-[#E4D5B0] to-[#D4C5A0] bg-clip-text text-transparent animate-gradient bg-[length:200%_auto]">Castañeda</span>

              <h1 className={`text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-light leading-[0.9] transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0 delay-100" : "opacity-0 translate-y-8"}`}>              </h1>

                <span className="block text-white/90">Pablo</span>              

                <span className="block bg-gradient-to-r from-[#D4C5A0] via-[#E4D5B0] to-[#D4C5A0] bg-clip-text text-transparent animate-gradient bg-[length:200%_auto]">Castañeda</span>              <div className={"flex flex-wrap items-center gap-3 transition-all duration-1000 " + (isVisible ? "opacity-100 translate-y-0 delay-200" : "opacity-0 translate-y-8")}>

              </h1>                <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm">

            </div>                  <TrendingUp className="w-4 h-4 text-[#D4C5A0]" />

                  <span className="text-white/70 text-sm">15+ años</span>

            <p className={`text-xl md:text-2xl text-white/60 font-light leading-relaxed max-w-2xl transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0 delay-200" : "opacity-0 translate-y-8"}`}>                </div>

              Transformo visiones inmobiliarias en realidades exitosas con estrategia, experiencia y dedicación absoluta.                <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm">

            </p>                  <Award className="w-4 h-4 text-[#D4C5A0]" />

                  <span className="text-white/70 text-sm">500+ operaciones</span>

            <div className={`flex flex-wrap gap-3 sm:gap-4 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0 delay-300" : "opacity-0 translate-y-8"}`}>                </div>

              <Button asChild size="lg" className="group relative bg-gradient-to-r from-[#D4C5A0] to-[#E4D5B0] text-[#1c1c1e] hover:shadow-[0_0_40px_rgba(212,197,160,0.4)] transition-all duration-500 rounded-full px-8 py-6 text-base font-medium overflow-hidden">              </div>

                <a href="https://wa.me/5491234567890" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 relative z-10">            </div>

                  <span className="relative z-10">Agenda tu consulta</span>

                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform relative z-10" />            <p className={"text-lg sm:text-xl md:text-2xl text-white/60 font-light leading-relaxed max-w-2xl transition-all duration-1000 " + (isVisible ? "opacity-100 translate-y-0 delay-300" : "opacity-0 translate-y-8")}>

                  <div className="absolute inset-0 bg-gradient-to-r from-[#E4D5B0] to-[#D4C5A0] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />              Transformo visiones inmobiliarias en realidades exitosas con estrategia, experiencia y dedicación absoluta.

                </a>            </p>

              </Button>

              <Button asChild size="lg" variant="outline" className="group border-2 border-[#D4C5A0]/50 text-[#D4C5A0] bg-transparent hover:bg-[#D4C5A0]/10 hover:border-[#D4C5A0] backdrop-blur-sm transition-all duration-300 rounded-full px-8 py-6 text-base font-medium">            <div className={"flex flex-wrap gap-3 sm:gap-4 transition-all duration-1000 " + (isVisible ? "opacity-100 translate-y-0 delay-400" : "opacity-0 translate-y-8")}>

                <a href="#servicios" className="flex items-center gap-3">              <Button asChild size="lg" className="group relative bg-gradient-to-r from-[#D4C5A0] to-[#E4D5B0] text-[#1c1c1e] hover:shadow-[0_0_40px_rgba(212,197,160,0.4)] transition-all duration-500 rounded-full px-6 sm:px-8 py-5 sm:py-6 text-sm sm:text-base font-medium overflow-hidden">

                  <span>Ver servicios</span>                <a href="https://wa.me/5491234567890" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 sm:gap-3 relative z-10">

                  <svg className="w-5 h-5 group-hover:rotate-90 transition-transform duration-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">                  <span className="relative z-10">Agenda tu consulta</span>

                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform relative z-10" />

                  </svg>                  <div className="absolute inset-0 bg-gradient-to-r from-[#E4D5B0] to-[#D4C5A0] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                </a>                </a>

              </Button>              </Button>

            </div>              <Button asChild size="lg" variant="outline" className="group border-2 border-[#D4C5A0]/50 text-[#D4C5A0] bg-transparent hover:bg-[#D4C5A0]/10 hover:border-[#D4C5A0] backdrop-blur-sm transition-all duration-300 rounded-full px-6 sm:px-8 py-5 sm:py-6 text-sm sm:text-base font-medium">

                <a href="#servicios" className="flex items-center gap-2 sm:gap-3">

            <div className={`grid grid-cols-3 gap-3 sm:gap-4 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0 delay-400" : "opacity-0 translate-y-8"}`}>                  <span>Ver servicios</span>

              <div className="group p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl hover:bg-white/10 hover:border-[#D4C5A0]/30 transition-all duration-300 cursor-pointer">                  <svg className="w-4 h-4 sm:w-5 sm:h-5 group-hover:rotate-90 transition-transform duration-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">

                <div className="text-3xl font-light text-[#D4C5A0] mb-1 group-hover:scale-110 transition-transform">98%</div>                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />

                <div className="text-xs text-white/50 uppercase tracking-wider">Satisfacción</div>                  </svg>

              </div>                </a>

              <div className="group p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl hover:bg-white/10 hover:border-[#D4C5A0]/30 transition-all duration-300 cursor-pointer">              </Button>

                <div className="text-3xl font-light text-[#D4C5A0] mb-1 group-hover:scale-110 transition-transform">$50M+</div>            </div>

                <div className="text-xs text-white/50 uppercase tracking-wider">En ventas</div>

              </div>            <div className={"grid grid-cols-3 gap-3 sm:gap-4 transition-all duration-1000 " + (isVisible ? "opacity-100 translate-y-0 delay-500" : "opacity-0 translate-y-8")}>

              <div className="group p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl hover:bg-white/10 hover:border-[#D4C5A0]/30 transition-all duration-300 cursor-pointer">              <div className="group p-3 sm:p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl hover:bg-white/10 hover:border-[#D4C5A0]/30 transition-all duration-300 cursor-pointer">

                <div className="text-3xl font-light text-[#D4C5A0] mb-1 group-hover:scale-110 transition-transform">24/7</div>                <div className="text-2xl sm:text-3xl font-light text-[#D4C5A0] mb-1 group-hover:scale-110 transition-transform">98%</div>

                <div className="text-xs text-white/50 uppercase tracking-wider">Disponible</div>                <div className="text-[10px] sm:text-xs text-white/50 uppercase tracking-wider">Satisfacción</div>

              </div>              </div>

            </div>              <div className="group p-3 sm:p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl hover:bg-white/10 hover:border-[#D4C5A0]/30 transition-all duration-300 cursor-pointer">

          </div>                <div className="text-2xl sm:text-3xl font-light text-[#D4C5A0] mb-1 group-hover:scale-110 transition-transform">$50M+</div>

                <div className="text-[10px] sm:text-xs text-white/50 uppercase tracking-wider">En ventas</div>

          {/* Right content - Image gallery with modern layout */}              </div>

          <div className="relative max-w-2xl mx-auto lg:mx-0">              <div className="group p-3 sm:p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl hover:bg-white/10 hover:border-[#D4C5A0]/30 transition-all duration-300 cursor-pointer">

            <div className="grid grid-cols-2 gap-4 lg:gap-6">                <div className="text-2xl sm:text-3xl font-light text-[#D4C5A0] mb-1 group-hover:scale-110 transition-transform">24/7</div>

              {/* Main large image */}                <div className="text-[10px] sm:text-xs text-white/50 uppercase tracking-wider">Disponible</div>

              <div className={`col-span-2 relative aspect-[16/11] rounded-3xl overflow-hidden group transition-all duration-1000 ${isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"}`}>              </div>

                <div className="absolute inset-0 bg-gradient-to-br from-[#D4C5A0]/20 to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />            </div>

                <Image           </div>

                  src="/images/design-mode/DSC00078.JPG.jpeg" 

                  alt="Pablo Castañeda"           <div className="relative max-w-2xl mx-auto lg:mx-0">

                  fill             <div className="grid grid-cols-2 gap-4 lg:gap-6">

                  className="object-cover object-[center_20%] group-hover:scale-110 transition-transform duration-700"               {/* Main large image */}

                />              <div className={"col-span-2 relative aspect-[16/11] rounded-3xl overflow-hidden group transition-all duration-1000 " + (isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95")}>

                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent z-10" />                <div className="absolute inset-0 bg-gradient-to-br from-[#D4C5A0]/20 to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="absolute bottom-6 left-6 right-6 z-20">                <Image 

                  <div className="flex items-end justify-between">                  src="/images/design-mode/DSC00078.JPG.jpeg" 

                    <div>                  alt="Pablo Castañeda" 

                      <p className="text-white/60 text-sm mb-1">Experto en</p>                  fill 

                      <p className="text-white text-2xl font-light">Bienes Raíces Premium</p>                  className="object-cover object-[center_20%] group-hover:scale-110 transition-transform duration-700" 

                    </div>                />

                    <div className="w-12 h-12 rounded-full bg-[#D4C5A0]/20 backdrop-blur-xl border border-[#D4C5A0]/30 flex items-center justify-center group-hover:scale-110 transition-transform">                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent z-10" />

                      <ArrowRight className="w-5 h-5 text-[#D4C5A0]" />                <div className="absolute bottom-6 left-6 right-6 z-20">

                    </div>                  <div className="flex items-end justify-between">

                  </div>                    <div>

                </div>                      <p className="text-white/60 text-sm mb-1">Experto en</p>

              </div>                      <p className="text-white text-2xl font-light">Bienes Raíces Premium</p>

                    </div>

              {/* Video preview */}                    <div className="w-12 h-12 rounded-full bg-[#D4C5A0]/20 backdrop-blur-xl border border-[#D4C5A0]/30 flex items-center justify-center group-hover:scale-110 transition-transform">

              <div className={`relative aspect-[4/3] rounded-2xl overflow-hidden group transition-all duration-1000 delay-200 ${isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"}`}>                      <ArrowRight className="w-5 h-5 text-[#D4C5A0]" />

                <video                     </div>

                  autoPlay                   </div>

                  muted                 </div>

                  loop               </div>

                  playsInline 

                  className="absolute inset-0 w-full h-full object-cover object-[center_20%] group-hover:scale-110 transition-transform duration-700"              {/* Video preview */}

                >              <div className={"relative aspect-[4/3] rounded-2xl overflow-hidden group transition-all duration-1000 delay-200 " + (isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95")}>

                  <source src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/7.%20COMO%20ELEGIR%20MI%20PROPIEDAD-2-pLu5cIzdVdbv0kanLkhilngkuzUaUb.mp4" type="video/mp4" />                <video 

                </video>                  autoPlay 

                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors z-10" />                  muted 

                <Dialog>                  loop 

                  <DialogTrigger asChild>                  playsInline 

                    <button className="absolute inset-0 z-20 flex items-center justify-center">                  className="absolute inset-0 w-full h-full object-cover object-[center_20%] group-hover:scale-110 transition-transform duration-700"

                      <div className="w-16 h-16 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center group-hover:scale-110 group-hover:bg-white transition-all duration-300 shadow-2xl">                >

                        <Play className="w-6 h-6 text-[#1c1c1e] ml-1" fill="currentColor" />                  <source src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/7.%20COMO%20ELEGIR%20MI%20PROPIEDAD-2-pLu5cIzdVdbv0kanLkhilngkuzUaUb.mp4" type="video/mp4" />

                      </div>                </video>

                    </button>                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors z-10" />

                  </DialogTrigger>                <Dialog>

                  <DialogContent className="max-w-4xl w-full p-0 bg-black border-0">                  <DialogTrigger asChild>

                    <video controls autoPlay className="w-full h-auto">                    <button className="absolute inset-0 z-20 flex items-center justify-center">

                      <source src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/7.%20COMO%20ELEGIR%20MI%20PROPIEDAD-2-pLu5cIzdVdbv0kanLkhilngkuzUaUb.mp4" type="video/mp4" />                      <div className="w-16 h-16 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center group-hover:scale-110 group-hover:bg-white transition-all duration-300 shadow-2xl">

                    </video>                        <Play className="w-6 h-6 text-[#1c1c1e] ml-1" fill="currentColor" />

                  </DialogContent>                      </div>

                </Dialog>                    </button>

              </div>                  </DialogTrigger>

                  <DialogContent className="max-w-4xl w-full p-0 bg-black border-0">

              {/* Info card */}                    <video controls autoPlay className="w-full h-auto">

              <div className={`relative aspect-[4/3] rounded-2xl overflow-hidden p-6 bg-gradient-to-br from-[#D4C5A0]/10 via-[#D4C5A0]/5 to-transparent border border-[#D4C5A0]/20 backdrop-blur-xl group hover:border-[#D4C5A0]/40 transition-all duration-1000 delay-300 ${isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"}`}>                      <source src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/7.%20COMO%20ELEGIR%20MI%20PROPIEDAD-2-pLu5cIzdVdbv0kanLkhilngkuzUaUb.mp4" type="video/mp4" />

                <div className="h-full flex flex-col justify-between">                    </video>

                  <div>                  </DialogContent>

                    <div className="text-5xl font-light text-[#D4C5A0] mb-2 group-hover:scale-110 transition-transform origin-left">15+</div>                </Dialog>

                    <p className="text-white/60 text-sm">Años liderando el mercado inmobiliario con excelencia</p>              </div>

                  </div>

                  <div className="flex items-center gap-2 text-[#D4C5A0] text-sm group-hover:translate-x-2 transition-transform">              {/* Info card */}

                    <span>Conoce más</span>              <div className={"relative aspect-[4/3] rounded-2xl overflow-hidden p-6 bg-gradient-to-br from-[#D4C5A0]/10 via-[#D4C5A0]/5 to-transparent border border-[#D4C5A0]/20 backdrop-blur-xl group hover:border-[#D4C5A0]/40 transition-all duration-1000 delay-300 " + (isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95")}>

                    <ArrowRight className="w-4 h-4" />                <div className="h-full flex flex-col justify-between">

                  </div>                  <div>

                </div>                    <div className="text-5xl font-light text-[#D4C5A0] mb-2 group-hover:scale-110 transition-transform origin-left">15+</div>

              </div>                    <p className="text-white/60 text-sm">Años liderando el mercado inmobiliario con excelencia</p>

            </div>                  </div>

                  <div className="flex items-center gap-2 text-[#D4C5A0] text-sm group-hover:translate-x-2 transition-transform">

            {/* Floating elements */}                    <span>Conoce más</span>

            <div className={`absolute -top-4 -right-4 w-24 h-24 rounded-full bg-gradient-to-br from-[#D4C5A0]/30 to-transparent blur-2xl animate-float-3 ${isVisible ? "opacity-100" : "opacity-0"}`} />                    <ArrowRight className="w-4 h-4" />

            <div className={`absolute -bottom-8 -left-8 w-32 h-32 rounded-full bg-gradient-to-tr from-[#D4C5A0]/20 to-transparent blur-3xl animate-float-4 ${isVisible ? "opacity-100" : "opacity-0"}`} />                  </div>

          </div>                </div>

        </div>              </div>

      </div>            </div>



      {/* Scroll indicator */}            {/* Floating elements */}

      <div className={`absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 transition-all duration-1000 delay-500 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>            <div className={"absolute -top-4 -right-4 w-24 h-24 rounded-full bg-gradient-to-br from-[#D4C5A0]/30 to-transparent blur-2xl animate-float-3 " + (isVisible ? "opacity-100" : "opacity-0")} />

        <span className="text-white/40 text-xs uppercase tracking-widest">Scroll</span>            <div className={"absolute -bottom-8 -left-8 w-32 h-32 rounded-full bg-gradient-to-tr from-[#D4C5A0]/20 to-transparent blur-3xl animate-float-4 " + (isVisible ? "opacity-100" : "opacity-0")} />

        <div className="w-[1px] h-12 bg-gradient-to-b from-[#D4C5A0]/50 to-transparent animate-pulse" />          </div>

      </div>        </div>

    </section>      </div>

  )

}      <div className={"absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 transition-all duration-1000 delay-700 " + (isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8")}>

        <span className="text-white/40 text-xs uppercase tracking-widest">Scroll</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-[#D4C5A0]/50 to-transparent animate-pulse" />
      </div>
    </section>
  )
}
