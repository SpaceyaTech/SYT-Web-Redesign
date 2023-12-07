import {
  aaron,
  belinda,
  catherine,
  dave,
  emmy,
  fred,
  hudson,
  ian,
  james,
  pamela,
  sharon,
  temitayo,
  robert,
  kasyoki,
  rizwan,
  raymond,
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
    link: "https://mentorlst.com/",
  },
  {
    name: "Colabs",
    desc: "An open-source directory with beginner-friendly open-source projects across all technologies and tech stacks. Browse through hundreds of projects or list your open-source projects and onboard contributors.",
    img: mentorlst,
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

export const teams = {
  Design: [
    {
      id: 1,
      name: "Emmy Akinyi",
      title: "UX Team Lead",
      headshot: emmy,
      portfolio: "https://www.linkedin.com/in/emmy-akinyi-16ab301a2",
    },
    {
      id: 2,
      name: "Pamela Owino",
      title: "Lead Product Designer",
      headshot: pamela,
      portfolio: "https://www.linkedin.com/in/owino-pamela",
    },
    {
      id: 3,
      name: "Fred Ouko",
      title: "Product Designer",
      headshot: fred,
      portfolio: "https://www.linkedin.com/in/fred-ouko-918293bb",
    },
    {
      id: 4,
      name: "Aaron Abubakar",
      title: "Product Designer",
      headshot: aaron,
      portfolio: "https://www.linkedin.com/in/aroni-abubakari-b1a126146",
    },
    {
      id: 5,
      name: "Robert Okusi",
      title: "Product Designer",
      headshot: robert,
      portfolio: "https://www.linkedin.com/in/robert-okusi",
    },
    {
      id: 6,
      name: "Temitayo Adeleye",
      title: "Product Designer",
      headshot: temitayo,
      portfolio: "https://www.linkedin.com/in/adeleye-temitayo-1964b5b9",
    },
    {
      id: 7,
      name: "Belinda Koech",
      title: "Product Designer",
      headshot: belinda,
      portfolio: "https://www.linkedin.com/in/thisisbesh",
    },
  ],
  "Front-End Dev": [
    {
      id: 1,
      name: "Rizwan Hamisi",
      title: "Frontend Developer",
      headshot: rizwan,
      portfolio: "https://www.linkedin.com/in/hamisi-rizwan-2b1a00230",
    },
    {
      id: 2,
      name: "Sonia Lomo",
      title: "Frontend Developer",
      headshot:
        "https://media.licdn.com/dms/image/C4D03AQHnuqOwyIoyeA/profile-displayphoto-shrink_400_400/0/1600620855636?e=1706745600&v=beta&t=Qsr_9AS7NAB8O7dKRLyT-s6OXwRoR-4Uw1cQDk7cGO0",
      portfolio: "https://www.linkedin.com/in/sonia-lomo/",
    },
    {
      id: 3,
      name: "Felix Nyalenda",
      title: "Frontend Developer",
      headshot: "https://avatars.githubusercontent.com/u/68052150?v=4",
      portfolio: "https://www.linkedin.com/in/felix-olali-1652aa231",
    },
    {
      id: 4,
      name: "David Clinton",
      title: "Frontend Developer",
      headshot: dave,
      portfolio: "https://www.linkedin.com/in/clintondavid46/",
    },
    {
      id: 5,
      name: "Collins Kasyoki",
      title: "Frontend Developer",
      headshot: kasyoki,
      portfolio: "https://www.linkedin.com/in/collins-thano",
    },
    {
      id: 6,
      name: "Lawrence Moindi",
      title: "Frontend Developer",
      headshot:
        "https://media.licdn.com/dms/image/D4D03AQEOYTI8_FXF3Q/profile-displayphoto-shrink_100_100/0/1680982692686?e=1707350400&v=beta&t=Vji_sa-dDdCNCNU4v5MAT5BPb8lc1iCFvMI9qGSWVWk",
      portfolio: "https://www.linkedin.com/in/lawrence-moindi-55b35773",
    },
    {
      id: 7,
      name: "Catherine Kiiru",
      title: "Frontend Developer",
      headshot: catherine,
      portfolio: "https://www.linkedin.com/in/catherine-kiiru-47b2688b/",
    },
    {
      id: 8,
      name: "Ian Mugenya",
      title: "Frontend Developer",
      headshot: ian,
      portfolio: "https://www.linkedin.com/in/ian-mugenya/",
    },
    {
      id: 9,
      name: "Sharon Jebitok",
      title: "Frontend Developer",
      headshot: sharon,
      portfolio: "https://www.linkedin.com/in/sharon-jebitok/",
    },
  ],
  "Back-End Dev": [
    {
      id: 4,
      name: "James Otieno",
      title: "Backend Developer",
      headshot: james,
      portfolio: "https://www.linkedin.com/in/james-oduor/",
    },
    {
      id: 5,
      name: "Hellen Wainaina",
      title: "Backend Developer",
      headshot: emmy,
      portfolio: "https://www.linkedin.com/in/hellen-wainaina-0946bb20b/",
    },
    {
      id: 6,
      name: "Raymond Kipkorir",
      title: "Backend Developer",
      headshot: raymond,
      portfolio: "https://www.linkedin.com/in/raykipkorir/",
    },
    {
      id: 7,
      name: "Fredrick Waihenya",
      title: "Backend Developer",
      headshot:
        "https://media.licdn.com/dms/image/D4D03AQGWRP9FzPhkag/profile-displayphoto-shrink_400_400/0/1701011405980?e=1706745600&v=beta&t=SAQGksEQUVrzMP70CJ2ShtwwbFMinxFtoQD4lMpeOuw",
      portfolio: "https://www.linkedin.com/in/waihenya/",
    },
    {
      id: 8,
      name: "Collins Kasyoki",
      title: "Backend Developer",
      headshot: "https://avatars.githubusercontent.com/u/40399921?v=4",
      portfolio: "https://www.linkedin.com/in/collins-thano",
    },
  ],
  DevOps: [
    {
      id: 1,
      name: "Hudson Obai",
      title: "DevOps Lead",
      headshot: hudson,
      portfolio: "https://www.linkedin.com/in/hudson-obai-3948aa204/",
    },
    {
      id: 2,
      name: "James Otieno",
      title: "DevOps",
      headshot: james,
      portfolio: "https://www.linkedin.com/in/james-oduor/",
    },
    {
      id: 3,
      name: "Spencer Ochieng",
      title: "DevOps",
      headshot:
        "https://media.licdn.com/dms/image/D4D03AQHgS719SVEGkw/profile-displayphoto-shrink_400_400/0/1698877680926?e=1706745600&v=beta&t=_ofudLp8BJN5voqACjZBvUsuPX5JnPAPY95Ovh9xppA",
      portfolio: "https://www.linkedin.com/in/spencerochieng/",
    },
  ],
};
