import { test, expect } from "@playwright/test";

test("test", async ({ page }) => {
  await page.goto("https://www.amazon.in/");
  await page.getByRole("button", { name: "Continue shopping" }).click();
  await page
    .getByRole("link", { name: "Hello, sign in Account & Lists" })
    .click();
  await page
    .getByRole("textbox", { name: "Enter mobile number or email" })
    .click();
  await page
    .getByRole("textbox", { name: "Enter mobile number or email" })
    .fill("riteshnyadav9193@gmail.com");
  await page.getByRole("button", { name: "Continue" }).click();
  await page
    .getByRole("textbox", { name: "Password" })
    .fill("Performance@98765");
  await page.getByRole("button", { name: "Sign in" }).click();
  await page.getByRole("button", { name: "Expand Account and Lists" }).click();

  await page.getByRole("link", { name: "Sign Out" }).click();
});

test("Verify own logic for the amazon", async ({ page }) => {
  await page.goto("https://www.amazon.in/");
  await page.getByRole("button", { name: "Continue shopping" }).click();
  await page
    .getByRole("link", { name: "Hello, sign in Account & Lists" })
    .click();
  await page
    .getByRole("textbox", { name: "Enter mobile number or email" })
    .fill("riteshnyadav9193@gmail.com");
  await page.getByRole("button", { name: "Continue" }).click();
  await page
    .getByRole("textbox", { name: "Password" })
    .fill("Performance@98765");
  await page.getByRole("button", { name: "Sign in" }).click();
  await page.getByRole("button", { name: "Expand Account and Lists" }).click();
  await page.getByRole("link", { name: "Sign Out" }).click();
});
