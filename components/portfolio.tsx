"use client"

import { Card } from "@/components/ui/card"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

const projects = [
  {
    title: "Électricien Pro",
    category: "Services électriques",
    image: "/modern-electrician-website-homepage.jpg",
  },
  {
    title: "HVAC Confort",
    category: "Chauffage & climatisation",
    image: "/hvac-company-website-modern.jpg",
  },
  {
    title: "Toiture Nord",
    category: "Couverture & toiture",
    image: "/roofing-company-professional-website.jpg",
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
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
}

export function Portfolio() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="portfolio" className="py-16 sm:py-20 px-4 sm:px-6 bg-gradient-to-br from-[#1e3a8a] to-[#0f172a]">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          className="text-center mb-12 sm:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3 sm:mb-4 text-balance px-2 sm:px-0">
            Nos réalisations récentes
          </h2>
          <p className="text-base sm:text-lg text-white/80 max-w-2xl mx-auto text-pretty px-2 sm:px-0">
            Des sites web qui génèrent des résultats pour nos clients
          </p>
        </motion.div>

        <motion.div
          ref={ref}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {projects.map((project, index) => (
            <motion.div key={index} variants={cardVariants}>
              <Card className="overflow-hidden border-slate-200 hover:border-navy/20 hover:shadow-xl transition-all duration-300 group">
                <motion.div
                  className="relative overflow-hidden aspect-[4/3]"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.4 }}
                >
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-t from-navy/80 to-transparent"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.div>
                <div className="p-5 sm:p-6">
                  <p className="text-xs sm:text-sm text-gold font-medium mb-1">{project.category}</p>
                  <h3 className="text-lg sm:text-xl font-bold text-navy">{project.title}</h3>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
