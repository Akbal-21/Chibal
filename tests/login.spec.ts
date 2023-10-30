import { test, expect } from "@playwright/test";

// *Definir descripcion del caso de prueba

const descripcion = `Modulo: Inicio de sesión
Procedimiento:
Iniciar sesión con correo y contraseña.
Correo: ruben@a.com
Contraseña: 123456
Resultados esperados:
Inicio de sesión de usuario exitoso. De lo contrario, se mostrará un error para las credenciales incorrectas.
`;
// *Casos a usar
const caso1 = "Iniciar y cerrar sesión exitosos";
const caso2 = "Usuario / Contraseña incorrectos";
const caso3 = "Campos no válidos";
// * BeforeEach ejecuta un codigo antes de cada caso
// * Es OPCIONAL

test.beforeEach(async ({ page }) => {
  await page.goto("http://localhost:3000/auth/login");
});

test.describe(descripcion, () => {
  test(caso1, async ({ page }) => {
    await page.getByPlaceholder("Enter email").click();
    await page.getByPlaceholder("Enter email").fill("ruben@a.com");
    await page.getByPlaceholder("Enter password").click();
    await page.getByPlaceholder("Enter password").fill("123456");
    await page.getByRole("button", { name: "Ingresar" }).click();
    await expect(page).toHaveURL(new RegExp("/teacher"));
    await page.getByText("Hola Ruben").click();
    await page.getByRole("button", { name: "Salir" }).click();
    await expect(page).toHaveURL(new RegExp("/auth/login"));
  });

  test(caso2, async ({ page }) => {
    await page.getByPlaceholder("Enter email").click();
    await page.getByPlaceholder("Enter email").fill("example@a.com");
    await page.getByPlaceholder("Enter password").click();
    await page.getByPlaceholder("Enter password").fill("123457");
    await page.getByRole("button", { name: "Ingresar" }).click();
    await expect(page).toHaveURL(new RegExp("error=CredentialsSignin"));
  });

  test(caso3, async ({ page }) => {
    await page.getByPlaceholder("Enter email").click();
    await page.getByPlaceholder("Enter email").fill("ruben");
    await page.getByPlaceholder("Enter password").click();
    await page.getByPlaceholder("Enter password").fill("123");
    await page.getByRole("button", { name: "Ingresar" }).click();
    await expect(page.getByText("El correo no parece ser válido")).toHaveText(
      "El correo no parece ser válido"
    );
    await expect(page.getByText("Mínimo 6 caracteres")).toHaveText(
      "Mínimo 6 caracteres"
    );
  });
});

// * Ver resultados en carpeta Z-Report
// * Click derecho en index.html y Open with liveserver
