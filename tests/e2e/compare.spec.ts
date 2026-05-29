import { expect, test } from "@playwright/test";

test.describe("Compare page", () => {
  test("renders the policy lab and caveat", async ({ page }) => {
    await page.goto("/compare");
    await expect(
      page.getByRole("heading", { name: "Policy scenario comparison" }),
    ).toBeVisible();
    await expect(page.getByRole("heading", { name: "Policy lab" })).toBeVisible();
    await expect(
      page.getByText("Comparative signals only.", { exact: false }),
    ).toBeVisible();
  });

  test("runs a comparison and encodes config into the URL", async ({ page }) => {
    await page.goto("/compare");

    const horizon = page.getByRole("slider", { name: "Time horizon" });
    const runButton = page.getByRole("button", { name: /^Run simulation/ });

    // Nudging the horizon makes the staged config dirty. Poll to absorb the
    // brief window before the client component finishes hydrating.
    await expect(async () => {
      await horizon.focus();
      await horizon.press("ArrowRight");
      await expect(runButton).toBeEnabled({ timeout: 1000 });
    }).toPass({ timeout: 15_000 });

    await runButton.click();

    await expect(page).toHaveURL(/[?&]h=/);
    await expect(
      page.getByText("Whole-economy productivity over time"),
    ).toBeVisible();
  });

  test("copies a shareable link", async ({ page, context }) => {
    await context.grantPermissions(["clipboard-read", "clipboard-write"]);
    await page.goto("/compare");

    const shareButton = page.getByRole("button", { name: "Copy share link" });
    await expect(async () => {
      await shareButton.click();
      await expect(
        page.getByRole("button", { name: "Link copied" }),
      ).toBeVisible({ timeout: 1000 });
    }).toPass({ timeout: 15_000 });
  });
});
