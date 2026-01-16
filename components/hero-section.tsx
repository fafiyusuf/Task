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
      <div className="absolute right-0 lg:right-[2%] rtl:right-auto rtl:left-0 lg:rtl:left-[2%] top-1/2 -translate-y-1/3 w-[50%] max-w-[620px] z-0 hidden md:block">
        {/* Glow effect */}
        {/* <div
          className="absolute inset-0 rounded-full filter blur-3xl opacity-40"
          style={{ backgroundColor: "rgba(0, 212, 255, 0.2)" }}
        /> */}

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

      <div className="max-w-7xl mx-auto px-4 md:px-12 lg:px-20 pt-28 md:pt-40 lg:pt-44 pb-12 md:pb-20 relative z-10 w-full">
        <div className="relative flex flex-col">
          {/* Left content (Right for RTL) */}
          <div className="flex flex-col justify-center md:pe-4 relative z-20 md:max-w-2xl w-full text-start">
            {/* Tagline */}
            <div className="flex items-center gap-2 mb-4">
              <span className="inline-block w-[6px] h-[6px] bg-[#FFFFFF] rounded-full shrink-0" />
              <span className="text-[13px] md:text-[14px] text-gray-400 font-normal tracking-[0.2em] uppercase">
                {t("tagline")}
              </span>
            </div>

            {/* Main Heading */}
            <h1 
              className="text-[32px] md:text-[56px] lg:text-[72px] mb-4 md:mb-5 leading-[120%] text-[#FFFFFF] tracking-[0%] font-semibold"
              style={{ fontFamily: "'SF Pro', -apple-system, BlinkMacSystemFont, sans-serif", fontWeight: 600 }}
            >
              <span className="hidden md:inline">Stop managing chaos. Start<br />managing revenue.</span>
              <span className="md:hidden">Stop managing<br />chaos. Start<br />managing revenue.</span>
            </h1>

            {/* Sub Heading */}
            <p className="text-gray-400 text-sm md:text-[16px] font-normal mb-6 md:mb-8 leading-[1.6] max-w-md">
              {t("subHeading")}
            </p>

            {/* CTA Button */}
            <button
              className="inline-flex items-center justify-center px-5 py-2.5 text-sm font-normal rounded text-black transition-all hover:opacity-90 w-fit"
              style={{ backgroundColor: "#00d4ff" }}
            >
              Talk to <span className="font-semibold ml-1">ASTRAH</span>
            </button>

            {/* Feature Box - Desktop only */}
            <div className="hidden md:block mt-32 lg:mt-40 border-s-[3px] ps-5 border-[#FFFFFF] max-w-sm">
              <p className="font-medium mb-1 text-[#FFFFFF] text-[18px]">
                {t("featureLabelPart1")} <span style={{ color: "#00d4ff" }}>{t("featureLabelPart2")}</span>
              </p>
              <p className="text-gray-400 text-[16px] leading-[1.6]">
                {t("featureText")}
              </p>
            </div>
          </div>

          {/* Mobile brain image */}
          <div className="md:hidden w-[400px] h-[400px] mx-auto mt-6">
            <Image
              src="/brain.png"
              alt="Neural network brain visualization"
              width={400}
              height={400}
              className="w-[400px] h-[400px] object-contain"
              priority
              quality={90}
            />
          </div>
        </div>

        {/* Feature Box - Mobile only (below brain) */}
        <div className="md:hidden mt-6 border-s-4 ps-4 border-[#FFFFFF]">
          <p className="font-medium mb-2 text-[#FFFFFF] text-base">
            {t("featureLabelPart1")} <span style={{ color: "#00d4ff" }}>{t("featureLabelPart2")}</span>
          </p>
          <p className="text-gray-400 text-sm leading-relaxed">{t("featureText")}</p>
        </div>
      </div>
    </section>
  )
}
