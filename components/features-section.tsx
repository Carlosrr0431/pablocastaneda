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
    <section ref={sectionRef} id="servicios" className="relative bg-[#1c1c1e] py-24 overflow-hidden">
      <div className="absolute bottom-0 right-0 w-[700px] h-[700px] bg-[#5a5a4a]/22 rounded-full blur-[180px] animate-float-4" />
      <div className="absolute bottom-1/3 right-1/4 w-[600px] h-[600px] bg-[#4a4a3a]/18 rounded-full blur-[160px] animate-float-5" />

      <div className="relative container mx-auto px-6">
        <div className="text-center mb-16">
          <h2
            className={`text-white text-3xl md:text-4xl lg:text-5xl font-light mb-6 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          >
            Servicios <span className="text-[#D4C5A0]">integrales</span>
          </h2>
          <p
            className={`text-white/60 text-lg md:text-xl max-w-3xl mx-auto transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0 delay-100" : "opacity-0 translate-y-8"}`}
          >
            Soluciones personalizadas para cada etapa de tu proyecto inmobiliario
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {/* Servicio 1 */}
          <Card
            className={`relative overflow-hidden bg-gradient-to-br from-[#2a2a2c] to-[#1c1c1e] border-2 border-white/10 p-8 rounded-2xl backdrop-blur-xl hover:border-[#D4C5A0]/50 hover:scale-105 transition-all duration-500 group ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#D4C5A0]/5 rounded-full blur-3xl group-hover:bg-[#D4C5A0]/10 transition-all duration-500" />
            <div className="relative z-10 space-y-4">
              <div className="w-14 h-14 rounded-2xl bg-[#D4C5A0]/10 flex items-center justify-center mb-6 group-hover:bg-[#D4C5A0]/20 transition-all duration-300">
                <svg className="w-7 h-7 text-[#D4C5A0]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
              </div>
              <h3 className="text-white text-xl font-light">Compra de propiedades</h3>
              <p className="text-white/60 text-sm leading-relaxed">
                Te guío en la búsqueda y adquisición de tu propiedad ideal, desde el análisis de opciones hasta el cierre legal.
              </p>
              <ul className="space-y-2 text-white/50 text-sm pt-4">
                <li className="flex items-start gap-2">
                  <span className="w-1 h-1 rounded-full bg-[#D4C5A0] mt-2" />
                  <span>Búsqueda personalizada</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1 h-1 rounded-full bg-[#D4C5A0] mt-2" />
                  <span>Análisis de mercado</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1 h-1 rounded-full bg-[#D4C5A0] mt-2" />
                  <span>Negociación estratégica</span>
                </li>
              </ul>
            </div>
          </Card>

          {/* Servicio 2 */}
          <Card
            className={`relative overflow-hidden bg-gradient-to-br from-[#2a2a2c] to-[#1c1c1e] border-2 border-white/10 p-8 rounded-2xl backdrop-blur-xl hover:border-[#D4C5A0]/50 hover:scale-105 transition-all duration-500 group delay-100 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#D4C5A0]/5 rounded-full blur-3xl group-hover:bg-[#D4C5A0]/10 transition-all duration-500" />
            <div className="relative z-10 space-y-4">
              <div className="w-14 h-14 rounded-2xl bg-[#D4C5A0]/10 flex items-center justify-center mb-6 group-hover:bg-[#D4C5A0]/20 transition-all duration-300">
                <svg className="w-7 h-7 text-[#D4C5A0]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-white text-xl font-light">Venta de propiedades</h3>
              <p className="text-white/60 text-sm leading-relaxed">
                Maximizo el valor de tu propiedad con estrategias de marketing avanzadas y negociación profesional.
              </p>
              <ul className="space-y-2 text-white/50 text-sm pt-4">
                <li className="flex items-start gap-2">
                  <span className="w-1 h-1 rounded-full bg-[#D4C5A0] mt-2" />
                  <span>Valuación profesional</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1 h-1 rounded-full bg-[#D4C5A0] mt-2" />
                  <span>Marketing digital 360°</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1 h-1 rounded-full bg-[#D4C5A0] mt-2" />
                  <span>Fotografía profesional</span>
                </li>
              </ul>
            </div>
          </Card>

          {/* Servicio 3 */}
          <Card
            className={`relative overflow-hidden bg-gradient-to-br from-[#2a2a2c] to-[#1c1c1e] border-2 border-white/10 p-8 rounded-2xl backdrop-blur-xl hover:border-[#D4C5A0]/50 hover:scale-105 transition-all duration-500 group delay-200 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#D4C5A0]/5 rounded-full blur-3xl group-hover:bg-[#D4C5A0]/10 transition-all duration-500" />
            <div className="relative z-10 space-y-4">
              <div className="w-14 h-14 rounded-2xl bg-[#D4C5A0]/10 flex items-center justify-center mb-6 group-hover:bg-[#D4C5A0]/20 transition-all duration-300">
                <svg className="w-7 h-7 text-[#D4C5A0]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-white text-xl font-light">Inversión inmobiliaria</h3>
              <p className="text-white/60 text-sm leading-relaxed">
                Asesoría especializada en inversiones rentables con análisis detallado de ROI y potencial de valorización.
              </p>
              <ul className="space-y-2 text-white/50 text-sm pt-4">
                <li className="flex items-start gap-2">
                  <span className="w-1 h-1 rounded-full bg-[#D4C5A0] mt-2" />
                  <span>Análisis de rentabilidad</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1 h-1 rounded-full bg-[#D4C5A0] mt-2" />
                  <span>Portfolio inmobiliario</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1 h-1 rounded-full bg-[#D4C5A0] mt-2" />
                  <span>Estrategia de inversión</span>
                </li>
              </ul>
            </div>
          </Card>

          {/* Servicio 4 */}
          <Card
            className={`relative overflow-hidden bg-gradient-to-br from-[#2a2a2c] to-[#1c1c1e] border-2 border-white/10 p-8 rounded-2xl backdrop-blur-xl hover:border-[#D4C5A0]/50 hover:scale-105 transition-all duration-500 group delay-300 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#D4C5A0]/5 rounded-full blur-3xl group-hover:bg-[#D4C5A0]/10 transition-all duration-500" />
            <div className="relative z-10 space-y-4">
              <div className="w-14 h-14 rounded-2xl bg-[#D4C5A0]/10 flex items-center justify-center mb-6 group-hover:bg-[#D4C5A0]/20 transition-all duration-300">
                <svg className="w-7 h-7 text-[#D4C5A0]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-white text-xl font-light">Asesoría legal</h3>
              <p className="text-white/60 text-sm leading-relaxed">
                Respaldo legal completo en todas tus operaciones inmobiliarias para garantizar transacciones seguras.
              </p>
              <ul className="space-y-2 text-white/50 text-sm pt-4">
                <li className="flex items-start gap-2">
                  <span className="w-1 h-1 rounded-full bg-[#D4C5A0] mt-2" />
                  <span>Revisión de documentación</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1 h-1 rounded-full bg-[#D4C5A0] mt-2" />
                  <span>Due diligence completo</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1 h-1 rounded-full bg-[#D4C5A0] mt-2" />
                  <span>Cierre de operaciones</span>
                </li>
              </ul>
            </div>
          </Card>

          {/* Servicio 5 */}
          <Card
            className={`relative overflow-hidden bg-gradient-to-br from-[#2a2a2c] to-[#1c1c1e] border-2 border-white/10 p-8 rounded-2xl backdrop-blur-xl hover:border-[#D4C5A0]/50 hover:scale-105 transition-all duration-500 group delay-400 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#D4C5A0]/5 rounded-full blur-3xl group-hover:bg-[#D4C5A0]/10 transition-all duration-500" />
            <div className="relative z-10 space-y-4">
              <div className="w-14 h-14 rounded-2xl bg-[#D4C5A0]/10 flex items-center justify-center mb-6 group-hover:bg-[#D4C5A0]/20 transition-all duration-300">
                <svg className="w-7 h-7 text-[#D4C5A0]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <h3 className="text-white text-xl font-light">Valuación profesional</h3>
              <p className="text-white/60 text-sm leading-relaxed">
                Análisis exhaustivo del valor real de mercado de tu propiedad con metodología profesional.
              </p>
              <ul className="space-y-2 text-white/50 text-sm pt-4">
                <li className="flex items-start gap-2">
                  <span className="w-1 h-1 rounded-full bg-[#D4C5A0] mt-2" />
                  <span>Estudio comparativo</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1 h-1 rounded-full bg-[#D4C5A0] mt-2" />
                  <span>Análisis de ubicación</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1 h-1 rounded-full bg-[#D4C5A0] mt-2" />
                  <span>Proyección de valor</span>
                </li>
              </ul>
            </div>
          </Card>

          {/* Servicio 6 */}
          <Card
            className={`relative overflow-hidden bg-gradient-to-br from-[#2a2a2c] to-[#1c1c1e] border-2 border-white/10 p-8 rounded-2xl backdrop-blur-xl hover:border-[#D4C5A0]/50 hover:scale-105 transition-all duration-500 group delay-500 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#D4C5A0]/5 rounded-full blur-3xl group-hover:bg-[#D4C5A0]/10 transition-all duration-500" />
            <div className="relative z-10 space-y-4">
              <div className="w-14 h-14 rounded-2xl bg-[#D4C5A0]/10 flex items-center justify-center mb-6 group-hover:bg-[#D4C5A0]/20 transition-all duration-300">
                <svg className="w-7 h-7 text-[#D4C5A0]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-white text-xl font-light">Asesoría personalizada</h3>
              <p className="text-white/60 text-sm leading-relaxed">
                Consultoría uno a uno para desarrollar la estrategia inmobiliaria perfecta para tus objetivos.
              </p>
              <ul className="space-y-2 text-white/50 text-sm pt-4">
                <li className="flex items-start gap-2">
                  <span className="w-1 h-1 rounded-full bg-[#D4C5A0] mt-2" />
                  <span>Sesiones individuales</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1 h-1 rounded-full bg-[#D4C5A0] mt-2" />
                  <span>Plan estratégico a medida</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1 h-1 rounded-full bg-[#D4C5A0] mt-2" />
                  <span>Seguimiento continuo</span>
                </li>
              </ul>
            </div>
          </Card>
        </div>
      </div>
    </section>
  )
}
