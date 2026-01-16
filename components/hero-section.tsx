"use client"

import { useTranslations } from "next-intl"
import Image from "next/image"

export default function HeroSection() {
  const t = useTranslations("hero")

  return (
    <section className="relative min-h-screen flex flex-col overflow-hidden bg-black">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-cyan-950/10 to-black pointer-events-none" />

      {/* Brain image - positioned absolutely to the right side (left for RTL) */}
      <div className="absolute right-[5%] lg:right-[8%] rtl:right-auto rtl:left-[5%] lg:rtl:left-[8%] top-1/2 -translate-y-1/3 w-[50%] max-w-[620px] z-0 hidden md:block">
        {/* Glow effect */}
        <div
          className="absolute inset-0 rounded-full filter blur-3xl opacity-40"
          style={{ backgroundColor: "rgba(0, 212, 255, 0.2)" }}
        />

        {/* Brain visualization */}
        <div className="relative w-full aspect-square rounded-full overflow-hidden">
          <Image
            src="/brain.png"
            alt="Neural network brain visualization"
            fill
            className="object-cover object-center"
            priority
            quality={90}
          />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-16 pt-32 md:pt-40 lg:pt-44 pb-12 md:pb-20 relative z-10 w-full">
        <div className="relative flex flex-col">
          {/* Left content (Right for RTL) */}
          <div className="flex flex-col justify-center md:pe-4 relative z-20 md:max-w-2xl w-full text-start">
            {/* Tagline */}
            <div className="flex items-center gap-2 mb-4">
              <span className="inline-block w-[6px] h-[6px] bg-[#e7f5f8] rounded-full shrink-0" />
              <span className="text-[13px] md:text-[14px] text-gray-400 font-normal tracking-[0.2em] uppercase">
                {t("tagline")}
              </span>
            </div>

            {/* Main Heading */}
            <h1 
              className="text-3xl md:text-[56px] lg:text-[72px] mb-4 md:mb-5 leading-[120%] text-white tracking-[0%]"
              style={{ fontFamily: "'SF Pro', -apple-system, BlinkMacSystemFont, sans-serif", fontWeight: 510 }}
            >
              <span className="md:whitespace-nowrap">{t("mainHeadingLine1")}</span>
              <br />
              <span className="md:whitespace-nowrap">{t("mainHeadingLine2")}</span>
            </h1>

            {/* Sub Heading */}
            <p className="text-gray-400 text-sm md:text-[16px] font-normal mb-6 md:mb-8 leading-[1.6] max-w-md">
              {t("subHeading")}
            </p>

            {/* CTA Button */}
            <button
              className="inline-flex items-center justify-center px-5 py-2.5 text-sm font-medium rounded text-black transition-all hover:opacity-90 w-fit"
              style={{ backgroundColor: "#00d4ff" }}
            >
              {t("buttonText")}
            </button>

            {/* Feature Box - Desktop only */}
            <div className="hidden md:block mt-32 lg:mt-40 border-s-[3px] ps-5 border-white max-w-sm">
              <p className="font-medium mb-1 text-white text-[18px]">
                {t("featureLabelPart1")} <span style={{ color: "#00d4ff" }}>{t("featureLabelPart2")}</span>
              </p>
              <p className="text-gray-400 text-[16px] leading-[1.6]">
                {t("featureText")}
              </p>
            </div>
          </div>

          {/* Mobile brain image */}
          <div className="md:hidden relative w-full h-64 mt-8">
            <div
              className="absolute inset-0 rounded-full filter blur-3xl opacity-40"
              style={{ backgroundColor: "rgba(0, 212, 255, 0.2)" }}
            />
            <div className="relative w-full h-full">
              <Image
                src="/brain.png"
                alt="Neural network brain visualization"
                fill
                className="object-contain object-center"
                priority
                quality={90}
              />
            </div>
          </div>
        </div>

        {/* Feature Box - Mobile only (below brain) */}
        <div className="md:hidden mt-8 border-s-4 ps-4 border-white">
          <p className="font-medium mb-2 text-white text-base">
            {t("featureLabelPart1")} <span style={{ color: "#00d4ff" }}>{t("featureLabelPart2")}</span>
          </p>
          <p className="text-gray-400 text-sm leading-relaxed">{t("featureText")}</p>
        </div>
      </div>
    </section>
  )
}
