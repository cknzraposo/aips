import { expect, test } from "@playwright/test";

test.describe("Baseline page", () => {
  test("renders baseline framing and key dashboard sections", async ({ page }) => {
    await page.goto("/baseline");

    await expect(
      page.getByRole("heading", { name: "Where Aotearoa stands today" }),
    ).toBeVisible();
    await expect(page.getByRole("heading", { name: "Reading the dashboard" })).toBeVisible();
    await expect(
      page.getByRole("heading", { name: "Adjust a policy and compare against today" }),
    ).toBeVisible();
  });

  test("links users from baseline to compare workflow", async ({ page }) => {
    await page.goto("/baseline");

    const cta = page.getByRole("link", { name: /Open comparison workspace/i });
    await expect(cta).toBeVisible();
    await cta.click();

    await expect(page).toHaveURL(/\/compare$/);
    await expect(
      page.getByRole("heading", { name: "Policy scenario comparison" }),
    ).toBeVisible();
  });
});
