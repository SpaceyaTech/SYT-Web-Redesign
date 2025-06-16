import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { describe, expect, it } from "vitest";
import Footer from "../../src/components/Footer";

describe("Footer", () => {
  const renderWithRouter = (ui) => render(<BrowserRouter>{ui}</BrowserRouter>);

  it("should render successfully", () => {
    renderWithRouter(<Footer />);
    expect(screen.getByRole("contentinfo")).toBeTruthy();
  });

  it("displays correct copyright notice", () => {
    renderWithRouter(<Footer />);
    expect(
      screen.getByText((content) =>
        content.includes(" SpaceYaTech | All Rights Reserved")
      )
    ).toBeTruthy();
  });

  it("renders correct number of links", () => {
    renderWithRouter(<Footer />);
    const links = screen.getAllByRole("link");
    expect(links).toHaveLength(15);
  });
});
