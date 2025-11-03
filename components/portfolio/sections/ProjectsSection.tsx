"use client"

import Link from "next/link"
import { ExternalLink, Star, CheckCircle, RefreshCw } from "lucide-react"
import { Language, translations } from "@/lib/data/translations"
import { getProjects } from "@/lib/data/projects"
import { SectionNavigation } from "../SectionNavigation"

interface ProjectsSectionProps {
  activeSection: string
  onPrevious: () => void
  onNext: () => void
  language: Language
}

export function ProjectsSection({
  activeSection,
  onPrevious,
  onNext,
  language,
}: ProjectsSectionProps) {
  const t = translations[language]
  const projects = getProjects(language)

  return (
    <section className="space-y-6">
      <h2 className="text-3xl md:text-4xl font-bold mb-6">{t.projects.title}</h2>
      <p className="text-lg text-muted-foreground mb-8">{t.projects.subtitle}</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 max-w-full">
        {projects.map((project) => (
          <Link
            key={project.id}
            href={project.link}
            className="group border border-border rounded-lg p-4 md:p-5 hover:border-purple-600 hover:shadow-lg hover:shadow-purple-600/10 transition-all duration-300 flex flex-col cursor-pointer max-w-full"
          >
            <div className="flex items-center gap-2 mb-3 flex-wrap">
              {project.featured && (
                <span className="inline-flex items-center gap-1 px-2 py-1 bg-purple-600 text-white text-xs font-semibold rounded">
                  <Star className="h-3 w-3" />
                  {language === "fr" ? "Vedette" : "Featured"}
                </span>
              )}
              {project.status === "completed" && (
                <span className="inline-flex items-center gap-1 px-2 py-1 bg-green-600 text-white text-xs font-semibold rounded">
                  <CheckCircle className="h-3 w-3" />
                  {language === "fr" ? "Terminé" : "Completed"}
                </span>
              )}
              {project.status === "in-progress" && (
                <span className="inline-flex items-center gap-1 px-2 py-1 bg-yellow-600 text-white text-xs font-semibold rounded">
                  <RefreshCw className="h-3 w-3" />
                  {language === "fr" ? "En cours" : "In Progress"}
                </span>
              )}
            </div>

            <h3 className="text-lg md:text-xl font-bold mb-3 group-hover:text-purple-600 transition-colors line-clamp-2">
              {project.title}
            </h3>
            <p className="text-sm md:text-base text-muted-foreground mb-4 line-clamp-3">{project.description}</p>
            <div className="flex flex-wrap gap-2 mb-4">
              {project.tech.slice(0, 3).map((tech, i) => (
                <span key={i} className="px-2 py-1 bg-muted rounded-full text-xs whitespace-nowrap">
                  {tech}
                </span>
              ))}
              {project.tech.length > 3 && (
                <span className="px-2 py-1 bg-muted rounded-full text-xs">
                  +{project.tech.length - 3}
                </span>
              )}
            </div>
            <div className="flex items-center gap-2 text-sm text-purple-600 group-hover:gap-3 transition-all mt-auto">
              <span>{t.projects.learnMore}</span>
              <ExternalLink className="h-4 w-4 group-hover:translate-x-1 transition-transform flex-shrink-0" />
            </div>
          </Link>
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

