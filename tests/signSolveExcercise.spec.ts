import { test, expect } from "@playwright/test";

test( "Crea un profesor para la escuela", async ( { page } ) => {
    // * Login
    await page.goto("http://localhost:3000/auth/login");
    await page.getByPlaceholder("Correo electronico").fill("carlitos@alumno.com");
    await page.getByPlaceholder("Contraseña").fill("123456");
    await page.getByRole("button", { name: "Iniciar sesión" }).click();
    await expect( page ).toHaveURL( new RegExp( "/student" ) );

    // * Resuelve ejercicio
    
    
    // * Logout
    await page.getByText('Hola Carlitos').click();
    await page.getByText('Cerrar sesión').click();
    await expect( page ).toHaveURL( new RegExp( "/auth/login" ) );
} );