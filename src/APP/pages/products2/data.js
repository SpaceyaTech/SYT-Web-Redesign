import {
  aaron,
  emmy,
  fred,
  juma,
  pamela,
} from "../../../assets/images/aboutPage";
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
    link: "/products",
  },
  {
    name: "Colabs",
    desc: "A platform for mentors, coaches and consultants to meet with mentees, students and clients for 1:1 sessions, group sessions and community virtual events.",
    img: mentorlst,
    link: "/products",
  },
  {
    name: "Mastori",
    desc: "A platform for mentors, coaches and consultants to meet with mentees, students and clients for 1:1 sessions, group sessions and community virtual events.",
    img: mentorlst,
    link: "/products",
  },
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

export const teams = {
  Design: [
    {
      id: 1,
      name: "Emmy Akinyi",
      title: "UX Team Lead",
      headshot: emmy,
    },
    {
      id: 2,
      name: "Pamela Owino",
      title: "Lead Product Designer",
      headshot: pamela,
    },
    {
      id: 3,
      name: "Aoron Abubakar",
      title: "Product Designer",
      headshot: aaron,
    },
    {
      id: 4,
      name: "Robert Okusi",
      title: "Product Designer",
      headshot: fred,
    },
    {
      id: 5,
      name: "Temitayo Adeleye",
      title: "Product Designer",
      headshot: juma,
    },
    {
      id: 6,
      name: "Olaniran Rasheed",
      title: "Product Designer",
      headshot: fred,
    },
  ],
  "Front-End Dev": [
    {
      id: 1,
      name: "Emmy Akinyi",
      title: "UX Team Lead",
      headshot: emmy,
    },
    {
      id: 3,
      name: "Aoron Abubakar",
      title: "Product Designer",
      headshot: aaron,
    },
    {
      id: 4,
      name: "Robert Okusi",
      title: "Product Designer",
      headshot: fred,
    },
    {
      id: 5,
      name: "Temitayo Adeleye",
      title: "Product Designer",
      headshot: juma,
    },
    {
      id: 6,
      name: "Olaniran Rasheed",
      title: "Product Designer",
      headshot: fred,
    },
  ],
  "Back-End Dev": [
    {
      id: 4,
      name: "Robert Okusi",
      title: "Product Designer",
      headshot: fred,
    },
    {
      id: 5,
      name: "Temitayo Adeleye",
      title: "Product Designer",
      headshot: juma,
    },
    {
      id: 6,
      name: "Olaniran Rasheed",
      title: "Product Designer",
      headshot: fred,
    },
  ],
  DevOps: [
    {
      id: 1,
      name: "Emmy Akinyi",
      title: "UX Team Lead",
      headshot: emmy,
    },
    {
      id: 2,
      name: "Pamela Owino",
      title: "Lead Product Designer",
      headshot: pamela,
    },
    {
      id: 3,
      name: "Aoron Abubakar",
      title: "Product Designer",
      headshot: aaron,
    },
  ],
};
