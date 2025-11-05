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
      question: "¿Debo invertir para ser agente de bienes raíces?",
      answer:
        "Si, ya que sos un emprendedor (no un empleado). Por lo tanto manejarás tus propios horarios y podrás incrementar tus ingresos sin límites.",
    },
    {
      question: "¿De cuánto es la inversión que debo realizar para emprender como agente inmobiliario?",
      answer:
        "La inversión ronda los $100USD dentro de los primeros cuatro meses, al cuarto mes alrededor de $350USD y a partir del 6to mes un fee mensual de aproximadamente $70USD..",
    },
    {
      question: "¿Cuáles son los requisitos para ser agente inmobiliario en un ciudad?",
      answer:
        "Tener entre 25 y 55 años, movilidad propia (no excluyente), disponibilidad para trabajar tiempo completo, tener un perfil emprendedor y comercial, facilidad para relacionarse y una excelente presencia.",
    },
    {
      question: "¿Cómo saber si ser agente de bienes raíces es realmente lo mío?",
      answer:
        "Contactame para agendar una charla y analizar cual es tu mejor opcion.",
    },
  ]

  return (
    <section ref={sectionRef} className="relative bg-[#2c2c2e] py-24 border-t border-white/5 overflow-hidden">
      <div className="absolute top-1/2 left-1/3 w-[750px] h-[750px] bg-[#3a3a2a]/16 rounded-full blur-[190px] animate-float-4" />

      <div className="relative container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2
            className={`text-white text-3xl md:text-4xl font-light mb-16 leading-tight transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          >
            <span className="marker-highlight">Preguntas frecuentes</span> sobre ser agente de
            <br />
            bienes raíces
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
