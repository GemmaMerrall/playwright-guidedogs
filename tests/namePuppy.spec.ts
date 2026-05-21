import { test, expect } from '@chromatic-com/playwright';
import { NamePuppyPage } from './namePuppyPage';

test('name a puppy form loads', async ({ page }) => {
  const namePuppyPage = new NamePuppyPage(page);
  await namePuppyPage.goto();
  await expect(page).toHaveTitle(/Name a puppy/i);
});

test('form shows errors when submitted empty', async ({ page }) => {
  const namePuppyPage = new NamePuppyPage(page);
  await namePuppyPage.goto();
  await namePuppyPage.namingDropdown.selectOption('group');
  await namePuppyPage.submitButton.click();
 await expect(page.getByText('First name is required.')).toBeVisible();
 await expect(page.getByRole('textbox', { name: 'First name' })).toBeVisible();
});