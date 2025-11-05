"use client"

import { Card } from "@/components/ui/card"
import { useEffect, useRef, useState } from "react"

export function FeaturesSection() {
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
    <section ref={sectionRef} className="relative bg-[#1c1c1e] py-24 overflow-hidden">
      <div className="absolute bottom-0 right-0 w-[700px] h-[700px] bg-[#5a5a4a]/22 rounded-full blur-[180px] animate-float-4" />
      <div className="absolute bottom-1/3 right-1/4 w-[600px] h-[600px] bg-[#4a4a3a]/18 rounded-full blur-[160px] animate-float-5" />

      <div className="relative container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Card 1 */}
          <Card
            className={`relative overflow-hidden bg-transparent border-2 border-white/30 p-10 rounded-3xl backdrop-blur-xl hover:border-white/50 hover-scale transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}
          >
            <div className="relative z-10 space-y-6">
              <h3 className="text-white text-2xl font-light border-l-2 border-[#8B7E3F] pl-4">
                <span className="marker-highlight">Padre, emprendedor</span> y otras pasiones
              </h3>
              <p className="text-white/60 text-base leading-relaxed">
                Soy padre de dos hijos, emprendedor y apasionado por el Real Estate. Me gusta el deporte, la lectura y
                la música. Creo en el trabajo en equipo, en la formación continua y en la productividad como pilares
                fundamentales para el éxito.
              </p>
              <ul className="space-y-3 text-white/50 text-sm">
                <li className="flex items-center gap-3 hover:text-white/70 transition-colors">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#8B7E3F]" />
                  Formación continua y desarrollo profesional
                </li>
                <li className="flex items-center gap-3 hover:text-white/70 transition-colors">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#8B7E3F]" />
                  Trabajo en equipo y colaboración
                </li>
                <li className="flex items-center gap-3 hover:text-white/70 transition-colors">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#8B7E3F]" />
                  Productividad y gestión del tiempo
                </li>
                <li className="flex items-center gap-3 hover:text-white/70 transition-colors">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#8B7E3F]" />
                  Resultados medibles y sostenibles
                </li>
              </ul>
            </div>
          </Card>

          {/* Card 2 */}
          <Card
            className={`relative overflow-hidden bg-transparent border-2 border-white/30 p-10 rounded-3xl backdrop-blur-xl hover:border-white/50 hover-scale transition-all duration-700 delay-200 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}
          >
            <div className="relative z-10 space-y-6">
              <h3 className="text-white text-2xl font-light border-l-2 border-[#8B7E3F] pl-4">
                <span className="marker-highlight">Construí tu negocio</span>
                <br />
                De agente inmobiliario a<br />
                broker de bienes raíces
              </h3>
              <p className="text-white/60 text-base leading-relaxed">
                Te acompaño en el proceso de construcción de tu negocio como agente de bienes raíces, desde la formación
                hasta la productividad. Mi objetivo es que puedas construir un negocio rentable y sostenible en el
                tiempo.
              </p>
              <ul className="space-y-3 text-white/50 text-sm">
                <li className="flex items-center gap-3 hover:text-white/70 transition-colors">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#8B7E3F]" />
                  Estrategia de negocio personalizada
                </li>
                <li className="flex items-center gap-3 hover:text-white/70 transition-colors">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#8B7E3F]" />
                  Marketing digital y redes sociales
                </li>
                <li className="flex items-center gap-3 hover:text-white/70 transition-colors">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#8B7E3F]" />
                  Gestión de equipos de alto rendimiento
                </li>
                <li className="flex items-center gap-3 hover:text-white/70 transition-colors">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#8B7E3F]" />
                  Herramientas de productividad
                </li>
              </ul>
            </div>
          </Card>
        </div>
      </div>
    </section>
  )
}
