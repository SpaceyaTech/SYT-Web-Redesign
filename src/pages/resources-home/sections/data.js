import {
  productDesign,
  frontend,
  backend,
  dataScience,
} from "../../../assets/images/resources-page";
import cardImg from "../../../assets/images/resources-page/card.jpeg";
import thumb11 from "../../../assets/images/resources-page/thumb1.png";
import thumb1 from "../../../assets/images/resources-page/thumb1.webp";
import thumb2 from "../../../assets/images/resources-page/thumb2.jpeg";
import logo from "../../../assets/images/sytLogo.png";
import img2 from "../../../assets/Landing Page Images/Ellipse 127.png";
import img3 from "../../../assets/Landing Page Images/Ellipse 128.png";
import img5 from "../../../assets/Landing Page Images/Ellipse 138.png";
import img4 from "../../../assets/Landing Page Images/Ellipse 148.png";
import img from "../../../assets/Landing Page Images/Ellipse 159.png";

export const categoriesData = [
  {
    id: 1,
    slug: "product-design",
    category: "Product Design",
    cover: productDesign,
    tags: ["UI Design", "UX Design", "Prototyping", "Product Design"],
    title: "Take your product design skills from zero to hero",
    period: "2 months",
    courseType: "Cohort-based course",
    hosts: [
      {
        id: 1,
        headshot: img,
        name: "Emmy Akinyi",
        role: "Senior Product Designer at SpaceYaTech",
      },
      {
        id: 2,
        headshot: img2,
        name: "Pamela Owino",
        role: "Senior Product Designer at SpaceYaTech",
      },
    ],
  },
  {
    id: 2,
    slug: "frontend-development",
    category: "Frontend Development",
    cover: frontend,
    tags: ["HTML", "CSS", "JS", "React", "NextJS"],
    title: "Building blocks for exceptional interfaces",
    period: "3 months",
    courseType: "Cohort-based course",
    hosts: [
      {
        id: 1,
        headshot: img3,
        name: "Daniel Webala",
        role: "Senior Frontend Engineer at SpaceYaTech",
      },
    ],
  },
  {
    id: 3,
    slug: "backend-development",
    category: "Backend Development",
    cover: backend,
    tags: ["APIs", "Databases", "SQL", "JWT and Backend Safety"],
    title: "Backend basics for advanced systems",
    period: "5 months",
    courseType: "Cohort-based course",
    hosts: [
      {
        id: 1,
        headshot: img5,
        name: "Hudson Obai",
        role: "Senior Backend Engineer at SpaceYaTech",
      },
    ],
  },
  {
    id: 4,
    slug: "data-science-and-analytics",
    category: "Data Science and Analytics",
    cover: dataScience,
    tags: ["Python", "R", "Machine Learning", "Data Analysis"],
    title: "Data Science with Superpowers",
    period: "6 months",
    courseType: "Cohort-based course",
    hosts: [
      {
        id: 1,
        headshot: img4,
        name: "Juma Lawrence",
        role: "Senior Data Scientist at SpaceYaTech",
      },
    ],
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

export const youtubeData = [
  {
    id: 1,
    thumbnail: thumb1,
    title: "UNPACKING DARAJA 2.0 FOR NEXT.JS",
    channel: {
      icon: logo,
      name: "SpaceYaTech",
    },
    uploaded: "2 Weeks ago",
    length: "1hr 19min",
  },
  {
    id: 2,
    thumbnail: thumb2,
    title: "UNPACKING DARAJA 2.0 FOR NEXT.JS",
    channel: {
      icon: logo,
      name: "SpaceYaTech",
    },
    uploaded: "1 Month ago",
    length: "2hr 42min",
  },
  {
    id: 3,
    thumbnail: thumb1,
    title: "UNPACKING DARAJA 2.0 FOR NEXT.JS",
    channel: {
      icon: logo,
      name: "SpaceYaTech",
    },
    uploaded: "2 Days ago",
    length: "36min",
  },
];

export const fieldData = [
  {
    id: 1,
    img: cardImg,
    title: "Product Design",
    numberOfResources: 47,
  },
  {
    id: 2,
    img: frontend,
    title: "Frontend Engineering",
    numberOfResources: 12,
  },
  {
    id: 3,
    img: backend,
    title: "Backend Engineering",
    numberOfResources: 4,
  },
  {
    id: 4,
    img: thumb1,
    title: "Android Development",
    numberOfResources: 6,
  },
  {
    id: 5,
    img: thumb2,
    title: "Cybersecurity",
    numberOfResources: 9,
  },
  {
    id: 6,
    img: cardImg,
    title: "AI & ML",
    numberOfResources: 15,
  },
  {
    id: 7,
    img: dataScience,
    title: "Data Science",
    numberOfResources: 4,
  },
  {
    id: 8,
    img: cardImg,
    title: "APIs",
    numberOfResources: 9,
  },
  {
    id: 9,
    img: thumb11,
    title: "Product Management",
    numberOfResources: 7,
  },
  {
    id: 10,
    img: cardImg,
    title: "Web3 & Blockchain",
    numberOfResources: 3,
  },
  {
    id: 11,
    img: cardImg,
    title: "Data Analysis and Engineering",
    numberOfResources: 5,
  },
];
