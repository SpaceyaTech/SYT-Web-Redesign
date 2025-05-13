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

export const questions = [
  {
    id: 1,
    question: "What is Mastercraft?",
    answer:
      "Mastercraft is an 8-week immersive training program that helps aspiring software engineers and product designers become job-ready through real-world, team-based project experience. You’ll work alongside peers and mentors in a simulated tech team—just like in the industry.",
  },
  {
    id: 2,
    question: "Who is this program for?",
    answer:
      "Mastercraft is ideal for junior or self-taught developers/designers looking to sharpen their skills, build real experience, and grow confident in a team. If you know the basics and want to level up for jobs or internships—this is for you.",
  },
  {
    id: 3,
    question: "What tracks are available??",
    answer:
      "We offer 5 focused tracks: UI/UX Design, Frontend Engineering (React), Backend Engineering (Python Django), Android Development (Kotlin), Data science and analytics, Each track works as part of a cross-functional team on the same product",
  },
  {
    id: 4,
    question: "Is Mastercraft remote or on-site?",
    answer:
      "This program is completely remote, with a possibility of physical meets should the organizers feel it is necessary. The program takes 8-weeks, which are packed with tasks assigned by a PM and key deliverables. Team collaboration sessions. Weekly mentorship check-ins. Practical tasks based on your track. Design and development milestones.End-of-program demo and mock interviews",
  },
  {
    id: 5,
    question: "Will I get a certificate?",
    answer:
      "Yes! Trainees who successfully complete the program and present their final project receive a certificate of completion and a portfolio-ready case study/project link to showcase to employers.",
  },
  {
    id: 6,
    question: "Is this a job placement program?",
    answer:
      "Mastercraft is not a direct job placement program, but it equips you with the experience, confidence, and portfolio projects that make you far more competitive for internships, freelance, and entry-level tech roles.",
  },
  {
    id: 7,
    question: "Is the program free?",
    answer:
      "No, the Mastercraft program is not free. It costs KES 3500 for residents ans citizens of Kenya and $30 for international students. The KES 3,500 covers the entire 8-week program, including live mentorship, training resources, career guidance, team project work, and access to a collaborative Slack community. There are no additional or hidden costs.",
  },
  {
    id: 8,
    question: "How do I get started?",
    answer:
      "Once you pay and sign up, you’ll receive a welcome email with your track details and next steps—including joining our Slack channel, where you'll meet your mentor and team members.",
  },
];
