"use client"

import { Instagram, Mail, MapPin } from "lucide-react"
import { motion } from "framer-motion"

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
}

export function Footer() {
  return (
    <footer className="bg-slate-900 text-white py-10 sm:py-12 px-4 sm:px-6">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {/* Logo & Description */}
          <motion.div className="space-y-4" variants={itemVariants}>
            <motion.div className="flex items-center gap-2" whileHover={{ scale: 1.05 }} transition={{ duration: 0.2 }}>
              <motion.div
                className="w-10 h-10 bg-gradient-to-br from-navy to-blue-600 rounded-lg flex items-center justify-center"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                <span className="text-white font-bold text-xl">N</span>
              </motion.div>
              <span className="text-xl font-bold">Nordik</span>
            </motion.div>
            <p className="text-slate-400 text-sm leading-relaxed">
              Votre partenaire local pour une présence en ligne professionnelle et des résultats mesurables.
            </p>
          </motion.div>

          {/* Services */}
          <motion.div variants={itemVariants}>
            <h3 className="font-bold mb-4">Services</h3>
            <ul className="space-y-2 text-sm">
              {[
                { href: "#services", label: "Création de sites web" },
                { href: "#services", label: "Google Business" },
                { href: "#services", label: "SEO local" },
                { href: "#portfolio", label: "Portfolio" },
              ].map((link, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05, duration: 0.3 }}
                >
                  <motion.a
                    href={link.href}
                    className="text-slate-400 hover:text-white transition-colors"
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    {link.label}
                  </motion.a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Entreprise */}
          <motion.div variants={itemVariants}>
            <h3 className="font-bold mb-4">Entreprise</h3>
            <ul className="space-y-2 text-sm">
              {[
                { href: "#", label: "À propos" },
                { href: "#temoignages", label: "Témoignages" },
                { href: "#", label: "Contact" },
                { href: "#", label: "Blog" },
              ].map((link, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05, duration: 0.3 }}
                >
                  <motion.a
                    href={link.href}
                    className="text-slate-400 hover:text-white transition-colors"
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    {link.label}
                  </motion.a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div variants={itemVariants}>
            <h3 className="font-bold mb-4">Contact</h3>
            <ul className="space-y-3 text-sm">
              {[
                { icon: Mail, text: "contact@nordikai.ca", href: "mailto:contact@nordikai.ca" },

                { icon: MapPin, text: "Montréal, Québec", href: null },
                { icon: Instagram, text: "@nordik.ai", href: "https://instagram.com/nordik.ai" },
              ].map((item, index) => (
                <motion.li
                  key={index}
                  className="flex items-center gap-2 text-slate-400"
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05, duration: 0.3 }}
                >
                  <item.icon className="w-4 h-4" />
                  {item.href ? (
                    <motion.a
                      href={item.href}
                      className="hover:text-white transition-colors"
                      target={item.icon === Instagram ? "_blank" : undefined}
                      rel={item.icon === Instagram ? "noopener noreferrer" : undefined}
                      whileHover={{ x: 3 }}
                      transition={{ duration: 0.2 }}
                    >
                      {item.text}
                    </motion.a>
                  ) : (
                    <span>{item.text}</span>
                  )}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </motion.div>

        <motion.div
          className="pt-6 sm:pt-8 border-t border-slate-800 flex flex-col sm:flex-row justify-between items-center gap-3 sm:gap-4 text-xs sm:text-sm text-slate-400"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          <p className="text-center sm:text-left">© 2025 Nordik. Tous droits réservés.</p>
          <div className="flex gap-4 sm:gap-6">
            {["Confidentialité", "Conditions"].map((text, index) => (
              <motion.a
                key={index}
                href="#"
                className="hover:text-white transition-colors"
                whileHover={{ y: -2 }}
                transition={{ duration: 0.2 }}
              >
                {text}
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
