import { test, expect } from "@playwright/test";

const descripcion = `Módulo: Administrador/maestros
Procedimiento:
    Acceder a la vista de administración de maestros.
    Crear nuevo maestro.
    Editar nuevo maestros.
    Eliminar un maestro.
Resultados esperados:
    Confirmación de operaciones en la lista de maestros`;

const caso1 = "Acceder a la lista de maestros";
const caso2 = "Creación de maestros nuevo";
const caso3 = "Edición de maestros existente";
const caso4 = "Eliminación de mestros existente";

test.beforeEach(async ({ page }) => {
    await page.goto("http://localhost:3000/auth/login");
    await page.getByPlaceholder("Correo electronico").click();
    await page.getByPlaceholder("Correo electronico").fill("patito@a.com");
    await page.getByPlaceholder("Contraseña").click();
    await page.getByPlaceholder("Contraseña").fill("123456");
    await page.getByRole("button", { name: "Iniciar sesión" }).click();
});

test.describe( descripcion, () => {
    test.describe.configure({ mode: 'serial' });

    test( caso1, async ( { page } ) => {
        await page.getByText('Maestros').click();
        await expect( page ).toHaveURL( new RegExp( "/admin" ) );
    } );
    
    test( caso2, async ( { page } ) => {
        await page.getByRole('button', { name: 'Nuevo Administrador' }).click();
        await page.getByLabel('Nombre').click();
        await page.getByLabel('Nombre').fill('Jose');
        await page.getByLabel('Apellidos').fill('Gerardo');
        await page.getByLabel('Correo').fill('jg@profe.com');
        await page.getByRole('button', { name: 'Guardar' }).click();
        await page.getByRole('button', { name: 'Guardar' }).click();
        await expect( page ).toHaveURL( new RegExp( "/admin" ) );
    } );
    
    test( caso3, async ( { page } ) => {
        await page.getByRole('button', { name: 'Editar' }).nth(4).click();
        await page.getByLabel('Apellidos').fill('Genaro');
        await page.getByRole('button', { name: 'Guardar' }).click();
        await page.getByRole('button', { name: 'Guardar' }).click();
        await expect( page ).toHaveURL( new RegExp( "/admin" ) );
    } );
    
    test( caso4, async ( { page } ) => {
        await page.getByRole('button', { name: 'Eliminar' }).nth(4).click();
        await expect( page ).toHaveURL( new RegExp( "/admin" ) );
    } );

} );