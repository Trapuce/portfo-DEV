"use client"

import { Button } from "@/components/ui/button"
import { Mail, Linkedin, Github } from "lucide-react"
import { Language, translations } from "@/lib/data/translations"
import { SectionNavigation } from "../SectionNavigation"

interface ContactSectionProps {
  activeSection: string
  onPrevious: () => void
  onNext: () => void
  language: Language
}

export function ContactSection({
  activeSection,
  onPrevious,
  onNext,
  language,
}: ContactSectionProps) {
  const t = translations[language]

  return (
    <section className="space-y-6">
      <h2 className="text-3xl md:text-4xl font-bold mb-6">{t.contact.title}</h2>
      <div className="space-y-4">
        <p className="text-base md:text-lg text-muted-foreground">
          {t.contact.description}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 pt-4">
          <Button className="gap-2" asChild>
            <a
              href="mailto:dt2040760@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Mail className="h-4 w-4" />
              {t.contact.emailMe}
            </a>
          </Button>
          <Button variant="outline" className="gap-2 bg-transparent" asChild>
            <a
              href="https://www.linkedin.com/in/daouda-traor%C3%A9-428294205/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin className="h-4 w-4" />
              LinkedIn
            </a>
          </Button>
          <Button variant="outline" className="gap-2 bg-transparent" asChild>
            <a
              href="https://github.com/Trapuce"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="h-4 w-4" />
              GitHub
            </a>
          </Button>
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

