import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://localhost:3000/auth/login');
  await page.getByPlaceholder('Enter email').click();
  await page.getByPlaceholder('Enter email').fill('patito@a.com');
  await page.getByPlaceholder('Enter email').press('Tab');
  await page.getByPlaceholder('Enter password').fill('123456');
  await page.getByPlaceholder('Enter password').press('Enter');
  await page.getByRole('button', { name: 'Nuevo Administrador' }).click();
  await page.getByLabel('Nombre').click();
  await page.getByLabel('Nombre').fill('Jose');
  await page.getByLabel('Nombre').press('Tab');
  await page.getByLabel('Apellidos').fill('Gerardo');
  await page.getByLabel('Apellidos').press('Tab');
  await page.getByLabel('Correo').fill('jg@profe.com');
  await page.getByRole('button', { name: 'Guardar' }).click();
});