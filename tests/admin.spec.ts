import { test, expect } from "@playwright/test";

const descripcion = `Módulo: Administrador/grupos
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