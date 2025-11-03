import { Language, translations } from "./translations"

export const getSkills = (language: Language) => {
  const t = translations[language].skills
  return {
    [t.frontend]: [
      { name: "React", icon: "react" },
      { name: "Angular", icon: "angular" },
      { name: "Vue.js", icon: "vuedotjs" },
      { name: "TypeScript", icon: "typescript" },
      { name: "JavaScript", icon: "javascript" },
      { name: "Next.js", icon: "nextdotjs" },
      { name: "Tailwind CSS", icon: "tailwindcss" },
      { name: "HTML/CSS", icon: "html5" },
    ],
    [t.backend]: [
      { name: "Java", icon: "java" },
      { name: "Spring Boot", icon: "springboot" },
      { name: "PHP", icon: "php" },
      { name: "Laravel", icon: "laravel" },
      { name: "GraphQL", icon: "graphql" },
      { name: "PostgreSQL", icon: "postgresql" },
      { name: "MongoDB", icon: "mongodb" },
      { name: "REST APIs", icon: "restapi" },
    ],
    [t.devops]: [
      { name: "Docker", icon: "docker" },
      { name: "Kubernetes", icon: "kubernetes" },
      { name: "Jenkins", icon: "jenkins" },
      { name: "GitHub Actions", icon: "githubactions" },
      { name: "GitLab CI/CD", icon: "gitlab" },
      { name: "AWS", icon: "amazonaws" },
      { name: "Git", icon: "git" },
    ],
    [t.automation]: [
      { name: "UIPath", icon: "uipath" },
      { name: "n8n", icon: "n8n" },
    ],
    [t.tools]: [
      { name: "VS Code", icon: "visualstudiocode" },
      { name: "Figma", icon: "figma" },
      { name: "Postman", icon: "postman" },
      { name: "JUnit", icon: "junit5" },
      { name: "Jira", icon: "jira" },
      { name: "Slack", icon: "slack" },
    ],
  }
}

