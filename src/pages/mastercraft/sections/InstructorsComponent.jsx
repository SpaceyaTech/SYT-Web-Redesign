/* eslint-disable react/prop-types */
import React from "react";
import { FaBriefcase, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { LazyLoadImage } from "react-lazy-load-image-component";

function InstructorsComponent({ name, title, image, linkedin, twitter }) {
  return (
    <div
      key={crypto.randomUUID()}
      className="border bg-white p-2 rounded-2xl h-[420px] md:h-[530px] min-w-[calc(100vw-40px)] sm:min-w-80 sm:w-80"
    >
      <div className="rounded-xl bg-green-light flex flex-col overflow-hidden size-full">
        <LazyLoadImage
          className="h-3/5 w-80 object-cover"
          src={image}
          alt={name}
        />
        <div className="h-2/5 p-3.5 space-y-3.5 w-full">
          <h4 className="text-xl font-medium">{name}</h4>

          <p className="text-base font-light text-grey-neutral gap-4 flex items-center">
            <FaBriefcase />
            <span className="line-clamp-1">{title}</span>
          </p>

          <p className="flex items-center text-base font-light text-grey-neutral space-x-4">
            <FaLinkedinIn />

            <a
              href={linkedin.href}
              target="_blank"
              rel="noreferrer noopener"
              className=""
            >
              {linkedin.username}
            </a>
          </p>

          <div>
            {twitter.username && (
              <p className="flex items-center text-base font-light text-grey-neutral space-x-4">
                <FaXTwitter />
                <a
                  href={twitter.href}
                  target="_blank"
                  rel="noreferrer noopener"
                  className=""
                >
                  {twitter.username}
                </a>
              </p>
            )}
          </div>
        </div>
      </div>
      {/*
      <div className="bg-green-light flex flex-col gap-2 w-full h-2/6 p-3 rounded-b-2xl">
        <p className="flex gap-4 items-center text-base font-light text-grey-neutral space-x-4">
          <FaBriefcase />
          {title}
        </p>
        <p className="flex items-center text-base font-light text-grey-neutral space-x-4">
          <FaLinkedinIn />

          <a
            href={linkedin.href}
            target="_blank"
            rel="noreferrer noopener"
            className=""
          >
            {linkedin.username}
          </a>
        </p>
        {twitter.username && (
          <p className="flex items-center text-base font-light text-grey-neutral space-x-4">
            <FaXTwitter />
            <a
              href={twitter.href}
              target="_blank"
              rel="noreferrer noopener"
              className=""
            >
              {twitter.username}
            </a>
          </p>
        )}
      </div> */}
    </div>
  );
}

export default InstructorsComponent;
