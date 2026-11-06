import type { Article } from '../components/_type';

// Coordonnées reprises à plusieurs endroits (formulaire, section contact,
// footer) : centralisées ici pour éviter qu'elles divergent entre elles.
export const CONTACT_EMAIL = 'dylangroux2105@gmail.com';
export const GITHUB_URL = 'https://github.com/Dylan-Groux';
export const LINKEDIN_URL = 'https://www.linkedin.com/in/dylan-groux-dev/';
export const SITE_URL = 'https://redar.fr';

export const YOUTUBE_URL = 'https://www.youtube.com/@DevDecod3d';

// Solution temporaire : chaque article est une page HTML statique dans
// public/articles/, en attendant un vrai système de blog.
export const myArticles: Article[] = [
  {
    id: 1,
    title: 'Le langage du navigateur',
    date: 'Nov. 2026',
    readTime: '15 min',
    excerpt:
      "Cours interactif compagnon de l'épisode 7 de devdecod3d : l'histoire de JavaScript, le trajet d'une page, le DOM, la boucle d'événements et les pièges hérités du langage.",
    tags: ['JavaScript', 'Web', 'YouTube'],
    href: 'articles/le-langage-du-navigateur.html',
  },
];

export const myProjects = [
  {
    id: 1,
    title: 'MarketBridge',
    description:
      "Développement d'une solution SaaS de templating et multi-diffusion d'annonces vers différentes marketplaces (Vinted, eBay et Leboncoin).",
    subDescription: [
      'Le projet est structuré en 3 dépôts: une API backend Node.js, un frontend SaaS en TypeScript et une extension Chrome côté utilisateur.',
      "L'extension permet la publication en 1 clic sur Vinted, avec authentification JWT, gestion de templates et synchronisation avec l'API MarketBridge.",
    ],
    href: '',
    logo: '',
    image: 'assets/projects/marketbridge.webp',
    tags: [
      {
        id: 1,
        name: 'TypeScript',
        logo: 'assets/language/typescript.webp',
      },
      {
        id: 2,
        name: 'Node.js',
        logo: 'assets/language/javascript.webp',
      },
      {
        id: 3,
        name: 'React',
        logo: 'assets/language/react.webp',
      },
    ],
  },
  {
    id: 2,
    title: '3D Portfolio',
    description:
      "Développement d'un portfolio 3D interactif avec animations immersives, présentation de projets et interface moderne orientée expérience utilisateur.",
    subDescription: [
      "J'ai conçu ce portfolio pour présenter mes projets full-stack avec un rendu visuel dynamique, des sections animées et une navigation fluide.",
      'Le projet met en avant React, TypeScript et une approche composant pour structurer proprement le front-end.',
    ],
    href: 'https://github.com/Dylan-Groux/3D-Portfolio',
    logo: '',
    image: 'assets/projects/3dportfolio.webp',
    tags: [
      {
        id: 1,
        name: 'React',
        logo: 'assets/language/react.webp',
      },
      {
        id: 2,
        name: 'TypeScript',
        logo: 'assets/language/typescript.webp',
      },
      {
        id: 3,
        name: 'CSS',
        logo: 'assets/language/css.webp',
      },
    ],
  },
  {
    id: 3,
    title: 'Générateur de RGPD PME',
    description:
      "Développement d'un générateur de contenu automatisé utilisant des algorithmes d'apprentissage automatique pour créer du texte, des images ou des vidéos en fonction de paramètres définis par l'utilisateur.",
    subDescription: [
      "J'ai créé un générateur de contenu automatisé utilisant des algorithmes d'apprentissage automatique pour créer du texte, des images ou des vidéos en fonction de paramètres définis par l'utilisateur.",
    ],
    href: 'https://www.codester.com/items/57734/php-gdpr-and-legal-notices-pdf-generator',
    logo: '',
    image: 'assets/projects/generator.webp',
    tags: [
      {
        id: 1,
        name: 'PHP',
        logo: 'assets/language/php.webp',
      },
      {
        id: 2,
        name: 'Javascript',
        logo: 'assets/language/javascript.webp',
      },
    ],
  },
  {
    id: 4,
    title: 'Abricot',
    description:
      "Développement d'une application SaaS centrée sur une expérience utilisateur moderne, avec une architecture front-end modulaire et évolutive.",
    subDescription: [
      "J'ai conçu AbricotSaaS comme une base produit solide avec des composants réutilisables, une UI claire et une logique orientée scalabilité.",
    ],
    href: 'https://github.com/Dylan-Groux/AbricotSaaS',
    logo: '',
    image: 'assets/projects/abricot.webp',
    tags: [
      {
        id: 1,
        name: 'React',
        logo: 'assets/language/react.webp',
      },
      {
        id: 2,
        name: 'TypeScript',
        logo: 'assets/language/typescript.webp',
      },
    ],
  },
  {
    id: 5,
    title: 'Site de mise en relation',
    description:
      "Développement d'une plateforme de mise en relation entre professionnels et clients, avec une interface utilisateur intuitive et des fonctionnalités de recherche avancées.",
    subDescription: [
      "J'ai build une plateforme de mise en relation entre professionnels et clients, avec une interface utilisateur intuitive et des fonctionnalités de recherche avancées.",
    ],
    href: 'https://github.com/Dylan-Groux/RelationProject',
    logo: '',
    image: 'assets/projects/relationproject.webp',
    tags: [
      {
        id: 1,
        name: 'Php',
        logo: 'assets/language/php.webp',
      },
      {
        id: 2,
        name: 'JavaScript',
        logo: 'assets/language/javascript.webp',
      },
    ],
  },
];
