import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Link } from "react-router-dom";
import {
  linkedin,
  twitter,
  spotify,
  youtube,
  instagram,
  facebook,
} from "../../assets/images/socials";
import logo from "../../assets/images/sytLogo.png";

function Footer() {
  const now = new Date();
  const year = now.getFullYear();

  const socialLinks = [
    {
      href: "https://www.facebook.com/spaceyatech",
      src: facebook,
      alt: "facebook",
    },
    {
      href: "https://www.instagram.com/spaceyatech/",
      src: instagram,
      alt: "instagram",
    },
    { href: "https://x.com/SpaceYaTech", src: twitter, alt: "twitter" },
    {
      href: "https://linkedin.com/company/spaceyatech",
      src: linkedin,
      alt: "linkedIn",
    },
    {
      href: "https://www.youtube.com/@spaceyatech",
      src: youtube,
      alt: "youtube",
    },
    {
      href: "https://open.spotify.com/show/4nUYzhacDAw1v9ClqPY89n",
      src: spotify,
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
          href: "/src/assets/documentation/terms-and-conditions.pdf",
          name: "Terms and Conditions",
        },
      ],
    },
  ];

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
                >
                  <LazyLoadImage
                    src={link.src}
                    alt={link.alt}
                    className="w-7 h-7"
                  />
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
                >
                  <LazyLoadImage
                    src={link.src}
                    alt={link.alt}
                    className="w-7 h-7"
                  />
                </a>
              ))}
            </div>
          </div>

          {/* Footer links */}

          {footerLinks.map((section) => (
            <div key={crypto.randomUUID()} className="flex flex-col gap-8">
              <h2 className="text-[#00FFC3] font-bold sm:text-xl text-lg leading-9">
                {section.title}
              </h2>

              <ul className="flex flex-col gap-5 list-none text-sm font-light">
                {section.links.map((link) =>
                  link.href ? (
                    <li key={crypto.randomUUID()}>
                      <a
                        href={link.href}
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
          {/* <div className="flex-3 flex gap-6 justify-between">
            <div className="flex flex-col gap-8">
              <h2 className="text-[#00FFC3] font-bold sm:text-xl text-base leading-9">
                Company
              </h2>

              <ul className="flex flex-col gap-5 list-none text-sm font-light">
                <li>
                  <Link to="/about-us">About Us</Link>
                </li>
                <li>
                  <Link to="/community">Community</Link>
                </li>
                <li>
                  <Link to="/products">Products</Link>
                </li>
                <li>
                  <Link to="/shop">Shop</Link>
                </li>
              </ul>
            </div>

            <div className="flex flex-col gap-8">
              <h2 className="text-[#00FFC3] font-bold sm:text-xl text-lg leading-9">
                Resources
              </h2>

              <ul className="flex flex-col gap-5 list-none text-sm font-light">

                <li>Jobs</li>
                <li>

                  Events

                </li>
                <li>
                  <a
                    href="http://mentorlst.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Mentorship
                  </a>
                </li>

                <li>
                  <a href="/gallery" className="hover:underline text-white">
                    Gallery
                  </a>
                </li>
              </ul>
            </div>

            <div className="flex flex-col gap-8">
              <h2 className="text-[#00FFC3] font-bold sm:text-xl text-lg leading-9">
                Quick Links
              </h2>

              <ul className="flex flex-col gap-5 list-none text-sm font-light">
                <li>Contact Us</li>
                <li>Donate</li>
                <li>Privacy Policy</li>
                <li>Terms of Use</li>
              </ul>
            </div>
          </div> */}

          {/* Newsletter */}
          <div className="flex-2">
            <div className="flex flex-col gap-8">
              <h2 className="text-[#00FFC3] font-bold sm:text-xl text-lg leading-9">
                Subscribe to our Newsletter
              </h2>

              <div className="flex flex-col gap-5 text-sm font-light">
                <p className="text-sm left-6">
                  Subscribe to our newsletter to get your
                  <br />
                  weekly dose of news, updates, tips and even
                  <br />
                  special offers
                </p>

                <form className="flex items-center">
                  <input
                    type="email"
                    placeholder="Enter email address"
                    className="w-auto px-2 md:px-4 py-3 rounded-lg rounded-r-none flex-3 outline-none text-black font-medium"
                  />
                  <button
                    type="submit"
                    className="rounded-r-lg px-2 md:px-4 py-3 flex-auto font-semibold text-white transition-all duration-200 bg-primary border border-transparent hover:bg-gray-700 focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
                  >
                    Subscribe
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>

        <div className="sm:mt-14 mt-10">
          <h1 className="text-center text-[#00FFC3] my-4 md:my-8">
            &copy; {year} SpaceYaTech | All Rights Reserved
          </h1>
        </div>
        {/* <LazyLoadImage
          src={backup}
          alt="backup"
          className="w-7 h-7"

        /> */}
      </div>
    </footer>
  );
}

export default Footer;
