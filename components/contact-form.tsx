"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { X } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { useState } from "react"

interface ContactFormProps {
  isOpen: boolean
  onClose: () => void
}

export function ContactForm({ isOpen, onClose }: ContactFormProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  })

  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus("submitting")

    try {
      const res = await fetch("https://formspree.io/f/xzzqbbjn", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(formData),
      })

      if (res.ok) {
        setStatus("success")
        setFormData({
          name: "",
          email: "",
          phone: "",
          company: "",
          message: "",
        })
      } else {
        setStatus("error")
      }
    } catch (err) {
      console.error(err)
      setStatus("error")
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setStatus("idle")
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto"
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ duration: 0.3, type: "spring" }}
            >
              <div className="sticky top-0 bg-gradient-to-r from-navy to-blue-900 text-white p-6 rounded-t-2xl">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-2xl font-bold mb-2">Obtenir une analyse gratuite</h3>
                    <p className="text-white/80">
                      Remplissez ce formulaire et recevez votre analyse en 24h
                    </p>
                  </div>
                  <button
                    onClick={onClose}
                    className="hover:bg-white/10 rounded-full p-2 transition-colors"
                    aria-label="Fermer"
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>
              </div>

              <form onSubmit={handleSubmit} className="p-6 space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-semibold text-navy">
                      Nom complet *
                    </label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="Jean Tremblay"
                      className="border-slate-300 focus:border-navy focus:ring-navy"
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-semibold text-navy">
                      Courriel *
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="jean@exemple.com"
                      className="border-slate-300 focus:border-navy focus:ring-navy"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="phone" className="text-sm font-semibold text-navy">
                      Téléphone *
                    </label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      placeholder="(514) 555-1234"
                      className="border-slate-300 focus:border-navy focus:ring-navy"
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="company" className="text-sm font-semibold text-navy">
                      Nom de l&apos;entreprise *
                    </label>
                    <Input
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      required
                      placeholder="Mon Entreprise Inc."
                      className="border-slate-300 focus:border-navy focus:ring-navy"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-semibold text-navy">
                    Parlez-nous de votre entreprise et vos objectifs
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Je suis électricien à Montréal et j'aimerais augmenter mes appels..."
                    rows={5}
                    className="border-slate-300 focus:border-navy focus:ring-navy resize-none"
                  />
                </div>

                <div className="bg-slate-50 border border-slate-200 rounded-lg p-4">
                  <p className="text-sm text-slate-600">
                    🎯 <span className="font-semibold">Ce qui est inclus :</span> Analyse complète
                    de votre présence en ligne, recommandations personnalisées, et estimation
                    gratuite — le tout sans engagement.
                  </p>
                </div>

                {/* Message de succès / erreur */}
                {status === "success" && (
                  <div className="rounded-lg border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm text-emerald-800">
                    ✅ Merci&nbsp;! Votre demande a été envoyée. Vous recevrez votre analyse dans les
                    prochaines 24 heures.
                  </div>
                )}

                {status === "error" && (
                  <div className="rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-800">
                    ❌ Oups… une erreur est survenue. Vous pouvez réessayer plus tard ou nous écrire
                    directement par courriel.
                  </div>
                )}

                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <Button
                    type="submit"
                    disabled={status === "submitting"}
                    className="flex-1 bg-navy hover:bg-navy/90 text-white py-6 text-lg font-semibold disabled:opacity-70"
                  >
                    {status === "submitting" ? "Envoi en cours..." : "Envoyer ma demande"}
                  </Button>
                  <Button
                    type="button"
                    variant="outline"
                    onClick={onClose}
                    className="border-2 border-slate-300 hover:bg-slate-50 py-6 bg-transparent"
                  >
                    Annuler
                  </Button>
                </div>
              </form>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  )
}
