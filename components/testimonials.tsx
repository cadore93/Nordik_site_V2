"use client"

import { Card } from "@/components/ui/card"
import { Star } from "lucide-react"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

const testimonials = [
  {
    name: "Marc Tremblay",
    role: "Propriétaire, Électricien Pro",
    content:
      "Depuis que Nordik a refait notre site et optimisé notre fiche Google, on reçoit 3 à 4 appels de plus par jour. L'équipe est professionnelle et vraiment à l'écoute.",
    rating: 5,
  },
  {
    name: "Sophie Gagnon",
    role: "Gérante, Plomberie Express",
    content:
      "Excellent service ! Notre nouveau site est magnifique et nous apparaissons maintenant en première position sur Google. Les résultats ont dépassé nos attentes.",
    rating: 5,
  },
  {
    name: "Jean-François Leblanc",
    role: "Entrepreneur, Réno Prestige",
    content:
      "Une équipe locale qui comprend vraiment nos besoins. Le site est professionnel, rapide, et on voit déjà une augmentation de nos demandes de soumission.",
    rating: 5,
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
}

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
}

export function Testimonials() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="temoignages" className="py-20 px-4 bg-gradient-to-b from-slate-50 to-white">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4 text-balance">Ce que disent nos clients</h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto text-pretty">
            Des entreprises locales qui nous font confiance
          </p>
        </motion.div>

        <motion.div
          ref={ref}
          className="grid md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {testimonials.map((testimonial, index) => (
            <motion.div key={index} variants={cardVariants}>
              <motion.div whileHover={{ y: -8, scale: 1.02 }} transition={{ duration: 0.3 }}>
                <Card className="p-8 border-slate-200 hover:border-navy/20 hover:shadow-xl transition-all duration-300 h-full">
                  <motion.div
                    className="flex gap-1 mb-4"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 + 0.2, duration: 0.4 }}
                  >
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, rotate: -180 }}
                        whileInView={{ opacity: 1, rotate: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 + i * 0.05, duration: 0.4 }}
                      >
                        <Star className="w-5 h-5 fill-gold text-gold" />
                      </motion.div>
                    ))}
                  </motion.div>

                  <p className="text-slate-700 mb-6 leading-relaxed italic">"{testimonial.content}"</p>

                  <div className="pt-4 border-t border-slate-200">
                    <p className="font-bold text-navy">{testimonial.name}</p>
                    <p className="text-sm text-slate-600">{testimonial.role}</p>
                  </div>
                </Card>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
