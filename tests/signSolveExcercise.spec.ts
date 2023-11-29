import { test, expect, Page } from "@playwright/test";

test( "Iniciar sesion del alumno y resolver ejercicio", async ( { page } ) => {
    // * Login
    await page.goto("http://localhost:3000/auth/login");
    await page.getByPlaceholder("Correo electronico").fill("carlitos@alumno.com");
    await page.getByPlaceholder("Contraseña").fill("123456");
    await page.getByRole("button", { name: "Iniciar sesión" }).click();
    await expect( page ).toHaveURL( new RegExp( "/student" ) );

    // * Resuelve ejercicio
    await page.getByRole('button', { name: 'Resolver' }).click();
    await page.getByRole('button', { name: '¡Empezar a responder!' }).click();

    await page.waitForTimeout(1500);
    await one(page);
    await page.getByRole("button", { name: "Siguiente" }).click();

    await page.waitForTimeout(1500);
    await seven(page);
    await page.getByRole("button", { name: "Finalizar" }).click();

    await expect(page.locator("footer")).toHaveText(
        "✅ 2 Correctas - ❌ 0 Incorrectas - ❓ 0 Sin responder",
        { timeout: 4000 }
      );
    
    // * Logout
    await page.getByText('Hola Carlitos').click();
    await page.getByText('Cerrar sesión').click();
    await expect( page ).toHaveURL( new RegExp( "/auth/login" ) );
} );

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

async function one(page: Page) {
  const canvas = await page.getByTitle("Dibuja");
  const pos = await canvas.boundingBox();

  if (pos) {
    await page.waitForTimeout(25);
    await page.mouse.move(pos.x + 74, pos.y + 68, { steps: 20 });
    await page.waitForTimeout(25);
    await page.mouse.down();
    await page.waitForTimeout(25);
    await page.mouse.move(pos.x + 127, pos.y + 32, { steps: 20 });
    await page.waitForTimeout(25);
    await page.mouse.move(pos.x + 130, pos.y + 204, { steps: 20 });
    await page.waitForTimeout(25);

    await page.mouse.move(pos.x + 57, pos.y + 207, { steps: 20 });
    await page.waitForTimeout(25);

    await page.mouse.move(pos.x + 189, pos.y + 210, { steps: 20 });
    await page.waitForTimeout(25);

    await page.mouse.up();
    await page.waitForTimeout(1000);
  }
}