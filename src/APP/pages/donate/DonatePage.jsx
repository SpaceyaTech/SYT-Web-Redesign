import React from 'react';
import { Link } from 'react-router-dom';
import RangeInput from './RangeInput';

// this is the donate page with products and donation progress bar
function DonatePage() {
  const projects = [
    {
      id: 1,
      name: 'Mastori CMS Platform',
      info: 'A standalone content management platform for tech blogs and news where everyone contributes.',
    },
    {
      id: 2,
      name: 'Mastori CMS Platform',
      info: 'A standalone content management platform for tech blogs and news where everyone contributes.',
    },
    {
      id: 3,
      name: 'Mastori CMS Platform',
      info: 'A standalone content management platform for tech blogs and news where everyone contributes.',
    },
    {
      id: 4,
      name: 'Mastori CMS Platform',
      info: 'A standalone content management platform for tech blogs and news where everyone contributes.',
    },
    {
      id: 5,
      name: 'Mastori CMS Platform',
      info: 'A standalone content management platform for tech blogs and news where everyone contributes.',
    },
    {
      id: 6,
      name: 'Mastori CMS Platform',
      info: 'A standalone content management platform for tech blogs and news where everyone contributes.',
    },
    {
      id: 7,
      name: 'Mastori CMS Platform',
      info: 'A standalone content management platform for tech blogs and news where everyone contributes.',
    },
    {
      id: 8,
      name: 'Mastori CMS Platform',
      info: 'A standalone content management platform for tech blogs and news where everyone contributes.',
    },
  ];
  return (
    <section className="my-2 space-y-12 p-3 mb-10">
      <div className="max-w-3xl mx-auto text-center space-y-6">
        <h2 className="text-4xl">Promote a Project</h2>
        <p>
          Make a difference today! Join us in our mission to bring positive
          change to our community by donating. Every dollar counts and directly
          supports our project, creating a brighter future for all.
        </p>
        <div className="flex border border-gray-700 rounded-full px-4 py-2">
          <input
            type="text"
            placeholder="Search projects"
            className="w-full outline-none border-0 placeholder:text-gray-700"
          />
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M19.7804 18.4796L15.0863 13.7865C16.4468 12.1531 17.1252 10.058 16.9804 7.93716C16.8356 5.8163 15.8788 3.8329 14.3089 2.39957C12.739 0.966243 10.6769 0.193337 8.55164 0.241637C6.42638 0.289937 4.40157 1.15572 2.8984 2.65889C1.39523 4.16206 0.529439 6.18688 0.481139 8.31214C0.432839 10.4374 1.20575 12.4995 2.63907 14.0694C4.0724 15.6393 6.0558 16.5961 8.17666 16.7409C10.2975 16.8857 12.3926 16.2073 14.026 14.8468L18.7191 19.5409C18.7888 19.6105 18.8715 19.6658 18.9626 19.7035C19.0536 19.7412 19.1512 19.7606 19.2497 19.7606C19.3483 19.7606 19.4459 19.7412 19.5369 19.7035C19.6279 19.6658 19.7107 19.6105 19.7804 19.5409C19.85 19.4712 19.9053 19.3884 19.943 19.2974C19.9807 19.2064 20.0001 19.1088 20.0001 19.0102C20.0001 18.9117 19.9807 18.8141 19.943 18.7231C19.9053 18.632 19.85 18.5493 19.7804 18.4796ZM1.99973 8.51022C1.99973 7.1752 2.39561 5.87016 3.13731 4.76012C3.87901 3.65009 4.93321 2.78493 6.16661 2.27404C7.40001 1.76315 8.75721 1.62947 10.0666 1.88992C11.376 2.15037 12.5787 2.79325 13.5227 3.73725C14.4667 4.68126 15.1096 5.88399 15.37 7.19336C15.6305 8.50274 15.4968 9.85994 14.9859 11.0933C14.475 12.3267 13.6099 13.3809 12.4998 14.1226C11.3898 14.8643 10.0848 15.2602 8.74973 15.2602C6.96012 15.2582 5.24439 14.5464 3.97895 13.281C2.71351 12.0156 2.00171 10.2998 1.99973 8.51022Z"
              fill="#222222"
            />
          </svg>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 p-4 gap-4">
        {projects?.map((project) => (
          <div key={project.id} className="shadow-lg rounded-md text-sm">
            <div className="h-[12rem]">
              <img
                src="https://images.unsplash.com/photo-1569098644584-210bcd375b59?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                alt="unsplash-img"
                className="object-cover w-full h-full rounded-t-md"
              />
            </div>
            <div className="p-2">
              <div className="flex items-center justify-between my-2">
                <h3 className="font-semibold">Mastori CMS Platform</h3>
                <p className="text-[#0061CC] bg-[#E8F3FF] px-2 p-1 rounded-full">
                  Active
                </p>
              </div>
              <p className="text-gray-600 mb-5">
                A standalone content management platform for tech blogs and
                news where everyone contributes.
              </p>
              <RangeInput />
              <div className="flex items-center justify-between my-2">
                <img src="/donate.png" alt="donate-img" />
                <Link
                  to={`/donate/${project?.id}`}
                  className="flex items-center gap-2"
                >
                  <p className="text-[#009975]">View Project</p>
                  <svg
                    width="16"
                    height="14"
                    viewBox="0 0 16 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9.69219 0.932465L15.3172 6.55746C15.3753 6.61551 15.4214 6.68444 15.4529 6.76031C15.4843 6.83619 15.5005 6.91752 15.5005 6.99965C15.5005 7.08179 15.4843 7.16312 15.4529 7.23899C15.4214 7.31486 15.3753 7.38379 15.3172 7.44184L9.69219 13.0668C9.57491 13.1841 9.41585 13.25 9.25 13.25C9.08415 13.25 8.92509 13.1841 8.80781 13.0668C8.69054 12.9496 8.62465 12.7905 8.62465 12.6247C8.62465 12.4588 8.69054 12.2997 8.80781 12.1825L13.3664 7.62465L1.125 7.62465C0.95924 7.62465 0.800269 7.5588 0.683058 7.44159C0.565848 7.32438 0.5 7.16541 0.5 6.99965C0.5 6.83389 0.565848 6.67492 0.683058 6.55771C0.800269 6.4405 0.95924 6.37465 1.125 6.37465L13.3664 6.37465L8.80781 1.81684C8.69054 1.69956 8.62465 1.5405 8.62465 1.37465C8.62465 1.2088 8.69054 1.04974 8.80781 0.932465C8.92509 0.815188 9.08415 0.749304 9.25 0.749304C9.41585 0.749304 9.57491 0.815188 9.69219 0.932465Z"
                      fill="#009975"
                    />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default DonatePage;
