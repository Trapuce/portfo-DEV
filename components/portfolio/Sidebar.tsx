"use client"

import { Button } from "@/components/ui/button"
import { X } from "lucide-react"
import { Language, translations } from "@/lib/data/translations"

interface SidebarProps {
  activeSection: string
  setActiveSection: (section: string) => void
  isMobileMenuOpen: boolean
  setIsMobileMenuOpen: (open: boolean) => void
  language: Language
}

export function Sidebar({
  activeSection,
  setActiveSection,
  isMobileMenuOpen,
  setIsMobileMenuOpen,
  language,
}: SidebarProps) {
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

  return (
    <>
      <aside
        className={`fixed left-0 top-0 h-screen w-64 border-r border-border bg-background p-6 overflow-y-auto z-50 transition-transform duration-300 lg:translate-x-0 ${
          isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="mb-8 flex items-center justify-between">
          <h1 className="text-xl font-bold mb-1 animate-pulse text-purple-600">
            TRAPUCE TECH
          </h1>
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <X className="h-5 w-5" />
          </Button>
        </div>

        <nav className="space-y-1">
          {sections.map((section) => (
            <button
              key={section.id}
              onClick={() => {
                setActiveSection(section.id)
                setIsMobileMenuOpen(false)
              }}
              className={`w-full text-left px-3 py-2 rounded-md text-sm transition-colors ${
                activeSection === section.id
                  ? "bg-accent text-accent-foreground"
                  : "text-muted-foreground hover:text-foreground hover:bg-accent/50"
              }`}
            >
              {section.label}
            </button>
          ))}
        </nav>
      </aside>

      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}
    </>
  )
}

