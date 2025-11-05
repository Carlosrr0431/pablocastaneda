"use client"

import { Card } from "@/components/ui/card"
import { useEffect, useState } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export function TestimonialsSection() {
  const [isVisible, setIsVisible] = useState(false)
  const [currentIndex, setCurrentIndex] = useState(0)

  const testimonials = [
    {
      name: "María González",
      role: "Agente Inmobiliario",
      image: "/professional-woman-real-estate-agent.png",
      quote: "Gracias a la formación y las herramientas proporcionadas, logré triplicar mis ventas en solo 6 meses.",
      stats: "300% aumento en ventas",
    },
    {
      name: "Carlos Rodríguez",
      role: "Broker Asociado",
      image: "/professional-man-real-estate-broker.jpg",
      quote:
        "El sistema de trabajo me permitió construir un equipo sólido y alcanzar la libertad financiera que buscaba.",
      stats: "Equipo de 15 agentes",
    },
    {
      name: "Ana Martínez",
      role: "Líder de Equipo",
      image: "/professional-woman-team-leader.jpg",
      quote: "La metodología y el acompañamiento constante fueron clave para desarrollar mi carrera en el Real Estate.",
      stats: "$2M+ en transacciones",
    },
  ]

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    const element = document.getElementById("testimonials-section")
    if (element) observer.observe(element)

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [testimonials.length])

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section id="testimonials-section" className="relative py-20 md:py-24 bg-[#1c1c1e] overflow-hidden">
      {/* Animated gradient backgrounds */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 right-0 w-[800px] h-[800px] bg-[#8B7E4F]/[0.15] rounded-full blur-[120px] animate-float-1" />
        <div className="absolute top-1/4 right-1/3 w-[600px] h-[600px] bg-[#6B6B3D]/[0.12] rounded-full blur-[100px] animate-float-3" />
      </div>

      <div className="relative container mx-auto px-6">
        <div
          className={`text-center mb-12 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3">
            Historias de{" "}
            <span className="relative inline-block">
              <span className="relative z-10">éxito</span>
              <svg
                className="absolute -bottom-2 left-0 w-full h-3 pencil-underline-svg"
                viewBox="0 0 200 12"
                preserveAspectRatio="none"
              >
                <path
                  d="M2,7 Q50,3 100,7 T198,7"
                  fill="none"
                  stroke="#B8A76B"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                />
              </svg>
            </span>
          </h2>
          <p className="text-base text-gray-400 max-w-2xl mx-auto">
            Conoce las experiencias de quienes transformaron su carrera en el Real Estate
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Carousel wrapper */}
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-700 ease-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={index} className="w-full flex-shrink-0 px-4">
                  <Card className="group relative bg-transparent border-2 border-white/30 rounded-3xl overflow-hidden backdrop-blur-xl hover:border-white/50 transition-all duration-700 hover-scale mx-auto max-w-xl">
                    {/* Glass effect overlay */}
                    <div className="absolute inset-0 bg-gradient-to-br from-white/[0.08] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                    {/* Shine effect */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                      <div className="absolute top-0 -left-full h-full w-1/2 bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-12 group-hover:left-full transition-all duration-1000" />
                    </div>

                    <div className="relative p-6 md:p-8 flex flex-col md:flex-row gap-4 md:gap-6 items-center">
                      {/* Image - smaller and circular */}
                      <div className="relative w-24 h-24 md:w-28 md:h-28 flex-shrink-0 rounded-full overflow-hidden">
                        <Image
                          src={testimonial.image || "/placeholder.svg"}
                          alt={testimonial.name}
                          fill
                          className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                        />
                      </div>

                      {/* Content */}
                      <div className="flex-1 space-y-3 text-center md:text-left">
                        <div>
                          <h3 className="text-xl font-bold text-white">{testimonial.name}</h3>
                          <p className="text-xs text-[#B8A76B]">{testimonial.role}</p>
                        </div>

                        <p className="text-gray-300 leading-relaxed italic text-base">"{testimonial.quote}"</p>

                        <div className="pt-3 border-t border-white/10">
                          <p className="text-xs font-semibold text-[#B8A76B]">{testimonial.stats}</p>
                        </div>
                      </div>
                    </div>
                  </Card>
                </div>
              ))}
            </div>
          </div>

          <Button
            variant="ghost"
            size="icon"
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white/10 hover:bg-white/20 text-white rounded-full backdrop-blur-sm"
          >
            <ChevronLeft className="w-6 h-6" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white/10 hover:bg-white/20 text-white rounded-full backdrop-blur-sm"
          >
            <ChevronRight className="w-6 h-6" />
          </Button>

          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex ? "bg-[#B8A76B] w-8" : "bg-white/30 hover:bg-white/50"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
