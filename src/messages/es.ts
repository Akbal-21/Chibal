export default {
  login: {
    title: "Inicio de sesión",
    email: "Correo electronico",
    password: "Contraseña",
    submit: "Iniciar sesión",
    required: "Este campo es requerido",
  },
  teacher: {
    navbar: {
      group: "Grupo",
      exercise: "Ejercicios",
    },
    group: {
      index: {
        nameGroup: "Grupo",
        action: {
          title: "Acciones",
          edit: "Editar",
          dellet: "Eliminar",
        },
        newGroup: "Nuevo Grupo",
      },
      slug: {
        index: {
          createNewGroup: "Crear nuevo grupo",
          editGroup: "Editar el grupo",
          nameGroup: "Nombre del grupo",
          grade: "Grado del grupo",
          slectGrade: "Seleccione un grado",
          shift: "Turno",
          selectShift: "Seleccione un turno",
          editStudents: "Editar Alumnos",
          listOfStudent: {
            title: "Lista de alumnos",
            name: "Nombre",
            surnames: "Apellidos",
            mail: "Correo",
          },
          saveStudent: "Salvar alumno",
          saveGroup: "Guardar Grupo",
          save: "Guardar",
          addStudents: " Agregar Alumnos",
          addStudentsText: "Agregue Alumnos por favor",
          students: "Alumnos",
        },
        createStudent: {
          name: "Nombres",
          surnames: "Apellidos",
          mail: "Correo",
          password: "Contraseña",
          add: "Agregar",
        },
      },
    },
    exercise: {
      exercise: "Ejercicio",
      nameExercise: "Nombre del ejercicio",
      limitDate: "Fecha limite de entrega",
      index: {
        action: {
          title: "Acciones",
          edit: "Editar",
          dellet: "Eliminar",
          showResults: "Ver Resultados",
        },
        publicDate: "Fecha de publicacion",
        newExercise: "Nuevo ejercicio",
      },
      slug: {
        publicType: "Publicar",
        typeExercise: "Tipo de ejercicio",
        asigmentStudent: "Asignar  estudiantes",
        exerciseLines: "Incisos del ejercicio",
        addLinePlease: "Agregue un inciso por favor",
        addLine: "Agregar Incisos",
        lines: "Incisos",
        addLineList: "Agregar",
        save: "Guardar",
        solid: "Solicitado",
        text: {
          allStudents: "Todos los alumnos",
          selectedStudents: "Alumnos seleccionados",
        },
        return: "Regresar",
      },
      pdf: {
        alert: "No hay datos para exportar a PDF.",
        exercie: "Ejercicio",
        group: "Grupo",
        shift: "Turno",
        level: "Nivel",
        studentName: "Nombre del alumno",
        correct: "Caracteres Acertados",
        incorrect: "Caracteres Incorrectos",
        prom: "Promedio del puntaje",
        results: "Resultados del ejercicio",
        showResults: "Ver Resultados",
        exportToPDF: "Exportar a PDF",
        studentDraw: "Dibujo del alumno",
        asDetected: "Lo detectado",
        asRequest: "Lo Requerido",
        score: "Puntaje",
        update: "Actualizar",
      },
    },
  },
  student: {
    navbar: {
      exercise: "Ejercicios",
    },
    index: {
      nameExercise: "Nombre del ejercicio",
      limitDate: "Fecha limite de entrega",
      actions: {
        title: "Acciones",
        resolve: "Resolver",
      },
    },
    draw: {
      titleCnavas: "Dibuja!! 🖼️",
      starGame: "¡Empezar a responder!",
      clean: "Limpiar",
      finish: "Finalizar",
      next: "Siguiente",
      sendAnswer: "Tus respuestas se han enviado correctamente",
      correct: "Correctas",
      incorrect: "Incorrectas",
      notAnswer: "Sin responder",
      back_Menu: "Voler al menu",
      exitWord: "Te deseamos todo el exito en este exercicio📝!!!",
    },
    spelling: {
      exercise: "Ejercicio de deletro",
      exerciseFinish: "¡Juego completado!",
      sendResults: "Enviar resultados",
    },
  },
  admin: {
    welcome: "Bienvenido",
    navbar: {
      teachers: "Maestros",
    },
    name: "Nombre",
    actions: {
      title: "Acciones",
      edit: "Editar",
      dellet: "Eliminar",
    },
    newTeacher: "Nuevo profesor",
    slug: {
      admin: "Editar profeosr",
      required: "Este campo es obligatorio",
      editAdmin: "Datos del profesor",
      name: "Nombre",
      surname: "Apellidos",
      email: "Correo",
      save: "guardar",
    },
  },
  superAdmin: {
    navbar: {
      admins: "Administradores",
      schools: "Escuelas",
    },
    admin: {
      index: {
        title: "CRUD super administrador",
        name: "Nombre",
        school: "Escuela",
        actions: {
          title: "Acciones",
          edit: "Editar",
          dellet: "Eliminar",
        },
        asigmentSchool: "Asigna una escuela",
        newAdmin: "Nuevo administrador",
      },
      slug: {
        admin: "Administrador",
        required: "Este campo es obligatorio",
        editAdmin: "Editar administrador",
        name: "Nombre",
        surname: "Apellidos",
        email: "Correo",
        save: "guardar",
      },
    },
    school: {
      index: {
        title: "CRUD Maestro",
        school: "Escuela",
        admin: "Administrador",
        actions: {
          title: "Acciones",
          edit: "Editar",
          dellet: "Eliminar",
        },
        noAsigment: "No asignado",
        newSchool: "Nueva escuela",
      },
      slug: {
        title: "Escuela",
        editSchool: "Editar escuela",
        name: "Nombre",
        required: "Este campo es obligatorio",
        save: "guardar",
        selectAdmin: "Seleccione un administrador",
      },
    },
  },
  navbar: {
    helloTeacher: "Hola profesor",
    helloAdmin: "Hola administrador",
    hello: "Hola",
    logout: "Cerrar sesión",
    aboutText: `
    Derecvhos reservados
    contacto:
    Akbal Fernando: aserranov1500@alumno.ipn.mx
    Luis Francisco: lrenteriac1400@alumno.ipn.mx
    Oscar Gutierrez: ogutierrezm1400@alumno.ipn.mx
    Profesor a cargo: Ruben Peredo Valderrama.
    `,
    about: "Acerca de",
  },
};
