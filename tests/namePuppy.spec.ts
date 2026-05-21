import { test, expect } from '@playwright/test';
import { NamePuppyPage } from './namePuppyPage';

test('name a puppy form loads', async ({ page }) => {
  const namePuppyPage = new NamePuppyPage(page);
  await namePuppyPage.goto();
  await expect(page).toHaveTitle(/Name a puppy/i);
  await takeSnapshot(page, 'Name a puppy page');
});

test('form shows errors when submitted empty', async ({ page }) => {
  const namePuppyPage = new NamePuppyPage(page);
  await namePuppyPage.goto();
  await namePuppyPage.namingDropdown.selectOption('individual');
  await expect(page.getByRole('textbox', { name: 'First name' })).toBeVisible();
  await takeSnapshot(page, 'Form fields visible');
  await namePuppyPage.submitButton.click();
  await expect(page.getByText('First name is required.')).toBeVisible();
  await takeSnapshot(page, 'Form validation errors');
});