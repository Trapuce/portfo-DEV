"use client"

import { useState } from "react"
import { Sidebar } from "@/components/portfolio/Sidebar"
import { Header } from "@/components/portfolio/Header"
import { Footer } from "@/components/portfolio/Footer"
import { AboutSection } from "@/components/portfolio/sections/AboutSection"
import { ProjectsSection } from "@/components/portfolio/sections/ProjectsSection"
import { SkillsSection } from "@/components/portfolio/sections/SkillsSection"
import { ExperienceSection } from "@/components/portfolio/sections/ExperienceSection"
import { EducationSection } from "@/components/portfolio/sections/EducationSection"
import { ContactSection } from "@/components/portfolio/sections/ContactSection"
import { StatsSection } from "@/components/portfolio/sections/StatsSection"
import { useTheme } from "@/hooks/useTheme"
import { useLanguage } from "@/hooks/useLanguage"
import { translations, Language } from "@/lib/data/translations"

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState("about")
  const [searchQuery, setSearchQuery] = useState("")
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const { isDark, toggleTheme } = useTheme()
  const { language, toggleLanguage, currentTime } = useLanguage()

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

  const getCurrentSectionIndex = () => {
    return sections.findIndex((section) => section.id === activeSection)
  }

  const goToNextSection = () => {
    const currentIndex = getCurrentSectionIndex()
    if (currentIndex < sections.length - 1) {
      setActiveSection(sections[currentIndex + 1].id)
    }
  }

  const goToPreviousSection = () => {
    const currentIndex = getCurrentSectionIndex()
    if (currentIndex > 0) {
      setActiveSection(sections[currentIndex - 1].id)
    }
  }

  const renderSection = () => {
    switch (activeSection) {
      case "about":
        return (
          <AboutSection
            activeSection={activeSection}
            onPrevious={goToPreviousSection}
            onNext={goToNextSection}
            language={language}
          />
        )
      case "projects":
        return (
          <ProjectsSection
            activeSection={activeSection}
            onPrevious={goToPreviousSection}
            onNext={goToNextSection}
            language={language}
          />
        )
      case "skills":
        return (
          <SkillsSection
            activeSection={activeSection}
            onPrevious={goToPreviousSection}
            onNext={goToNextSection}
            language={language}
          />
        )
      case "experience":
        return (
          <ExperienceSection
            activeSection={activeSection}
            onPrevious={goToPreviousSection}
            onNext={goToNextSection}
            language={language}
          />
        )
      case "education":
        return (
          <EducationSection
            activeSection={activeSection}
            onPrevious={goToPreviousSection}
            onNext={goToNextSection}
            language={language}
          />
        )
      case "contact":
        return (
          <ContactSection
            activeSection={activeSection}
            onPrevious={goToPreviousSection}
            onNext={goToNextSection}
            language={language}
          />
        )
      case "stats":
        return (
          <StatsSection
            activeSection={activeSection}
            onPrevious={goToPreviousSection}
            onNext={goToNextSection}
            language={language}
          />
        )
      default:
        return null
    }
  }

  return (
    <div className="flex min-h-screen bg-background text-foreground">
      <Sidebar
        activeSection={activeSection}
        setActiveSection={setActiveSection}
        isMobileMenuOpen={isMobileMenuOpen}
        setIsMobileMenuOpen={setIsMobileMenuOpen}
        language={language}
      />

      <main className="lg:ml-64 flex-1 w-full flex flex-col overflow-x-hidden">
        <Header
          onMenuClick={() => setIsMobileMenuOpen(true)}
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
          currentTime={currentTime}
          language={language}
          onLanguageToggle={toggleLanguage}
          isDark={isDark}
          onThemeToggle={toggleTheme}
        />

        <div className="px-4 md:px-8 lg:px-12 py-8 md:py-12 max-w-5xl w-full flex-1 overflow-y-auto">
          {renderSection()}
        </div>

        <Footer language={language} />
      </main>
    </div>
  )
}
