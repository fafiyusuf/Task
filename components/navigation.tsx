"use client"

import { useTranslations } from "next-intl"

export default function Navigation() {
  const t = useTranslations("header")

  const navItems = [
    { label: t("product"), href: "#product" },
    { label: t("pricing"), href: "#pricing" },
    { label: t("migration"), href: "#migration" },
  ]

  return (
    <nav className="hidden md:flex gap-8">
      {navItems.map((item) => (
        <a key={item.href} href={item.href} className="text-sm text-gray-300 hover:text-cyan-400 transition-colors">
          {item.label}
        </a>
      ))}
    </nav>
  )
}
