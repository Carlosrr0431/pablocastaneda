"use client"

import { useState } from "react"
import { ArrowRight, Calendar, Clock, Tag, TrendingUp, Sparkles } from "lucide-react"
import Image from "next/image"
import { Button } from "@/components/ui/button"

const blogPosts = [
  {
    id: 1,
    title: "Cómo elegir la propiedad perfecta",
    excerpt: "Factores clave para maximizar tu inversión inmobiliaria.",
    category: "Inversión",
    date: "15 Nov",
    readTime: "5 min",
    image: "/professional-woman-real-estate-agent.png",
    featured: true,
  },
  {
    id: 2,
    title: "Tendencias del mercado 2025",
    excerpt: "Análisis de las oportunidades que marcarán el próximo año.",
    category: "Mercado",
    date: "10 Nov",
    readTime: "7 min",
    image: "/modern-office.png",
    featured: false,
  },
  {
    id: 3,
    title: "Guía de valorización",
    excerpt: "Aprende cómo se valorizan las propiedades premium.",
    category: "Tips",
    date: "5 Nov",
    readTime: "6 min",
    image: "/professional-businessman-suit.png",
    featured: false,
  },
]

export function BlogSection() {
  const [activeCategory, setActiveCategory] = useState("Todos")
  const categories = ["Todos", "Inversión", "Mercado", "Tips"]

  const filteredPosts = activeCategory === "Todos" 
    ? blogPosts 
    : blogPosts.filter(post => post.category === activeCategory)

  return (
    <section id="blog" className="relative py-16 md:py-24 bg-[#0a0a0a] overflow-hidden">
      {/* Efectos de fondo minimalistas */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-[#D4C5A0]/5 rounded-full blur-[100px]" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-[#E4D5B0]/5 rounded-full blur-[100px]" />

      <div className="relative container mx-auto px-4 sm:px-6 max-w-6xl">
        {/* Header minimalista */}
        <div className="mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#D4C5A0]/20 mb-4">
            <div className="w-1.5 h-1.5 rounded-full bg-[#D4C5A0] animate-pulse" />
            <span className="text-[#D4C5A0] text-xs font-medium uppercase tracking-wider">Blog</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-white mb-3">
            Últimos{" "}
            <span className="text-[#D4C5A0]">artículos</span>
          </h2>
          
          <p className="text-sm md:text-base text-white/50 max-w-xl font-light">
            Conocimiento y estrategias del mercado inmobiliario
          </p>
        </div>

        {/* Filtros minimalistas */}
        <div className="flex flex-wrap gap-2 mb-10 md:mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-full text-xs font-medium transition-all duration-300 ${
                activeCategory === category
                  ? "bg-[#D4C5A0] text-[#0a0a0a]"
                  : "bg-white/5 text-white/60 hover:bg-white/10 hover:text-white/80"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Grid de posts minimalista */}
        <div className="grid md:grid-cols-3 gap-5 md:gap-6">
          {filteredPosts.map((post, index) => (
            <article
              key={post.id}
              className={`group relative overflow-hidden transition-all duration-500 ${
                post.featured ? "md:col-span-2 md:row-span-2" : ""
              }`}
              style={{
                animation: `fade-in-up 0.5s ease-out ${index * 0.1}s both`
              }}
            >
              {/* Imagen */}
              <div className={`relative overflow-hidden rounded-2xl ${
                post.featured ? "aspect-[16/9]" : "aspect-square"
              }`}>
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />
                
                {/* Contenido minimalista */}
                <div className="absolute inset-0 p-5 md:p-6 flex flex-col justify-end">
                  {/* Metadata superior */}
                  <div className="mb-auto flex items-center justify-between">
                    <span className="px-2.5 py-1 rounded-full bg-[#D4C5A0]/90 text-[#0a0a0a] text-[10px] font-medium uppercase tracking-wide">
                      {post.category}
                    </span>
                    {post.featured && (
                      <span className="px-2.5 py-1 rounded-full bg-white/10 backdrop-blur-sm text-white text-[10px] font-medium">
                        Destacado
                      </span>
                    )}
                  </div>

                  {/* Contenido inferior */}
                  <div>
                    <h3 className={`text-white font-light mb-2 group-hover:text-[#D4C5A0] transition-colors leading-tight ${
                      post.featured ? "text-xl md:text-2xl lg:text-3xl" : "text-lg md:text-xl"
                    }`}>
                      {post.title}
                    </h3>

                    <p className="text-white/60 text-xs md:text-sm mb-3 font-light line-clamp-2">
                      {post.excerpt}
                    </p>

                    <div className="flex items-center justify-between text-white/40 text-[10px] md:text-xs">
                      <div className="flex items-center gap-3">
                        <span>{post.date}</span>
                        <span>·</span>
                        <span>{post.readTime}</span>
                      </div>
                      <ArrowRight className="w-4 h-4 text-[#D4C5A0] opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300" />
                    </div>
                  </div>
                </div>

                {/* Borde sutil al hover */}
                <div className="absolute inset-0 border border-[#D4C5A0]/0 group-hover:border-[#D4C5A0]/20 rounded-2xl transition-all duration-500 pointer-events-none" />
              </div>
            </article>
          ))}
        </div>

        {/* CTA minimalista */}
        <div className="mt-10 md:mt-12 flex justify-center">
          <a 
            href="#" 
            className="group inline-flex items-center gap-2 text-sm text-white/60 hover:text-[#D4C5A0] transition-all duration-300"
          >
            <span>Ver más artículos</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>

      <style>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  )
}
