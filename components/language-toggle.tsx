"use client"

import { useLocale, useTranslations } from "next-intl"
import Image from "next/image"
import { useRouter } from "next/navigation"
import { useEffect, useRef, useState } from "react"

export default function LanguageToggle() {
  const t = useTranslations("language")
  const locale = useLocale()
  const router = useRouter()
  const [isOpen, setIsOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  const changeLanguage = (newLocale: string) => {
    document.cookie = `locale=${newLocale};path=/;max-age=31536000`
    setIsOpen(false)
    router.refresh()
  }

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 hover:opacity-80 transition-opacity text-sm text-white"
      >
        <Image src="/translate.svg" alt="translate" width={18} height={18} className="md:w-[18px] md:h-[18px]" />
        <span className="md:block">{locale === "en" ? "EN" : "AR"}</span>
        <svg
          className={`w-3 h-3 md:w-4 md:h-4 transition-transform ${isOpen ? "rotate-180" : ""}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute top-full right-0 mt-2 bg-gray-900 border border-gray-700 rounded-lg shadow-lg overflow-hidden min-w-[140px] z-50">
          <button
            onClick={() => changeLanguage("en")}
            className={`w-full px-4 py-2.5 text-left text-sm hover:bg-gray-800 transition-colors flex items-center gap-2 ${
              locale === "en" ? "text-[#00d4ff] bg-gray-800/50" : "text-white"
            }`}
          >
            <span>🇬🇧</span>
            <span>English</span>
            {locale === "en" && <span className="ml-auto text-[#00d4ff]">✓</span>}
          </button>
          <button
            onClick={() => changeLanguage("ar")}
            className={`w-full px-4 py-2.5 text-left text-sm hover:bg-gray-800 transition-colors flex items-center gap-2 ${
              locale === "ar" ? "text-[#00d4ff] bg-gray-800/50" : "text-white"
            }`}
          >
            <span>🇸🇦</span>
            <span>العربية</span>
            {locale === "ar" && <span className="ml-auto text-[#00d4ff]">✓</span>}
          </button>
        </div>
      )}
    </div>
  )
}
