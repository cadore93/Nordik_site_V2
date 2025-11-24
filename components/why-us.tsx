"use client"

import { Heart, Award, TrendingUp, Headphones } from "lucide-react"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

const reasons = [
  {
    icon: Heart,
    title: "Local et humain",
    description: "Une équipe accessible qui comprend les défis des entreprises locales",
  },
  {
    icon: Award,
    title: "Design professionnel",
    description: "Des sites web modernes qui reflètent la qualité de vos services",
  },
  {
    icon: TrendingUp,
    title: "Résultats mesurables",
    description: "Suivi transparent de votre visibilité et de vos nouveaux appels",
  },
  {
    icon: Headphones,
    title: "Support accessible",
    description: "Assistance rapide et simple, quand vous en avez besoin",
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
}

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
}

export function WhyUs() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-slate-50 to-white">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-display text-3xl md:text-4xl font-bold text-navy mb-4 text-balance">
            Pourquoi choisir Nordik ?
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto text-pretty leading-relaxed">
            Une approche humaine avec des résultats professionnels
          </p>
        </motion.div>

        <motion.div
          ref={ref}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {reasons.map((reason, index) => (
            <motion.div key={index} variants={cardVariants}>
              <motion.div
                className="text-center p-6 rounded-2xl bg-white border border-slate-200 hover:border-navy/20 hover:shadow-lg transition-all duration-300 h-full"
                whileHover={{ y: -8, scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <motion.div
                  className="w-16 h-16 bg-gradient-to-br from-navy/10 to-blue-600/10 rounded-2xl flex items-center justify-center mx-auto mb-4"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <reason.icon className="w-8 h-8 text-navy" />
                </motion.div>
                <h3 className="text-lg font-bold text-navy mb-2">{reason.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{reason.description}</p>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
