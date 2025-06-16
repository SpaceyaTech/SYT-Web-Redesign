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
});
