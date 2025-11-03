"use client"

import Link from "next/link"
import { useState, useEffect, use } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ArrowLeft, ExternalLink, Moon, Sun, Github, Search, Menu, X, ChevronLeft, ChevronRight, Star, CheckCircle, RefreshCw } from "lucide-react"
import Image from "next/image"
import { notFound } from "next/navigation"

const projectsData: Record<
  string,
  {
    title: string
    description: string
    fullDescription: string
    technologies: string[]
    images: string[]
    featured: boolean
    status: "completed" | "in-progress"
    liveUrl?: string
    githubUrl?: string
    period?: string
  }
> = {
  "marc": {
    title: "MARC – Manager Assigns Resources Carefully",
    description: "Application web d'allocation intelligente de ressources humaines avec allocation automatique, visualisation via Prometheus et Grafana, et authentification Keycloak.",
    fullDescription:
      "Application web d'allocation intelligente de ressources humaines. Allocation automatique des ressources en fonction des disponibilités des employés, visualisation des affectations et métriques projet via Prometheus et Grafana, authentification sécurisée avec Keycloak (OpenID Connect), conteneurisation et orchestration via Docker et Kubernetes.",
    technologies: ["Vue.js", "TypeScript", "Java", "Spring Boot", "PostgreSQL", "MinIO", "Docker", "Kubernetes"],
    images: [
      "/placeholder.jpg",
      "/placeholder.jpg",
      "/placeholder.jpg",
    ],
    featured: true,
    status: "completed",
    liveUrl: "https://marc.trapuce.tech",
    period: "Janvier 2025 - Février 2025",
  },
  "projecthub": {
    title: "ProjectHub - Plateforme de Gestion de Projets",
    description: "Plateforme complète de gestion de projets avec gestion des utilisateurs et rôles, gestion des projets et tâches, upload de fichiers et authentification JWT.",
    fullDescription:
      "Gestion des utilisateurs avec rôles (Admin/Manager/Member), gestion des projets et tâches avec assignation, upload de fichiers et contrôle d'accès, authentification JWT et autorisation fine.",
    technologies: ["Java", "Spring Boot", "PostgreSQL", "Spring Security", "JWT", "Docker", "React.js"],
    images: [
      "/ProjecthUbAccueil.png",
      "/ProjecthUblogin.png",
      "/ProjecthUbregister.png",
    ],
    featured: false,
    status: "in-progress",
    liveUrl: "https://projecthub.trapuce.tech",
    period: "Novembre 2024 - Avril 2025",
  },
  "barber-time": {
    title: "Barber Time - Gestion de Rendez-vous Salon",
    description: "Application web complète de gestion de rendez-vous pour salon de coiffure/esthétique avec réservation en ligne, validation en temps réel et notifications automatiques.",
    fullDescription:
      "Application web complète de gestion de rendez-vous pour salon de coiffure/esthétique, développée avec Next.js 16 et TypeScript. Le système permet aux clients de réserver des créneaux en ligne avec validation en temps réel, notifications automatiques, et une interface d'administration complète. Intégration Resend pour les emails transactionnels et génération de codes QR pour accès mobile.\n\nSaaS générant 50€ de MRR (Monthly Recurring Revenue).",
    technologies: ["Next.js 16", "React 19", "TypeScript", "TailwindCSS 4", "Prisma", "SQLite", "PostgreSQL"],
    images: [
      "/salon-booking.png",
    ],
    featured: true,
    status: "completed",
    liveUrl: "https://barber-time.trapuce.tech",
  },
  "vehicle-identification": {
    title: "Système d'Identification de Véhicules",
    description: "Système complet de reconnaissance automatique de plaques d'immatriculation (ALPR) avec détection des véhicules via YOLOv5, OCR pour les plaques et interface web interactive.",
    fullDescription:
      "Un système complet de reconnaissance automatique de plaques d'immatriculation (ALPR) comprenant la détection des véhicules avec YOLOv5, la reconnaissance optique de caractères (OCR) pour les plaques, une interface web interactive avec Flask, et un historique des détections dans une base de données SQLite.",
    technologies: ["Python", "Flask", "YOLOv5", "OpenCV", "PyTesseract", "SQLite"],
    images: [
      "/identificatioVehiculeAccueil.png",
      "/identificatioVehiculeStory.png",
      "/identificatioVehiculeAnalyseResultat.png",
    ],
    featured: false,
    status: "completed",
    githubUrl: "https://github.com/Trapuce/Identification-de-vehicule",
  },
  "bac-mali": {
    title: "Plateforme d'Apprentissage en Ligne - Baccalauréat Mali",
    description: "Plateforme d'apprentissage en ligne destinée aux lycéens maliens préparant leur Baccalauréat, avec dashboard personnalisé, système de cours, quiz interactifs et badges.",
    fullDescription:
      "Plateforme d'apprentissage en ligne destinée aux lycéens maliens préparant leur Baccalauréat, avec un focus sur l'accessibilité et la motivation. Dashboard personnalisé avec suivi de progression par matière, système de cours structuré avec leçons et ressources, quiz interactifs avec feedback immédiat, système de badges et récompenses, notifications de rappel pour les sessions d'étude, et profil utilisateur avec statistiques et historique d'activité. Projet conçu pour démocratiser l'accès à l'éducation de qualité au Mali.",
    technologies: ["Next.js 14", "TypeScript", "Java", "Spring Boot"],
    images: [
      "/placeholder.jpg",
      "/placeholder.jpg",
    ],
    featured: false,
    status: "in-progress",
  },
  "ecommerce-mali": {
    title: "Boutique E-commerce Mali",
    description: "Solution e-commerce complète adaptée au contexte africain avec catalogue de produits, panier d'achat, système de paiement adapté au Mali (Mobile Money) et intégration WhatsApp.",
    fullDescription:
      "Boutique E-commerce Mali - Projet Full-Stack avec catalogue de produits avec filtrage par catégories, panier d'achat avec gestion des quantités, système de paiement adapté au Mali (Mobile Money : Orange Money, Moov Money + Cash à la livraison), intégration WhatsApp pour contact direct client, pages informatives (À propos, Contact, FAQ), et design responsive mobile-first. Solution e-commerce complète adaptée au contexte africain avec méthodes de paiement locales et expérience utilisateur optimisée pour les marchés émergents.",
    technologies: ["Next.js 16", "React 19", "TypeScript", "Tailwind CSS v4", "Java", "Spring Boot", "Spring Security"],
    images: [
      "/placeholder.jpg",
      "/placeholder.jpg",
    ],
    featured: false,
    status: "in-progress",
  },
  "sointim": {
    title: "Sointim - E-Commerce Culottes Menstruelles (Freelance)",
    description: "Boutique en ligne spécialisée dans la vente de culottes menstruelles bio MADE IN MALI avec back-office complet pour la gestion des produits, tailles, variations et commandes.",
    fullDescription:
      "E-Commerce Culottes Menstruelles - Boutique en ligne spécialisée dans la vente de culottes menstruelles bio MADE IN MALI. Dispose d'un back-office complet pour la gestion des produits, tailles, variations, articles de blog et commandes. Système de gestion des stocks et des rôles utilisateurs intégré.",
    technologies: ["PHP", "Laravel", "Vue.js"],
    images: [
      "/soinINtime.png",
    ],
    featured: false,
    status: "completed",
    liveUrl: "https://sointim.com/",
  },
  "ecole-colombe": {
    title: "École La Colombe - Gestion d'Établissement Scolaire (Freelance)",
    description: "Plateforme complète de gestion d'établissement scolaire multi-modules avec gestion élèves, professeurs, notes, emplois du temps, communication parents et administration financière.",
    fullDescription:
      "Plateforme complète de gestion d'établissement scolaire multi-modules. Gestion élèves, professeurs, notes, emplois du temps et communication parents. Administration financière et système de reporting avancé.",
    technologies: ["PHP", "Laravel", "Vue.js"],
    images: [
      "/colombe.png",
      "/colombelogin.png",
      "/colomberegister.png",
    ],
    featured: true,
    status: "in-progress",
    liveUrl: "https://re7.ecolelacolombe.com/",
  },
  "nkgold": {
    title: "NKGOLD - Plateforme Corporate Exportation (Freelance)",
    description: "Plateforme corporate dédiée à l'exportation de ressources naturelles (or, pétrole et gaz) présentant les services de l'entreprise et son expertise dans le secteur minier et énergétique.",
    fullDescription:
      "NKGOLD est une plateforme corporate dédiée à l'exportation de ressources naturelles (or, pétrole et gaz). Le site présente les services de l'entreprise, son expertise dans le secteur minier et énergétique, avec une interface moderne développée en Laravel InertiaJS React.",
    technologies: ["PHP", "Laravel", "JavaScript", "React"],
    images: [
      "/Nkgold.png",
    ],
    featured: false,
    status: "completed",
    liveUrl: "https://nkgold.sididev.com/",
  },
}

