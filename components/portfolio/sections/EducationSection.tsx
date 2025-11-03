"use client"

import { useState } from "react"
import { Language, translations } from "@/lib/data/translations"
import { SectionNavigation } from "../SectionNavigation"

interface EducationSectionProps {
  activeSection: string
  onPrevious: () => void
  onNext: () => void
  language: Language
}

export function EducationSection({
  activeSection,
  onPrevious,
  onNext,
  language,
}: EducationSectionProps) {
  const t = translations[language]
  const [imageErrors, setImageErrors] = useState<Record<string, boolean>>({})

  return (
    <section className="space-y-6">
      <h2 className="text-3xl md:text-4xl font-bold mb-6">{t.education.title}</h2>
      <div className="space-y-8">
        {t.education.degrees.map((edu, index) => (
          <div key={index} className="border-l-2 border-purple-600 pl-4 md:pl-6 relative">
            <div className="flex items-start gap-4 mb-2">
              <div className="relative w-28 h-28 md:w-36 md:h-36 shrink-0 rounded-lg overflow-visible border-0 flex items-center justify-center">
                {edu.website ? (
                  <a
                    href={edu.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full h-full flex items-center justify-center hover:opacity-80 transition-opacity cursor-pointer"
                    title={`Visiter le site de ${edu.university}`}
                  >
                    {!imageErrors[edu.logo] ? (
                      <img
                        src={edu.logo}
                        alt={`${edu.university} logo`}
                        className="w-full h-full object-contain drop-shadow-sm"
                        style={{
                          filter: "none",
                          mixBlendMode: "normal",
                        }}
                        onError={() => {
                          setImageErrors((prev) => ({ ...prev, [edu.logo]: true }))
                        }}
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center text-xs text-muted-foreground text-center p-2 font-semibold border border-border rounded-lg bg-muted">
                        {edu.university
                          .split(" ")
                          .map((word) => word[0])
                          .join("")
                          .slice(0, 3)
                          .toUpperCase()}
                      </div>
                    )}
                  </a>
                ) : (
                  <>
                    {!imageErrors[edu.logo] ? (
                      <img
                        src={edu.logo}
                        alt={`${edu.university} logo`}
                        className="w-full h-full object-contain drop-shadow-sm"
                        style={{
                          filter: "none",
                          mixBlendMode: "normal",
                        }}
                        onError={() => {
                          setImageErrors((prev) => ({ ...prev, [edu.logo]: true }))
                        }}
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center text-xs text-muted-foreground text-center p-2 font-semibold border border-border rounded-lg bg-muted">
                        {edu.university
                          .split(" ")
                          .map((word) => word[0])
                          .join("")
                          .slice(0, 3)
                          .toUpperCase()}
                      </div>
                    )}
                  </>
                )}
              </div>
              <div className="flex-1">
                <h3 className="text-xl md:text-2xl font-bold">{edu.degree}</h3>
                <p className="text-base md:text-lg text-purple-600 mb-1">
                  {edu.university}
                </p>
                <p className="text-sm text-muted-foreground mb-1">{edu.location}</p>
                <p className="text-sm text-muted-foreground mb-3">{edu.period}</p>
                <p className="text-muted-foreground">{edu.description}</p>
              </div>
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

