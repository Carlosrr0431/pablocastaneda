"use client"

import { useEffect, useRef, useState } from "react"

export function BuildSection() {
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
    <section ref={sectionRef} className="relative bg-[#1c1c1e] py-24 border-t border-white/5 overflow-hidden">
      <div className="absolute bottom-0 left-1/4 w-[800px] h-[800px] bg-[#4a4a3a]/20 rounded-full blur-[180px] animate-float-5" />
      <div className="absolute top-1/3 right-1/4 w-[700px] h-[700px] bg-[#5a5a4a]/18 rounded-full blur-[170px] animate-float-1" />

      <div className="relative container mx-auto px-6">
        <div
          className={`text-center mb-20 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <h2 className="text-white text-4xl md:text-5xl font-light mb-4 leading-tight">
            <span className="marker-highlight">Construí tu negocio</span> como
            <br />
            agente de bienes raíces
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-12 max-w-6xl mx-auto">
          {[
            {
              title: "Establecimientos premium",
              description:
                "Accede a las mejores propiedades y desarrollos inmobiliarios del mercado. Trabaja con proyectos de alta gama y clientes premium que buscan excelencia en el servicio.",
            },
            {
              title: "Acompañamiento 1 a 1",
              description:
                "Recibe mentoría personalizada y acompañamiento continuo en tu desarrollo profesional. Aprende de casos reales y experiencias concretas del mercado inmobiliario.",
            },
            {
              title: "Entrená con el equipo",
              description:
                "Participa de entrenamientos grupales, workshops y sesiones de role-playing. Mejora tus habilidades de negociación y cierre con profesionales experimentados.",
            },
          ].map((item, index) => (
            <div
              key={index}
              className={`space-y-4 text-center md:text-left transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <h3 className="text-white text-2xl font-light hover:text-[#D4AF37] transition-colors">{item.title}</h3>
              <p className="text-white/60 text-base leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
