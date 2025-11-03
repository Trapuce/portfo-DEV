import { Language } from "./translations"

export const getProjects = (language: Language) => [
  {
    id: "marc",
    title: "MARC – Manager Assigns Resources Carefully",
    description:
      language === "fr"
        ? "Application web d'allocation intelligente de ressources humaines avec allocation automatique des ressources, visualisation des affectations via Prometheus et Grafana, et authentification sécurisée avec Keycloak."
        : "Web application for intelligent human resource allocation with automatic resource allocation, assignment visualization via Prometheus and Grafana, and secure authentication with Keycloak.",
    tech: ["Vue.js", "TypeScript", "Java", "Spring Boot", "PostgreSQL", "MinIO", "Docker", "Kubernetes"],
    link: "/projects/marc",
    featured: true,
    status: "completed" as const,
    period: language === "fr" ? "Janvier 2025 - Février 2025" : "January 2025 - February 2025",
    url: "https://marc.trapuce.tech",
    fullDescription: language === "fr"
      ? "Application web d'allocation intelligente de ressources humaines. Allocation automatique des ressources en fonction des disponibilités des employés, visualisation des affectations et métriques projet via Prometheus et Grafana, authentification sécurisée avec Keycloak (OpenID Connect), conteneurisation et orchestration via Docker et Kubernetes."
      : "Web application for intelligent human resource allocation. Automatic resource allocation based on employee availability, assignment visualization and project metrics via Prometheus and Grafana, secure authentication with Keycloak (OpenID Connect), containerization and orchestration via Docker and Kubernetes.",
  },
  {
    id: "projecthub",
    title: "ProjectHub - Plateforme de Gestion de Projets",
    description:
      language === "fr"
        ? "Plateforme complète de gestion de projets avec gestion des utilisateurs et rôles, gestion des projets et tâches avec assignation, upload de fichiers avec contrôle d'accès, et authentification JWT."
        : "Complete project management platform with user and role management, project and task management with assignment, file uploads with access control, and JWT authentication.",
    tech: ["Java", "Spring Boot", "PostgreSQL", "Spring Security", "JWT", "Docker", "React.js"],
    link: "/projects/projecthub",
    featured: false,
    status: "in-progress" as const,
    period: language === "fr" ? "Novembre 2024 - Avril 2025" : "November 2024 - April 2025",
    url: "https://projecthub.trapuce.tech",
    fullDescription: language === "fr"
      ? "Gestion des utilisateurs avec rôles (Admin/Manager/Member), gestion des projets et tâches avec assignation, upload de fichiers et contrôle d'accès, authentification JWT et autorisation fine."
      : "User management with roles (Admin/Manager/Member), project and task management with assignment, file uploads and access control, JWT authentication and fine-grained authorization.",
  },
  {
    id: "barber-time",
    title: "Barber Time - Gestion de Rendez-vous Salon",
    description:
      language === "fr"
        ? "Application web complète de gestion de rendez-vous pour salon de coiffure/esthétique avec réservation en ligne, validation en temps réel, notifications automatiques et interface d'administration."
        : "Complete web application for hairdressing/beauty salon appointment management with online booking, real-time validation, automatic notifications and admin interface.",
    tech: ["Next.js 16", "React 19", "TypeScript", "TailwindCSS 4", "Prisma", "SQLite", "PostgreSQL"],
    link: "/projects/barber-time",
    featured: true,
    status: "completed" as const,
    url: "https://barber-time.trapuce.tech",
    fullDescription: language === "fr"
      ? "Application web complète de gestion de rendez-vous pour salon de coiffure/esthétique, développée avec Next.js 16 et TypeScript. Le système permet aux clients de réserver des créneaux en ligne avec validation en temps réel, notifications automatiques, et une interface d'administration complète. Intégration Resend pour les emails transactionnels et génération de codes QR pour accès mobile.\n\nSaaS générant 50€ de MRR (Monthly Recurring Revenue)."
      : "Complete web application for hairdressing/beauty salon appointment management, developed with Next.js 16 and TypeScript. The system allows clients to book slots online with real-time validation, automatic notifications, and a complete admin interface. Resend integration for transactional emails and QR code generation for mobile access.\n\nSaaS generating €50 MRR (Monthly Recurring Revenue).",
  },
  {
    id: "vehicle-identification",
    title: "Système d'Identification de Véhicules",
    description:
      language === "fr"
        ? "Système complet de reconnaissance automatique de plaques d'immatriculation (ALPR) avec détection des véhicules via YOLOv5, OCR pour les plaques, interface web interactive et historique des détections."
        : "Complete automatic license plate recognition system (ALPR) with vehicle detection via YOLOv5, OCR for plates, interactive web interface and detection history.",
    tech: ["Python", "Flask", "YOLOv5", "OpenCV", "PyTesseract", "SQLite"],
    link: "/projects/vehicle-identification",
    featured: false,
    status: "completed" as const,
    url: "https://github.com/Trapuce/Identification-de-vehicule",
    fullDescription: language === "fr"
      ? "Un système complet de reconnaissance automatique de plaques d'immatriculation (ALPR) comprenant la détection des véhicules avec YOLOv5, la reconnaissance optique de caractères (OCR) pour les plaques, une interface web interactive avec Flask, et un historique des détections dans une base de données SQLite."
      : "A complete automatic license plate recognition system (ALPR) including vehicle detection with YOLOv5, optical character recognition (OCR) for plates, an interactive web interface with Flask, and detection history in a SQLite database.",
  },
  {
    id: "bac-mali",
    title: "Plateforme d'Apprentissage en Ligne - Baccalauréat Mali",
    description:
      language === "fr"
        ? "Plateforme d'apprentissage en ligne destinée aux lycéens maliens préparant leur Baccalauréat, avec dashboard personnalisé, système de cours, quiz interactifs, badges et notifications."
        : "Online learning platform for Malian high school students preparing for their Baccalauréat, with personalized dashboard, course system, interactive quizzes, badges and notifications.",
    tech: ["Next.js 14", "TypeScript", "Java", "Spring Boot"],
    link: "/projects/bac-mali",
    featured: false,
    status: "in-progress" as const,
    fullDescription: language === "fr"
      ? "Plateforme d'apprentissage en ligne destinée aux lycéens maliens préparant leur Baccalauréat, avec un focus sur l'accessibilité et la motivation. Dashboard personnalisé avec suivi de progression par matière, système de cours structuré avec leçons et ressources, quiz interactifs avec feedback immédiat, système de badges et récompenses, notifications de rappel pour les sessions d'étude, et profil utilisateur avec statistiques et historique d'activité. Projet conçu pour démocratiser l'accès à l'éducation de qualité au Mali."
      : "Online learning platform for Malian high school students preparing for their Baccalauréat, with a focus on accessibility and motivation. Personalized dashboard with progress tracking by subject, structured course system with lessons and resources, interactive quizzes with immediate feedback, badge and reward system, study session reminder notifications, and user profile with statistics and activity history. Project designed to democratize access to quality education in Mali.",
  },
  {
    id: "ecommerce-mali",
    title: "Boutique E-commerce Mali",
    description:
      language === "fr"
        ? "Solution e-commerce complète adaptée au contexte africain avec catalogue de produits, panier d'achat, système de paiement adapté au Mali (Mobile Money) et intégration WhatsApp."
        : "Complete e-commerce solution adapted to the African context with product catalog, shopping cart, payment system adapted to Mali (Mobile Money) and WhatsApp integration.",
    tech: ["Next.js 16", "React 19", "TypeScript", "Tailwind CSS v4", "Java", "Spring Boot", "Spring Security"],
    link: "/projects/ecommerce-mali",
    featured: false,
    status: "in-progress" as const,
    fullDescription: language === "fr"
      ? "Boutique E-commerce Mali - Projet Full-Stack avec catalogue de produits avec filtrage par catégories, panier d'achat avec gestion des quantités, système de paiement adapté au Mali (Mobile Money : Orange Money, Moov Money + Cash à la livraison), intégration WhatsApp pour contact direct client, pages informatives (À propos, Contact, FAQ), et design responsive mobile-first. Solution e-commerce complète adaptée au contexte africain avec méthodes de paiement locales et expérience utilisateur optimisée pour les marchés émergents."
      : "Mali E-commerce Store - Full-Stack project with product catalog with category filtering, shopping cart with quantity management, payment system adapted to Mali (Mobile Money: Orange Money, Moov Money + Cash on delivery), WhatsApp integration for direct client contact, informative pages (About, Contact, FAQ), and responsive mobile-first design. Complete e-commerce solution adapted to the African context with local payment methods and user experience optimized for emerging markets.",
  },
  {
    id: "sointim",
    title: "Sointim - E-Commerce Culottes Menstruelles (Freelance)",
    description:
      language === "fr"
        ? "Boutique en ligne spécialisée dans la vente de culottes menstruelles bio MADE IN MALI avec back-office complet pour la gestion des produits, tailles, variations, articles de blog et commandes."
        : "Online store specializing in the sale of organic menstrual panties MADE IN MALI with complete back-office for managing products, sizes, variations, blog articles and orders.",
    tech: ["PHP", "Laravel", "Vue.js"],
    link: "/projects/sointim",
    featured: false,
    status: "completed" as const,
    url: "https://sointim.com/",
    fullDescription: language === "fr"
      ? "E-Commerce Culottes Menstruelles - Boutique en ligne spécialisée dans la vente de culottes menstruelles bio MADE IN MALI. Dispose d'un back-office complet pour la gestion des produits, tailles, variations, articles de blog et commandes. Système de gestion des stocks et des rôles utilisateurs intégré."
      : "Menstrual Panties E-Commerce - Online store specializing in the sale of organic menstrual panties MADE IN MALI. Features a complete back-office for managing products, sizes, variations, blog articles and orders. Integrated stock management and user role system.",
  },
  {
    id: "ecole-colombe",
    title: "École La Colombe - Gestion d'Établissement Scolaire (Freelance)",
    description:
      language === "fr"
        ? "Plateforme complète de gestion d'établissement scolaire multi-modules avec gestion élèves, professeurs, notes, emplois du temps, communication parents, administration financière et système de reporting."
        : "Complete multi-module school management platform with student management, teachers, grades, schedules, parent communication, financial administration and reporting system.",
    tech: ["PHP", "Laravel", "Vue.js"],
    link: "/projects/ecole-colombe",
    featured: true,
    status: "in-progress" as const,
    url: "https://re7.ecolelacolombe.com/",
    fullDescription: language === "fr"
      ? "Plateforme complète de gestion d'établissement scolaire multi-modules. Gestion élèves, professeurs, notes, emplois du temps et communication parents. Administration financière et système de reporting avancé."
      : "Complete multi-module school management platform. Student management, teachers, grades, schedules and parent communication. Financial administration and advanced reporting system.",
  },
  {
    id: "nkgold",
    title: "NKGOLD - Plateforme Corporate Exportation (Freelance)",
    description:
      language === "fr"
        ? "Plateforme corporate dédiée à l'exportation de ressources naturelles (or, pétrole et gaz) présentant les services de l'entreprise, son expertise dans le secteur minier et énergétique."
        : "Corporate platform dedicated to the export of natural resources (gold, oil and gas) presenting the company's services, its expertise in the mining and energy sector.",
    tech: ["PHP", "Laravel", "JavaScript", "React"],
    link: "/projects/nkgold",
    featured: false,
    status: "completed" as const,
    url: "https://nkgold.sididev.com/",
    fullDescription: language === "fr"
      ? "NKGOLD est une plateforme corporate dédiée à l'exportation de ressources naturelles (or, pétrole et gaz). Le site présente les services de l'entreprise, son expertise dans le secteur minier et énergétique, avec une interface moderne développée en Laravel InertiaJS React."
      : "NKGOLD is a corporate platform dedicated to the export of natural resources (gold, oil and gas). The site presents the company's services, its expertise in the mining and energy sector, with a modern interface developed in Laravel InertiaJS React.",
  },
]
