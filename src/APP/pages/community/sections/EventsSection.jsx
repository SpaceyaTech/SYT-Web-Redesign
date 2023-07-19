import React from 'react'
import {
  community, MasterBase, mpesapayments, techrecruiters, mentorlst, uxhiringafrica
} from '../../../../assets/images/community';

function EventsSection() {
  const events = [{
    img: MasterBase, title: 'How to Master Database Engineering using SQL', date: 'Sat, May 6, 2023 8:00 PM EAT', location: 'Twitter Spaces', mode: 'virtual'
  },
  {
    img: mentorlst, title: 'Deploying and Managing Applications with Kubernetes', date: 'Sat, May 6, 2023 8:00 PM EAT', location: 'Sarit Centre • Nairobi ', mode: 'Physical'
  },
  {
    img: mpesapayments, title: 'How to Integrate MPESA Payments into Your Website or App', date: 'Sat, May 6, 2023 8:00 PM EAT', location: '#SYTTechTalks', mode: 'virtual'
  },
  {
    img: techrecruiters, title: 'Insights and Advice from Tech Recruiters on Navigating the Job Market', date: 'Sat, May 6, 2023 8:00 PM EAT', location: 'Twitter Spaces', mode: 'virtual'
  },
  {
    img: uxhiringafrica, title: 'UX Hiring Africa: What Recruiters Look for When Hiring Designers', date: 'Sat, May 6, 2023 8:00 PM EAT', location: 'Twitter Spaces', mode: 'virtual'
  },
]

//box-shadow: 0px 4px 10px 0px #04080D0D;
  return (
    <div className='p-6'>
        <div className=" mt-6 grid grid-cols-1 gap-x-3 gap-y-10 sm:grid-cols-2 lg:grid-cols-5 xl:gap-x-8">
      {events.map(({
        img, title, date, location, mode
      }) => (
        <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700" style={{"box-shadow": "0px 4px 10px 0px #04080D0D"}}>
          <a href="#">
            <img className="rounded-t-lg w-full" src={img} alt="" />
          </a>
          <div className="p-5">
            <a href="#">
              <h5 className="mb-2 text-base font-bold tracking-tight text-gray-900 dark:text-white">{title}</h5>
            </a>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{date}</p>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{location}</p>
            <button type="button" className="text-white bg-red-800 hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-800 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-red-800 dark:hover:bg-red-800 dark:focus:ring-red-800">{mode}</button>

          </div>
        </div>
      ))}
    </div>
    </div>
    
  )
}

export default EventsSection

