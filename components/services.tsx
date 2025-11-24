"use client"

import { Globe, MapPin, Phone } from "lucide-react"
import { Card } from "@/components/ui/card"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

const services = [
  {
    icon: Globe,
    title: "Création de sites web",
    description:
      "Sites modernes, rapides et optimisés pour convertir vos visiteurs en clients. Design professionnel adapté à votre image de marque.",
    features: ["Design moderne", "Optimisé mobile", "Performance maximale", "SEO intégré"],
  },
  {
    icon: MapPin,
    title: "Optimisation Google Business",
    description:
      "Optimisation complète de votre fiche Google pour maximiser votre visibilité dans les recherches locales et sur Google Maps.",
    features: ["Photos professionnelles", "Descriptions optimisées", "Gestion des avis", "SEO local"],
  },
  {
    icon: Phone,
    title: "Visibilité & appels locaux",
    description:
      "Stratégies ciblées pour apparaître en première position quand vos clients recherchent vos services dans votre région.",
    features: ["Mots-clés locaux", "Géolocalisation", "Suivi des appels", "Rapports mensuels"],
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

export function Services() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="services" className="py-16 sm:py-20 px-4 sm:px-6 bg-white">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          className="text-center mb-12 sm:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-navy mb-3 sm:mb-4 text-balance px-2 sm:px-0">
            Services complets pour votre succès en ligne
          </h2>
          <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto text-pretty leading-relaxed px-2 sm:px-0">
            Des solutions professionnelles adaptées aux entreprises locales qui veulent grandir
          </p>
        </motion.div>

        <motion.div
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {services.map((service, index) => (
            <motion.div key={index} variants={cardVariants}>
              <Card className="p-6 sm:p-8 border-slate-200 hover:border-navy/20 hover:shadow-xl transition-all duration-300 group h-full">
                <motion.div
                  className="w-12 sm:w-14 h-12 sm:h-14 bg-gradient-to-br from-navy to-blue-600 rounded-xl flex items-center justify-center mb-4 sm:mb-6"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.3 }}
                >
                  <service.icon className="w-6 sm:w-7 h-6 sm:h-7 text-white" />
                </motion.div>

                <h3 className="text-lg sm:text-xl font-semibold text-navy mb-2 sm:mb-3">{service.title}</h3>
                <p className="text-sm sm:text-base text-slate-600 mb-4 sm:mb-6 leading-relaxed">
                  {service.description}
                </p>

                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <motion.li
                      key={idx}
                      className="flex items-center gap-2 text-xs sm:text-sm text-slate-600"
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 + idx * 0.05, duration: 0.4 }}
                    >
                      <div className="w-1.5 h-1.5 bg-gold rounded-full flex-shrink-0" />
                      {feature}
                    </motion.li>
                  ))}
                </ul>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
