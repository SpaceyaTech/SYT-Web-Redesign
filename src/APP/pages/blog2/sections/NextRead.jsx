import React, { useState } from "react";

import BlogsUMightLike from "./BlogUMightLike";

function NextRead() {
  const data = [
    {
      id: 17,
      title_slug: "tech-job-market-outlook",
      title: "Tech Job Market Outlook",
      description:
        "Tech Job Market Outlook: Is 2024 a Boon or a Burst for Software Engineers?",
      category: 6,
      likes: 3,
      image:
        "https://apis.spaceyatech.com/media/blog-images/Picture1_SkLtDCs.png",
      created_at: "2024-02-06T03:48:06.517876+03:00",
      author: "spaceyatech",
    },
    {
      id: 15,
      title_slug:
        "why-ux-research-is-important-and-how-to-do-it-the-right-way-in-2024",
      title:
        "Why UX Research is Important and How to Do it the Right Way in 2024",
      description:
        "UX research is important in 2024 and how to do it the right way. The case studies from Google, Netflix and Airbnb have illustrated the importance of UX to product success. Hopefully, you will take advantage of these tips to improve your game in 2024 and build a better product.",
      category: 5,
      likes: 42,
      image:
        "https://apis.spaceyatech.com/media/blog-images/ux-researcher-interview-3b55623951032502ecc6f6f516e76b078693afee60688f01a19d_4wHkUEb.jpg",
      created_at: "2024-01-21T01:50:28.703695+03:00",
      author: "Fred",
    },
    {
      id: 13,
      title_slug: "leveraging-open-source-to-boost-your-career-in-tech",
      title: "Leveraging Open Source to boost your career in Tech",
      description:
        "SpaceYaTech Admin Catherine Kiiru, who is a software developer, technical writer, and avid open-source contributor to come take our community through everything open-source from what is open-source",
      category: 3,
      likes: 4,
      image:
        "https://apis.spaceyatech.com/media/blog-images/anarchy-computer-hack-hacker-wallpaper-preview.jpg",
      created_at: "2024-01-12T12:24:38.406972+03:00",
      author: "spaceyatech",
    },
    {
      id: 12,
      title_slug: "getting-started-or-building-your-career-in-tech",
      title: "Getting started or Building your career in Tech",
      description:
        "Getting started or Building your career in Tech from Learning, Job Hunt to Real Tech Role",
      category: 1,
      likes: 16,
      image: "https://apis.spaceyatech.com/media/blog-images/2.jpg",
      created_at: "2024-01-12T12:04:53.725319+03:00",
      author: "spaceyatech",
    },
    {
      id: 11,
      title_slug: "how-to-master-database-engineering-with-sql",
      title: "How to Master Database Engineering with SQL",
      description:
        "SpaceYaTech hosted the session, with Faith Kilonzi as the speaker and Juma Lawrence as the host.",
      category: 4,
      likes: 8,
      image:
        "https://apis.spaceyatech.com/media/blog-images/syt-_LinkedIn_Banner.png",
      created_at: "2024-01-12T11:57:29.708293+03:00",
      author: "spaceyatech",
    },
    {
      id: 10,
      title_slug: "mastori-the-blog-platform",
      title: "Mastori The Blog Platform",
      description:
        '"Mastori" originates from Kenyan slang, sheng, meaning "many stories." Our vision is to provide a space for individuals to write about topics that have a positive impact on the growth of other developers. Additionally, the platform serves as a resource pool for those seeking specific tech solutions.',
      category: 4,
      likes: 26,
      image: "https://apis.spaceyatech.com/media/blog-images/ideogram_6.jpeg",
      created_at: "2024-01-12T11:47:00.883034+03:00",
      author: "spaceyatech",
    },
    {
      id: 9,
      title_slug: "demystifying-colabs",
      title: "Demystifying Colabs",
      description:
        "SpaceYaTech CoLabs is an open-source collaboration project that focuses on enhancing collaboration. We have a listing of projects that are open for contributors and we also allow for community members to list their projects to find collaborators.",
      category: 4,
      likes: 8,
      image: "https://apis.spaceyatech.com/media/blog-images/syt.png",
      created_at: "2024-01-11T01:26:50.033600+03:00",
      author: "spaceyatech",
    },
    {
      id: 8,
      title_slug: "community-culture-at-spaceyatech-and-mentorlst",
      title: "Community & Culture at SpaceYaTech and MentorLst",
      description:
        "At SpaceYaTech, we believe in the power of diversity and inclusivity. We understand that the unique backgrounds and experiences of our team members contribute to our success as a company. That's why we are committed to creating a workplace where every team member feels recognized, appreciated,...",
      category: 3,
      likes: 2,
      image:
        "https://apis.spaceyatech.com/media/blog-images/syt_Google_Form_Header.png",
      created_at: "2024-01-11T01:05:41.818583+03:00",
      author: "spaceyatech",
    },
    {
      id: 7,
      title_slug: "tech-talks-webinars",
      title: "Tech Talks (Webinars)",
      description:
        "SYTTechTalks are webinar sessions that happen every Saturday evening that allows community members of SpaceYaTech to get a chance to learn from an expert in a given field in tech from Frontend Development, Backend Development, Database Management, Product Design, Technical Writing, Open-Source...",
      category: 4,
      likes: 2,
      image: "https://apis.spaceyatech.com/media/blog-images/syttt.png",
      created_at: "2024-01-11T00:56:51.349233+03:00",
      author: "spaceyatech",
    },
    {
      id: 1,
      title_slug: "our-story",
      title: "Our Story",
      description:
        "SpaceYaTech is a technology community that was formed by a group of friends who share a passion for technology and its potential to transform Africa. The community was created to provide a platform where technology enthusiasts can gather, share ideas, and collaborate on projects",
      category: 1,
      likes: 35,
      image: "https://apis.spaceyatech.com/media/blog-images/1500x500.jpeg",
      created_at: "2024-01-06T09:37:23.687596+03:00",
      author: "spaceyatech",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? data.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === data.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="mx-auto max-w-[924px] flex flex-col gap-6 items-center px-0 md:px-3 border border-red-500 w-full mt-10">
      <h4 className="text-xl md:text-2xl font-semibold leading-normal">
        You might like these
      </h4>

      <div className="flex items-center justify-between gap-0 md:gap-5 w-full">
        {/* left */}
        <button
          className="w-6 md:w-10 h-6 md:h-10"
          type="button"
          onClick={handlePrev}
        >
          <svg
            width="43"
            height="42"
            viewBox="0 0 43 42"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-full"
          >
            <path
              d="M21.5 42C33.0791 42 42.5 32.5791 42.5 21C42.5 9.42093 33.0791 0 21.5 0C9.92093 0 0.5 9.42093 0.5 21C0.5 32.5791 9.92093 42 21.5 42ZM21.5 38.7692C11.6672 38.7692 3.73077 30.8328 3.73077 21C3.73077 11.1672 11.6672 3.23077 21.5 3.23077C31.3328 3.23077 39.2692 11.1672 39.2692 21C39.2692 30.8328 31.3328 38.7692 21.5 38.7692ZM24.3754 31.8554L26.7015 29.5292L18.1658 21L26.6983 12.4708L24.3722 10.1446L14.6798 19.8369L13.5717 21L14.6815 22.1631L24.3754 31.8554Z"
              fill="#009975"
            />
          </svg>
        </button>

        {/* Cards */}
        <div className="flex items-center overflow-scroll scroll-smooth snap-x w-4/5">
          {data.map((item, index) => (
            <BlogsUMightLike
              key={item.id}
              item={item}
              block={index === currentIndex}
            />
          ))}
        </div>

        {/* right */}
        <button
          className="w-6 md:w-10 h-6 md:h-10"
          type="button"
          onClick={handleNext}
        >
          <svg
            width="43"
            height="42"
            viewBox="0 0 43 42"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-full"
          >
            <path
              d="M21.5 0C9.92092 0 0.5 9.42092 0.5 21C0.5 32.5791 9.92092 42 21.5 42C33.0791 42 42.5 32.5791 42.5 21C42.5 9.42092 33.0791 0 21.5 0ZM21.5 3.23077C31.3328 3.23077 39.2692 11.1672 39.2692 21C39.2692 30.8328 31.3328 38.7692 21.5 38.7692C11.6672 38.7692 3.73077 30.8328 3.73077 21C3.73077 11.1672 11.6672 3.23077 21.5 3.23077ZM18.6246 10.1446L16.2985 12.4708L24.8342 21L16.3017 29.5292L18.6278 31.8554L28.3202 22.1631L29.4283 21L28.3185 19.8369L18.6246 10.1446Z"
              fill="#009975"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}

export default NextRead;
