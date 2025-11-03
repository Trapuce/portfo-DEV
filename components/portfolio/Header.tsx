"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Menu, Search, Languages, Moon, Sun, Github, ExternalLink } from "lucide-react"
import { Language, translations } from "@/lib/data/translations"

interface HeaderProps {
  onMenuClick: () => void
  searchQuery: string
  onSearchChange: (value: string) => void
  currentTime: string
  language: Language
  onLanguageToggle: () => void
  isDark: boolean
  onThemeToggle: () => void
}

export function Header({
  onMenuClick,
  searchQuery,
  onSearchChange,
  currentTime,
  language,
  onLanguageToggle,
  isDark,
  onThemeToggle,
}: HeaderProps) {
  const t = translations[language]

  return (
    <header className="sticky top-0 z-10 border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="flex flex-wrap items-center gap-x-1.5 md:gap-x-2 gap-y-1 px-3 md:px-4 lg:px-6 py-1.5 md:py-2.5 w-full">
        <div className="flex items-center gap-1.5 md:gap-2 basis-full sm:basis-auto sm:flex-none">
          <Button variant="ghost" size="icon" className="lg:hidden h-8 w-8" onClick={onMenuClick}>
            <Menu className="h-4 w-4" />
          </Button>
          <span className="text-xs md:text-sm font-medium hidden sm:inline whitespace-nowrap">
            {t.header.home}
          </span>
          <Button
            variant="ghost"
            size="sm"
            className="gap-1 hidden md:flex whitespace-nowrap text-xs md:text-sm h-8 px-1.5"
            asChild
          >
            <a
              href="https://www.linkedin.com/in/daouda-traor%C3%A9-428294205/"
              target="_blank"
              rel="noopener noreferrer"
            >
              {t.header.linkedin}
              <ExternalLink className="h-3 w-3" />
            </a>
          </Button>
          <Button
            variant="ghost"
            size="sm"
            className="gap-1 hidden lg:flex whitespace-nowrap text-xs md:text-sm h-8 px-1.5"
          >
            {t.header.resume}
            <ExternalLink className="h-3 w-3" />
          </Button>
        </div>

        <div className="flex items-center gap-1 md:gap-1.5 basis-full sm:basis-auto sm:flex-1 sm:justify-end min-w-0 flex-wrap">
          <div className="relative flex-1 min-w-[160px] max-w-xs w-full">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              type="text"
              placeholder={t.header.search}
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
              className="w-full pl-9 pr-12 h-9 bg-muted/50"
            />
            <kbd className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border border-border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground">
              ⌘K
            </kbd>
          </div>

          <div className="hidden md:flex items-center gap-1.5 text-xs md:text-sm whitespace-nowrap">
            <div className="h-2 w-2 rounded-full bg-green-500" />
            {currentTime}
          </div>

          <Button
            variant="ghost"
            size="icon"
            onClick={onLanguageToggle}
            title={language === "fr" ? "Switch to English" : "Passer au français"}
            className="flex-shrink-0 h-8 w-8"
          >
            <Languages className="h-4 w-4" />
          </Button>

          <Button variant="ghost" size="icon" onClick={onThemeToggle} className="flex-shrink-0 h-8 w-8">
            {isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </Button>

          <Button variant="ghost" size="icon" className="hidden sm:flex flex-shrink-0 h-8 w-8" asChild>
            <a
              href="https://github.com/Trapuce"
              target="_blank"
              rel="noopener noreferrer"
              title="GitHub"
            >
              <Github className="h-4 w-4" />
            </a>
          </Button>
        </div>
      </div>
    </header>
  )
}
