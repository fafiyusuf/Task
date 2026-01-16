"use client"

import { useTranslations } from "next-intl"

export default function FeatureSection() {
  const t = useTranslations("features")

  return (
    <section className="relative py-20 md:py-32 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{t("title")}</h2>
          <p className="text-gray-400 text-base md:text-lg">{t("description")}</p>
        </div>
      </div>
    </section>
  )
}
