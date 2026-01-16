"use client"

import { useTranslations } from "next-intl"
import Image from "next/image"

export default function HeroSection() {
  const t = useTranslations("hero")

  return (
    <section className="relative min-h-screen flex flex-col md:flex-row md:items-center overflow-hidden bg-black">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-cyan-950/10 to-black pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-16 pt-24 md:pt-32 pb-12 md:pb-20 relative z-10 w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Left content */}
          <div className="flex flex-col justify-center md:pr-4 relative z-20">
            {/* Tagline */}
            <div className="flex items-center gap-2.5 mb-7">
              <span className="inline-block w-1.5 h-1.5 md:w-1.5 md:h-1.5 bg-white rounded-full shrink-0" />
              <span
                className="text-[10px] md:text-[11px] text-gray-400 font-normal tracking-[0.44px] uppercase"
                style={{ letterSpacing: "4%" }}
              >
                {t("tagline")}
              </span>
            </div>

            {/* Main Heading - 56px with 120% line height */}
            <h1
              className="text-3xl md:text-[56px] font-normal mb-5 md:mb-6 md:leading-[120%] text-white whitespace-pre-line"
              style={{ fontWeight: 400 }}
            >
              {t("mainHeading")}
            </h1>

            {/* Sub Heading - 16px with 160% line height */}
            <p className="text-gray-400 text-sm md:text-base font-normal mb-8 md:mb-10 md:leading-[160%] max-w-xl">
              {t("subHeading")}
            </p>

            {/* CTA Button */}
            <button
              className="inline-block px-6 py-2.5 font-medium rounded border border-[#00d4ff] text-black md:border-0 transition-all hover:opacity-90 w-fit"
              style={{ backgroundColor: "#00d4ff" }}
            >
              {t("buttonText")}
            </button>

            {/* Feature Box - Desktop only */}
            <div className="hidden md:block mt-16 border-s-4 ps-5 border-white max-w-md">
              <p className="font-medium mb-2 text-white text-base">
                {t("featureLabelPart1")} <span style={{ color: "#00d4ff" }}>{t("featureLabelPart2")}</span>
              </p>
              <p className="text-gray-400 text-sm leading-relaxed">
                {t("featureText")}
              </p>
            </div>
          </div>

          {/* Right visual - positioned bottom-right */}
          <div className="relative h-72 md:h-full flex items-end md:items-end justify-start md:justify-center w-full md:-ml-16 lg:-ml-32 md:pb-0">
            <div className="relative w-full max-w-sm md:max-w-[580px]">
              {/* Glow effect */}
              <div
                className="absolute inset-0 rounded-full filter blur-3xl opacity-40"
                style={{ backgroundColor: "rgba(0, 212, 255, 0.2)" }}
              />

              {/* Brain visualization */}
              <div className="relative w-full aspect-square rounded-full overflow-hidden scale-110 md:scale-125">
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

        {/* Feature Box - Mobile only (below brain) */}
        <div className="md:hidden mt-8 border-s-4 ps-4 border-white">
          <p className="font-medium mb-2 text-white text-sm">
            {t("featureLabelPart1")} <span style={{ color: "#00d4ff" }}>{t("featureLabelPart2")}</span>
          </p>
          <p className="text-gray-400 text-xs leading-relaxed">{t("featureText")}</p>
        </div>
      </div>
    </section>
  )
}
