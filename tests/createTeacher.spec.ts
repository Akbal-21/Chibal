import { test, expect } from "@playwright/test";

test( "Crea un profesor para la escuela", async ( { page } ) => {
    // * Login
    await page.goto("http://localhost:3000/auth/login");
    await page.getByPlaceholder("Correo electronico").fill("nuevo@admin.com");
    await page.getByPlaceholder("Contraseña").fill("123456");
    await page.getByRole("button", { name: "Iniciar sesión" }).click();
    await expect( page ).toHaveURL( new RegExp( "/admin" ) );

    // * Crea maestro
    await page.getByRole('button', { name: 'Nuevo profesor' }).click();
    await page.getByLabel('Nombre').fill('Hombre');
    await page.getByLabel('Apellidos').fill('Araña');
    await page.getByLabel('Correo').fill('sm@profe.com');
    await page.getByLabel('Contraseña').fill('123456');
    await page.getByRole('button', { name: 'Guardar' }).click();
    await expect( page ).toHaveURL( new RegExp( "/admin" ) );
    
    // * Logout
    await page.getByText('Hola Administrador').click();
    await page.getByText('Cerrar sesión').click();
    await expect( page ).toHaveURL( new RegExp( "/auth/login" ) );
} );