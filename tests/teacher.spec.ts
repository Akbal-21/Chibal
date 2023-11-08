import { test, expect } from "@playwright/test";

const descripcion = `Módulo: profesor/grupos
Procedimiento:
    Acceder a la vista de administración de grupos.
    Crear nuevo grupo.
    Editar nuevo grupo.
    Eliminar un grupo.
Resultados esperados:
    Confirmación de operaciones en la lista de grupos`;

const caso1 = "Acceder a la lista de grupos";
const caso2 = "Creación de grupo nuevo";
const caso3 = "Edición de grupo existente";
const caso4 = "Eliminación de grupo existente";

test.beforeEach(async ({ page }) => {
    await page.goto("http://localhost:3000/auth/login");
    await page.getByPlaceholder("Enter email").fill("oscar@a.com");
    await page.getByPlaceholder("Enter password").fill("123456");
    await page.getByRole("button", { name: "Ingresar" }).click();
});


test.describe( descripcion, () => {
    test.describe.configure({ mode: 'serial' });

    test( caso1, async ( { page } ) => {
        await page.getByText('Grupo').click();
        await page.getByRole('button', { name: 'Nuevo Grupo' }).click();
        await expect( page ).toHaveURL( new RegExp( "/teacher/group" ) );
    } );

    test( caso2, async ( { page } ) => {
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
        await expect(page).toHaveURL(new RegExp("/teacher/group"));
    } );

    test( caso3, async ( { page } ) => {
        await page.getByRole('button', { name: 'Ingresar' }).click();
        await page.getByRole('heading', { name: 'Grupo' }).click();
        await page.getByRole('button', { name: 'Editar' }).click();
        await page.locator('label').filter({ hasText: 'Matutino' }).click();
        await page.getByText('Vespertino').click();
        await page.getByRole('button', { name: 'Guardar' }).click();
        await expect(page).toHaveURL(new RegExp("/teacher/group"));
    } );

    test( caso4, async ( { page } ) => {
        await page.getByText('Grupo').click();
        await page.getByRole('button', { name: 'Elimiar grupo' }).click();
        await expect(page).toHaveURL(new RegExp("/teacher/group"));
    } );

} );