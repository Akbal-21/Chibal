import { test, expect } from "@playwright/test";
import axios from "axios";


const apiTestDescription = "Prueba de la API REST";
const caso1= "Obtener datos de ejercicios vista estudiante";
const caso2= "Obtener grupos de un maestro";
const caso3= "Obtener datos de ejercicios del maestro"
test.describe(apiTestDescription, () => {
  test(caso1, async () => {
    // Realiza la solicitud GET a la URL /student/86
    const response = await axios.get("http://localhost:3000/api/student/86");

    // Verifica que la solicitud sea exitosa (código de estado 200)
    expect(response.status).toBe(200);

    // Verifica que la respuesta sea el JSON esperado
    const expectedJson = {
      dataExercise: [
        {
          AlumnoID: 86,
          Estado: 0,
          Ejercicios: {
            Ejercicios_id: 5,
            NombreEjercicio: "Prueba API Deletreo",
            MaestroID: 85,
            GrupoID: 42,
            TipoEjercicio_id: 4,
            FechaPublicacion: "2024-10-21T00:00:00.000Z",
            FechaLimite: "2024-10-21T00:00:00.000Z",
            Estado_id: 2,
          },
        },
      ],
    };

    expect(response.data).toEqual(expectedJson);
  });

  test(caso2, async () => {
    // Realiza la solicitud GET a la URL /teacher/85
    const response = await axios.get("http://localhost:3000/api/teacher/85");

    // Verifica que la solicitud sea exitosa (código de estado 200)
    expect(response.status).toBe(200);

    // Verifica que la respuesta sea el JSON esperado
    const expectedJson = {
      dataStudent: [
        {
          Grupos_id: 42,
          NombreGrupo: "1API"
        }
      ]
    };

    expect(response.data).toEqual(expectedJson);
  });

  test(caso3, async () => {
    // Realiza la solicitud GET a la URL /teacher/exercise/85
    const response = await axios.get("http://localhost:3000/api/teacher/exercise/85");

    // Verifica que la solicitud sea exitosa (código de estado 200)
    expect(response.status).toBe(200);

    // Verifica que la respuesta sea el JSON esperado
    const expectedJson = {
      dataExercise: [
        {
          Ejercicios_id: 6,
          NombreEjercicio: "Prueba API Trazo",
          MaestroID: 85,
          GrupoID: 42,
          TipoEjercicio_id: 3,
          FechaPublicacion: "2024-10-21T00:00:00.000Z",
          FechaLimite: "2024-10-21T00:00:00.000Z",
          Estado_id: 2,
        },
        {
          Ejercicios_id: 5,
          NombreEjercicio: "Prueba API Deletreo",
          MaestroID: 85,
          GrupoID: 42,
          TipoEjercicio_id: 4,
          FechaPublicacion: "2024-10-21T00:00:00.000Z",
          FechaLimite: "2024-10-21T00:00:00.000Z",
          Estado_id: 2,
        }
      ]
    };

    expect(response.data).toEqual(expectedJson);
  });
});

