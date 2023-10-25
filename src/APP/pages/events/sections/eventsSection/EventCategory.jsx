import React, { useEffect, useState } from 'react';
import {
  MasterBase,
  mpesapayments,
  techrecruiters,
  mentorlst,
  uxhiringafrica,
} from '../../../../../assets/images/community';
import Events from './Events';
import { fetchEventsCategories } from '../../pages/data';

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
  const [eventsCategories, setEventsCategories] = useState(null);

  useEffect (() => {
    const fetchCategoriesData = async () => {
      try {
        const theEventsCategoriesData = await fetchEventsCategories();
        setEventsCategories((prevState) => {
          return prevState = theEventsCategoriesData;
        });
      } catch(error) {
        console.error("Error fetching event categories: ", error);
        throw error;
      }
    }
    fetchCategoriesData();
  }, [])

  return (
    <div className="flex flex-col px-6">
      <div className="flex flex-wrap flex-col">
        <h2 className="text-lg font-light text-[#323433] ">Categories</h2>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 py-6">
          {/* <button className="bg-blue-500 active:bg-blue-500 font-normal text-white py-2 px-4 border border-[#323433] hover:border-transparent rounded w-full truncate" key="">
            Design
          </button> */}
          {eventsCategories ? (
            eventsCategories.map(({id, name}) => (
              <button className="bg-transparent hover:bg-blue-500 active:bg-blue-500 text-[#323433] font-normal hover:text-white py-2 px-4 border border-[#323433] hover:border-transparent rounded w-full truncate" key={id}>
                {name}
              </button>
            )) 
          ) : (
            ''
          )}
        </div>
        <div className="flex flex-row justify-between">
          <div>
            <h2 className="text-lg font-light text-[#323433] ">Events</h2>
          </div>
          <div className="flex flex-row">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M10.625 9.375V16.875C10.625 17.0408 10.5592 17.1997 10.4419 17.3169C10.3247 17.4342 10.1658 17.5 10 17.5C9.83424 17.5 9.67527 17.4342 9.55806 17.3169C9.44085 17.1997 9.375 17.0408 9.375 16.875V9.375C9.375 9.20924 9.44085 9.05027 9.55806 8.93306C9.67527 8.81585 9.83424 8.75 10 8.75C10.1658 8.75 10.3247 8.81585 10.4419 8.93306C10.5592 9.05027 10.625 9.20924 10.625 9.375ZM15.625 15C15.4592 15 15.3003 15.0658 15.1831 15.1831C15.0658 15.3003 15 15.4592 15 15.625V16.875C15 17.0408 15.0658 17.1997 15.1831 17.3169C15.3003 17.4342 15.4592 17.5 15.625 17.5C15.7908 17.5 15.9497 17.4342 16.0669 17.3169C16.1842 17.1997 16.25 17.0408 16.25 16.875V15.625C16.25 15.4592 16.1842 15.3003 16.0669 15.1831C15.9497 15.0658 15.7908 15 15.625 15ZM17.5 12.5H16.25V3.125C16.25 2.95924 16.1842 2.80027 16.0669 2.68306C15.9497 2.56585 15.7908 2.5 15.625 2.5C15.4592 2.5 15.3003 2.56585 15.1831 2.68306C15.0658 2.80027 15 2.95924 15 3.125V12.5H13.75C13.5842 12.5 13.4253 12.5658 13.3081 12.6831C13.1908 12.8003 13.125 12.9592 13.125 13.125C13.125 13.2908 13.1908 13.4497 13.3081 13.5669C13.4253 13.6842 13.5842 13.75 13.75 13.75H17.5C17.6658 13.75 17.8247 13.6842 17.9419 13.5669C18.0592 13.4497 18.125 13.2908 18.125 13.125C18.125 12.9592 18.0592 12.8003 17.9419 12.6831C17.8247 12.5658 17.6658 12.5 17.5 12.5ZM4.375 12.5C4.20924 12.5 4.05027 12.5658 3.93306 12.6831C3.81585 12.8003 3.75 12.9592 3.75 13.125V16.875C3.75 17.0408 3.81585 17.1997 3.93306 17.3169C4.05027 17.4342 4.20924 17.5 4.375 17.5C4.54076 17.5 4.69973 17.4342 4.81694 17.3169C4.93415 17.1997 5 17.0408 5 16.875V13.125C5 12.9592 4.93415 12.8003 4.81694 12.6831C4.69973 12.5658 4.54076 12.5 4.375 12.5ZM6.25 10H5V3.125C5 2.95924 4.93415 2.80027 4.81694 2.68306C4.69973 2.56585 4.54076 2.5 4.375 2.5C4.20924 2.5 4.05027 2.56585 3.93306 2.68306C3.81585 2.80027 3.75 2.95924 3.75 3.125V10H2.5C2.33424 10 2.17527 10.0658 2.05806 10.1831C1.94085 10.3003 1.875 10.4592 1.875 10.625C1.875 10.7908 1.94085 10.9497 2.05806 11.0669C2.17527 11.1842 2.33424 11.25 2.5 11.25H6.25C6.41576 11.25 6.57473 11.1842 6.69194 11.0669C6.80915 10.9497 6.875 10.7908 6.875 10.625C6.875 10.4592 6.80915 10.3003 6.69194 10.1831C6.57473 10.0658 6.41576 10 6.25 10ZM11.875 6.25H10.625V3.125C10.625 2.95924 10.5592 2.80027 10.4419 2.68306C10.3247 2.56585 10.1658 2.5 10 2.5C9.83424 2.5 9.67527 2.56585 9.55806 2.68306C9.44085 2.80027 9.375 2.95924 9.375 3.125V6.25H8.125C7.95924 6.25 7.80027 6.31585 7.68306 6.43306C7.56585 6.55027 7.5 6.70924 7.5 6.875C7.5 7.04076 7.56585 7.19973 7.68306 7.31694C7.80027 7.43415 7.95924 7.5 8.125 7.5H11.875C12.0408 7.5 12.1997 7.43415 12.3169 7.31694C12.4342 7.19973 12.5 7.04076 12.5 6.875C12.5 6.70924 12.4342 6.55027 12.3169 6.43306C12.1997 6.31585 12.0408 6.25 11.875 6.25Z" fill="#009975" />
            </svg>
            <p className="text-sm font-normal text-[#009975] ml-2"> FILTER EVENTS</p>
          </div>
        </div>

      </div>
      <Events events={events} />
      <button className="bg-transparent self-center active:bg-green-600 active:text-white font-normal w-fit text-[#009975] py-2 px-4 md:px-28 border border-2 border-[#009975] rounded my-12">
        SEE MORE
      </button>
    </div>
  );
}

export default EventCategory;
