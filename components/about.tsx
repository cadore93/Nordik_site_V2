"use client"

import { motion } from "framer-motion"

export function About() {
  return (
    <section id="about" className="py-24 bg-gradient-to-br from-[#1e3a8a] to-[#0f172a]">
      <div className="container mx-auto px-4 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4 text-balance text-white">À propos de moi</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-accent to-accent/50 mx-auto" />
        </motion.div>

        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-accent/10 border border-accent/20 text-center px-8 py-4 rounded-xl mb-8"
            >
              <p className="font-display font-bold text-2xl text-white">Charles-Antoine Doré</p>
              <p className="text-sm text-accent">Fondateur, Nordik</p>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-lg leading-[1.7] text-white/90"
            >
              Je m'appelle <span className="font-semibold text-white">Charles-Antoine Doré</span>. Je termine mon bac en
              finance à Montréal, mais j'ai toujours voulu bâtir ma propre entreprise et aider les commerces d'ici à
              mieux rayonner en ligne. Je crois profondément à l'importance d'encourager local.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="text-lg leading-[1.7] text-white/90"
            >
              Électriciens, coiffeurs, entrepreneurs, petites PME — ce sont eux qui font vivre nos communautés.
              Pourtant, leur présence en ligne ne reflète pas toujours la qualité de leur travail.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="text-lg leading-[1.7] text-white/90"
            >
              C'est pour ça que j'ai lancé <span className="font-semibold text-accent">Nordik</span> : une petite agence
              locale qui crée des sites modernes et optimise la visibilité Google pour aider les entreprises d'ici à
              recevoir plus d'appels et plus de clients.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.7 }}
              className="pt-6 border-t border-white/20"
            >
              <p className="text-accent font-semibold mb-2">Ma mission :</p>
              <p className="text-white/80 italic leading-relaxed">
                Transformer la présence en ligne des entreprises locales pour refléter leur véritable excellence et les
                aider à prospérer dans l'ère numérique.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
