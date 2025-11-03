"use client"

import { useState } from "react"
import { Language, translations } from "@/lib/data/translations"
import { SectionNavigation } from "../SectionNavigation"

interface ExperienceSectionProps {
  activeSection: string
  onPrevious: () => void
  onNext: () => void
  language: Language
}

export function ExperienceSection({
  activeSection,
  onPrevious,
  onNext,
  language,
}: ExperienceSectionProps) {
  const t = translations[language]
  const [imageErrors, setImageErrors] = useState<Record<string, boolean>>({})

  return (
    <section className="space-y-6">
      <h2 className="text-3xl md:text-4xl font-bold mb-6">{t.experience.title}</h2>
      <div className="space-y-8">
        {t.experience.jobs.map((job, index) => (
          <div key={index} className="border-l-2 border-purple-600 pl-4 md:pl-6 relative">
            <div className="flex items-start gap-4 mb-2">
              {job.logo && (
                <div className="relative w-20 h-20 md:w-24 md:h-24 shrink-0 rounded-lg overflow-hidden border border-border bg-white dark:bg-white flex items-center justify-center p-2">
                  {job.website ? (
                    <a
                      href={job.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full h-full flex items-center justify-center hover:opacity-80 transition-opacity cursor-pointer"
                      title={`Visiter le site de ${job.company}`}
                    >
                      {!imageErrors[job.logo] ? (
                        <img
                          src={job.logo}
                          alt={`${job.company} logo`}
                          className="w-full h-full object-contain"
                          style={{
                            filter: "none",
                            mixBlendMode: "normal",
                          }}
                          onError={() => {
                            setImageErrors((prev) => ({ ...prev, [job.logo]: true }))
                          }}
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center text-xs text-muted-foreground text-center p-2 font-semibold">
                          {job.company.slice(0, 3).toUpperCase()}
                        </div>
                      )}
                    </a>
                  ) : (
                    <>
                      {!imageErrors[job.logo] ? (
                        <img
                          src={job.logo}
                          alt={`${job.company} logo`}
                          className="w-full h-full object-contain"
                          style={{
                            filter: "none",
                            mixBlendMode: "normal",
                          }}
                          onError={() => {
                            setImageErrors((prev) => ({ ...prev, [job.logo]: true }))
                          }}
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center text-xs text-muted-foreground text-center p-2 font-semibold">
                          {job.company.slice(0, 3).toUpperCase()}
                        </div>
                      )}
                    </>
                  )}
                </div>
              )}
              <div className="flex-1">
                <h3 className="text-xl md:text-2xl font-bold">{job.title}</h3>
                <p className="text-base md:text-lg text-purple-600 mb-1">
                  {job.company}
                </p>
                <p className="text-sm text-muted-foreground mb-3">{job.period}</p>
                <p className="text-muted-foreground">{job.description}</p>
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

