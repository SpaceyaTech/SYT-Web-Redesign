import React from 'react';
import {
  MasterBase,
  mpesapayments,
  techrecruiters,
  mentorlst,
  uxhiringafrica,
} from '../../../../../assets/images/community';
import Events from './Events';

const categories = ['DevOps', 'Software Development', 'Cloud Development', 'Software Development', 'Design', 'DevOps', 'Software Development', 'Cloud Development', 'Software Development'];

const events = [
  {
    id: 1,
    img: MasterBase,
    title: 'How to Master Database Engineering using SQL',
    date: 'Sat, May 6, 2023 8:00 PM EAT',
    location: 'Twitter Spaces',
    mode: 'virtual',
  },
  {
    id: 2,
    img: mentorlst,
    title: 'Deploying and Managing Applications with Kubernetes',
    date: 'Sat, May 6, 2023 8:00 PM EAT',
    location: 'Sarit Centre • Nairobi ',
    mode: 'Physical',
  },
  {
    id: 3,
    img: mpesapayments,
    title: 'How to Integrate MPESA Payments into Your Website or App',
    date: 'Sat, May 6, 2023 8:00 PM EAT',
    location: '#SYTTechTalks',
    mode: 'virtual',
  },
  {
    id: 4,
    img: techrecruiters,
    title:
        'Insights and Advice from Tech Recruiters on Navigating the Job Market',
    date: 'Sat, May 6, 2023 8:00 PM EAT',
    location: 'Twitter Spaces',
    mode: 'virtual',
  },
  {
    id: 5,
    img: uxhiringafrica,
    title: 'UX Hiring Africa: What Recruiters Look for When Hiring Designers',
    date: 'Sat, May 6, 2023 8:00 PM EAT',
    location: 'Twitter Spaces',
    mode: 'virtual',
  },
  {
    id: 6,
    img: MasterBase,
    title: 'How to Master Database Engineering using SQL',
    date: 'Sat, May 6, 2023 8:00 PM EAT',
    location: 'Twitter Spaces',
    mode: 'virtual',
  },
  {
    id: 7,
    img: mentorlst,
    title: 'Deploying and Managing Applications with Kubernetes',
    date: 'Sat, May 6, 2023 8:00 PM EAT',
    location: 'Sarit Centre • Nairobi ',
    mode: 'Physical',
  },
  {
    id: 8,
    img: mpesapayments,
    title: 'How to Integrate MPESA Payments into Your Website or App',
    date: 'Sat, May 6, 2023 8:00 PM EAT',
    location: '#SYTTechTalks',
    mode: 'virtual',
  },
  {
    id: 9,
    img: techrecruiters,
    title:
        'Insights and Advice from Tech Recruiters on Navigating the Job Market',
    date: 'Sat, May 6, 2023 8:00 PM EAT',
    location: 'Twitter Spaces',
    mode: 'virtual',
  },
  {
    id: 10,
    img: uxhiringafrica,
    title: 'UX Hiring Africa: What Recruiters Look for When Hiring Designers',
    date: 'Sat, May 6, 2023 8:00 PM EAT',
    location: 'Twitter Spaces',
    mode: 'virtual',
  },
];

function EventCategory() {
  return (
    <div className="flex flex-col px-6">
      <div className="flex flex-wrap flex-col">
        <h2 className="text-lg font-light text-[#323433]">Categories</h2>
        <div className="grid grid-cols-5 gap-4 py-6">
          <button className="bg-blue-500 active:bg-blue-500 font-normal text-white py-2 px-4 border border-[#323433] hover:border-transparent rounded w-full" key="1">
            Design
          </button>
          {categories.map((category) => (
            <button className="bg-transparent hover:bg-blue-500 active:bg-blue-500 text-[#323433] font-normal hover:text-white py-2 px-4 border border-[#323433] hover:border-transparent rounded w-full" key={category}>
              {category}
            </button>
          )) }

        </div>
        <Events events={events} />
      </div>
      <button className="bg-transparent self-center active:bg-green-600 active:text-white font-normal w-fit text-[#009975] py-2 px-4 md:px-28 border border-2 border-[#009975] rounded my-12">
        SEE MORE
      </button>
    </div>
  );
}

export default EventCategory;
