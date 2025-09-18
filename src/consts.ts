import type { Site, Metadata, Socials } from "@types";

export const SITE: Site = {
  NAME: "Alejandro Mira Durango",
  EMAIL: "markhorn.dev@gmail.com",
  NUM_POSTS_ON_HOMEPAGE: 3,
  NUM_WORKS_ON_HOMEPAGE: 2,
  NUM_PROJECTS_ON_HOMEPAGE: 3,
};

export const HOME: Metadata = {
  TITLE: "Inicio",
  DESCRIPTION: "Portafolio académico y blog de aprendizaje en programación orientada a objetos y otras áreas universitarias.",
};

export const BLOG: Metadata = {
  TITLE: "Blog",
  DESCRIPTION: "Entradas académicas y reflexiones sobre conceptos, prácticas y proyectos desarrollados en el proceso formativo.",
};

export const WORK: Metadata = {
  TITLE: "Work",
  DESCRIPTION: "Where I have worked and what I have done.",
};

export const PROJECTS: Metadata = {
  TITLE: "Projects",
  DESCRIPTION: "A collection of my projects, with links to repositories and demos.",
};

export const SOCIALS: Socials = [
  { 
    NAME: "twitter-x",
    HREF: "https://twitter.com/markhorn_dev",
  },
  { 
    NAME: "github",
    HREF: "https://github.com/markhorn-dev"
  },
  { 
    NAME: "linkedin",
    HREF: "https://www.linkedin.com/in/markhorn-dev",
  }
];
