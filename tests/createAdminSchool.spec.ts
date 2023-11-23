import { test, expect } from "@playwright/test";

test( "Crea la escuela y el administrador de la misma escuela", async ( { page } ) => {
    // * Login
    await page.goto("http://localhost:3000/auth/login");
    await page.getByPlaceholder("Correo electronico").fill("su@admin.com");
    await page.getByPlaceholder("Contraseña").fill("123456");
    await page.getByRole("button", { name: "Iniciar sesión" }).click();

    // * Crea administrador
    await page.getByText('Administradores').click();
    await page.getByRole('button', { name: 'Nuevo Administrador' }).click();
    await page.getByLabel('Nombre').fill('Administrador');
    await page.getByLabel('Apellidos').fill('Nuevo');
    await page.getByLabel('Correo').fill('emilio@admin.com');
    await page.getByRole('button', { name: 'guardar' }).click();
    await expect( page ).toHaveURL( new RegExp( "/superAdmin/admins" ) );

    // * Crea escuela
    await page.getByText('Escuelas').click();
    await page.getByRole('button', { name: 'Nueva escuela' }).click();
    await page.getByLabel('Nombre').fill('Escuela Nueva');
    await page.locator('label').filter({ hasText: 'Seleccione un administrador' }).click();
    await page.getByText('Administrador Nuevo').click();
    await page.getByRole('button', { name: 'guardar' }).click();
    await expect( page ).toHaveURL( new RegExp( "/superAdmin/schools" ) );
} );