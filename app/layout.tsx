import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
  weight: ["400", "500", "600", "700", "800"],
})

export const metadata: Metadata = {
  title: "Nordik - Agence Web & SEO Local | Sites Web Professionnels",
  description:
    "Nordik crée des sites web modernes et optimise votre présence Google pour générer plus d'appels et attirer de nouveaux clients locaux. Services web professionnels pour entreprises québécoises.",
  keywords: "site web, SEO local, Google Business, création site internet, agence web Québec, visibilité locale",
  authors: [{ name: "Nordik" }],
  openGraph: {
    title: "Nordik - Votre partenaire web local",
    description: "Sites web professionnels et optimisation Google pour entreprises locales",
    type: "website",
    locale: "fr_CA",
  },
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="fr">
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
