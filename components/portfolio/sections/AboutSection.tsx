"use client"

import { Button } from "@/components/ui/button"
import { Mail, ExternalLink } from "lucide-react"
import { Language, translations } from "@/lib/data/translations"
import { SectionNavigation } from "../SectionNavigation"

interface AboutSectionProps {
  activeSection: string
  onPrevious: () => void
  onNext: () => void
  language: Language
}

export function AboutSection({
  activeSection,
  onPrevious,
  onNext,
  language,
}: AboutSectionProps) {
  const t = translations[language]

  return (
    <section className="space-y-8">
      <div>
        <h2 className="text-3xl md:text-5xl font-bold text-muted-foreground mb-4 md:mb-6 animate-fade-in">
          Daouda TRAORE
        </h2>
        <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-6 md:mb-8 leading-tight">
          <span className="inline-block animate-typing whitespace-nowrap">{t.about.subtitle}</span>
        </h1>
        <div className="space-y-4 text-base md:text-lg text-muted-foreground leading-relaxed mb-8">
          <p className="text-justify">{t.about.description1}</p>
          <p className="text-justify">{t.about.description2}</p>
          <p className="text-justify">{t.about.description3}</p>
          <p className="text-justify">{t.about.description4}</p>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up">
        <Button className="gap-2 bg-purple-600 hover:bg-purple-700">
          {t.about.getResume}
          <ExternalLink className="h-4 w-4" />
        </Button>
        <Button variant="outline" className="gap-2 bg-transparent" asChild>
          <a
            href="mailto:dt2040760@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Mail className="h-4 w-4" />
            {t.about.sendMail}
          </a>
        </Button>
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

