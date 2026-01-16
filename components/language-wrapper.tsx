"use client"

interface LanguageWrapperProps {
  children: React.ReactNode
  locale: string
}

export function LanguageWrapper({ children, locale }: LanguageWrapperProps) {
  const isRTL = locale === "ar"

  return <html lang={locale} dir={isRTL ? "rtl" : "ltr"} suppressHydrationWarning>{children}</html>
}
