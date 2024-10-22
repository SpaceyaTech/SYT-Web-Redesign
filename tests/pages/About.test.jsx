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
});
