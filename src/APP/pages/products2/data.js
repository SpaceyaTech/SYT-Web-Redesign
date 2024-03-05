import {
  angular,
  django,
  docker,
  figma,
  flutter,
  git,
  java,
  jira,
  js,
  laravel,
  mentorlst,
  colabs,
  notion,
  python,
  react,
  vue,
  whimsical,
} from "../../../assets/images/products";

export const products = [
  {
    name: "Mentorlst Web and Mobile App",
    desc: "A platform for mentors, coaches and consultants to meet with mentees, students and clients for 1:1 sessions, group sessions and community virtual events.",
    img: mentorlst,
    link: "https://mentorlst.com/",
  },
  {
    name: "Colabs",
    desc: "An open-source directory with beginner-friendly open-source projects across all technologies and tech stacks. Browse through hundreds of projects or list your open-source projects and onboard contributors.",
    img: colabs,
    link: "https://spaceyatech.github.io/CoLabs/",
  },
  // {
  //   name: "Mastori",
  //   desc: "A platform for mentors, coaches and consultants to meet with mentees, students and clients for 1:1 sessions, group sessions and community virtual events.",
  //   img: mentorlst,
  //   link: "/products",
  // },
];

export const stackCollection = [
  {
    id: 1,
    category: "Design",
    stack: [
      { url: figma, alt: "figma" },
      { url: notion, alt: "notion" },
      { url: whimsical, alt: "whimsical" },
    ],
  },
  {
    id: 3,
    category: "Backend",
    stack: [
      { url: django, alt: "django" },
      { url: java, alt: "java" },
      { url: laravel, alt: "laravel" },
      { url: python, alt: "python" },
    ],
  },
  {
    id: 2,
    category: "Frontend",
    stack: [
      { url: react, alt: "react" },
      { url: vue, alt: "vue" },
      { url: js, alt: "js" },
      { url: angular, alt: "angular" },
      { url: flutter, alt: "flutter" },
    ],
  },
  {
    id: 4,
    category: "DevOps",
    stack: [
      { url: git, alt: "git" },
      { url: docker, alt: "docker" },
      { url: jira, alt: "jira" },
    ],
  },
];
