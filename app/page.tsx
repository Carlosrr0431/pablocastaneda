import { HeroSection } from "@/components/hero-section"
import { IntroSection } from "@/components/intro-section"
import { FeaturesSection } from "@/components/features-section"
import { VisionSection } from "@/components/vision-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { BuildSection } from "@/components/build-section"
import { FAQSection } from "@/components/faq-section"
import { FooterSection } from "@/components/footer-section"

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0a0a0a]">
      <HeroSection />
      <div id="sobre-mi">
        <IntroSection />
      </div>
      <div id="propuesta">
        <FeaturesSection />
        <VisionSection />
        <TestimonialsSection />
      </div>
      <BuildSection />
      <FAQSection />
      <div id="contacto">
        <FooterSection />
      </div>
    </main>
  )
}
