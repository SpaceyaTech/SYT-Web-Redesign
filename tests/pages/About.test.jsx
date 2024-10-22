import { render, screen } from "@testing-library/react";
import { HelmetProvider } from "react-helmet-async";
import { BrowserRouter } from "react-router-dom";
import { describe, expect, it } from "vitest";

import AboutUs from "../../src/pages/aboutUs/AboutUs";

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
});
