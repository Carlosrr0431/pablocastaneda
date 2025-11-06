"use client"

import { useEffect, useRef, useState } from "react"
import { ArrowRight, Award, TrendingUp, Users, Building2, Target, Shield, Sparkles } from "lucide-react"

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

  const stats = [
    { icon: TrendingUp, value: "15+", label: "Años de experiencia", color: "from-[#D4C5A0] to-[#E4D5B0]" },
    { icon: Building2, value: "+500", label: "Operaciones exitosas", color: "from-[#E4D5B0] to-[#D4C5A0]" },
    { icon: Users, value: "98%", label: "Clientes satisfechos", color: "from-[#D4C5A0] to-[#C4B590]" },
    { icon: Award, value: "$50M+", label: "En transacciones", color: "from-[#C4B590] to-[#D4C5A0]" },
  ]

  const values = [
    {
      icon: Target,
      title: "Precisión Estratégica",
      description: "Análisis profundo del mercado y negociación basada en datos para maximizar tu inversión.",
    },
    {
      icon: Shield,
      title: "Confianza Total",
      description: "Transparencia absoluta en cada etapa del proceso, construyendo relaciones duraderas.",
    },
    {
      icon: Sparkles,
      title: "Excelencia Premium",
      description: "Servicio personalizado de alto nivel con atención a cada detalle de tu proyecto.",
    },
  ]

  return (
    <section ref={sectionRef} id="sobre-mi" className="relative pt-0 pb-20 md:pb-32 overflow-visible">
      <div className="relative container mx-auto px-4 sm:px-6 max-w-6xl pt-20 md:pt-32 z-10">
        {/* Header con badge */}
        <div className="mb-12 md:mb-16">
          <div
            className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#D4C5A0]/20 mb-6 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          >
            <div className="w-1.5 h-1.5 rounded-full bg-[#D4C5A0] animate-pulse" />
            <span className="text-[#D4C5A0] text-xs font-medium uppercase tracking-wider">Sobre mí</span>
          </div>

          <h2
            className={`text-3xl md:text-4xl lg:text-5xl font-light text-white leading-tight mb-6 max-w-3xl transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0 delay-100" : "opacity-0 translate-y-8"}`}
          >
            Transformo oportunidades inmobiliarias en{" "}
            <span className="text-[#D4C5A0]">inversiones estratégicas</span>
          </h2>

          <p
            className={`text-base md:text-lg text-white/60 max-w-2xl font-light leading-relaxed transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0 delay-200" : "opacity-0 translate-y-8"}`}
          >
            Con más de 15 años especializándome en bienes raíces premium, combino visión estratégica, análisis de mercado
            y un servicio excepcional para llevar cada proyecto al siguiente nivel.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-16 md:mb-20">
          {stats.map((stat, index) => {
            const Icon = stat.icon
            return (
              <div
                key={index}
                className={`group relative p-5 md:p-6 rounded-2xl bg-gradient-to-br from-white/5 to-white/0 border border-white/10 hover:border-[#D4C5A0]/30 transition-all duration-500 hover:scale-105 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
                style={{ transitionDelay: `${300 + index * 100}ms` }}
              >
                <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${stat.color} opacity-10 flex items-center justify-center mb-4 group-hover:opacity-20 transition-opacity`}>
                  <Icon className="w-5 h-5 text-[#D4C5A0]" />
                </div>
                <div className={`text-3xl md:text-4xl font-light text-[#D4C5A0] mb-2 group-hover:scale-110 transition-transform origin-left`}>
                  {stat.value}
                </div>
                <div className="text-white/50 text-xs md:text-sm font-light leading-tight">{stat.label}</div>
                
                {/* Efecto hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#D4C5A0]/0 to-[#D4C5A0]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl pointer-events-none" />
              </div>
            )
          })}
        </div>

        {/* Valores principales */}
        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {values.map((value, index) => {
            const Icon = value.icon
            return (
              <div
                key={index}
                className={`group relative p-6 md:p-8 rounded-2xl bg-gradient-to-br from-white/5 to-transparent border border-white/10 hover:border-[#D4C5A0]/40 transition-all duration-500 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
                style={{ transitionDelay: `${700 + index * 150}ms` }}
              >
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#D4C5A0]/20 to-[#E4D5B0]/10 flex items-center justify-center mb-5 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                  <Icon className="w-6 h-6 text-[#D4C5A0]" />
                </div>
                
                <h3 className="text-white text-lg md:text-xl font-light mb-3 group-hover:text-[#D4C5A0] transition-colors">
                  {value.title}
                </h3>
                
                <p className="text-white/50 text-sm md:text-base font-light leading-relaxed">
                  {value.description}
                </p>

                {/* Decoración */}
                <div className="absolute top-4 right-4 w-20 h-20 bg-gradient-to-br from-[#D4C5A0]/5 to-transparent rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            )
          })}
        </div>

        {/* CTA Section */}
        <div
          className={`mt-16 md:mt-20 text-center transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0 delay-[1200ms]" : "opacity-0 translate-y-8"}`}
        >
          <p className="text-white/60 text-sm md:text-base font-light mb-6">
            ¿Listo para dar el siguiente paso en tu proyecto inmobiliario?
          </p>
          <a
            href="#contacto"
            className="inline-flex items-center gap-2 text-[#D4C5A0] text-sm font-medium hover:gap-3 transition-all duration-300 group"
          >
            <span>Agenda una consulta estratégica</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  )
}
