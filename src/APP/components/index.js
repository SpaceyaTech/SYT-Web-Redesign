import {
  linkedin,
  twitter,
  spotify,
  youtube,
  instagram,
  facebook,
} from "../../assets/images/socials";

export { default as Button } from "./Button";
export { default as Caroussel } from "./Caroussel";
export { default as CartDrawer } from "./shop/CartDrawer";
export { default as Counter } from "./shop/Counter";
export { default as FAQ } from "./FAQ";
export { default as Footer } from "./Footer";
export { default as GoBackBtn } from "./GoBackBtn";
export { default as Header } from "./Header";
export { default as FallbackLoader } from "./FallbackLoader";
export { default as Loader } from "./Loader";
export { default as PodcastCard } from "./PodcastCard";
export { default as LandingWrapper } from "./LandingWrapper";

export const socialLinks = [
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

export const footerLinks = [
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
