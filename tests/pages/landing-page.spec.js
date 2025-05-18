import { expect, test } from "@playwright/test";

test.beforeEach(async ({ page }) => {
  await page.goto("http://localhost:5173");
});

test.describe("Landing page tests", () => {
  test("should show the title", async ({ page }) => {
    await expect(page).toHaveTitle(/Accelerating growth/);
  });

  test("should open modal on 'Join SpaceYaTech' button click", async ({
    page,
  }) => {
    await page.locator("id=hero-join-button").click();

    // Expect the modal to be visible
    await expect(
      page.getByRole("heading", {
        name: "Join Africa’s fastest growing tech community",
      })
    ).toBeVisible();
  });

  // eslint-disable-next-line quotes
  test('Check "View More" button functionality', async ({ page }) => {
    // Verify that the "View More" button is present and clickable
    // eslint-disable-next-line quotes
    const viewMoreButton = page.locator('text="View More"').first();
    await expect(viewMoreButton).toBeVisible();
    await expect(viewMoreButton).toBeEnabled();

    await viewMoreButton.click();
    await page.waitForTimeout(1000);
  });

  // Test "HOW WE WORK" section
  test("Check 'HOW WE WORK' section title and content", async ({ page }) => {
    // eslint-disable-next-line quotes
    const howWeWorkSection = page.locator('text="How we work"').first();
    await expect(howWeWorkSection).toBeVisible();
  });

  test("Check 'WHAT WE DO' section title and content", async ({ page }) => {
    // eslint-disable-next-line quotes
    const whatWeDoSection = page.locator('text="what we do"');
    await expect(whatWeDoSection).toBeVisible();

    const whatWeDoContent = page.locator(".what-we-do-content").first();
    await expect(whatWeDoContent).toBeVisible();
  });

  test("Check 'OUR EVENTS' section title, events card, and 'View More' button", async ({
    page,
  }) => {
    // eslint-disable-next-line quotes
    const ourEventsSection = page.locator('text="our events"').first();
    await expect(ourEventsSection).toBeVisible();

    // checks if at least one event card is displayed
    const eventCards = page.locator("data-testid=event-cards").first();
    await expect(eventCards).toBeVisible();

    const viewMoreEventsButton = page.locator("data-testid=events-view-more");
    await expect(viewMoreEventsButton).toBeVisible();
    await expect(viewMoreEventsButton).toBeEnabled();
    await viewMoreEventsButton.click();
    expect(page.url()).toBe("http://localhost:5173/events");
  });

  test("Check 'OUR IMPACT' section title and stats card", async ({ page }) => {
    // eslint-disable-next-line quotes
    const ourImpactSection = page.getByText("our impact");
    await ourImpactSection.scrollIntoViewIfNeeded();
    await expect(ourImpactSection).toBeVisible();

    const statsCards = page.locator(".stats-card");
    await expect(statsCards).toBeVisible();
  });

  test("Check 'TESTIMONIALS' section title and testimonial card in marquee", async ({
    page,
  }) => {
    // eslint-disable-next-line quotes
    const testimonialsSection = page.getByRole("heading", {
      name: "testimonials",
    });
    // await testimonialsSection.waitFor({ state: "visible", timeout: 60000 });
    await testimonialsSection.scrollIntoViewIfNeeded();
    await expect(testimonialsSection).toBeVisible();

    // check if there's at least one testimonial card displayed
    const testimonialCards = page.getByTestId("testimonial-card").first();
    await testimonialCards.waitFor({ state: "visible", timeout: 60000 });
    await testimonialCards.scrollIntoViewIfNeeded();
    await expect(testimonialCards).toBeVisible();
  });

  test("Check 'FAQ' section title and FAQ accordion", async ({ page }) => {
    // eslint-disable-next-line quotes
    // check if faq section is visible
    const faqSection = page.getByRole("heading", { name: "faq" });
    await expect(faqSection).toBeVisible();

    // check if at least one FAQ accordion is visible
    const faqAccordions = page.getByTestId("faq-accordion").first();
    await expect(faqAccordions).toBeVisible();

    // check if clicking accordion, displays answer
    await faqAccordions.click();

    const accordionContent = page.getByTestId("accordion-answer").first();
    await expect(accordionContent).toBeVisible();
  });
});
