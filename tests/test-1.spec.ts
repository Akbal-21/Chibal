import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://localhost:3000/auth/login');
  await page.getByPlaceholder('Enter email').click();
  await page.getByPlaceholder('Enter email').fill('ruben@a.com');
  await page.getByPlaceholder('Enter email').press('Tab');
  await page.getByPlaceholder('Enter password').fill('123456');
  await page.getByRole('button', { name: 'Ingresar' }).click();
  await expect( page.waitForURL('**/teacher') );
});