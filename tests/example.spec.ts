import { test, expect } from '@playwright/test';
import { HomePage } from './homePage';

test('guide dogs homepage loads', async ({ page }) => {
  const homePage = new HomePage(page);
  await homePage.goto();
  await expect(page).toHaveTitle(/Guide Dogs/);
});

test('getting support link is visible', async ({ page }) => {
  const homePage = new HomePage(page);
  await homePage.goto();
  await expect(homePage.gettingSupportLink).toBeVisible();
});

test('search field is visible', async ({ page }) => {
  const homePage = new HomePage(page);
  await homePage.goto();
  await expect(homePage.searchBox).toBeVisible();
});

test('clicking getting support navigates to the right page', async ({ page }) => {
  const homePage = new HomePage(page);
  await homePage.goto();
  await homePage.gettingSupportLink.click();
  await expect(page).toHaveURL(/getting-support/);
});

test('can type in the search box and submit', async ({ page, browserName }) => {
  test.skip(browserName === 'webkit', 'Search submit behaves differently in Safari');
  const homePage = new HomePage(page);
  await homePage.goto();
  await homePage.searchBox.fill('sponsor a dog');
  await homePage.searchButton.click();
  await expect(page).toHaveURL(/search/);
});