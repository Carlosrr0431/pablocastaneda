"use client"

import { useState } from "react"
import { Menu } from "lucide-react"
import { Logo } from "./logo"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

const navItems = [
  { label: "SOBRE MI", href: "#sobre-mi" },
  { label: "PROPUESTA", href: "#propuesta" },
  {
    label: "CONTACTO",
    href: "https://wa.me/?text=Hola%20Pablo%2C%20me%20interesa%20conocer%20m%C3%A1s%20sobre%20tu%20propuesta%20en%20Real%20Estate",
    outlined: true,
    external: true,
  },
]

export function Header() {
  const [isOpen, setIsOpen] = useState(false)

  const handleNavClick = (href: string, external?: boolean) => {
    setIsOpen(false)

    if (external) {
      window.open(href, "_blank")
    } else {
      const element = document.querySelector(href)
      if (element) {
        element.scrollIntoView({ behavior: "smooth" })
      }
    }
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#1c1c1e]/95 backdrop-blur-md border-b border-white/5">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Logo />

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => handleNavClick(item.href, item.external)}
                className={`text-white font-medium tracking-wide transition-all duration-300 hover:text-[#B8A76B] ${
                  item.outlined
                    ? "border-2 border-[#B8A76B] px-6 py-2 rounded-full hover:bg-[#B8A76B] hover:text-[#1c1c1e]"
                    : ""
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Mobile Menu */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon" className="text-white hover:bg-white/10">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-[#1c1c1e] border-white/10 w-[280px] sm:w-[320px]">
              <div className="flex flex-col gap-6 mt-8 px-2">
                {navItems.map((item) => (
                  <button
                    key={item.label}
                    onClick={() => handleNavClick(item.href, item.external)}
                    className={`text-white text-base font-medium tracking-wide transition-all duration-300 hover:text-[#B8A76B] ${
                      item.outlined
                        ? "border-2 border-[#B8A76B] px-6 py-3 rounded-full hover:bg-[#B8A76B] hover:text-[#1c1c1e] text-center"
                        : "text-left px-4"
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
