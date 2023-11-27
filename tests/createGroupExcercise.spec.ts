import { test, expect } from "@playwright/test";

test( "Crea un grupo, alumnos y crea un ejercicio", async ( { page } ) => {
    // * Login
    await page.goto("http://localhost:3000/auth/login");
    await page.getByPlaceholder("Correo electronico").fill("sm@profe.com");
    await page.getByPlaceholder("Contraseña").fill("123456");
    await page.getByRole("button", { name: "Iniciar sesión" }).click();
    await expect( page ).toHaveURL( new RegExp( "/teacher" ) );
    
    // * Crea grupo
    await page.getByText('Grupo').click();
    await page.getByRole('button', { name: 'Nuevo Grupo' }).click();
    await page.getByPlaceholder('1A').fill('3A');
    await page.getByText('Seleccione un grado').click();
    await page.getByText('3ro Preescolar').click();
    await page.getByText('Seleccione un turno').click();
    await page.getByText('Matutino').click();
    await page.getByRole('button', { name: 'Crear' }).click();
    await expect(page).toHaveURL(new RegExp("/editStudent"));

    // * Crea alumno
    await page.waitForTimeout(2000); // timer 2 seg
    await page.getByPlaceholder('Nombres').fill('Carlitos');
    await page.getByPlaceholder('Apellidos').fill('Rodriguez');
    await page.getByPlaceholder('Correo').fill('carlitos@alumno.com');
    await page.getByPlaceholder('Contraseña').fill('123456');
    await page.getByRole('button', { name: 'Agregar' }).click();
    await expect(page).toHaveURL(new RegExp("/teacher/group"));
    
    // * Logout
    await page.getByText('Hola Hombre').click();
    await page.getByText('Cerrar sesión').click();
    await expect( page ).toHaveURL( new RegExp( "/auth/login" ) );
} );