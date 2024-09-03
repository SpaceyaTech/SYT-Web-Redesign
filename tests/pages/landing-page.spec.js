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


  test('Check "View More" button functionality', async ({ page }) => {
    // Verify that the "View More" button is present and clickable
    const viewMoreButton = page.locator('text="View More"');
    await expect(viewMoreButton).toBeVisible();
    await expect(viewMoreButton).toBeEnabled();

    await viewMoreButton.click();
    await page.waitForTimeout(1000); 

    const expectedNewContent = page.locator('h1'); 
    await expect(expectedNewContent).toBeVisible();
  });

  // Test "HOW WE WORK" section
  test("Check 'HOW WE WORK' section title and content", async ({ page }) => {
    const howWeWorkSection = page.locator('text="HOW WE WORK"');
    await expect(howWeWorkSection).toBeVisible();

    const howWeWorkContent = page.locator('.how-we-work-content'); 
    await expect(howWeWorkContent).toBeVisible();
    await expect(howWeWorkContent).toContainText('Our Approach'); 
  });


  test("Check 'WHAT WE DO' section title and content", async ({ page }) => {
    const whatWeDoSection = page.locator('text="WHAT WE DO"');
    await expect(whatWeDoSection).toBeVisible();

    const whatWeDoContent = page.locator('.what-we-do-content'); 
    await expect(whatWeDoContent).toBeVisible();
    await expect(whatWeDoContent).toContainText('Services'); 
  });

  
  test("Check 'OUR EVENTS' section title, events card, and 'View More' button", async ({ page }) => {
    const ourEventsSection = page.locator('text="OUR EVENTS"');
    await expect(ourEventsSection).toBeVisible();

    const eventCards = page.locator('.event-card'); 
    await expect(eventCards).toHaveCountGreaterThan(0);

    const viewMoreEventsButton = page.locator('.events-view-more'); 
    await expect(viewMoreEventsButton).toBeVisible();
    await expect(viewMoreEventsButton).toBeEnabled();
  });

  
  test("Check 'OUR IMPACT' section title and stats card", async ({ page }) => {
    const ourImpactSection = page.locator('text="OUR IMPACT"');
    await expect(ourImpactSection).toBeVisible();

    const statsCards = page.locator('.stats-card'); 
    await expect(statsCards).toHaveCountGreaterThan(0);
  });

  
  test("Check 'TESTIMONIALS' section title and testimonial card in marquee", async ({ page }) => {
    const testimonialsSection = page.locator('text="TESTIMONIALS"');
    await expect(testimonialsSection).toBeVisible();

    const testimonialCards = page.locator('.testimonial-card'); 
    await expect(testimonialCards).toHaveCountGreaterThan(0);

    const marquee = page.locator('.testimonial-marquee'); 
    await expect(marquee).toBeVisible();
  });


  test("Check 'FAQ' section title and FAQ accordion", async ({ page }) => {
    const faqSection = page.locator('text="FAQ"');
    await expect(faqSection).toBeVisible();

    const faqAccordions = page.locator('.faq-accordion'); // Adjust selector as needed
    await expect(faqAccordions).toHaveCountGreaterThan(0);

    await faqAccordions.first().click();
    await expect(faqAccordions.first().locator('.accordion-content')).toBeVisible();
  });


});
