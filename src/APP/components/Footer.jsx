/* eslint-disable no-confusing-arrow */
import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaYoutube,
  FaSpotify,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Link } from "react-router-dom";

import logo from "../../assets/images/sytLogo.png";

const socialLinks = [
  {
    href: "https://www.facebook.com/spaceyatech",
    icon: <FaFacebook size="1.6em" />,
    alt: "facebook",
  },
  {
    href: "https://www.instagram.com/spaceyatech/",
    icon: <FaInstagram size="1.5em" />,
    alt: "instagram",
  },
  {
    href: "https://x.com/SpaceYaTech",
    icon: <FaXTwitter size="1.5em" />,
    alt: "twitter",
  },
  {
    href: "https://linkedin.com/company/spaceyatech",
    icon: <FaLinkedin size="1.5em" />,
    alt: "linkedIn",
  },
  {
    href: "https://www.youtube.com/@spaceyatech",
    icon: <FaYoutube size="1.5em" />,
    alt: "youtube",
  },
  {
    href: "https://open.spotify.com/show/4nUYzhacDAw1v9ClqPY89n",
    icon: <FaSpotify size="1.5em" />,
    alt: "spotify",
  },
];

const footerLinks = [
  {
    title: "Company",
    links: [
      { to: "/about-us", name: "About Us" },
      { to: "/community", name: "Community" },
      { to: "/products", name: "Products" },
      { to: "/shop", name: "Shop" },
    ],
  },
  {
    title: "Resources",
    links: [
      { href: "/events", name: "Events" },
      { href: "http://mentorlst.com", name: "Mentorship" },
      { href: "/gallery", name: "Gallery" },
    ],
  },
  {
    title: "Quick Links",
    links: [
      { href: "https://x.com/SpaceYaTech", name: "Contact Us" },
      {
        href: "https://syt-terms.notion.site/SpaceYaTech-Terms-of-Service-7d84de7a4feb41cc9f86143a9cc572e0",
        name: "Terms and Conditions",
      },
    ],
  },
];

function Footer() {
  const now = new Date();
  const year = now.getFullYear();

  return (
    <footer className="bg-secondary text-white">
      <div className="md:p-12 py-8 px-4 relative max-w-[1440px] mx-auto">
        <div className="flex lg:flex-row flex-col md:gap-16 gap-8">
          <div className="flex-3 flex flex-col items-center">
            {/* logo */}
            <LazyLoadImage
              src={logo}
              alt="logo"
              className="w-[124px] h-32 md:ml-0 ml-4 object-contain"
            />
            {/* socials */}
            <div className="flex gap-4 items-center py-4">
              {socialLinks.slice(0, 4).map((link) => (
                <a
                  key={crypto.randomUUID()}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-7 h-7 text-white"
                >
                  {link.icon}
                </a>
              ))}
            </div>
            <div className="flex gap-4 py-4">
              {socialLinks.slice(4).map((link) => (
                <a
                  key={crypto.randomUUID()}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-7 h-7 text-white"
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Footer links */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-12 sm:gap-8">
            {footerLinks.map((section) => (
              <div
                key={crypto.randomUUID()}
                className="flex flex-col gap-8 text-center lg:text-left"
              >
                <h2 className="text-green-footer font-bold sm:text-xl text-lg leading-9">
                  {section.title}
                </h2>

                <ul className="flex flex-col gap-5 list-none text-sm font-light">
                  {section.links.map((link) =>
                    link.href ? (
                      <li key={crypto.randomUUID()}>
                        <a
                          href={link.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:underline text-white"
                        >
                          {link.name}
                        </a>
                      </li>
                    ) : (
                      <li key={crypto.randomUUID()}>
                        <Link to={link.to}>{link.name}</Link>
                      </li>
                    )
                  )}
                </ul>
              </div>
            ))}
          </div>

          {/* Newsletter */}
          <div className="flex-2">
            <div className="flex flex-col md:gap-8">
              <h2 className="text-green-footer font-bold sm:text-xl text-lg md:leading-9 mx-auto lg:mx-0 text-center lg:text-left">
                Subscribe to our Newsletter
              </h2>
              <div className="flex flex-col gap-5 text-sm font-light">
                <p className="text-sm left-6 text-center lg:text-left">
                  Subscribe to our newsletter to get your
                  <br className="hidden sm:block" />
                  weekly dose of news, updates, tips and even
                  <br className="hidden sm:block" />
                  special offers
                </p>

                <form className="flex items-center max-w-md w-full mx-auto">
                  <input
                    type="email"
                    placeholder="Enter email address"
                    className="w-2/3 sm:w-auto px-2 md:px-4 py-3 rounded-lg rounded-r-none flex-3 outline-none text-black font-medium"
                  />
                  <button
                    type="submit"
                    className="rounded-r-lg px-2 md:px-4 py-3 flex-auto font-semibold text-white transition-all duration-200 bg-primary border-none hover:bg-gray-700 focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
                  >
                    Subscribe
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="sm:mt-14 mt-10">
          <h1 className="text-center text-green-footer my-4 md:my-8">
            &copy; {year} SpaceYaTech | All Rights Reserved
          </h1>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
