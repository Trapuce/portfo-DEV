"use client"

import Link from "next/link"
import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Moon, Sun, Github, ExternalLink, Search, Menu, X, Star, CheckCircle, RefreshCw } from "lucide-react"
import { getProjects } from "@/lib/data/projects"

const projects = getProjects("fr")

export default function ProjectsPage() {
  const [isDark, setIsDark] = useState(true)
  const [searchQuery, setSearchQuery] = useState("")
  const [currentTime, setCurrentTime] = useState("")
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  // Filter projects based on search query
  const filteredProjects = projects.filter((project) => {
    if (!project || !project.title) return false
    const query = searchQuery.toLowerCase()
    return (
      project.title.toLowerCase().includes(query) ||
      project.description.toLowerCase().includes(query) ||
      project.tech.some((tech) => tech.toLowerCase().includes(query))
    )
  })

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
  }, [isDark])

  useEffect(() => {
    const updateTime = () => {
      const now = new Date()
      setCurrentTime(now.toLocaleTimeString("en-US", { hour12: false }))
    }
    updateTime()
    const interval = setInterval(updateTime, 1000)
    return () => clearInterval(interval)
  }, [])

  const sections = [
    { id: "introduction", label: "Introduction", href: "/" },
    { id: "about", label: "About Me", href: "/#about" },
    { id: "projects", label: "Projects", href: "/projects" },
    { id: "skills", label: "Skills & Tools", href: "/#skills" },
    { id: "experience", label: "Experience", href: "/#experience" },
    { id: "education", label: "Education", href: "/#education" },
    { id: "contact", label: "Contact", href: "/#contact" },
    { id: "stats", label: "Stats", href: "/#stats" },
  ]

  return (
    <div className="flex min-h-screen bg-background text-foreground overflow-x-hidden">
      <aside
        className={`fixed left-0 top-0 h-screen w-64 border-r border-border bg-background p-6 overflow-y-auto z-50 transition-transform duration-300 lg:translate-x-0 ${isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"}`}
      >
        <div className="mb-8 flex items-center justify-between">
          <h1 className="text-xl font-bold mb-1 animate-pulse text-purple-600">
            TRAPUCE TECH
          </h1>
          <Button variant="ghost" size="icon" className="lg:hidden" onClick={() => setIsMobileMenuOpen(false)}>
            <X className="h-5 w-5" />
          </Button>
        </div>

        <nav className="space-y-1">
          {sections.map((section) => (
            <Link
              key={section.id}
              href={section.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className={`block w-full text-left px-3 py-2 rounded-md text-sm transition-colors ${
                section.id === "projects"
                  ? "bg-accent text-accent-foreground"
                  : "text-muted-foreground hover:text-foreground hover:bg-accent/50"
              }`}
            >
              {section.label}
            </Link>
          ))}
        </nav>
      </aside>

      {/* Overlay for mobile menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 bg-black/50 z-40 lg:hidden" onClick={() => setIsMobileMenuOpen(false)} />
      )}

      {/* Main Content */}
      <main className="lg:ml-64 flex-1 w-full overflow-y-auto overflow-x-hidden">
        <header className="sticky top-0 z-10 border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
          <div className="flex items-center justify-between px-4 md:px-8 py-4 gap-2">
            <div className="flex items-center gap-2 md:gap-4">
              <Button variant="ghost" size="icon" className="lg:hidden" onClick={() => setIsMobileMenuOpen(true)}>
                <Menu className="h-5 w-5" />
              </Button>
              <span className="text-sm font-medium hidden sm:inline">Projects</span>
              <Button 
                variant="ghost" 
                size="sm" 
                className="gap-2 hidden md:flex"
                asChild
              >
                <a 
                  href="https://www.linkedin.com/in/daouda-traor%C3%A9-428294205/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  LinkedIn
                  <ExternalLink className="h-3 w-3" />
                </a>
              </Button>
              <Button variant="ghost" size="sm" className="gap-2 hidden md:flex">
                Resume
                <ExternalLink className="h-3 w-3" />
              </Button>
            </div>

            <div className="flex items-center gap-2 md:gap-4">
              <div className="relative hidden md:block">
                <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <Input
                  type="text"
                  placeholder="Search sections..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-40 lg:w-64 pl-9 pr-12 bg-muted/50"
                />
                <kbd className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border border-border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground">
                  ⌘K
                </kbd>
              </div>

              <div className="hidden sm:flex items-center gap-2 text-sm">
                <div className="h-2 w-2 rounded-full bg-green-500" />
                {currentTime}
              </div>

              <Button variant="ghost" size="icon" onClick={() => setIsDark(!isDark)}>
                {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
              </Button>

              <Button 
                variant="ghost" 
                size="icon" 
                className="hidden sm:flex"
                asChild
              >
                <a 
                  href="https://github.com/Trapuce" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  title="GitHub"
                >
                  <Github className="h-5 w-5" />
                </a>
              </Button>
            </div>
          </div>
        </header>

        {/* Content Area */}
        <div className="px-4 md:px-8 py-8 md:py-12 max-w-6xl w-full overflow-x-hidden">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-4xl lg:text-5xl font-bold mb-4 text-purple-600">
              Mes Projets
            </h1>
            <p className="text-lg text-muted-foreground mb-6">
              Beaucoup d'idées, mais certaines sont encore en construction !
            </p>
            
            {/* Search Bar */}
            <div className="relative max-w-md">
              <Search className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Rechercher un projet ou une technologie..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 pr-4 bg-muted/50 border-border"
              />
            </div>
          </div>

          {/* Projects Count */}
          {searchQuery && (
            <div className="mb-6 text-sm text-muted-foreground">
              {filteredProjects.length} projet{filteredProjects.length > 1 ? "s trouvés" : " trouvé"}
            </div>
          )}

          {/* Projects Grid */}
          {filteredProjects.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 max-w-full">
              {filteredProjects.map((project, index) => (
                <Link
                  key={project.id}
                  href={`/projects/${project.id}`}
                  className="group relative block p-4 md:p-5 rounded-lg border border-border bg-card hover:border-purple-600 hover:shadow-lg hover:shadow-purple-600/10 transition-all duration-300 h-full flex flex-col max-w-full"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {/* Hover effect background */}
                  <div className="absolute inset-0 bg-purple-600/0 group-hover:bg-purple-600/5 transition-all duration-300" />
                  
                  {/* Content */}
                  <div className="relative z-10 flex flex-col h-full">
                    {/* Badges */}
                    <div className="flex items-center gap-2 mb-3 flex-wrap">
                      {project.featured && (
                        <span className="inline-flex items-center gap-1 px-2 py-1 bg-purple-600 text-white text-xs font-semibold rounded">
                          <Star className="h-3 w-3" />
                          Vedette
                        </span>
                      )}
                      {project.status === "completed" && (
                        <span className="inline-flex items-center gap-1 px-2 py-1 bg-green-600 text-white text-xs font-semibold rounded">
                          <CheckCircle className="h-3 w-3" />
                          Terminé
                        </span>
                      )}
                      {project.status === "in-progress" && (
                        <span className="inline-flex items-center gap-1 px-2 py-1 bg-yellow-600 text-white text-xs font-semibold rounded">
                          <RefreshCw className="h-3 w-3" />
                          En cours
                        </span>
                      )}
                    </div>
                    
                    <h3 className="text-lg md:text-xl font-bold mb-3 group-hover:text-purple-600 transition-colors line-clamp-2">
                      {project.title}
                    </h3>
                    <p className="text-sm md:text-base text-muted-foreground mb-4 leading-relaxed line-clamp-3 flex-grow">
                      {project.description}
                    </p>
                    
                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.slice(0, 3).map((tech, i) => (
                        <span
                          key={i}
                          className="px-2 py-1 bg-muted rounded-full text-xs text-muted-foreground whitespace-nowrap"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.tech.length > 3 && (
                        <span className="px-2 py-1 bg-muted rounded-full text-xs text-muted-foreground">
                          +{project.tech.length - 3}
                        </span>
                      )}
                    </div>
                    
                    {/* CTA */}
                    <div className="flex items-center gap-2 text-sm text-purple-600 group-hover:gap-3 transition-all mt-auto">
                      <span>En savoir plus</span>
                      <ExternalLink className="h-4 w-4 group-hover:translate-x-1 transition-transform flex-shrink-0" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-lg text-muted-foreground mb-4">
                Aucun projet trouvé pour "{searchQuery}"
              </p>
              <Button
                variant="outline"
                onClick={() => setSearchQuery("")}
                className="gap-2"
              >
                <X className="h-4 w-4" />
                Réinitialiser la recherche
              </Button>
            </div>
          )}
        </div>

        <footer className="border-t border-border px-4 md:px-8 py-6 text-center text-sm text-muted-foreground">
          <p className="text-balance">
            Fait par <span className="text-purple-600 font-semibold">Trapuce Tech</span> - Tous droits réservés © 2025
          </p>
        </footer>
      </main>
    </div>
  )
}
