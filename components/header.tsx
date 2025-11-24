"use client"

import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { motion, AnimatePresence } from "framer-motion"
import { ContactForm } from "@/components/contact-form"

export function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [isContactFormOpen, setIsContactFormOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <>
      <motion.header
        className={`fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b z-50 transition-all duration-300 ${
          isScrolled ? "border-slate-200 shadow-md" : "border-transparent"
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <nav className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <motion.div className="flex items-center gap-2" whileHover={{ scale: 1.05 }} transition={{ duration: 0.2 }}>
              <motion.div
                className="w-10 h-10 bg-gradient-to-br from-navy to-blue-600 rounded-lg flex items-center justify-center"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                <span className="text-white font-bold text-xl">N</span>
              </motion.div>
              <span className="text-xl font-bold text-navy">Nordik</span>
            </motion.div>

            {/* Desktop Menu */}
            <motion.div
              className="hidden md:flex items-center gap-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              {[
                { href: "#services", label: "Services" },
                { href: "#about", label: "À propos" },
                { href: "#portfolio", label: "Portfolio" },
                { href: "#temoignages", label: "Témoignages" },
              ].map((item, index) => (
                <motion.a
                  key={item.href}
                  href={item.href}
                  className="text-slate-700 hover:text-navy transition-colors relative"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + index * 0.1, duration: 0.4 }}
                  whileHover={{ y: -2 }}
                >
                  {item.label}
                </motion.a>
              ))}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.7, duration: 0.4 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button className="bg-navy hover:bg-navy/90" onClick={() => setIsContactFormOpen(true)}>
                  Analyse gratuite
                </Button>
              </motion.div>
            </motion.div>

            {/* Mobile Menu Button */}
            <motion.button className="md:hidden text-navy" onClick={() => setIsOpen(!isOpen)} whileTap={{ scale: 0.9 }}>
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </motion.button>
          </div>

          <AnimatePresence>
            {isOpen && (
              <motion.div
                className="md:hidden mt-4 pb-4 flex flex-col gap-4"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
              >
                {[
                  { href: "#services", label: "Services" },
                  { href: "#about", label: "À propos" },
                  { href: "#portfolio", label: "Portfolio" },
                  { href: "#temoignages", label: "Témoignages" },
                ].map((item, index) => (
                  <motion.a
                    key={item.href}
                    href={item.href}
                    className="text-slate-700 hover:text-navy transition-colors"
                    onClick={() => setIsOpen(false)}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.3 }}
                  >
                    {item.label}
                  </motion.a>
                ))}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3, duration: 0.3 }}
                >
                  <Button
                    className="bg-navy hover:bg-navy/90 w-full"
                    onClick={() => {
                      setIsContactFormOpen(true)
                      setIsOpen(false)
                    }}
                  >
                    Analyse gratuite
                  </Button>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </nav>
      </motion.header>

      <ContactForm isOpen={isContactFormOpen} onClose={() => setIsContactFormOpen(false)} />
    </>
  )
}
