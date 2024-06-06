/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */


import {
  RichardMulandi,
  Balogun,
  Saruni,
  Vivian,
  Jean,
  Melody,
  Kristin,
} from "@/assets/images/podcast";

import {
  mentorship,
  openSource,
  twitter,
} from "@/assets/images/services-section";

import {
  aibunny,
  harun,
  regan,
  singh,
  tony,
  wakio,
  wayne,
} from "@/assets/testimonialSection";

export const podcasts = [
  {
    id: 1,
    img: RichardMulandi,
    category: "Podcast",
    link: "https://open.spotify.com/episode/7hUJsdPdB0drnyNNTiYim2?si=idIGiZQBQdau9lEdh4Y8Rg",
    title: "Product life-cycle with Product Head at SafeBoda",
    description:
      "The conversation wades into product-management-specific topics that you'd be interested in.",
  },
  {
    id: 2,
    img: Balogun,
    category: "Podcast",
    link: "https://open.spotify.com/episode/4iHhYqBHMWjPTpOdm6F14z?si=JTp43JZoSgesogJi90X-xQ",
    title: "Tech Makers & Movers with PocketFood",
    description:
      "The story behind the branding, the success, and the challenges PocketFood has faced in delivering innovative food-tech solutions in Africa.",
  },
  {
    id: 3,
    img: Melody,
    category: "Podcast",
    link: "https://open.spotify.com/episode/7u24ofrYpk3umcCss9kgnw?si=0be796e136304358",
    title: "Smart Cities and Sustainable Urban Developement in Africa",
    description:
      "Do you know the checklist for a smart city? Find out in this fun converasation with Fred, Marlyn and Melody.",
  },
  {
    id: 4,
    category: "Podcast",
    img: Jean,
    link: "https://open.spotify.com/episode/1F6ecP7YS8S1mhWdnuQ0DU?si=2a94751b4c034a02",
    title: "Building a more inclusive Tech Industry in Africa",
    description:
      "Learn how to build and lead technical teams, applying development methodologies to design and ship software.",
  },
  {
    id: 5,
    category: "Podcast",
    img: Saruni,
    link: "https://open.spotify.com/episode/6GAhWxeZNuDtfQj76o7EhV?si=PFb994_WQzKw2qfXCtsrbQ",
    title: "The Future of Fintech X Saruni Maina",
    description:
      "Join host Marlyn Mayienga in a captivating conversation with Saruni Maina as they dive into the future of Fintech in Africa.",
  },

  {
    id: 6,
    img: Vivian,
    category: "Podcast",
    link: "https://open.spotify.com/episode/0KBLGLilCC5X0SnM4eg9Ko?si=6c129ddf60914838",
    title: "Digging into Website Hosting Sector",
    description:
      "Learn how the web development and hosting landscape in Kenya has changed over the past decade and how cloud hosting could disrupt it.",
  },
  {
    id: 7,
    img: Kristin,
    category: "Podcast",
    link: "https://open.spotify.com/episode/1XblqFJZJUf9l1uWmkAcvD?si=9bf748e882b848ed",
    title:
      "Sustainable Entrepreneurship and the Goal to Impact 1 billion Entrepreneurs in Africa",
    description:
      "Listen to how Kristin is helping SMEs across Africa to get off the ground in a sustainable way.",
  },
];

export const partners = [
  {
    id: 1,
    img: ctfroom,
    name: "ctfroom",
    link: "https://ctfroom.com/",
  },
  {
    id: 2,
    img: DevOps,
    name: "DevOps",
    link: "https://twitter.com/nairobidevops",
  },
  {
    id: 3,
    img: Propel,
    name: "Propel",
    link: "https://propel.community/",
  },
  {
    id: 4,
    img: moringa,
    name: "moringa",
    link: "https://moringaschool.com/",
  },
  {
    id: 5,
    img: chimoney,
    name: "chimoney",
    link: "https://chimoney.io/",
  },
  {
    id: 6,
    img: Kushite,
    name: "Kushite",
    link: "https://icpkushite.com/",
  },
  {
    id: 11,
    img: spheron,
    name: "spheron",
    link: "/",
  },
  {
    id: 7,
    img: osca,
    name: "osca",
    link: "https://oscafrica.org/",
  },
  {
    id: 8,
    img: cytonn,
    name: "cytonn",
    link: "#",
  },
  {
    id: 9,
    img: reactke,
    name: "reactke",
    link: "https://www.reactdevske.org/",
  },
  {
    id: 10,
    img: gdg,
    name: "gdg",
    link: "/",
  },
];

