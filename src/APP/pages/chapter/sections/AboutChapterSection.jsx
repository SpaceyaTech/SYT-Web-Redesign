import React from 'react';
import DetailsContainer from './DetailsContainer';

const aboutChapter = { title: 'About This Chapter', paragraph: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.' }

function AboutChapterSection() {
  return (
    <>
      <div className="text-lg font-light md:font-medium text-center text-gray-500 dark:text-gray-400 dark:border-gray-700  pl-6 py-10 pb-0">
        <ul className="flex flex-wrap -mb-px">
          <li className="mr-2">
            <a href="#" className="inline-block p-1 md:p-4 text-[#00664E] border-b-4 border-[#00664E] rounded-t-lg active hover:text-gray-600 dark:text-blue-500 dark:border-blue-500" aria-current="page">About</a>
          </li>
          <li className="mr-2">
            <a href="#" className="inline-block p-1 md:p-4 rounded-t-lg hover:border-gray-300 dark:hover:text-gray-300 ">Events</a>
          </li>
          <li className="mr-2">
            <a href="#" className="inline-block p-1 md:p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300">Impact</a>
          </li>
          <li className="mr-2">
            <a href="#" className="inline-block p-1 md:p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300">Organizers</a>
          </li>
        </ul>

      </div>
      <DetailsContainer {...aboutChapter} />
    </>
  );
}

export default AboutChapterSection;
