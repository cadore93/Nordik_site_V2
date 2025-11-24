"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Sparkles } from "lucide-react"
import { motion } from "framer-motion"
import { useState } from "react"
import { ContactForm } from "./contact-form"

export function Hero() {
  const [isFormOpen, setIsFormOpen] = useState(false)

  const particles = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 12 + 6,
    duration: Math.random() * 25 + 20,
    delay: Math.random() * 5,
    moveX: Math.random() * 100 - 50,
    moveY: Math.random() * 100 - 50,
  }))

  return (
    <>
      <motion.section
        className="relative pt-32 pb-24 px-4 overflow-hidden bg-background"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <div className="absolute inset-0 z-0 pointer-events-none">
          {particles.map((particle) => (
            <motion.div
              key={particle.id}
              className="absolute rounded-full"
              style={{
                left: `${particle.x}%`,
                top: `${particle.y}%`,
                width: particle.size,
                height: particle.size,
                backgroundColor: particle.id % 3 === 0 ? "#60a5fa" : particle.id % 3 === 1 ? "#93c5fd" : "#bfdbfe",
                opacity: 0.25,
                boxShadow: `0 0 ${particle.size * 1.5}px rgba(96, 165, 250, 0.3)`,
              }}
              initial={{ opacity: 0 }}
              animate={{
                x: [0, particle.moveX, -particle.moveX / 2, 0],
                y: [0, particle.moveY, -particle.moveY / 2, 0],
                scale: [1, 1.3, 0.9, 1],
                opacity: [0.2, 0.3, 0.25, 0.2],
              }}
              transition={{
                duration: particle.duration,
                repeat: Number.POSITIVE_INFINITY,
                delay: particle.delay + 0.5,
                ease: "easeInOut",
              }}
            />
          ))}
        </div>

        <div className="container mx-auto max-w-7xl relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              className="space-y-8"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            >
              <motion.div
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-gold/20 to-navy/10 rounded-full border border-gold/30 shadow-lg backdrop-blur-sm"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4, duration: 0.6, type: "spring", bounce: 0.4 }}
                whileHover={{ scale: 1.05 }}
              >
                <Sparkles className="w-4 h-4 text-gold" />
                <span className="text-sm font-semibold text-navy">Agence locale de confiance</span>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.8, ease: "easeOut" }}
              >
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-navy leading-[1.1] text-balance mb-6">
                  Votre entreprise mérite d'être{" "}
                  <span className="bg-gradient-to-r from-navy via-navy-light to-[#3b82f6] bg-clip-text text-transparent">
                    trouvé localement
                  </span>
                </h1>
              </motion.div>

              <motion.p
                className="text-xl md:text-2xl text-muted-foreground leading-relaxed text-pretty max-w-3xl mx-auto"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 0.8, ease: "easeOut" }}
              >
                <p className="text-lg md:text-xl text-slate-400 max-w-3xl mx-auto mt-2 text-center">
  Positionnez votre entreprise au niveau où elle mérite d’être.
</p>


              </motion.p>

              <motion.div
                className="flex flex-col sm:flex-row gap-4 pt-6 justify-center"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9, duration: 0.8, ease: "easeOut" }}
              >
                <Button
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-primary-foreground text-lg px-8 py-6 shadow-xl hover:shadow-2xl transition-all duration-300 group"
                  onClick={() => setIsFormOpen(true)}
                >
                  Obtenir une analyse gratuite
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="text-lg px-8 py-6 border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 bg-transparent"
                >
                  Voir nos services
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      <ContactForm isOpen={isFormOpen} onClose={() => setIsFormOpen(false)} />
    </>
  )
}
