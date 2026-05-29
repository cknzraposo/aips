import { expect, test } from "@playwright/test";

const RNZ_HREF = /rnz\.co\.nz/;

test.describe("How it works explainer", () => {
  test("renders the full concept diagram", async ({ page }) => {
    await page.goto("/how-it-works");
    await expect(
      page.getByRole("img", { name: /electrification analogy/i }).first(),
    ).toBeVisible();
  });

  test("jump navigation resolves to a section anchor", async ({ page }) => {
    await page.goto("/how-it-works");
    const nav = page.getByRole("navigation", { name: "On this page" });
    await expect(nav).toBeVisible();
    await nav.getByRole("link", { name: "Why it matters now" }).click();
    await expect(page).toHaveURL(/#why-now$/);
    await expect(
      page.getByRole("heading", { name: /A real productivity bet/i }),
    ).toBeVisible();
  });

  test("worked example cites the public-sector source", async ({ page }) => {
    await page.goto("/how-it-works");
    await expect(
      page.locator("#why-now").getByRole("link", { name: /RNZ/i }),
    ).toHaveAttribute("href", RNZ_HREF);
  });
});

test.describe("Home page", () => {
  test("renders the compact concept diagram and the news band", async ({ page }) => {
    await page.goto("/");
    await expect(
      page.getByRole("img", { name: /electrification analogy/i }).first(),
    ).toBeVisible();
    await expect(
      page.getByRole("heading", { name: /When productivity is banked before it arrives/i }),
    ).toBeVisible();
    await expect(
      page.getByRole("link", { name: /Source: RNZ/i }),
    ).toHaveAttribute("href", RNZ_HREF);
  });
});
