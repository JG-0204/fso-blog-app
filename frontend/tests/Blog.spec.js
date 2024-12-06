import { test, expect } from '@playwright/test';

test.describe('Blog', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('shows login form', async ({ page }) => {
    await expect(page.getByText('username')).toBeVisible();
    await expect(page.getByText('password')).toBeVisible();
    await expect(page.getByRole('button', { name: 'login' })).toBeVisible();
  });

  test('succeeds with correct credentials', async ({ page }) => {
    await page.getByPlaceholder('username').fill('testUser');
    await page.getByPlaceholder('password').fill('pw1234');
    await page.getByRole('button', { name: 'login' }).click();

    await expect(page.getByText('user_two logged in')).toBeVisible();
  });
});
