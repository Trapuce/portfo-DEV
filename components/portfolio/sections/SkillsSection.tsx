"use client"

import { Language, translations } from "@/lib/data/translations"
import { getSkills } from "@/lib/data/skills"
import { SectionNavigation } from "../SectionNavigation"

interface SkillsSectionProps {
  activeSection: string
  onPrevious: () => void
  onNext: () => void
  language: Language
}

export function SkillsSection({
  activeSection,
  onPrevious,
  onNext,
  language,
}: SkillsSectionProps) {
  const t = translations[language]
  const skills = getSkills(language)

  return (
    <section className="space-y-6">
      <h2 className="text-3xl md:text-4xl font-bold mb-6">{t.skills.title}</h2>
      <div className="grid gap-8">
        {Object.entries(skills).map(([category, items]) => (
          <div key={category} className="space-y-4">
            <h3 className="text-xl md:text-2xl font-bold text-purple-600">
              {category}
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
              {items.map((skill, i) => {
                const logoSrc =
                  skill.icon === "uipath"
                    ? "/uipath-logo.svg"
                    : skill.icon === "n8n"
                      ? "/n8n-logo.svg"
                      : `https://cdn.jsdelivr.net/npm/simple-icons@v10/icons/${skill.icon}.svg`

                return (
                  <div
                    key={i}
                    className="flex flex-col items-center justify-center p-4 border border-border rounded-lg hover:border-purple-600 hover:shadow-md transition-all bg-card"
                  >
                    <div className="w-12 h-12 mb-2 flex items-center justify-center relative">
                      <img
                        src={logoSrc}
                        alt={skill.name}
                        className="w-full h-full dark:brightness-0 dark:invert"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement
                          target.style.display = "none"
                          const parent = target.parentElement
                          if (parent && !parent.querySelector(".skill-fallback")) {
                            const fallback = document.createElement("div")
                            fallback.className =
                              "skill-fallback w-full h-full flex items-center justify-center text-xs font-semibold text-muted-foreground"
                            fallback.textContent = skill.name
                              .slice(0, 2)
                              .toUpperCase()
                            parent.appendChild(fallback)
                          }
                        }}
                      />
                    </div>
                    <span className="text-xs font-medium text-center">
                      {skill.name}
                    </span>
                  </div>
                )
              })}
            </div>
          </div>
        ))}
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

