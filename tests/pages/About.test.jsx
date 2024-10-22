import { render, screen } from "@testing-library/react";
import { HelmetProvider } from "react-helmet-async";
import { BrowserRouter } from "react-router-dom";
import { describe, expect, it } from "vitest";

import placeholder from "../../src/assets/images/sytLogo.png";
import Caroussel from "../../src/components/Caroussel";
import AboutUs from "../../src/pages/aboutUs/AboutUs";

const LeadershipData = [
  {
    name: "First User",
    title: "Founder",
    image: placeholder,
    linkedin: {
      href: "https://www.linkedin.com/",
      username: "First User",
    },
    twitter: {
      href: "https://twitter.com/x",
      username: "First User",
    },
  },
  {
    name: "Second User",
    title: "Dev Relations & Opensource Programs",
    image: placeholder,
    linkedin: {
      href: "https://www.linkedin.com",
      username: "Second User",
    },
    twitter: {
      href: "",
      username: "",
    },
  },
  {
    name: "Third User",
    title: "Community Manager",
    image: placeholder,
    linkedin: {
      href: "https://www.linkedin.com",
      username: "Third User",
    },
    twitter: {
      href: "",
      username: "",
    },
  },
];

describe("About us page unit tests", () => {
  const renderWithRouter = (ui) =>
    render(
      <HelmetProvider>
        <BrowserRouter>{ui}</BrowserRouter>
      </HelmetProvider>
    );

  it("should render Hero Section successfully", () => {
    renderWithRouter(<AboutUs />);
    const titleElement = screen.getByTestId("title");
    expect(titleElement).toBeTruthy();
  });

  it("should render Mission/Vision Section successfully", () => {
    renderWithRouter(<AboutUs />);
    const testElement = screen.getByTestId("mission");
    expect(testElement).toBeTruthy();
  });

  it("should render Leadership Section successfully", () => {
    renderWithRouter(<AboutUs />);
    const testElement = screen.getByTestId("leadership");
    expect(testElement).toBeTruthy();
  });

  it("should render Reports Section successfully", () => {
    renderWithRouter(<AboutUs />);
    const testElement = screen.getByTestId("reports");
    expect(testElement).toBeTruthy();
  });

  it("should render leadership carousel successfully", () => {
    renderWithRouter(<Caroussel CarousselData={LeadershipData} />);
    const carouselElement = screen.getByTestId("carousel");
    expect(carouselElement).toBeTruthy();
  });
});
