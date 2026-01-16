import { create } from "zustand"

type Language = "en" | "ar"

interface LanguageState {
  language: Language
  setLanguage: (lang: Language) => void
  isRTL: boolean
}

export const useLanguageStore = create<LanguageState>((set) => ({
  language: "en",
  isRTL: false,
  setLanguage: (lang: Language) =>
    set({
      language: lang,
      isRTL: lang === "ar",
    }),
}))
