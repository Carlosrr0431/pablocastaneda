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
        <div className="max-w-4xl mx-auto">
          <h2
            className={`text-white text-3xl md:text-4xl lg:text-5xl font-light leading-tight mb-12 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          >
            <span className="text-[#D4C5A0]">Experto</span> en asesoría inmobiliaria con{" "}
            <span className="pencil-wavy">visión estratégica</span>
          </h2>

          <div className="space-y-8 text-white/70 text-lg md:text-xl leading-relaxed">
            <p
              className={`transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0 delay-200" : "opacity-0 translate-y-8"}`}
            >
              Con más de 15 años de trayectoria en el mercado inmobiliario, me especializo en brindar{" "}
              <span className="text-white font-normal">soluciones personalizadas</span> para la compra, venta y{" "}
              inversión en propiedades de alto valor.
            </p>
            <p
              className={`transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0 delay-400" : "opacity-0 translate-y-8"}`}
            >
              Mi enfoque combina <span className="text-[#D4C5A0]">análisis de mercado profundo</span>, negociación
              estratégica y un servicio excepcional que va más allá de cerrar una transacción: construyo relaciones de
              confianza a largo plazo.
            </p>
            <p
              className={`transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0 delay-600" : "opacity-0 translate-y-8"}`}
            >
              Ya sea que busques tu hogar ideal, invertir inteligentemente o vender tu propiedad al mejor precio,{" "}
              <span className="text-white font-normal">te acompaño en cada paso del proceso</span> con profesionalismo
              y dedicación.
            </p>
          </div>

          <div
            className={`mt-12 grid grid-cols-2 md:grid-cols-4 gap-8 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0 delay-800" : "opacity-0 translate-y-8"}`}
          >
            <div className="text-center">
              <div className="text-[#D4C5A0] text-4xl md:text-5xl font-light mb-2">15+</div>
              <div className="text-white/60 text-sm uppercase tracking-wider">Años experiencia</div>
            </div>
            <div className="text-center">
              <div className="text-[#D4C5A0] text-4xl md:text-5xl font-light mb-2">500+</div>
              <div className="text-white/60 text-sm uppercase tracking-wider">Operaciones</div>
            </div>
            <div className="text-center">
              <div className="text-[#D4C5A0] text-4xl md:text-5xl font-light mb-2">98%</div>
              <div className="text-white/60 text-sm uppercase tracking-wider">Satisfacción</div>
            </div>
            <div className="text-center">
              <div className="text-[#D4C5A0] text-4xl md:text-5xl font-light mb-2">$50M+</div>
              <div className="text-white/60 text-sm uppercase tracking-wider">En ventas</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
