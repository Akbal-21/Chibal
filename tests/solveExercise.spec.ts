import { test, expect, Locator, Page } from "@playwright/test";

// *Definir descripcion del caso de prueba

const descripcion = `Módulo: Trazar caracter.
Procedimiento:
Iniciar sesión del estudiante.
Acceder a la lista de ejercicios 
asignados al estudiante.
Resolver el ejercicio de trazado.
Datos de entrada:
Correo: juan@a.com
Contraseña: 123456
Caracteres a trazar: A,7,t,4
Resultados esperados:
Resolver ejercicio exitoso.
`;
// *Casos a usar
const caso1 = "Resolver ejercicio trazo de letras y números exitoso.";
// * BeforeEach ejecuta un codigo antes de cada caso
// * Es OPCIONAL
const ejercicio = ["Mixto Testing"];

test.beforeEach(async ({ page }) => {
  await page.goto("http://localhost:3000/auth/login");
});

test.describe(descripcion, () => {
  test.setTimeout(40000)
  test(caso1, async ({ page }) => {
    await page.getByPlaceholder("Correo electronico").click();
    await page.getByPlaceholder("Correo electronico").fill("juan@a.com");
    await page.getByPlaceholder("Contraseña").click();
    await page.getByPlaceholder("Contraseña").fill("123456");
    await page.getByRole("button", { name: "Iniciar sesión" }).click();

    const row = await page.locator(`tr:has(td:has-text("${ejercicio[0]}"))`);
    const resolverButton = await row.locator('button:has-text("Resolver")');
    await resolverButton.click();
    await expect(page).toHaveURL(new RegExp("/exercise"));
    await page.getByRole("button", { name: "¡Empezar a responder!" }).click();
    const arreglo = ["A", "7", "t", "4"];

    await page.waitForTimeout(1500);
    await A(page);
    await page.getByRole("button", { name: "Siguiente" }).click();

    await page.waitForTimeout(1500);
    await seven(page);
    await page.getByRole("button", { name: "Siguiente" }).click();

    await page.waitForTimeout(1000);
    await t(page);
    await page.getByRole("button", { name: "Siguiente" }).click();
    
    await page.waitForTimeout(1000);
    await four(page);
    await page.getByRole("button", { name: "Finalizar" }).click();
    await expect(page.locator("footer")).toHaveText(
      "✅ 4 Correctas - ❌ 0 Incorrectas - ❓ 0 Sin responder",
      { timeout: 4000 }
    );
  });
});

async function A(page: Page) {
  const canvas = await page.getByTitle("Dibuja");
  const pos = await canvas.boundingBox();

  if (pos) {
    await page.waitForTimeout(25);
    await page.mouse.move(pos.x + 77, pos.y + 199, { steps: 20 });
    await page.waitForTimeout(25);
    await page.mouse.down();
    await page.waitForTimeout(25);
    await page.mouse.move(pos.x + 149, pos.y + 31, { steps: 20 });
    await page.waitForTimeout(25);
    await page.mouse.move(pos.x + 213, pos.y + 201, { steps: 20 });
    await page.waitForTimeout(25);
    await page.mouse.up();
    await page.waitForTimeout(25);
    await page.mouse.move(pos.x + 108, pos.y + 133, { steps: 20 });
    await page.waitForTimeout(25);
    await page.mouse.down();
    await page.waitForTimeout(25);
    await page.mouse.move(pos.x + 192, pos.y + 143, { steps: 20 });
    await page.waitForTimeout(25);
    await page.mouse.up();
    await page.mouse.up();
    await page.waitForTimeout(1000);
  }
}

async function seven(page: Page) {
  const canvas = await page.getByTitle("Dibuja");
  const pos = await canvas.boundingBox();

  if (pos) {
    await page.waitForTimeout(25);
    await page.mouse.move(pos.x + 82, pos.y + 58, { steps: 20 });
    await page.waitForTimeout(25);
    await page.mouse.down();
    await page.waitForTimeout(25);
    await page.mouse.move(pos.x + 208, pos.y + 57, { steps: 20 });
    await page.waitForTimeout(25);
    await page.mouse.move(pos.x + 112, pos.y + 202, { steps: 20 });
    await page.waitForTimeout(25);
    await page.mouse.up();
    await page.waitForTimeout(1000);
  }
}

async function t(page: Page) {
  const canvas = await page.getByTitle("Dibuja");
  const pos = await canvas.boundingBox();

  if (pos) {
    await page.waitForTimeout(25);
    await page.mouse.move(pos.x + 142, pos.y + 50, { steps: 20 });
    await page.waitForTimeout(25);
    await page.mouse.down();
    await page.waitForTimeout(25);
    await page.mouse.move(pos.x + 137, pos.y + 206, { steps: 20 });
    await page.waitForTimeout(25);
    await page.mouse.up();
    await page.waitForTimeout(25);
    await page.mouse.move(pos.x + 91, pos.y + 120, { steps: 20 });
    await page.waitForTimeout(25);
    await page.mouse.down();
    await page.waitForTimeout(25);
    await page.mouse.move(pos.x + 188, pos.y + 122, { steps: 20 });
    await page.waitForTimeout(25);
    await page.mouse.up();
    await page.waitForTimeout(1000);
  }
}

async function four(page: Page) {
  const canvas = await page.getByTitle("Dibuja");
  const pos = await canvas.boundingBox();

  if (pos) {
    await page.waitForTimeout(25);
    await page.mouse.move(pos.x + 142, pos.y + 203, { steps: 20 });
    await page.mouse.down();
    await page.waitForTimeout(25);
    await page.mouse.move(pos.x + 147, pos.y + 42, { steps: 20 });
    await page.waitForTimeout(25);
    await page.mouse.move(pos.x + 87, pos.y + 129, { steps: 20 });
    await page.waitForTimeout(25);
    await page.mouse.move(pos.x + 191, pos.y + 131, { steps: 20 });
    await page.waitForTimeout(25);
    await page.mouse.up();
    await page.waitForTimeout(1000);
  }
}
