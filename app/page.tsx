"use client"

import { Hero } from "@/components/hero"
import { Services } from "@/components/services"
import { About } from "@/components/about"
import { WhyUs } from "@/components/why-us"
import { Portfolio } from "@/components/portfolio"
import { Testimonials } from "@/components/testimonials"
import { CTA } from "@/components/cta"
import { Footer } from "@/components/footer"
import { Header } from "@/components/header"
import { ScrollProgress } from "@/components/scroll-progress"
import { LogoIntro } from "@/components/logo-intro"
import { useState } from "react"

export default function Home() {
  const [showIntro, setShowIntro] = useState(true)

  return (
    <>
      {showIntro && <LogoIntro onComplete={() => setShowIntro(false)} />}

      <main className="min-h-screen relative">
        <div className="relative z-10">
          <ScrollProgress />
          <Header />
          <Hero />
          <Services />
          <About />
          <WhyUs />
          <Portfolio />
          <Testimonials />
          <CTA />
          <Footer />
        </div>
      </main>
    </>
  )
}
