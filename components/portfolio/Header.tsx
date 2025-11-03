"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Menu,
  Search,
  Languages,
  Moon,
  Sun,
  Github,
  ExternalLink,
} from "lucide-react"
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
    <header className="sticky top-0 z-10 border-b border-border bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60">
      <div className="flex items-center justify-between px-2 md:px-3 lg:px-4 py-1.5 md:py-2 gap-0.5 md:gap-1 max-w-full w-full">
        <div className="flex items-center gap-0.5 md:gap-1 lg:gap-1.5 flex-shrink-0 min-w-0">
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden flex-shrink-0 h-7 w-7"
            onClick={onMenuClick}
          >
            <Menu className="h-4 w-4" />
          </Button>
          <span className="text-xs font-medium hidden sm:inline whitespace-nowrap">
            {t.header.home}
          </span>
          <Button variant="ghost" size="sm" className="gap-0.5 hidden md:flex whitespace-nowrap text-xs h-7 px-1.5 md:px-2" asChild>
            <a
              href="https://www.linkedin.com/in/daouda-traor%C3%A9-428294205/"
              target="_blank"
              rel="noopener noreferrer"
            >
              {t.header.linkedin}
              <ExternalLink className="h-3 w-3" />
            </a>
          </Button>
          <Button variant="ghost" size="sm" className="gap-0.5 hidden lg:flex whitespace-nowrap text-xs h-7 px-1.5 md:px-2">
            {t.header.resume}
            <ExternalLink className="h-3 w-3" />
          </Button>
        </div>

        <div className="flex items-center gap-0.5 md:gap-1 flex-shrink-0 min-w-0">
          <div className="relative hidden lg:block">
            <Search className="absolute left-2 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-muted-foreground" />
            <Input
              type="text"
              placeholder={t.header.search}
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
              className="w-32 xl:w-40 pl-7 pr-8 bg-muted/50 flex-shrink-0 h-7 text-xs"
            />
            <kbd className="absolute right-1.5 top-1/2 -translate-y-1/2 pointer-events-none inline-flex h-3.5 select-none items-center rounded border border-border bg-muted px-0.5 font-mono text-[8px] font-medium text-muted-foreground">
              ⌘K
            </kbd>
          </div>

          <div className="hidden xl:flex items-center gap-1 text-xs whitespace-nowrap">
            <div className="h-1.5 w-1.5 rounded-full bg-green-500 flex-shrink-0" />
            {currentTime}
          </div>

          <Button
            variant="ghost"
            size="icon"
            onClick={onLanguageToggle}
            title={language === "fr" ? "Switch to English" : "Passer au français"}
            className="flex-shrink-0 h-7 w-7"
          >
            <Languages className="h-4 w-4" />
          </Button>

          <Button variant="ghost" size="icon" onClick={onThemeToggle} className="flex-shrink-0 h-7 w-7">
            {isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </Button>

          <Button variant="ghost" size="icon" className="hidden sm:flex flex-shrink-0 h-7 w-7" asChild>
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

