import { useState, useEffect } from "react"

export function useTheme(initialTheme = true) {
  const [isDark, setIsDark] = useState(initialTheme)

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
  }, [isDark])

  const toggleTheme = () => setIsDark(!isDark)

  return { isDark, setIsDark, toggleTheme }
}