export const testimonialData = [
  {
    id: 1,
    text: "Thank you @SpaceYaTech. You guys are doing so much for the tech ecosystem in Kenya.",
    user: "Regan Muthomi",
    vocation: "Lead Data Science Instructor",
    img: regan,
    link: "https://twitter.com/regan_codes/status/1597655617375567872",
    company: "Africa Data School",
  },
  {
    id: 2,
    text: "@SpaceYaTech's admin's mix of humor with informative texts is one thing I look forward to reading 😂🙌🏿. Great work admin 👏🏿.",
    user: "Wayne Gakuo",
    vocation: "Frontend Engineer",
    img: wayne,
    link: "https://twitter.com/wayne_gakuo/status/1661996704055406593",
    company: "Sky.Garden",
  },
  {
    id: 3,
    text: "You are doing amazing things for the kenyan tech community 👏👏.",
    user: "Wakio Agness",
    vocation: "Software Engineer Student",
    img: wakio,
    link: "https://twitter.com/Pithoneer/status/1711647271987679246",
    company: "Alx Africa",
  },
  {
    id: 4,
    text: "Stopping by to say I love this space.",
    user: "Tony Kipkemboi",
    vocation: "Developer Relations",
    img: tony,
    link: "https://twitter.com/tonykipkemboi/status/1712538360827490506",
    company: "Streamlit",
  },
  {
    id: 5,
    text: "I had an awesome weekend courtesy to @Mentorlst and @SpaceYaTech.",
    user: "Fredrick Waihenya",
    vocation: "Back End Developer",
    img: aibunny,
    link: "https://twitter.com/TheAIbunny/status/1708796599793496129",
    company: "Hasibu Systems",
  },
  {
    id: 6,
    text: "I just merged my first open-source pull request! 💪🏾I'm so excited to be a part of the community and contribute to making open-source software better.Thank you @SpaceYaTech and @Mentorlst for this awesome opportunity.💯",
    user: "Juma Harun",
    vocation: "Frontend Engineer",
    img: harun,
    link: "https://twitter.com/jumaH4run/status/1669785525480222721",
    company: "Freelance",
  },
  {
    id: 7,
    text: "Hey @SpaceYaTech - kudos for all these spaces. Great work providing valuable insights on various tech skills 🙌.",
    user: "Mahati V Singh",
    vocation: "Global Tech Recruiter",
    img: singh,
    link: "https://twitter.com/MyAspirants/status/1715059439625986302",
    company: "JPMorgan Chase & Co",
  },
];

export const services = [
  {
    id: 1,
    img: twitter,
    title: "Weekly Twitter Spaces",
    description:
      "We host weekly Twitter Spaces every Thursday between 8 p.m and 10 p.m EAT, where industry experts talk about various topics and upcoming tech events",
    link: "https://x.com/SpaceYaTech",
  },
  {
    id: 2,
    img: openSource,
    title: "Open-Source Projects",
    description:
      "We run full-stack, open-source projects, where UI/UX designers, developers and dev-ops engineers work together.",
    link: "https://spaceyatech.github.io/CoLabs/",
  },
  {
    id: 3,
    img: mentorship,
    title: "Mentorship Programs",
    description:
      "We host community-led mentorship programs where beginners are mentored by experienced professionals and given guidance on getting started in tech.",
    link: "https://x.com/SpaceYaTech",
  },
];

export const whatWeDoData = [
  {
    id: 1,
    title: "The Mastercraft Program",
    description:
      "We host weekly Twitter Spaces every Thursday between 8 p.m and 10 p.m EAT, where industry experts talk about various topics and upcoming tech events",
    image: mastercraft,
    link: "/products",
  },
  {
    id: 2,
    title: "Colabs",
    description:
      "Contribute to open-source projects tailored to your current skills and where you want to get. We work within the community to list beginner-friendly open-sourced projects.",
    image: mastercraft,
    link: "/products",
  },
  {
    id: 3,
    title: "Learning Resources",
    description:
      "We run full-stack, open-source projects, where product managers, product designers, developers and dev-ops engineers work together to learn the in and outs of the industry.",
    image: mastercraft,
    link: "/products",
  },
  {
    id: 4,
    title: "Weekly Twitter Spaces",
    description:
      "We host weekly Twitter Spaces every Thursday between 8 p.m and 10 p.m EAT, where industry experts talk about various topics and upcoming tech events",
    image: mastercraft,
    link: "/products",
  },
  {
    id: 5,
    title: "SpaceYaPodcasts",
    description:
      "We host weekly podcasts every Thursday between 8 p.m and 10 p.m EAT, where industry experts talk about various topics and upcoming tech events",
    image: mastercraft,
    link: "/products",
  },
];

export const questions = [
  {
    id: 1,
    question: "Is SpaceYaTech free?",
    answer:
      "Yes, SpaceYaTech is totally free for anyone who wishes to learn technology and contribute to Open Source",
  },
  {
    id: 2,
    question: "Does SpaceYaTech only mentor developers?",
    answer:
      "No, SpaceYaTech mentors anyone who is involved in modern technology. This includes developers, designers, product managers, and more. SpaceYaTech believes that everyone has the potential to learn and grow in the tech industry, and they are committed to providing mentorship to anyone who wants it.",
  },
  {
    id: 3,
    question: "Does SpaceYaTech pay mentors?",
    answer:
      "No, SpaceYaTech does not pay mentors. However, mentors do receive a number of benefits.",
  },
  {
    id: 4,
    question: "Can I collaborate with SpaceYaTech?",
    answer: "Yes, you can collaborate with SpaceYaTech in a number of ways.",
  },
  {
    id: 5,
    question: "Can I join the mentorship sessions at any time?",
    answer:
      "No, you cannot join the mentorship sessions at any time. SpaceYaTech's mentorship sessions are offered on a rolling basis, and there are limited spots available. To be considered for a mentorship session, you must submit an application and be selected by SpaceYaTech.",
  },
];
