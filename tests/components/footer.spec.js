import { expect, test } from "@playwright/test";

test.beforeEach(async ({ page }) => {
  await page.goto("http://localhost:5173");
});

test("all links in the Footer component should be valid", async ({ page }) => {
  await page.goto("http://localhost:5173");

  const component = await page.locator("data-testid=footer-section");

  const links = await page.$$eval("data-testid=footer-section a", (anchors) =>
    anchors.map((anchor) => anchor.href)
  );

  // check if the footer section is visible
  await expect(component).toBeVisible();

  // validate footer links
  // eslint-disable-next-line no-restricted-syntax
  for (const link of links) {
    // eslint-disable-next-line no-await-in-loop
    const response = await fetch(link);
    expect(response.status).toBe(200);
  }
});
