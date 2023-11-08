import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://localhost:3000/auth/login');
  await page.getByPlaceholder('Enter email').click();
  await page.getByPlaceholder('Enter email').fill('su@admin.com');
  await page.getByPlaceholder('Enter email').press('Tab');
  await page.getByPlaceholder('Enter password').fill('123456');
  await page.getByPlaceholder('Enter password').press('Enter');
  await page.goto('http://localhost:3000/superAdmin');
  await page.getByText('Escuelas').click();
  await page.getByRole('button', { name: 'Editar' }).nth(2).click();
  await page.locator('label').filter({ hasText: 'Emilio Perez' }).click();
  await page.getByText('Valery Legasov').click();
});