export default {
  login: {
    title: "Login",
    email: "Email",
    password: "Password",
    submit: "Login",
    required: "This is required to login",
  },
  teacher: {
    navbar: {
      group: "Group",
      exercise: "Exercise",
    },
    group: {
      index: {
        nameGroup: "Group",
        action: {
          title: "Actions",
          edit: "Edit",
          dellet: "Delete",
        },
        newGroup: "New Group",
      },
      slug: {
        index: {
          createNewGroup: "Create new group",
          editGroup: "Edit group",
          nameGroup: "Group Name",
          grade: "Group Grade",
          slectGrade: "Select a grade",
          shift: "Shift",
          selectShift: "Select a shift",
          editStudents: "Edit Students",
          listOfStudent: {
            title: "List of students",
            name: "Name",
            surnames: "Surnames",
            mail: "Email",
          },
          saveStudent: "Save student",
          saveGroup: "Save Group",
          save: "Save",
          addStudents: "Add Students",
          addStudentsText: "Please add students",
          students: "Students",
        },
        createStudent: {
          name: "Name",
          surnames: "Surnames",
          mail: "Email",
          password: "Password",
          add: "Add",
        },
      },
    },
    exercise: {
      exercise: "Exercise",
      nameExercise: "Exercise Name",
      limitDate: "Due Date",
      index: {
        action: {
          title: "Actions",
          edit: "Edit",
          dellet: "Delete",
          showResults: "Show Results",
        },
        publicDate: "Publication Date",
        newExercise: "New Exercise",
      },
      slug: {
        publicType: "Publish",
        typeExercise: "Exercise Type",
        asigmentStudent: "Assign Students",
        exerciseLines: "Exercise Lines",
        addLinePlease: "Please add a line",
        addLine: "Add Lines",
        lines: "Lines",
        addLineList: "Add",
        save: "Save",
        solid: "Requested",
        text: {
          allStudents: "All students",
          selectedStudents: "Selected students",
        },
        return: "Back",
      },
      pdf: {
        alert: "No data to export to PDF.",
        exercie: "Exercise",
        group: "Group",
        shift: "Shift",
        level: "Level",
        studentName: "Student Name",
        correct: "Correct Characters",
        incorrect: "Incorrect Characters",
        prom: "Score Average",
        results: "Exercise Results",
        showResults: "Show Results",
        exportToPDF: "Export to PDF",
        studentDraw: "Student Drawing",
        asDetected: "As Detected",
        asRequest: "As Requested",
        score: "Score",
        update: "Update",
      },
    },
  },
  student: {
    navbar: {
      exercise: "Exercises",
    },
    index: {
      nameExercise: "Exercise Name",
      limitDate: "Due Date",
      actions: {
        title: "Actions",
        resolve: "Resolve",
      },
    },
    draw: {
      titleCnavas: "Draw!! 🖼️",
      starGame: "Start answering!",
      clean: "Clean",
      finish: "Finish",
      next: "Next",
      sendAnswer: "Your answers have been sent successfully",
      correct: "Correct",
      incorrect: "Incorrect",
      notAnswer: "Not Answered",
      back_Menu: "Back to menu",
      exitWord: "We wish you all the success in this exercise📝!!!",
    },
    spelling: {
      exercise: "Spelling Exercise",
      exerciseFinish: "Game completed!",
      sendResults: "Send results",
    },
  },
  admin: {
    welcome: "Welcome",
    navbar: {
      teachers: "Teachers",
    },
    name: "Name",
    actions: {
      title: "Actions",
      edit: "Edit",
      dellet: "Delete",
    },
    newTeacher: "New Teacher",
    slug: {
      admin: "Administrator",
      required: "This field is required",
      editAdmin: "Edit administrator",
      name: "Name",
      surname: "Surnames",
      email: "Email",
      save: "Save",
    },
  },
  superAdmin: {
    navbar: {
      admins: "Administrators",
      schools: "Schools",
    },
    admin: {
      index: {
        title: "CRUD Super Administrator",
        name: "Name",
        school: "School",
        actions: {
          title: "Actions",
          edit: "Edit",
          dellet: "Delete",
        },
        asigmentSchool: "Assign a school",
        newAdmin: "New administrator",
      },
      slug: {
        admin: "Administrator",
        required: "This field is required",
        editAdmin: "Edit administrator",
        name: "Name",
        surname: "Surnames",
        email: "Email",
        save: "Save",
      },
    },
    school: {
      index: {
        title: "CRUD Teacher",
        school: "School",
        admin: "Administrator",
        actions: {
          title: "Actions",
          edit: "Edit",
          dellet: "Delete",
        },
        noAsigment: "Not assigned",
        newSchool: "New school",
      },
      slug: {
        title: "School",
        editSchool: "Edit school",
        name: "Name",
        required: "This field is required",
        save: "Save",
        selectAdmin: "Select an administrator",
      },
    },
  },
  navbar: {
    helloTeacher: "Hello teacher",
    helloAdmin: "Hello admin",
    hello: "Hello",
    logout: "Logout",
    aboutText: `
    Rights reserved
    Contact us:

    Fernando Serrano: aserranov1500@alumno.ipn.mx
    Luis Renteria: lrenteriac1400@alumno.ipn.mx
    Oscar Gutiérrez: ogutierrezm1400@alumno.ipn.mx
    
    Teacher in charge: Ruben Peredo Valderrama.
    `,
    about: "About",
  },
  welcome:{
    welcome: "Welcome!",
    message: "We invite you to review our user manual to familiarize yourself with all the features and functionalities we offer. ",
    link: "Here is the link to the manual: ",
    manual: "User manual",
    enjoy: "Enjoy your experience!",
    team: "- Ch'ibal Development Team",
  },
};
