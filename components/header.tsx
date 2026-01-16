"use client"

import { useMenuStore } from "@/store/menu-store"
import { useTranslations } from "next-intl"
import LanguageToggle from "./language-toggle"
import Logo from "./logo"
import MobileMenu from "./mobile-menu"
import Navigation from "./navigation"

export default function Header() {
  const { isOpen } = useMenuStore()
  const t = useTranslations("header")

  return (
    <header className="fixed top-0 w-full z-50 bg-black/95 backdrop-blur-sm border-b border-cyan-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Left section */}
          <div className="flex items-center gap-8">
            <Logo />
            <Navigation />
          </div>

          {/* Right section */}
          <div className="flex items-center gap-4 md:gap-6">
            <LanguageToggle />
            <button
              className="hidden md:inline-block px-5 py-2 border border-[#00d4ff] text-[#00d4ff] rounded hover:bg-[#00d4ff]/10 transition-colors font-medium text-sm"
              style={{ color: "#00d4ff", borderColor: "#00d4ff" }}
            >
              {t("talkToAstrah")}
            </button>
            <MobileMenu />
          </div>
        </div>
      </div>

      {/* Mobile menu overlay */}
      {isOpen && <MobileMenuPanel />}
    </header>
  )
}

function MobileMenuPanel() {
  const t = useTranslations("header")
  const { closeMenu } = useMenuStore()

  const mobileMenuItems = [
    { label: t("product"), href: "#product" },
    { label: t("pricing"), href: "#pricing" },
    { label: t("migration"), href: "#migration" },
  ]

  return (
    <div className="md:hidden bg-black border-b border-cyan-950">
      <nav className="px-4 py-4 space-y-3">
        {mobileMenuItems.map((item) => (
          <a
            key={item.href}
            href={item.href}
            className="block text-sm text-gray-400 hover:text-[#00d4ff] transition-colors"
            onClick={closeMenu}
          >
            {item.label}
          </a>
        ))}
        <button
          className="w-full mt-4 px-4 py-2.5 rounded-full font-medium transition-colors text-black"
          style={{ backgroundColor: "#00d4ff" }}
        >
          {t("talkToAstrah")}
        </button>
      </nav>
    </div>
  )
}