export default function ProjectDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const [isDark, setIsDark] = useState(true)
  const [searchQuery, setSearchQuery] = useState("")
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const { slug } = use(params)

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
  }, [isDark])

  const project = projectsData[slug]

  if (!project) {
    notFound()
  }

  const goToNextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % project.images.length)
  }

  const goToPreviousImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + project.images.length) % project.images.length)
  }

  return (
    <div className="flex min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Sidebar Navigation */}
      <aside
        className={`fixed left-0 top-0 h-screen w-64 border-r border-border bg-background p-6 overflow-y-auto z-50 transition-transform duration-300 lg:translate-x-0 ${
          isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="mb-8 flex items-center justify-between">
          <Link href="/" className="text-xl font-bold mb-1 animate-pulse text-purple-600">
            TRAPUCE TECH
          </Link>
          <Button variant="ghost" size="icon" className="lg:hidden" onClick={() => setIsMobileMenuOpen(false)}>
            <X className="h-5 w-5" />
          </Button>
        </div>

        <nav className="space-y-1">
          <Link
            href="/"
            onClick={() => setIsMobileMenuOpen(false)}
            className="block w-full text-left px-3 py-2 rounded-md text-sm transition-colors text-muted-foreground hover:text-foreground hover:bg-accent/50"
          >
            ← Retour au portfolio
          </Link>
        </nav>
      </aside>

      {/* Overlay for mobile menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 bg-black/50 z-40 lg:hidden" onClick={() => setIsMobileMenuOpen(false)} />
      )}

      {/* Main Content */}
      <main className="lg:ml-64 flex-1 w-full overflow-y-auto overflow-x-hidden">
        <header className="sticky top-0 z-10 border-b border-border bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60">
          <div className="flex items-center justify-between px-4 md:px-8 py-4 gap-2">
            <div className="flex items-center gap-2 md:gap-4">
              <Button variant="ghost" size="icon" className="lg:hidden" onClick={() => setIsMobileMenuOpen(true)}>
                <Menu className="h-5 w-5" />
              </Button>
              <span className="text-sm font-medium hidden sm:inline">Project Details</span>
              <Button variant="ghost" size="sm" className="gap-2 hidden md:flex" asChild>
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
                  placeholder="Search..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-40 lg:w-64 pl-9 pr-12 bg-muted/50"
                />
                <kbd className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border border-border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground">
                  ⌘K
                </kbd>
              </div>

              <Button variant="ghost" size="icon" onClick={() => setIsDark(!isDark)}>
                {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
              </Button>

              <Button variant="ghost" size="icon" className="hidden sm:flex" asChild>
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
        <div className="px-4 md:px-8 py-8 md:py-12 max-w-6xl min-h-full w-full overflow-x-hidden">
          {/* Back Button */}
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground mb-8 transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            Retour aux projets
          </Link>

          {/* Project Header */}
          <div className="mb-6">
            <div className="flex items-center gap-2 mb-4 flex-wrap">
              {project.featured && (
                <span className="inline-flex items-center gap-1 px-3 py-1 bg-purple-600 text-white text-sm font-semibold rounded">
                  <Star className="h-3.5 w-3.5" />
                  Vedette
                </span>
              )}
              {project.status === "completed" && (
                <span className="inline-flex items-center gap-1 px-3 py-1 bg-green-600 text-white text-sm font-semibold rounded">
                  <CheckCircle className="h-3.5 w-3.5" />
                  Terminé
                </span>
              )}
              {project.status === "in-progress" && (
                <span className="inline-flex items-center gap-1 px-3 py-1 bg-yellow-600 text-white text-sm font-semibold rounded">
                  <RefreshCw className="h-3.5 w-3.5" />
                  En cours
                </span>
              )}
            </div>
            <h1 className="text-3xl lg:text-5xl font-bold mb-6">{project.title}</h1>
            {project.period && (
              <p className="text-muted-foreground mb-4">{project.period}</p>
            )}
            <p className="text-lg text-muted-foreground leading-relaxed">{project.description}</p>
          </div>

          {/* Links */}
          <div className="flex flex-wrap gap-4 mb-8">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-purple-600 text-white font-medium hover:bg-purple-700 transition-colors"
              >
                <ExternalLink className="w-4 h-4" />
                <span>Voir le site</span>
              </a>
            )}
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-secondary text-secondary-foreground border border-border font-medium hover:bg-secondary/80 transition-colors"
              >
                <Github className="w-4 h-4" />
                <span>Code source</span>
              </a>
            )}
          </div>

          {/* Full Description */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-4">À propos de ce projet</h2>
            <p className="text-muted-foreground leading-relaxed whitespace-pre-line">{project.fullDescription}</p>
          </div>

          {/* Tech Stack */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Stack Technique</h2>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, i) => (
                <span
                  key={i}
                  className="px-4 py-2 bg-muted rounded-lg text-sm font-medium text-muted-foreground"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Image Gallery */}
          {project.images && project.images.length > 0 && (
            <div className="mb-8">
              <h2 className="text-2xl font-bold mb-4">Galerie</h2>
              <div className="relative">
                <div className="relative w-full h-[500px] rounded-lg overflow-hidden border border-border bg-muted">
                  <Image
                    src={project.images[currentImageIndex]}
                    alt={`${project.title} - Image ${currentImageIndex + 1}`}
                    fill
                    className="object-contain"
                  />
                </div>
                {project.images.length > 1 && (
                  <>
                    <Button
                      variant="outline"
                      size="icon"
                      className="absolute left-4 top-1/2 -translate-y-1/2 bg-background/80 backdrop-blur"
                      onClick={goToPreviousImage}
                    >
                      <ChevronLeft className="h-5 w-5" />
                    </Button>
                    <Button
                      variant="outline"
                      size="icon"
                      className="absolute right-4 top-1/2 -translate-y-1/2 bg-background/80 backdrop-blur"
                      onClick={goToNextImage}
                    >
                      <ChevronRight className="h-5 w-5" />
                    </Button>
                  </>
                )}
              </div>
              {project.images.length > 1 && (
                <div className="flex gap-2 mt-4 overflow-x-auto pb-2 max-w-full">
                  {project.images.map((img, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImageIndex(index)}
                      className={`relative w-20 h-20 rounded-lg overflow-hidden border-2 flex-shrink-0 transition-all ${
                        currentImageIndex === index
                          ? "border-purple-600"
                          : "border-border hover:border-purple-300"
                      }`}
                    >
                      <Image src={img} alt={`Thumbnail ${index + 1}`} fill className="object-cover" />
                    </button>
                  ))}
                </div>
              )}
            </div>
          )}
        </div>
      </main>
    </div>
  )
}
