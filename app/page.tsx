import { HeroSection } from "@/components/hero-section"
import { IntroSection } from "@/components/intro-section"
import { FeaturesSection } from "@/components/features-section"
import { VisionSection } from "@/components/vision-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { BuildSection } from "@/components/build-section"
import { BlogSection } from "@/components/blog-section"
import { FAQSection } from "@/components/faq-section"
import { FooterSection } from "@/components/footer-section"

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0a0a0a]">
      <div className="relative bg-[#0a0a0a]">
        {/* Efectos de fondo compartidos para hero e intro */}
        <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-gradient-to-br from-[#D4C5A0]/20 via-[#8B7E3F]/10 to-transparent rounded-full blur-[120px] animate-float-1 z-0" />
        <div className="absolute top-[40vh] right-0 w-[800px] h-[800px] bg-gradient-to-tl from-[#D4C5A0]/15 via-[#B8A76B]/10 to-transparent rounded-full blur-[140px] animate-float-2 z-0" />
        <div className="absolute top-[50vh] left-1/2 -translate-x-1/2 w-[1000px] h-[1000px] bg-[#D4C5A0]/5 rounded-full blur-[160px] animate-pulse-slow z-0" />
        <div className="absolute top-[80vh] left-1/3 w-[700px] h-[700px] bg-gradient-to-br from-[#D4C5A0]/10 via-[#8B7E3F]/5 to-transparent rounded-full blur-[150px] animate-float-3 z-0" />
        <div className="absolute top-[100vh] right-1/4 w-[600px] h-[600px] bg-gradient-to-tl from-[#D4C5A0]/8 via-[#B8A76B]/5 to-transparent rounded-full blur-[130px] animate-float-1 z-0" />
        
        <HeroSection />
        <IntroSection />
      </div>
      <div id="propuesta">
        <FeaturesSection />
        <VisionSection />
        <TestimonialsSection />
      </div>
      <BuildSection />
      <BlogSection />
      <FAQSection />
      <div id="contacto">
        <FooterSection />
      </div>
    </main>
  )
}
