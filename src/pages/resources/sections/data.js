/* eslint-disable import/prefer-default-export */
import {
  productDesign,
  frontend,
  backend,
  dataScience,
} from "../../../assets/images/resources-page";
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
