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
    await page.getByPlaceholder("Enter email").click();
    await page.getByPlaceholder("Enter email").fill("patito@a.com");
    await page.getByPlaceholder("Enter password").click();
    await page.getByPlaceholder("Enter password").fill("123456");
    await page.getByRole("button", { name: "Ingresar" }).click();
});

test.describe( descripcion, () => {
    test.describe.configure({ mode: 'serial' });

    test( caso1, async ( { page } ) => {
        await page.getByText('Grupo').click();
        await page.getByRole('button', { name: 'Nuevo Grupo' }).click();
        await expect( page ).toHaveURL( new RegExp( "/admin" ) );
    } );

    test( caso2, async ( { page } ) => {
        await page.getByRole('button', { name: 'Nuevo Administrador' }).click();
        await page.getByLabel('Nombre').click();
        await page.getByLabel('Nombre').fill('Jose');
        await page.getByLabel('Nombre').press('Tab');
        await page.getByLabel('Apellidos').fill('Gerardo');
        await page.getByLabel('Apellidos').press('Tab');
        await page.getByLabel('Correo').fill('jg@profe.com');
        await page.getByRole('button', { name: 'Guardar' }).click();
    } );

    test( caso3, async ( { page } ) => {
        
    } );

    test( caso4, async ( { page } ) => {
        
    } );

} );