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
      title:
        "Does drinking coffee make you smarter? Does drinking coffee make you smarter? Does drinking coffee make you smarter?",
      date: "5h ago",
      commentCount: 5,
      shareCount: 2,
    },
    {
      id: 2,
      title: "So you've bought coffee... now what?",
      date: "2h ago",
      commentCount: 3,
      shareCount: 2,
    },
    {
      id: 3,
      title: "So you've bought coffee... now what?",
      date: "2h ago",
      commentCount: 3,
      shareCount: 2,
    },
    {
      id: 4,
      title: "So you've bought coffee... now what?",
      date: "2h ago",
      commentCount: 3,
      shareCount: 2,
    },
    {
      id: 5,
      title: "So you've bought coffee... now what?",
      date: "2h ago",
      commentCount: 3,
      shareCount: 2,
    },
    {
      id: 6,
      title: "So you've bought coffee... now what?",
      date: "2h ago",
      commentCount: 3,
      shareCount: 2,
    },
    {
      id: 7,
      title: "So you've bought coffee... now what?",
      date: "2h ago",
      commentCount: 3,
      shareCount: 2,
    },
    {
      id: 8,
      title: "So you've bought coffee... now what?",
      date: "2h ago",
      commentCount: 3,
      shareCount: 2,
    },
    {
      id: 9,
      title: "So you've bought coffee... now what?",
      date: "2h ago",
      commentCount: 3,
      shareCount: 2,
    },
    {
      id: 10,
      title: "So you've bought coffee... now what?",
      date: "2h ago",
      commentCount: 3,
      shareCount: 2,
    },
    {
      id: 11,
      title: "So you've bought coffee... now what?",
      date: "2h ago",
      commentCount: 3,
      shareCount: 2,
    },
    {
      id: 12,
      title: "So you've bought coffee... now what?",
      date: "2h ago",
      commentCount: 3,
      shareCount: 2,
    },
    {
      id: 13,
      title: "So you've bought coffee... now what?",
      date: "2h ago",
      commentCount: 3,
      shareCount: 2,
    },
  ],
  "Front-End Dev": [
    {
      id: 1,
      title: "Is tech making coffee better or worse?",
      date: "Jan 7",
      commentCount: 29,
      shareCount: 16,
    },
    {
      id: 2,
      title: "The most innovative things happening in coffee",
      date: "Mar 19",
      commentCount: 24,
      shareCount: 12,
    },
  ],
  "Back-End Dev": [
    {
      id: 1,
      title: "Ask Me Anything: 10 answers to your questions about coffee",
      date: "2d ago",
      commentCount: 9,
      shareCount: 5,
    },
    {
      id: 2,
      title: "The worst advice we've ever heard about coffee",
      date: "4d ago",
      commentCount: 1,
      shareCount: 2,
    },
  ],
  DevOps: [
    {
      id: 1,
      title: "Ask Me Anything: 10 answers to your questions about coffee",
      date: "2d ago",
      commentCount: 9,
      shareCount: 5,
    },
    {
      id: 2,
      title: "The worst advice we've ever heard about coffee",
      date: "4d ago",
      commentCount: 1,
      shareCount: 2,
    },
  ],
};
