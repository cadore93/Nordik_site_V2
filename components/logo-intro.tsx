"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useEffect, useState } from "react"

export function LogoIntro({ onComplete }: { onComplete: () => void }) {
  const [showN, setShowN] = useState(true)
  const [startSlide, setStartSlide] = useState(false)

  useEffect(() => {
    const slideTimer = setTimeout(() => {
      setStartSlide(true)
    }, 1000)

    const completeTimer = setTimeout(() => {
      onComplete()
    }, 2800)

    return () => {
      clearTimeout(slideTimer)
      clearTimeout(completeTimer)
    }
  }, [onComplete])

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-navy via-blue-900 to-slate-900"
        initial={{ opacity: 1, scale: 1 }}
        animate={{ opacity: startSlide ? [1, 1, 0] : 1, scale: startSlide ? [1, 1, 0.95] : 1 }}
        transition={{
          opacity: { duration: 2.8, times: [0, 0.65, 1] },
          scale: { duration: 2.8, times: [0, 0.65, 1] },
        }}
      >
        <motion.div className="relative flex items-center">
          <motion.div
            initial={{ opacity: 0, x: 0 }}
            animate={{
              opacity: startSlide ? 1 : 0,
              x: startSlide ? 90 : 0,
            }}
            transition={{
              duration: 0.8,
              type: "spring",
              stiffness: 100,
              damping: 15,
            }}
            className="text-3xl md:text-5xl font-bold absolute left-4 md:left-0 z-0"

          >
            <span className="bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
              Nordik
            </span>
          </motion.div>

          <motion.div
            className="relative z-10"
            initial={{ scale: 0, rotate: -180, x: 0 }}
            animate={{
              scale: 1,
              rotate: 0,
              x: startSlide ? -20 : 0,
            }}
            transition={{
              scale: { duration: 0.8, type: "spring", bounce: 0.5 },
              rotate: { duration: 0.8, type: "spring", bounce: 0.5 },
              x: { duration: 0.8, type: "spring", stiffness: 100, damping: 15 },
            }}
          >
            <svg
              className="w-12 h-12 md:w-20 md:h-20"
              width="80"
              height="80"
              viewBox="0 0 100 100"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
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
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}
