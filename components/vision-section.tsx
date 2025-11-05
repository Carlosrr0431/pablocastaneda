"use client"

import { Card } from "@/components/ui/card"
import Image from "next/image"
import { useEffect, useRef, useState } from "react"

export function VisionSection() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.2 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="bg-[#2c2c2e] py-24 border-t border-white/5">
      <div className="container mx-auto px-6">
        <div
          className={`mb-16 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <h2 className="text-white text-4xl md:text-5xl font-light mb-6 leading-tight">
            <span className="marker-highlight">Visión del Real</span>
            <br />
            Estate en
            <br />
            Argentina
          </h2>
          <p className="text-white/60 text-base max-w-md">
            Conoce las perspectivas y análisis del mercado inmobiliario argentino
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              title: "Mercado actual",
              description: "Análisis profundo del mercado inmobiliario en Argentina",
              image:
                "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-10-20%20at%2010.07.15-2IrcQDopMCgAxMyJ39nPBaIFTEz9TD.jpeg",
            },
            {
              title: "Tendencias 2024",
              description: "Las principales tendencias del sector inmobiliario",
              image:
                "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_5036-4ztB9GVzCnY73YmFt4Swtxowekq6Ze.jpg",
            },
            {
              title: "Oportunidades",
              description: "Dónde están las mejores oportunidades de inversión",
              image:
                "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_5115-Q736h8HzgsW6WoFieoqWlsL9oWx2Sk.jpg",
            },
          ].map((item, index) => (
            <Card
              key={index}
              className={`bg-transparent border-2 border-white/30 overflow-hidden group cursor-pointer hover:border-white/50 hover-scale transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="relative aspect-[3/4]">
                <Image
                  src={item.image || "/placeholder.svg"}
                  alt={item.title}
                  fill
                  className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700"
                />
                <div className="absolute top-4 right-4">
                  <span className="bg-red-600 text-white text-xs font-medium px-3 py-1 rounded animate-pulse">NEW</span>
                </div>
              </div>
              <div className="p-6 space-y-2">
                <h3 className="text-white text-xl font-light group-hover:text-[#D4AF37] transition-colors">
                  {item.title}
                </h3>
                <p className="text-white/60 text-sm leading-relaxed">{item.description}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
