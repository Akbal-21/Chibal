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
    
    // * Crea ejercicio
    await page.waitForTimeout(2000); // timer 2 seg
    await page.getByText('Ejercicios').click();
    await page.getByRole('button', { name: 'Nuevo ejercicio' }).click();
    await page.getByPlaceholder('Name').click();
    await page.getByPlaceholder('Name').fill('Ejercicio de prueba');
    await page.locator('div').filter({ hasText: /^clickBorradorPublicado$/ }).locator('label').click();
    await page.getByText('Publicado').click();
    await page.getByText('click').click();
    await page.getByText('Numeros').click();
    await page.locator('div').filter({ hasText: /^Fecha limite de entrega:$/ }).getByRole('textbox').click();
    await page.getByLabel('Choose Thursday, November 30th, 2023').click();
    await page.getByRole('heading', { name: 'Agregue un inciso por favor' }).click();
    await page.getByPlaceholder('Ingrese los numeros separados por , (coma)').click();
    await page.getByPlaceholder('Ingrese los numeros separados por , (coma)').fill('1,7');
    await page.getByRole('button', { name: 'Agregar' }).click();
    await page.getByRole('button', { name: 'Guardar' }).click();
    
    // * Logout
    await page.getByText('Hola Hombre').click();
    await page.getByText('Cerrar sesión').click();
    await expect( page ).toHaveURL( new RegExp( "/auth/login" ) );
} );