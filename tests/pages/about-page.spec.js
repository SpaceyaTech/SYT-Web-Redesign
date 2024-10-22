import { test, expect } from "@playwright/test";

test.beforeEach(async ({ page }) => {
  await page.goto("http://localhost:5173/about-us");
});

test("should render partnership modal when partner with us btn is clicked", async ({
  page,
}) => {
  const testId = "partner-with-us";
  // click Partner with us button
  await page.click(`button[data-testid="${testId}"]`);

  // Check if the popup is visible
  const popupTestId = "partner-popup";
  const popup = await page.locator(`div[data-testid="${popupTestId}"]`);
  await expect(popup).toBeVisible();
});
