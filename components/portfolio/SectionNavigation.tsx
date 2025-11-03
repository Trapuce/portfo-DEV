"use client"

import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Language, translations } from "@/lib/data/translations"

interface SectionNavigationProps {
  activeSection: string
  onPrevious: () => void
  onNext: () => void
  language: Language
}

export function SectionNavigation({
  activeSection,
  onPrevious,
  onNext,
  language,
}: SectionNavigationProps) {
  const t = translations[language]
  const sections = [
    { id: "about", label: t.sections.about },
    { id: "projects", label: t.sections.projects },
    { id: "skills", label: t.sections.skills },
    { id: "experience", label: t.sections.experience },
    { id: "education", label: t.sections.education },
    { id: "contact", label: t.sections.contact },
    { id: "stats", label: t.sections.stats },
  ]

  const currentIndex = sections.findIndex(
    (section) => section.id === activeSection
  )
  const hasPrevious = currentIndex > 0
  const hasNext = currentIndex < sections.length - 1

  return (
    <div className="flex justify-between items-center pt-8 mt-8 border-t border-border">
      {hasPrevious ? (
        <Button variant="ghost" className="gap-2" onClick={onPrevious}>
          <ChevronLeft className="h-4 w-4" />
          {sections[currentIndex - 1].label}
        </Button>
      ) : (
        <div />
      )}
      {hasNext ? (
        <Button variant="ghost" className="gap-2" onClick={onNext}>
          {sections[currentIndex + 1].label}
          <ChevronRight className="h-4 w-4" />
        </Button>
      ) : (
        <div />
      )}
    </div>
  )
}

