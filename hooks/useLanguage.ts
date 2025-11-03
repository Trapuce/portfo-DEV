import { useState, useEffect } from "react"
import { Language } from "@/lib/data/translations"

export function useLanguage() {
  const [language, setLanguage] = useState<Language>("fr")
  const [currentTime, setCurrentTime] = useState("")

  useEffect(() => {
    const updateTime = () => {
      const now = new Date()
      setCurrentTime(
        now.toLocaleTimeString(language === "fr" ? "fr-FR" : "en-US", {
          hour12: false,
        })
      )
    }
    updateTime()
    const interval = setInterval(updateTime, 1000)
    return () => clearInterval(interval)
  }, [language])

  const toggleLanguage = () => setLanguage(language === "fr" ? "en" : "fr")

  return { language, setLanguage, toggleLanguage, currentTime }
}

