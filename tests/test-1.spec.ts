import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://localhost:3000/auth/login');
  await page.getByPlaceholder('Enter email').click();
  await page.getByPlaceholder('Enter email').fill('ruben@admin.com');
  await page.getByPlaceholder('Enter email').press('Tab');
  await page.getByPlaceholder('Enter password').fill('123456');
  await page.getByPlaceholder('Enter email').dblclick();
  await page.getByPlaceholder('Enter email').click();
  await page.getByPlaceholder('Enter email').press('ArrowLeft');
  await page.getByPlaceholder('Enter email').press('ArrowLeft');
  await page.getByPlaceholder('Enter email').press('ArrowLeft');
  await page.getByPlaceholder('Enter email').press('ArrowLeft');
  await page.getByPlaceholder('Enter email').fill('ruben@a.com');
  await page.getByPlaceholder('Enter email').press('Enter');
  await page.getByText('Grupo').click();
  await page.getByRole('button', { name: 'Nuevo Grupo' }).click();
  await page.getByPlaceholder('1A').click();
  await page.getByPlaceholder('1A').fill('3A');
  await page.getByText('Grado del grupo:Seleccione un grado1ro Primaria3ro Preescolar').click();
  await page.getByText('3ro Preescolar').click();
  await page.getByText('Seleccione un grado').click();
  await page.getByText('Matutino').click();
  await page.getByRole('button', { name: 'Crear' }).click();
  await page.getByPlaceholder('Nombres').click();
  await page.getByPlaceholder('Nombres').fill('Juanito');
  await page.getByPlaceholder('Nombres').press('Tab');
  await page.getByPlaceholder('Apellidos').fill('Banana');
  await page.getByPlaceholder('Apellidos').press('Tab');
  await page.getByPlaceholder('Enter email').fill('banana@alumno.com');
  await page.getByPlaceholder('Enter email').press('Tab');
  await page.getByPlaceholder('Enter password').fill('123456');
  await page.getByRole('button', { name: 'Agregar' }).click();
  await page.getByRole('button', { name: 'Guardar' }).click();
  await page.getByRole('button', { name: 'Guardar' }).click();
  await page.getByRole('heading', { name: 'Grupo' }).click();
});