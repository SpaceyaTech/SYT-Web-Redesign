import { expect, test } from "@playwright/test";

test.beforeEach(async ({ page }) => {
  await page.goto("http://localhost:5173/events");
});

test.describe("Events page tests", () => {
  test("should have correct metadata", async ({ page }) => {
    await expect(page).toHaveTitle("Upcoming Events - SpaceYaTech");
    const descriptionMeta = await page.locator("meta[name='description']");
    await expect(descriptionMeta).toHaveAttribute(
      "content",
      "Upcoming tech events powered by SpaceYaTech."
    );
    const ogImageMeta = await page.locator("meta[property='og:image']");
    await expect(ogImageMeta).toHaveAttribute(
      "content",
      "https://apis.spaceyatech.com/media/blog-images/syt.png"
    );
  });
  test("should have a go back button", async ({ page }) => {
    const goBackButton = page.getByTestId("go-back-button");
    await expect(goBackButton).toBeVisible();
  });

  test("should have a featured carousel", async ({ page }) => {
    const featuredCarousel = page.locator("text=Featured Events");
    await expect(featuredCarousel).toBeVisible();
  });
  test("should have a Search event", async ({ page }) => {
    await expect(page.getByRole("button", { name: "Search" })).toBeVisible();
  });
  test("should have event list on start", async ({ page }) => {
    await page.waitForSelector("[data-testId=\"events-list\"]");
    const eventsList = page.getByTestId("events-list");
    await expect(eventsList).toBeVisible();
  });

  test("should have categories list on start", async ({ page }) => {
    await page.waitForSelector("[data-testId=\"categories-list\"]");
    const categoriesList = page.getByTestId("categories-list");
    await expect(categoriesList).toBeVisible();
  });

  test("should have a loader when loading events", async ({ page }) => {
    await expect(page.getByText("Loading events...")).toBeVisible();
  });
});
