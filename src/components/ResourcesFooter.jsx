import { useState } from "react";
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

import mastercraft from "../assets/images/mastercraft/mastercraft-hero-footer.png";
import logo from "../assets/images/sytLogo.png";

const socialLinks = [
  {
    href: "https://www.facebook.com/spaceyatech",
    icon: <FaFacebook aria-label="Facebook page link" size="1.6em" />,
    alt: "facebook",
    label: "Facebook page link",
  },
  {
    href: "https://www.instagram.com/spaceyatech/",
    icon: <FaInstagram aria-label="Instagram page link" size="1.5em" />,
    alt: "instagram",
    label: "Instagram page link",
  },
  {
    href: "https://x.com/SpaceYaTech",
    icon: <FaXTwitter aria-label="Twitter handle" size="1.5em" />,
    alt: "twitter",
    label: "Twitter handle",
  },
  {
    href: "https://linkedin.com/company/spaceyatech",
    icon: <FaLinkedin aria-label="LinkedIn page link" size="1.5em" />,
    alt: "linkedIn",
    label: "LinkedIn page link",
  },
  {
    href: "https://www.youtube.com/@spaceyatech",
    icon: <FaYoutube aria-label="YouTube channel link" size="1.5em" />,
    alt: "youtube",
    label: "YouTube channel link",
  },
  {
    href: "https://open.spotify.com/show/4nUYzhacDAw1v9ClqPY89n",
    icon: <FaSpotify aria-label="Spotify profile link" size="1.5em" />,
    alt: "spotify",
    label: "Spotify profile link",
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

function ResourcesFooter() {
  const now = new Date();
  const year = now.getFullYear();

  return (
    <div className="">
      <FooterTop />
      <footer className="bg-secondary text-white" data-testid="footer-section">
        <div className="md:px-12 md:pt-8 md:pb-[2px] py-8 px-4 max-w-[1440px] mx-auto">
          <div className="flex lg:flex-row flex-col md:gap-16 gap-8">
            <div className="flex-3 flex flex-col items-center">
              {/* logo */}
              <LazyLoadImage
                src={logo}
                alt="logo"
                className="h-20 md:ml-0 ml-4 object-contain"
              />
              {/* socials */}
              <div className="flex gap-4 items-center py-4">
                {socialLinks.slice(0, 4).map((link) => (
                  <a
                    key={crypto.randomUUID()}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={link.label}
                    className="w-5 h-5 text-white"
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
                    className="w-5 h-5 text-white"
                  >
                    {link.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Footer links */}
            <div className="grid grid-cols-1 sm:grid-cols-3 md:gap-12 gap-8">
              {footerLinks.map((section) => (
                <div
                  key={crypto.randomUUID()}
                  className="flex flex-col gap-2 md:gap-4 text-center lg:text-left"
                >
                  <h2 className="text-green-footer font-bold sm:text-xl text-lg md:leading-9">
                    {section.title}
                  </h2>

                  <ul className="flex flex-col gap-3 md:gap-5 list-none text-sm font-light">
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
              <div className="flex flex-col gap-2 md:gap-4">
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
          <div>
            <h1 className="text-center text-green-footer my-4 ">
              &copy; {year} SpaceYaTech | All Rights Reserved
            </h1>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default ResourcesFooter;

function FooterTop() {
  const [cohortEmail, setCohortEmail] = useState("");

  return (
    <div className="hidden md:block bg-[#F5F5F5]">
      <div className="relative mx-auto max-w-1440 pt-60">
        <div className="w-full xl:w-fit max-w-768 xl:max-w-1216 mx-auto absolute top-12 left-1/2 -translate-x-1/2 z-10">
          <LazyLoadImage
            src={mastercraft}
            alt="mastercraft"
            className="w-full object-contain"
            effect="blur"
          />
        </div>
        {/* Bottom */}
        <div className="bg-secondary relative rounded-t-2xl pt-60 pb-12 mx-auto max-w-1440 flex-center overflow-clip">
          <div className="max-w-xl flex flex-col gap-3 text-white">
            <h4 className="text-center text-3xl px-4">
              Bet on yourself. It’s completely
              <br /> free
            </h4>

            <p className="text-center text-base px-16 font-normal">
              We believe education should be nurtured and made as accessible as
              possible.
            </p>

            <div className="w-full">
              <small className="text-xs">Get future cohort dates</small>
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                }}
                className="bg-white p-[1px] border rounded-md w-full flex items-center text-grey-dark"
              >
                <input
                  type="email"
                  className="flex-grow outline-none px-2 text-sm"
                  placeholder="Enter email"
                  value={cohortEmail}
                  onChange={(e) => setCohortEmail(e.target.value)}
                />
                <button
                  type="submit"
                  className="rounded-r px-6 py-1.5 font-semibold text-white border-none bg-gradient-to-b to-primary from-green-dark"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>

          <LazyLoadImage
            src="/syt.png"
            alt=""
            className="absolute bottom-0 w-[284px] right-0 z-20"
          />
        </div>
      </div>
    </div>
  );
}
