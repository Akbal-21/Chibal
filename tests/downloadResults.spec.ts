import { test, expect } from "@playwright/test";

test( "Crea un profesor para la escuela", async ( { page } ) => {
    // * Login
    await page.goto("http://localhost:3000/auth/login");
    await page.getByPlaceholder("Correo electronico").fill("sm@profe.com");
    await page.getByPlaceholder("Contraseña").fill("123456");
    await page.getByRole("button", { name: "Iniciar sesión" }).click();
    await expect( page ).toHaveURL( new RegExp( "/teacher" ) );

    // * Cambia calificación
    await page.waitForTimeout(2000); // timer 2 seg
    await page.getByRole('heading', { name: 'Ejercicios' }).click();
    await page.waitForTimeout(2000); // timer 2 seg
    await page.getByRole('button', { name: 'Ver Resultados' }).click();
    await page.waitForTimeout(2000); // timer 2 seg
    await page.waitForTimeout(2000); // timer 2 seg
    await page.getByRole('button', { name: 'Ver Resultados' }).click();
    await page.waitForTimeout(2000); // timer 2 seg
    await page.getByRole('row', { name: 'Letra escrita por el alumno 3 1 Actualizar' }).getByRole('spinbutton').fill('100');
    //await page.getByRole('spinbutton').first().fill('100');
    await page.getByRole('row', { name: 'Letra escrita por el alumno 3 1 Actualizar' }).getByRole('button').click();
    //await page.getByRole('button', { name: "Actualizar" }).click();
    
    // * Descargar PDF
    await page.waitForTimeout(2000); // timer 2 seg
    await page.getByRole('heading', { name: 'Ejercicios' }).click();
    await page.getByRole('button', { name: 'Ver Resultados' }).click();
    const downloadPromise = page.waitForEvent('download');
    await page.getByRole('button', { name: 'Exportar a PDF' }).click();
    const download = await downloadPromise;
    console.log(download);

    // * Logout
    await page.getByText('Hola Hombre').click();
    await page.getByText('Cerrar sesión').click();
    await expect( page ).toHaveURL( new RegExp( "/auth/login" ) );
} );