import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://localhost:3000/auth/login');
  await page.getByPlaceholder('Correo electronico').click();
  await page.getByPlaceholder('Correo electronico').fill('ruben@a.com');
  await page.getByPlaceholder('Contraseña').click();
  await page.getByPlaceholder('Contraseña').fill('123456');
  await page.getByPlaceholder('Contraseña').press('Enter');
  await page.getByText('Grupo').click();
  await page.getByRole('button', { name: 'Nuevo Grupo' }).click();
  await page.getByText('Selecione un grado').click();
  await page.getByText('3ro Preescolar').click();
  await page.getByText('Selecione un turno').click();
  await page.getByText('Matutino').click();
});