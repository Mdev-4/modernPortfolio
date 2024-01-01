import { meta, ibm, starbucks, tesla } from "../assets/images";
import {
  car,
  contact,
  css,
  estate,
  express,
  git,
  github,
  html,
  javascript,
  linkedin,
  mongodb,
  motion,
  mui,
  nextjs,
  nodejs,
  pricewise,
  react,
  redux,
  sass,
  snapgram,
  summiz,
  tailwindcss,
  threads,
  typescript,
  python,
  ai,
  dash,
  shirt,
  bank,
} from "../assets/icons";

export const skills = [
  {
    imageUrl: css,
    name: "CSS",
    type: "Frontend",
  },
  {
    imageUrl: express,
    name: "Express",
    type: "Backend",
  },
  {
    imageUrl: git,
    name: "Git",
    type: "Version Control",
  },
  {
    imageUrl: github,
    name: "GitHub",
    type: "Version Control",
  },
  {
    imageUrl: html,
    name: "HTML",
    type: "Frontend",
  },
  {
    imageUrl: javascript,
    name: "JavaScript",
    type: "Frontend",
  },
  {
    imageUrl: mongodb,
    name: "MongoDB",
    type: "Database",
  },
  {
    imageUrl: motion,
    name: "Motion",
    type: "Animation",
  },
  {
    imageUrl: mui,
    name: "Material-UI",
    type: "Frontend",
  },
  {
    imageUrl: nextjs,
    name: "Next.js",
    type: "Frontend",
  },
  {
    imageUrl: nodejs,
    name: "Node.js",
    type: "Backend",
  },
  {
    imageUrl: react,
    name: "React",
    type: "Frontend",
  },
  {
    imageUrl: redux,
    name: "Redux",
    type: "State Management",
  },
  {
    imageUrl: sass,
    name: "Sass",
    type: "Frontend",
  },
  {
    imageUrl: tailwindcss,
    name: "Tailwind CSS",
    type: "Frontend",
  },
  {
    imageUrl: typescript,
    name: "TypeScript",
    type: "Frontend",
  },
  {
    imageUrl: python,
    name: "Python",
    type: "Backend",
  },
];

export const experiences = [
  {
    title: "Front End",
    company_name: "Meta",
    icon: meta,
    iconBg: "#a2d2ff",
    date: " 2020 - 2021",
    points: [
      "Apprentissage du développement web avec HTML, CSS, React, JavaScript.",
      "Découverte des systèmes de contrôle de version comme Git.",
      "Initiation au design d'expérience utilisateur et d'interface utilisateur (UX/UI).",
      "Participation à des projets de groupe pour mettre en pratique les technologies web.",
      "Présentation des projets réalisés et échanges techniques avec les autres apprenants.",
    ],
  },
  {
    title: "Back End",
    company_name: "meta",
    icon: meta,
    iconBg: "#a2d2ff",
    date: "2021 - 2023",
    points: [
      "Découverte du développement back-end avec Node.js.",
      "Apprentissage des bases de données relationnelles (SQL) et non-relationnelles (NoSQL).",
      "Initiation à la sécurisation des applications web côté serveur.",
      "Mise en place d'API RESTful pour la communication front-end et back-end.",
      "Participation à des projets intégrant un serveur back-end et une base de données.",
    ],
  },
  {
    title: "DevOps",
    company_name: "IBM",
    icon: ibm,
    iconBg: "#b7e4c7",
    date: "",
    points: ["Currently"],
  },
  // {
  //     title: "Full stack Developer",
  //     company_name: "Meta",
  //     icon: meta,
  //     iconBg: "#a2d2ff",
  //     date: "Jan 2023 - Present",
  //     points: [
  //         "Developing and maintaining web applications using React.js and other related technologies.",
  //         "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //         "Implementing responsive design and ensuring cross-browser compatibility.",
  //         "Participating in code reviews and providing constructive feedback to other developers.",
  //     ],
  // },
];

export const socialLinks = [
  {
    name: "Contact",
    iconUrl: contact,
    link: "/contact",
  },
  {
    name: "GitHub",
    iconUrl: github,
    link: "https://github.com/YourGitHubUsername",
  },
  {
    name: "LinkedIn",
    iconUrl: linkedin,
    link: "https://www.linkedin.com/in/YourLinkedInUsername",
  },
];

export const projects = [
  {
    iconUrl: dash,
    theme: "btn-back-red",
    name: "Ui Dashboard",
    description:
    "Le dashboard présente une interface visuellement attrayante grâce à l'utilisation d'un framework CSS Tailwind avec des thèmes personnalisés. Plusieurs composants ont été créés pour afficher les KPIs, graphiques, tableaux de données et autres éléments de reporting.",  
    link: "https://uidashboards.netlify.app/",
  },
  {
    iconUrl: bank,
    theme: "btn-back-green",
    name: "HooBank",
    description:
         "Hoobank est une application bancaire moderne développée avec React qui propose une expérience utilisateur intuitive. L'interface graphique soignée utilise des animations fluides et des composants Material UI stylisés pour guider l'utilisateur dans ses tâches.",
    link: "https://hoo-b.netlify.app",
  },
  {
    iconUrl: ai,
    theme: "btn-back-blue",
    name: "Full Stack KortextAI",
    description:
      "Kortex est une application web moderne construite avec Next.js, un framework React populaire permettant un rendu côté serveur et la génération de sites web statiques optimisés et TypeScript . La fonctionnalité phare de Kortex est l'intégration d'API du modèles de génération de langage naturel d'OpenAI pour proposer des contenus originaux à la demande.Le moteur de Kortex récupère intelligemment le contexte de la page pour alimenter le modèle textuel d'OpenAI. Qu'il s'agisse de compléter une biographie, générer un paragraphe ou proposer des intitulés accrocheurs.",
    link: "https://kortex-ai-6kny.vercel.app/",
  },
  {
    iconUrl: shirt,
    theme: "btn-back-pink",
    name: "Shirt Custom",
    description:
      "Shirt Custom est une application web interactive permettant de personnaliser visuellement des t-shirts. Développée avec React, elle offre une interface dynamique.   L'intégration de three.js, une bibliothèque 3D légère, donne vie aux visuels des t-shirts sur lesquels les utilisateurs peuvent placer leur logo ou importer une photo. Shirt Custom gère automatiquement la déformation du visuel pour l'adapter à la forme en 3D du vêtement. Les utilisateurs ont accès à une vaste palette de couleurs pour modifier facilement les teintes du t-shirt, personnaliser les couleurs de leur logo ou régler les filtres de leur photo. Les changements sont répercutés instantanément sur la preview grâce à la réactivité des composants React.",
    link: "https://shirt-custom.netlify.app",
  },
  // {
  //     iconUrl: estate,
  //     theme: 'btn-back-black',
  //     name: 'Real-Estate Application',
  //     description: 'Developed a web application for real estate listings, facilitating property searches and connecting buyers with sellers.',
  //     link: 'https://github.com/adrianhajdin/projects_realestate',
  // },
  // {
  //     iconUrl: summiz,
  //     theme: 'btn-back-yellow',
  //     name: 'AI Summarizer Application',
  //     description: 'App that leverages AI to automatically generate concise & informative summaries from lengthy text content, or blogs.',
  //     link: 'https://github.com/adrianhajdin/project_ai_summarizer',
  // }
];
