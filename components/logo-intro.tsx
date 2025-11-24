"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useEffect, useState } from "react"

export function LogoIntro({ onComplete }: { onComplete: () => void }) {
  const [showN, setShowN] = useState(true)
  const [showNordik, setShowNordik] = useState(false)

  useEffect(() => {
    // Show N for 1 second
    const nTimer = setTimeout(() => {
      setShowNordik(true)
    }, 1000)

    // Complete animation after 2.5 seconds total
    const completeTimer = setTimeout(() => {
      onComplete()
    }, 2500)

    return () => {
      clearTimeout(nTimer)
      clearTimeout(completeTimer)
    }
  }, [onComplete])

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-navy via-blue-900 to-slate-900"
        initial={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex items-center gap-4">
          {/* N Logo */}
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{
              duration: 0.8,
              type: "spring",
              bounce: 0.5,
            }}
          >
            <svg width="80" height="80" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="100" height="100" rx="20" fill="url(#logo-gradient)" />
              <path d="M30 70V30H40L60 55V30H70V70H60L40 45V70H30Z" fill="white" />
              <defs>
                <linearGradient id="logo-gradient" x1="0" y1="0" x2="100" y2="100" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#1e3a8a" />
                  <stop offset="1" stopColor="#2563eb" />
                </linearGradient>
              </defs>
            </svg>
          </motion.div>

          {/* Nordik Text - slides in from the right side of N smoothly */}
          <AnimatePresence>
            {showNordik && (
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{
                  duration: 0.8,
                  type: "spring",
                  stiffness: 100,
                  damping: 15,
                }}
                className="text-5xl font-bold"
              >
                <span className="bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">Nordik</span>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </AnimatePresence>
  )
}
