/* eslint-disable quotes */
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
import {
  productDesign,
  backend,
  frontend,
} from "@/assets/images/resources-page";

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
    milestones: [
      {
        week: 1,
        header: "Ideation, Research & Planning",
        desc: "Basic user flows, wireframes, architecture skeletons, tech stack finalized.",
        deliverables: [
          "Kickoff meeting: Introduce team roles and the product idea.",
          "UI/UX Team: Start gathering user requirements and sketch early low-fidelity wireframes.",
          "PM: Scope down an MVP (must-have features only).",
          "Backend: Define basic API requirements (login, fetch/save data).",
          "Android Frontend: Set up Android project repo, define initial architecture (MVVM/Clean Architecture).",
          "QA: Set up QA strategy (how testing will be done).",
        ],
      },
      {
        week: 2,
        header: "Ideation, Research & Planning",
        desc: "Approved UI designs, first working API endpoints, Android skeleton screens.",
        deliverables: [
          "UI/UX Team: Deliver full hi-fidelity mockups + a prototype.",
          "Backend: Build database models, setup API endpoints for authentication and basic CRUD.",
          "Android Frontend: Set up base screens (login, signup, home).",
          "QA: Begin writing early test cases for APIs and UI.",
        ],
      },
      {
        week: 3,
        header: "Authentication and Core Infrastructure",
        desc: "Working user login/signup integrated on device.",
        deliverables: [
          "Backend: Finalize user authentication APIs.",
          "Android Frontend: Integrate user registration/login flows using APIs.",
          "Backend & Frontend: Set up Postman documentation / API handover docs.",
          'PM: Organize internal demos every Friday ("demo days").',
        ],
      },
      {
        week: 4,
        header: "Core Features Development Sprint✅",
        desc: "Working core user flow — user can sign in and interact with main app content.",
        deliverables: [
          "Backend: Build and deliver main feature APIs (e.g., posting content, fetching lists).",
          "Android Frontend: Build UI screens and logic for main features (fetching data, displaying lists, detail screens).",
          "QA: Test API endpoints and early Android app flows.",
        ],
      },
      {
        week: 5,
        header: "Extended Features + Edge Cases✅",
        desc: "Extended user journeys complete.",
        deliverables: [
          "Backend: Secondary features (profile management, settings).",
          "Android Frontend: Secondary screens (profile, edit settings, etc).",
          "Android Frontend: Add better state management (loading states, errors).",
          "UI/UX: Polish UX based on internal feedback.",
        ],
      },
      {
        week: 6,
        header: "Testing, Polish & Refinement✅",
        desc: "App usable from start to finish, even if not perfect.",
        deliverables: [
          "Full bug bash week!",
          "Android Frontend: UI polish, add basic animations, user feedback (toasts, snackbars).",
          "Backend: Clean up APIs, optimize performance.",
          "QA: Full testing cycle starts — bug reports created daily.",
          "PM: Track all bugs in one place (e.g., Jira, Trello).",
        ],
      },
      {
        week: 7,
        header: "Final Integrations + Deployment Prep✅",
        desc: 'A "release candidate" version of the app.',
        deliverables: [
          "Android Frontend: Fix bugs, integrate all feedback.",
          "Backend: Stabilize, prepare for possible public deployment (even if only demo).",
          "PM + Android + Backend: Prepare demo data, staging environment.",
          "QA: Final test passes.",
        ],
      },
      {
        week: 8,
        header: "Soft Launch + Internal Demos✅",
        desc: "Finished app ready to be shown on Demo Day.",
        deliverables: [
          "Dry run of presentations.",
          "Final fixes.",
          "PM + UI/UX + Android + Backend: Team does internal presentations to leadership/mentors.",
          'Mock "real-world" scenarios: bug report drills, unexpected feedback sessions.',
        ],
      },
      {
        week: 9,
        header: "Demo Day & Mock Interviews✅",
        desc: "Finished app ready to be shown on Demo Day.",
        deliverables: [
          "Morning: Team app presentations to mentors/guests.",
          "Afternoon: Individual mock interviews (tech questions, behavioral questions, demoing your project).",
        ],
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
  {
    id: 2,
    slug: "backend-development",
    category: "Backend Development",
    isRegOpen: false,
    nextCohortDate: "30th May",
    cover: backend,
    tags: ["REST API", "Databases", "JWT", "Django"],
    title: "Backend Development - Django",
    description:
      "Build and deploy a backend application in a cross-functional team, while learning ecosystem best practices from seasoned mentors.",
    productInfo: [
      {
        icon: duration,
        title: "8 weeks",
        description: "8 weeks of collaborative building in a backend team.",
      },
      {
        icon: award,
        title: "Beginner-Junior level",
        description: "Recommended experience level.",
      },
      {
        icon: folder,
        title: "1 Project",
        description: "Collaborate and build one portfolio project.",
      },
      {
        icon: calendar,
        title: "Flexible schedules",
        description: "Remote, work from home.",
      },
    ],
    // description
    programDescription:
      "This 8-week Backend Engineering program with Python Django will see you work as part of a real full-stack tech team alongside UI/UX designers, frontend engineers, PMs, QAs, and fellow backend trainees. Build a real-world project that strengthens your resume and portfolio, while gaining practical, collaborative experience. Beyond coding, receive mentorship in resume writing, interview preparation, and professional development. This program is designed to help you grow into a confident, job-ready backend developer with hands-on team-based experience.",
    whoCanApply: [
      "Aspiring backend developers with basic Python knowledge.",
      "Recent graduates or self-taught learners looking for real-world experience.",
      "Individuals eager to learn and work collaboratively in cross-functional teams.",
      "People with a growth mindset and commitment to completing an intensive 8-week program.",
    ],
    whatYouWillLearn: [
      {
        content:
          "Master the fundamentals of Python Django, including models, views, authentication, APIs, and deployment.",
      },
      {
        content:
          "Gain hands-on experience working in a real agile team with designers, frontend engineers, QAs, and PMs.",
      },
      {
        content:
          "Learn version control (Git), code reviews, debugging, and writing clean, scalable code in production-like environments.",
      },
    ],
    milestones: [
      {
        week: 1,
        header: "Orientation & Environment Setup",
        desc: "Local dev environment set up, GitHub repo access, initial ERD draft.",
        deliverables: [
          "Intro to project scope and team structure",
          "Set up Python, Django, virtual environments, and Git",
          "Connect to collaborative tools (Slack, GitHub, Notion, etc.)",
          "Intro to Agile & sprint planning",
          "Begin exploring the app's data model",
        ],
      },
      {
        week: 2,
        header: "Database Design & Models",
        desc: "Complete models, migrations, updated ERD, and test data populated.",
        deliverables: [
          "Finalize data schema in collaboration with UI/UX and PM",
          "Create Django models for all core entities",
          "Write initial migration files and apply them",
          "Discuss API contract with frontend and mobile teams",
        ],
      },
      {
        week: 3,
        header: "REST API Foundations",
        desc: "Working CRUD APIs, tested endpoints, API documentation started.",
        deliverables: [
          "Set up Django REST Framework (DRF)",
          "Build basic CRUD endpoints for primary models",
          "Add simple input validation",
          "Write unit tests for API endpoints",
        ],
      },
      {
        week: 4,
        header: "Authentication & User Roles",
        desc: "Authentication system with protected routes, tested and documented.",
        deliverables: [
          "Implement user registration, login/logout (JWT or session-based)",
          "Define user roles (admin, regular user, etc.)",
          "Secure endpoints based on roles",
          "Collaborate with frontend teams to consume auth APIs",
        ],
      },
      {
        week: 5,
        header: "Advanced API Features",
        desc: "Functional, complex APIs beyond CRUD, integrated with FE/Android.",
        deliverables: [
          "Add business logic and computed fields (e.g., scores, analytics)",
          "Build custom views and serializers for dashboard and filtered data",
          "Implement pagination, search, and sorting",
        ],
      },
      {
        week: 6,
        header: "Integrations & Admin Features",
        desc: "At least one integration complete, admin panel configured, bug fixes underway.",
        deliverables: [
          "Integrate third-party APIs or services (e.g., email, file uploads)",
          "Build Django admin dashboards for internal use",
          "QA with frontend and Android teams",
        ],
      },
      {
        week: 7,
        header: "Final Integrations + Deployment Prep",
        desc: "Final tested API, test coverage >70%, performance improvements.",
        deliverables: [
          "Write unit and integration tests",
          "Fix API inconsistencies from QA feedback",
          "Improve performance (caching, DB indexing, etc.)",
          "Freeze the API spec",
        ],
      },
      {
        week: 8,
        header: "Soft Launch + Internal Demos",
        desc: "Live backend API, clear documentation, demo-ready setup.",
        deliverables: [
          "Set up staging and production environments (Heroku, Railway, etc.)",
          "Final deployment with working frontends",
          "Prep for presentation with demo-ready API",
          "Write backend documentation and setup guide",
        ],
      },
      {
        week: 9,
        header: "Demo Day & Mock Interviews",
        desc: "Finished app ready to be shown on Demo Day.",
        deliverables: [
          "Morning: Team app presentations to mentors/guests",
          "Afternoon: Individual mock interviews (tech questions, behavioral questions, demoing your project)",
        ],
      },
    ],
    programOutcomes: [
      {
        content:
          "Build and deploy a real-world full-stack project for your portfolio",
      },
      {
        content: "Develop strong technical and team collaboration skills",
      },
      {
        content:
          "Receive mentorship in resume writing and technical interviews",
      },
      {
        content:
          "Gain confidence in working with designers, PMs, QAs, and frontend devs",
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
  {
    id: 3,
    slug: "product-design",
    category: "Product Design",
    isRegOpen: false,
    nextCohortDate: "30th May",
    cover: productDesign,
    tags: ["UX Design", "UI Design", "Prototyping", "Product Design"],
    title: "Product Design",
    description:
      "Learn advanced design concepts while building a multi-platform application alongside a development team.",
    productInfo: [
      {
        icon: duration,
        title: "8 weeks",
        description: "8 weeks of collaborative building in a design team.",
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
      "This 8-week Design Engineering program will immerse you in a real cross-functional tech team alongside frontend engineers, backend developers, PMs, QAs, and fellow designers. You'll work on a real-world project that combines UI/UX design principles with practical frontend implementation skills, helping you build a strong portfolio and resume. Beyond design and coding, you’ll receive mentorship in resume writing, interview preparation, and professional development — all geared to grow you into a confident, job-ready design engineer with true team-based experience.",
    whoCanApply: [
      "Beginners looking to explore the world of UI/UX Design",
      "Aspiring UI/UX designers who want real-world, cross-functional team experience.",
      "Junior designers who want to sharpen their technical and collaborative skills.",
      "Frontend developers looking to strengthen their design thinking and user experience skills.",
    ],
    whatYouWillLearn: [
      {
        subTitle: "UI/UX Design Foundations: ",
        content:
          "Master user research, wireframing, prototyping, usability testing, and responsive design for both mobile and web.",
      },
      {
        subTitle: "Design-to-Code Collaboration: ",
        content:
          "Learn how to work closely with developers and hand off designs that are production-ready, including a basic understanding of frontend principles (HTML/CSS/React basics).",
      },
      {
        subTitle: "Professional Practice: ",
        content:
          "Build real-world team experience in agile environments — design critiques, sprint planning, stakeholder presentations, and feedback integration.",
      },
    ],
    milestones: [
      {
        week: 1,
        header: "Product Thinking & Team Onboarding",
        desc: "Persona drafts, early insights doc, competitor matrix, design brief outline",
        deliverables: [
          "Introduce the real-world project challenge and intended users.",
          "Set expectations for collaboration with PMs, frontend/backend, QA.",
          "Conduct stakeholder and team interviews to gather context.",
          "Guide trainees in creating a Notion hub for documentation.",
          "Start competitor analysis & heuristic reviews",
        ],
      },
      {
        week: 2,
        header: "Research & Experience Mapping",
        desc: "User personas, journey maps, clear MVP definition, UX principles.",
        deliverables: [
          "Run or review user interviews, surveys, or field research (if available)",
          "Synthesize findings using affinity mapping",
          "Create journey maps, empathy maps, and user stories",
          "Map out MVP features with the PM and tech leads",
          "Draft early design principles to guide the project",
        ],
      },
      {
        week: 3,
        header: "Information Architecture & Low-Fidelity Prototypes",
        desc: "Site map, task flows, grayscale wireframes (mobile + web), usability hypotheses.",
        deliverables: [
          "Collaborate on sitemap & user flows for web and mobile",
          "Conduct ideation sessions (Crazy 8s, how-might-we)",
          "Sketch wireframes across core screens and states",
          "Facilitate internal feedback loops (w/ engineers & PM)",
        ],
      },
      {
        week: 4,
        header: "Design Systems & Mid-Fidelity Prototyping",
        desc: "Figma component library v1, mid-fi clickable prototype, style guide draft.",
        deliverables: [
          "Introduce atomic design principles & system thinking",
          "Begin building UI components in Figma libraries",
          "Create mid-fi mockups with consistent spacing, type, and color logic",
          "Co-review designs with frontend devs for feasibility",
          "Peer crit sessions to raise visual clarity & hierarchy",
        ],
      },
      {
        week: 5,
        header: "High-Fidelity Design & Responsive Layouts",
        desc: "Hi-fi mockups (mobile + web), responsive designs, motion/interaction docs.",
        deliverables: [
          "Translate mid-fi to polished UI, using grids and accessibility best practices",
          "Adapt interfaces for mobile and desktop contexts",
          "Document interaction behaviors (hover, empty states, loading, etc.)",
          "Work 1:1 with devs to annotate designs",
        ],
      },
      {
        week: 6,
        header: "Design QA & Dev Handoff",
        desc: "Design QA checklist, updated mockups for dev alignment, revised system docs.",
        deliverables: [
          "Collaborate deeply with frontend/Android engineers to check implementation",
          "Use Zeplin, Figma Dev Mode, or Storybook to inspect handoff",
          "Log design bugs and offer alternatives when engineering limitations arise",
          "Adjust design system based on dev feedback",
        ],
      },
      {
        week: 7,
        header: "Usability Testing & Iteration",
        desc: "Usability report, iteration log, final design review deck.",
        deliverables: [
          "Run 1–2 usability tests with clickable prototypes or dev builds",
          "Document insights using video clips, quotes, and task success rates",
          "Refine UX flows, microcopy, or visuals based on feedback",
          "Reflect on design decisions with mentees via crit sessions",
        ],
      },
      {
        week: 8,
        header: "Polish, Document, and Portfolio Presentation",
        desc: "Final polished design file, case study (PDF/Notion), portfolio-ready mockups.",
        deliverables: [
          "Create a well-documented case study walkthrough",
          "Annotate final screens for your Behance/Notion/Dribbble",
          "Mentor each trainee through storytelling their design journey",
          "Final group critique, polish Figma files, and archive assets",
        ],
      },
      {
        week: 9,
        header: "Presentations & Career Prep",
        desc: "Recorded presentation, updated portfolios, mentorship reflections.",
        deliverables: [
          "Final presentation to other track members (backend, frontend, Android)",
          "Trainees walk through the product, process, and what they’d do differently",
          "Run mock whiteboard design challenges",
          "Refine portfolios and LinkedIn profiles",
          "Personal mentorship on job search, imposter syndrome, design tests",
        ],
      },
    ],

    programOutcomes: [
      {
        content:
          "Build a full design case study, complete with research, wireframes, UI screens, prototypes, and final developer handoff — ready for your portfolio.",
      },
      {
        content:
          "Learn to defend your design decisions with research, usability data, and business reasoning.",
      },
      {
        content:
          "Gain hands-on experience working within an agile tech team (PMs, engineers, QA, designers).",
      },
      {
        content:
          "Strengthen your frontend basics to better collaborate with engineers (HTML/CSS fundamentals, component-based thinking).",
      },
      {
        content:
          "Receive mentorship on building a strong design portfolio, personal branding, and preparing for design job interviews.",
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
