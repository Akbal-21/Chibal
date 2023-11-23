import { test, expect } from "@playwright/test";

// *Definir descripcion del caso de prueba

const descripcion = `Módulo: Deletreo
Procedimiento:
Iniciar sesión del estudiante.
Acceder a la lista de ejercicios asignados
al estudiante y seleccionar "Deletreo".
Resolver el ejercicio.
Datos de entrada:
Correo: juan@a.com
Contraseña: 123456
Palabra a deletrear: pato.
Resultados esperados:
Resolver ejercicio exitoso.
`;
// *Casos a usar
const caso1 = "Resolver ejercicio deletreo exitoso.";
// * BeforeEach ejecuta un codigo antes de cada caso
// * Es OPCIONAL

test.beforeEach(async ({ page }) => {
  await page.goto("http://localhost:3000/auth/login");
});

test.describe(descripcion, () => {
  test(caso1, async ({ page }) => {
    await page.getByPlaceholder("Correo electronico").click();
    await page.getByPlaceholder("Correo electronico").fill("juan@a.com");
    await page.getByPlaceholder("Contraseña").click();
    await page.getByPlaceholder("Contraseña").fill("123456");
    await page.getByRole("button", { name: "Iniciar sesión" }).click();

    const row = await page.locator('tr:has(td:has-text("Deletreo"))');
    const resolverButton = await row.locator('button:has-text("Resolver")');
    await resolverButton.click();
    await expect(page).toHaveURL(new RegExp("/spelling"));

    const arreglo = ["p", "a", "t", "o"];

    for (let i = 0; i < arreglo.length; i++) {
      const letra = await page
        .locator(`div.sortable-item:has(div:has-text("${arreglo[i]}"))`)
        .last();
      const nth = await page.locator("div.sortable-item").nth(i);

      const oBoundingBox = await letra.boundingBox();
      const nthBox = await nth.boundingBox();

      if (oBoundingBox && nthBox) {
        await page.mouse.move(
          oBoundingBox.x + oBoundingBox.width / 2,
          oBoundingBox.y + oBoundingBox.height / 2
        );
        await page.mouse.down();
        await page.mouse.move(
          nthBox.x + nthBox.width / 2,
          nthBox.y + nthBox.height / 2
        );
        await page.mouse.up();
      }
    }
    await page.getByRole("button", { name: "Enviar resultados" });
  });
});
