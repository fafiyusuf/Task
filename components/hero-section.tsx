"use client"

import { useTranslations } from "next-intl"
import Image from "next/image"

export default function HeroSection() {
  const t = useTranslations("hero")

  return (
    <section className="relative min-h-screen pt-24 md:pt-0 flex items-center justify-center overflow-hidden bg-black">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-cyan-950/10 to-black pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-0 relative z-10 w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center min-h-screen">
          {/* Left content */}
          <div className="flex flex-col justify-center">
            {/* Tagline */}
            <div className="flex items-center gap-3 mb-8">
              <span className="inline-block w-2 h-2 bg-white rounded-full flex-shrink-0" />
              <span className="text-xs md:text-sm text-gray-400 tracking-widest uppercase">{t("tagline")}</span>
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-white">
              {t("mainHeading")}
            </h1>

            {/* Sub Heading */}
            <p className="text-gray-400 text-base md:text-lg mb-10 leading-relaxed max-w-xl">{t("subHeading")}</p>

            {/* CTA Button */}
            <button
              className="inline-block px-6 py-2.5 font-medium rounded transition-all hover:opacity-90 w-fit text-black"
              style={{ backgroundColor: "#00d4ff" }}
            >
              {t("buttonText")}
            </button>

            {/* Feature Box */}
            <div className="mt-16 border-s-4 ps-4" style={{ borderColor: "#00d4ff" }}>
              <p className="font-medium mb-2 text-white">
                {t("featureLabelPart1")} <span style={{ color: "#00d4ff" }}>{t("featureLabelPart2")}</span>
              </p>
              <p className="text-gray-400 text-sm md:text-base leading-relaxed">{t("featureText")}</p>
            </div>
          </div>

          {/* Right visual */}
          <div className="relative h-96 md:h-full flex items-center justify-center">
            <div className="relative w-full max-w-2xl">
              {/* Glow effect */}
              <div
                className="absolute inset-0 rounded-full filter blur-3xl opacity-40"
                style={{ backgroundColor: "rgba(0, 212, 255, 0.2)" }}
              />

              {/* Brain visualization */}
              <div className="relative w-full aspect-square rounded-full overflow-hidden scale-125">
                <Image
                  src="/brain.png"
                  alt="Neural network brain visualization"
                  fill
                  className="object-cover"
                  priority
                  quality={90}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
