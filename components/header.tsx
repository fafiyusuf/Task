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
    <header className="fixed top-0 left-0 right-0 z-[100] bg-black border-b border-white/10">
      <div className="max-w-7xl mx-auto px-2 md:px-6 lg:px-12 py-4 md:py-6">
        <div className="flex items-center justify-between">
          {/* Left section */}
          <div className="flex items-center">
            <Logo />
          </div>

          {/* Center section - Navigation */}
          <div className="hidden md:flex items-center">
            <Navigation />
          </div>

          {/* Right section */}
          <div className="flex items-center gap-6">
            <div className="hidden md:block">
              <LanguageToggle />
            </div>
            <button
              className="hidden md:inline-block px-5 py-2 border border-white text-white rounded hover:bg-white/10 transition-colors font-normal text-sm"
            >
              {t("talkToAstrahPart1")} <span className="font-semibold">{t("talkToAstrahPart2")}</span>
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
        
        {/* Language Toggle */}
        <div className="pt-2">
          <LanguageToggle />
        </div>
        
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
