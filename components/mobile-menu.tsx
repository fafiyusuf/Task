"use client"

import { useMenuStore } from "@/store/menu-store"

export default function MobileMenu() {
  const { isOpen, toggleMenu } = useMenuStore()

  return (
    <button
      className="md:hidden p-2 hover:bg-cyan-400/10 rounded-lg transition-colors"
      onClick={toggleMenu}
      aria-label="Toggle menu"
    >
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        {isOpen ? (
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        ) : (
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        )}
      </svg>
    </button>
  )
}
