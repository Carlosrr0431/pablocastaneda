"use client"

import { useEffect, useRef, useState } from "react"

export function IntroSection() {
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
    <section ref={sectionRef} className="relative bg-[#2c2c2e] py-24 overflow-hidden">
      <div className="absolute bottom-0 right-0 w-[700px] h-[700px] bg-[#4a4a3a]/18 rounded-full blur-[200px] animate-float-2" />
      <div className="absolute bottom-1/4 right-1/3 w-[550px] h-[550px] bg-[#3a3a2a]/15 rounded-full blur-[160px] animate-float-3" />

      <div className="relative container mx-auto px-6">
        <div className="max-w-4xl">
          <h2
            className={`text-white/70 text-xl md:text-2xl font-light leading-relaxed mb-8 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          >
            Apasionado por el <span className="pencil-wavy">crecimiento y la productividad</span>, formador de equipos
            de alto rendimiento en el Real Estate.
          </h2>

          <div className="space-y-6 text-white/50 text-base leading-relaxed">
            <p
              className={`transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0 delay-200" : "opacity-0 translate-y-8"}`}
            >
              Quiero ayudarte a construir tu negocio en el sector inmobiliario. Contá con las mejores instalaciones, mentorías 1-a-1 y las herramientas necesarias para que alcances tus metas como agente del Real Estate. 
            </p>
            <p
              className={`transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0 delay-400" : "opacity-0 translate-y-8"}`}
            >
              Con 15 años de trayectoria en la comercialización de bienes raíces, estoy listo para acompañarte en tu crecimiento.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
