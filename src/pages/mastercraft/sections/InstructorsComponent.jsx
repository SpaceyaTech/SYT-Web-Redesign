/* eslint-disable react/prop-types */
import React from "react";
import { FaBriefcase, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { LazyLoadImage } from "react-lazy-load-image-component";

function InstructorsComponent({
  name,
  title,
  image,
  linkedin,
  twitter,
  organisation,
  experience,
}) {
  return (
    <div
      key={crypto.randomUUID()}
      className="border bg-white p-2 rounded-2xl h-[400px] md:h-[496px] min-w-[calc(100vw-56px)] sm:min-w-80 sm:w-80"
    >
      <div className="rounded-xl bg-green-light flex flex-col overflow-hidden size-full">
        <LazyLoadImage
          className="h-3/5 md:h-2/3 w-full object-cover"
          src={image}
          alt={name}
        />
        <div className="h-2/5 md:h-1/3 p-3.5 space-y-3.5 w-full">
          <div className="flex items-center justify-between flex-wrap gap-2">
            <h4 className="text-sm font-semibold text-nowrap">{name}</h4>
            <p className="px-2.5 py-0.5 rounded-2xl text-xs font-normal text-nowrap text-primary bg-[#ECFDF3]">
              Experience:{" "}
              <span className="font-semibold">{experience} years</span>
            </p>
          </div>

          <p
            className="text-sm font-light text-grey-neutral gap-4 flex items-center cursor-default"
            title={`${title}, ${organisation}`}
          >
            <FaBriefcase />
            <span className="line-clamp-1">
              {title}, {organisation}
            </span>
          </p>

          <p
            className="flex items-center text-sm font-light text-grey-neutral space-x-4"
            title={`${linkedin.href}`}
          >
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
              <p
                className="flex items-center text-sm font-light text-grey-neutral space-x-4"
                title={`${twitter.href}`}
              >
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
