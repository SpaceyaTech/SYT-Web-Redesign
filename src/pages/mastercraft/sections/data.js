/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
/* eslint-disable import/prefer-default-export */
import {
  award,
  calendar,
  duration,
  folder,
} from "../../../assets/images/icons";
import { catherine, murabula } from "@/assets/images/aboutPage";
import { productDesign } from "@/assets/images/resources-page";

export const programs = [
  {
    id: 1,
    slug: "android-development",
    category: "Android Development",
    isRegOpen: true,
    nextCohortDate: "30th May",
    cover: productDesign,
    tags: ["Kotlin", "Flutter", "React Native", "Swift UI"],
    title: "Android Development - Kotlin",
    description:
      "Build and deploy an Android application in a cross-functional team, while learning ecosystem best practices from seasoned mentors.",
    productInfo: [
      {
        icon: duration,
        title: "8 weeks",
        description: "8 weeks of collaborative building in a full-stack team.",
      },
      {
        icon: award,
        title: "Beginner-Junior level",
        description: "Recommended experience level.",
      },
      {
        icon: folder,
        title: "2 Projects",
        description: "Collaborate on two portfolio projects.",
      },
      {
        icon: calendar,
        title: "Flexible schedules",
        description: "Remote, work from home.",
      },
    ],
    // description
    programDescription:
      "Step into the world of Android development with our immersive 8-week program. Join a real full-stack tech team where you’ll work shoulder-to-shoulder with UI/UX designers, backend engineers, PMs, QAs, and fellow Android trainees. Together, you’ll build real-world mobile apps that powers your portfolio and proves your technical skills. Along the way, sharpen your resume, prep for interviews, and grow your professional toolkit. By the end, you’ll be ready to launch your career as a confident, job-ready Android developer.",
    whoCanApply: [
      "Students or recent graduates interested in Android mobile development.",
      "Self-taught junior and beginner developers looking for real-world, team-based experience.",
      "Intermediate android developers aiming to strengthen their Android portfolios.",
      "Developers in other stacks looking to expand their skillsets to include Android development",
    ],
    whatYouWillLearn: [
      {
        subTitle: "Collaborative Development: ",
        content:
          "Work inside a real full-stack team and understand how Android developers collaborate with designers, backend engineers, PMs, and QAs",
      },
      {
        subTitle: "Hands-on Android Skills: ",
        content:
          "Build, test, and launch a real-world Android app using industry-standard tools, frameworks, and practices.",
      },
      {
        subTitle: "Career Development: ",
        content:
          "Learn how to craft a winning resume, prepare for interviews, and position yourself for success in the Android job market.",
      },
    ],
    // whatYouWillLearn: [
    //   {
    //     subTitle: "UI/UX Design Foundations:",
    //     content:
    //       "Master user research, wireframing, prototyping, usability testing, and responsive design for both mobile and web.",
    //   },
    //   {
    //     subTitle: "Design-to-Code Collaboration:",
    //     content:
    //       "Learn how to work closely with developers and hand off designs that are production-ready, including a basic understanding of frontend principles (HTML/CSS/React basics).",
    //   },
    //   {
    //     subTitle: "Professional Practice:",
    //     content:
    //       "Build real-world team experience in agile environments — design critiques, sprint planning, stakeholder presentations, and feedback integration",
    //   },
    // ],
    programOutcomes: [
      {
        subTitle: "Job Readiness: ",
        content:
          "You'll walk away having built an Android app the real way — collaborating, compromising, debugging, and launching like a true product engineer.",
      },
      {
        subTitle: "Team Confidence: ",
        content:
          "You’ll gain the confidence to work inside any tech team — understanding not just your role, but how to support designers, PMs, QAs, and backend engineers",
      },
      {
        subTitle: "Technical Capacity: ",
        content:
          "You’ll master the Android fundamentals recruiters want: clean code, scalable architecture, API integration, testing, and mobile best practices.",
      },
      {
        subTitle: "Career Momentum: ",
        content:
          "Career Momentum: You won't leave with just skills; you'll leave with a personal growth plan, a portfolio app, mentorship feedback, and next steps toward landing your first Android developer role.",
      },
    ],
    mentors: [
      {
        id: 1,
        name: "Rachel Murabula",
        role: "Android Engineer",
        organisation: "SpaceYaTech",
        img: murabula,
        experience: 4,
        linkedin: {
          href: "https://www.linkedin.com/in/rachel-murabula/",
          username: "Rachel Murabula",
        },
        twitter: {
          href: "",
          username: "",
        },
      },
      {
        id: 2,
        name: "Catherine Kiiru",
        role: "Dev Relations & Opensource Programs",
        organisation: "Mastercraft",
        img: catherine,
        experience: 3,
        linkedin: {
          href: "https://www.linkedin.com/in/catherine-kiiru-47b2688b/",
          username: "Catherine Kiiru",
        },
        twitter: {
          href: "https://x.com/catetherinekiiru",
          username: "catetherinekiiru",
        },
      },
    ],
    pricing: {
      fullAmount: 3500,
      discountPercentage: 20,
      discountedAmount: 700,
      currency: "KES",
      offerDeadline: "27th April",
    },
  },
];
