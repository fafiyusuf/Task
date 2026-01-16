"use client"

import { useLocale, useTranslations } from "next-intl"
import Image from "next/image"
import { useRouter } from "next/navigation"

export default function LanguageToggle() {
  const t = useTranslations("language")
  const locale = useLocale()
  const router = useRouter()

  const toggleLanguage = () => {
    const newLocale = locale === "en" ? "ar" : "en"
    document.cookie = `locale=${newLocale};path=/;max-age=31536000`
    router.refresh()
  }

  return (
    <button
      onClick={toggleLanguage}
      className="flex items-center gap-2 hover:opacity-80 transition-opacity text-sm text-white"
    >
      <Image src="/translate.svg" alt="translate" width={18} height={18} />
      <span>{locale === "en" ? t("english") : t("arabic")}</span>
    </button>
  )
}
