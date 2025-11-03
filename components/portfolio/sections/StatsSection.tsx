"use client"

import { Language, translations } from "@/lib/data/translations"
import { SectionNavigation } from "../SectionNavigation"

interface StatsSectionProps {
  activeSection: string
  onPrevious: () => void
  onNext: () => void
  language: Language
}

export function StatsSection({
  activeSection,
  onPrevious,
  onNext,
  language,
}: StatsSectionProps) {
  const t = translations[language]

  return (
    <section className="space-y-6">
      <h2 className="text-3xl md:text-4xl font-bold mb-6">{t.stats.title}</h2>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6">
        <div className="border border-border rounded-lg p-6">
          <div className="text-4xl font-bold text-purple-600 mb-2">10+</div>
          <div className="text-muted-foreground">{t.stats.projectsCompleted}</div>
        </div>
        <div className="border border-border rounded-lg p-6">
          <div className="text-4xl font-bold text-purple-600 mb-2">3+</div>
          <div className="text-muted-foreground">{t.stats.experiences}</div>
        </div>
        <div className="border border-border rounded-lg p-6">
          <div className="text-4xl font-bold text-purple-600 mb-2">10+</div>
          <div className="text-muted-foreground">{t.stats.happyClients}</div>
        </div>
      </div>
      <SectionNavigation
        activeSection={activeSection}
        onPrevious={onPrevious}
        onNext={onNext}
        language={language}
      />
    </section>
  )
}

