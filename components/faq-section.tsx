"use client"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { useEffect, useRef, useState } from "react"

export function FAQSection() {
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

  const faqs = [
    {
      question: "¿Cómo funciona el proceso de compra de una propiedad?",
      answer:
        "El proceso comienza con una consulta personalizada donde analizamos tus necesidades y presupuesto. Te acompaño en la búsqueda, visitas, negociación, análisis legal y cierre de la operación. Mi objetivo es que cada paso sea transparente y exitoso.",
    },
    {
      question: "¿Qué servicios ofreces para vendedores?",
      answer:
        "Ofrezco valuación profesional, estrategia de marketing digital y tradicional, sesiones fotográficas profesionales, gestión de visitas, negociación con compradores y asesoramiento legal hasta el cierre. Todo diseñado para maximizar el valor de tu propiedad.",
    },
    {
      question: "¿Por qué elegir asesoría profesional en lugar de buscar por mi cuenta?",
      answer:
        "Como asesor inmobiliario experimentado, tengo acceso a propiedades exclusivas, conocimiento profundo del mercado, red de contactos profesionales y habilidades de negociación que pueden ahorrarte tiempo y dinero. Además, te protejo de riesgos legales y errores costosos.",
    },
    {
      question: "¿Trabajas con propiedades de inversión?",
      answer:
        "Sí, me especializo en análisis de inversión inmobiliaria. Evalúo rentabilidad, ubicación estratégica, potencial de valorización y retorno de inversión. Te ayudo a construir un portafolio inmobiliario rentable y seguro.",
    },
    {
      question: "¿Cuáles son tus honorarios?",
      answer:
        "Mis honorarios varían según el tipo de operación y servicios requeridos. Trabajo con estructura de comisión competitiva y transparente. En nuestra primera consulta, te explico detalladamente todos los costos sin sorpresas.",
    },
  ]

  return (
    <section ref={sectionRef} className="relative bg-[#2c2c2e] py-24 border-t border-white/5 overflow-hidden">
      <div className="absolute top-1/2 left-1/3 w-[750px] h-[750px] bg-[#3a3a2a]/16 rounded-full blur-[190px] animate-float-4" />

      <div className="relative container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2
            className={`text-white text-3xl md:text-4xl lg:text-5xl font-light mb-16 leading-tight transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          >
            <span className="marker-highlight">Preguntas frecuentes</span> sobre
            <br />
            asesoría inmobiliaria profesional
          </h2>

          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className={`border border-white/10 rounded-xl px-6 bg-[#1a1a1a]/50 backdrop-blur-sm hover:bg-[#1a1a1a] hover:border-[#8B7E3F]/50 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <AccordionTrigger className="text-white text-left hover:no-underline py-6 text-base hover:text-[#D4AF37] transition-colors">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-white/60 text-sm leading-relaxed pb-6">{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}
