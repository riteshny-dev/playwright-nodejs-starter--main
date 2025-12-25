import { test, expect } from "@playwright/test";

test("Verify by getBylabel", async ({ page }) => {
  await page.goto("");

  const firstName = page.getByLabel("First Name");
  const lastName = page.getByLabel("Last Name");

  await firstName.fill("John");
  await lastName.fill("Doe");
  await page.getByRole("button", { name: "clear" }).click();

  await firstName.clear();
  await lastName.clear();

  await expect(
    page.getByTitle("Please enter a valid email address")
  ).toBeVisible();
});
