"use client"

import Header from "@/components/header"
import HeroSection from "@/components/hero-section"
import { useLanguageStore } from "@/store/language-store"
import { useEffect, useState } from "react"


export default function Home() {
  const [mounted, setMounted] = useState(false)
  const { isRTL } = useLanguageStore()

  useEffect(() => {
    setMounted(true)
    // Set HTML dir attribute based on RTL
    if (typeof document !== "undefined") {
      const htmlElement = document.documentElement
      htmlElement.dir = isRTL ? "rtl" : "ltr"
      htmlElement.lang = isRTL ? "ar" : "en"
    }
  }, [isRTL])

  if (!mounted) return null

  return (
    <main className="min-h-screen bg-black overflow-x-hidden">
      <Header />
      <HeroSection />
    </main>
  )
}
