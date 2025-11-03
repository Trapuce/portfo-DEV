"use client"

import { Language, translations } from "@/lib/data/translations"

interface FooterProps {
  language: Language
}

export function Footer({ language }: FooterProps) {
  const t = translations[language]

  return (
    <footer className="border-t border-border px-4 md:px-8 py-6 text-center text-sm text-muted-foreground">
      <p className="text-balance">
        {t.footer.madeBy}{" "}
        <span className="text-purple-600 font-semibold">Trapuce Tech</span> -{" "}
        {t.footer.rights} © 2025
      </p>
    </footer>
  )
}

