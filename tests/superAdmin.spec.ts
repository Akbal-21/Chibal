import { test, expect } from "@playwright/test";

const descripcionAdmins = `Módulo: superAdministrador/Administradores
Procedimiento:
    Acceder a la vista de administración de administradores.
    Crear nuevo administrador.
    Editar administrador existente.
    Eliminar un administrador.
Resultados esperados:
    Confirmación de operaciones en la lista de administradores`;

const caso1Admins = "Acceder a la lista de administradores";
const caso2Admins = "Creación de administrador nuevo";
const caso3Admins = "Edición de administrador existente";
const caso4Admins = "Eliminación deadministrador existente";

test.beforeEach(async ({ page }) => {
    await page.goto("http://localhost:3000/auth/login");
    await page.getByPlaceholder("Enter email").fill("su@admin.com");
    await page.getByPlaceholder("Enter password").fill("123456");
    await page.getByRole("button", { name: "Ingresar" }).click();
});

test.describe( descripcionAdmins, () => {
    test.describe.configure( { mode: 'serial' } );

    test( caso1Admins, async ( { page } ) => {
        await page.getByText('Administradores').click();
        await expect( page ).toHaveURL( new RegExp( "/superAdmin/admins" ) );
    } );
    
    test( caso2Admins, async ( { page } ) => {
        await page.getByText('Administradores').click();
        await page.getByRole('button', { name: 'Nuevo Administrador' }).click();
        await page.getByLabel('Nombre').fill('Emilio');
        await page.getByLabel('Apellidos').fill('Gonzalez');
        await page.getByLabel('Correo').fill('emilio@admin.com');
        await page.getByRole('button', { name: 'Guardar' }).click();
        await expect( page ).toHaveURL( new RegExp( "/superAdmin/admins" ) );
    } );
    
    test( caso3Admins, async ( { page } ) => {
        await page.getByText('Administradores').click();
        await page.getByRole('button', { name: 'Editar' }).nth(2).click();
        await page.getByLabel('Apellidos').fill('Perez');
        await page.getByRole('button', { name: 'Guardar' }).click();
        await expect( page ).toHaveURL( new RegExp( "/superAdmin/admins" ) );
    } );
    
    test( caso4Admins, async ( { page } ) => {
        await page.getByText('Administradores').click();
        await page.getByRole('button', { name: 'Elimiar' }).nth(2).click();
        await expect( page ).toHaveURL( new RegExp( "/superAdmin/admins" ) );
    } );
} );


const descripcionSchools = `Módulo: superAdministrador/Escuelas
Procedimiento:
    Acceder a la vista de administración de escuelas.
    Crear nueva escuela.
    Editar escuela existente.
    Eliminar una escuela.
Resultados esperados:
    Confirmación de operaciones en la lista de escuelas`;

const caso1Schools = "Acceder a la lista de administradores";
const caso2Schools = "Creación de administrador nuevo";
const caso3Schools = "Edición de administrador existente";
const caso4Schools = "Eliminación deadministrador existente";

test.describe( descripcionSchools, () => {
    test.describe.configure( { mode: 'serial' } );

    test( caso1Schools, async ( { page } ) => {
        await page.getByText('Escuelas').click();
        await expect( page ).toHaveURL( new RegExp( "/superAdmin/schools" ) );
    } );
    
    test( caso2Schools, async ( { page } ) => {
        await page.getByText('Escuelas').click();
        await page.getByRole('button', { name: 'Nueva escuela' }).click();
        await page.getByLabel('Nombre').fill('ESFM');
        await page.getByRole('button', { name: 'Guardar' }).click();
        await expect( page ).toHaveURL( new RegExp( "/superAdmin/schools" ) );
    } );
    
    test( caso3Schools, async ( { page } ) => {
        await page.getByText('Escuelas').click();
        await page.getByRole('button', { name: 'Editar' }).nth(3).click();
        await page.locator('label').filter({ hasText: 'Seleccione un administrador' }).click();
        await page.getByText('ESFM Admin').click();
        await page.getByRole('button', { name: 'Guardar' }).click();
        await expect( page ).toHaveURL( new RegExp( "/superAdmin/schools" ) );
    } );
    
    test( caso4Schools, async ( { page } ) => {
        await page.getByText('Escuelas').click();
        await page.getByRole('button', { name: 'Elimiar' }).nth(3).click();
        await expect( page ).toHaveURL( new RegExp( "/superAdmin/schools" ) );
    } );
} );