import { chibalApi } from "@/api";
import { SigInLayout } from "@/components";
import { AuthContext } from "@/context";
import { getDataGroup } from "@/db/teacher";
import { IDataGroup } from "@/interface";
import { isEmail } from "@/utils";
import { GetServerSideProps, NextPage } from "next";
import { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";

interface Props {
  slug: string;
  dataGroup: IDataGroup[];
}
interface FormData {
  groupName: string;
  nivel: string;
  turno: string;
}

interface dataStudent {
  Usuarios_id?: number;
  Nombres: string;
  Apellidos: string;
  Correo: string;
  Contrasena?: string;
}

interface StudentState {
  Nombres: string;
  Apellidos: string;
  Correo: string;
  Contrasena: string;
}

const levelsSchool = [
  { id: 1, grado: "1ro Primaria" },
  { id: 2, grado: "3ro Preescolar" },
];

const schoolShift = [
  { id: 1, turno: "Matutino" },
  { id: 2, turno: "Vespertino" },
];

const EdithGropupPage: NextPage<Props> = ({ slug, dataGroup }) => {
  const [addStudent, setAddStudent] = useState<dataStudent[]>([]);
  console.log({ dataGroup, slug });

  const { user } = useContext(AuthContext);
  console.log(user);

  const [studentState, setStudentState] = useState<StudentState>({
    Nombres: "",
    Apellidos: "",
    Correo: "",
    Contrasena: "",
  });

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setStudentState({
      ...studentState,
      [name]: value,
    });
  };

  const handleAddStudent = () => {
    console.log(studentState);
    const mail = isEmail(studentState.Correo);
    console.log(!!mail);
    if (
      studentState.Nombres.length < 3 ||
      studentState.Apellidos.length < 3 ||
      studentState.Contrasena.length < 6
    ) {
      alert("Los campos deben de tener mas de 3 caracteres");

      return;
    }

    setAddStudent([
      ...addStudent,
      {
        Nombres: studentState.Nombres,
        Apellidos: studentState.Apellidos,
        Correo: studentState.Correo,
        Contrasena: studentState.Contrasena,
      },
    ]);
  };

  let nivel;
  let groupName;

  if (dataGroup.length > 0) {
    const { Grado, NombreGrupo } = dataGroup[0];
    if (!Grado) {
      return;
    }
    nivel = Grado.Nivel;
    groupName = NombreGrupo;

    useEffect(() => {
      console.log(dataGroup[0].Alumnos);

      for (const key in dataGroup[0].Alumnos) {
        const data = dataGroup[0].Alumnos[key].Usuarios;
        const { Apellidos, Correo, Nombres, Usuarios_id } = data;
        setAddStudent([
          ...addStudent,
          {
            Usuarios_id,
            Nombres,
            Apellidos,
            Correo,
          },
        ]);
      }
    }, []);
  }

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    defaultValues: { groupName, nivel },
  });

  const onSubmit = async (form: FormData) => {
    const teacher = user?.Usuarios_id;
    console.log({ addStudent, form });

    const res = await chibalApi({
      method: "POST",
      url: "/teacher/newGroup",
      data: { addStudent, form, teacher },
    });

    console.log(res);
  };

  return (
    <SigInLayout
      titel={
        slug === "new" ? "Crear un nuevo Grupo" : `Editar el grupo ${slug}`
      }
    >
      <div className="pt-10">
        <section className="bg-gray-2 rounded-xl">
          <div className="p-8 shadow-lg">
            <form
              className="space-y-4"
              noValidate
              onSubmit={handleSubmit(onSubmit)}
            >
              <div className="form-control relative w-full">
                <div className=" grid grid-cols-3 w-full gap-5">
                  <div>
                    Nombre del grupo:
                    {/* <label className="sr-only">Name</label> */}
                    <input
                      className="input input-solid max-w-full"
                      placeholder="1A"
                      type="text"
                    />
                  </div>

                  <div>
                    Grado
                    <select className="select select-secondary">
                      {levelsSchool.map((level) => (
                        <option
                          key={level.id}
                          // {...register("nivel")}
                        >
                          {level.grado}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    Turno
                    <select className="select select-secondary">
                      {schoolShift.map((shift) => (
                        <option key={shift.id} {...register("turno")}>
                          {shift.turno}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>
              {/* //*AGregar Alumno   */}
              <div className="divider divider-horizontal">
                Agregar un alumno
              </div>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                  <label>
                    Correo
                    <input
                      className="input input-solid max-w-full"
                      placeholder="email@google.com"
                      type="email"
                      name="Correo"
                      value={studentState.Correo}
                      onChange={handleInputChange}
                    />
                  </label>
                </div>
                <div>
                  Contraseña
                  <input
                    className="input input-solid max-w-full"
                    placeholder="Contraseña"
                    type="password"
                    name="Contrasena"
                    value={studentState.Contrasena}
                    onChange={handleInputChange}
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                  Nombres:
                  <input
                    className="input input-solid max-w-full"
                    placeholder="Nombre"
                    type="text"
                    name="Nombres"
                    value={studentState.Nombres}
                    onChange={handleInputChange}
                  />
                </div>
                <div>
                  Apellidos
                  <input
                    className="input input-solid max-w-full"
                    placeholder="Apellidos"
                    type="text"
                    name="Apellidos"
                    value={studentState.Apellidos}
                    onChange={handleInputChange}
                  />
                </div>
              </div>
              <div>
                <button
                  className="btn btn-success mt-6 w-full"
                  type="button"
                  onClick={handleAddStudent}
                >
                  Agregar
                </button>
              </div>
              <div className="divider divider-horizontal">Lista de Alumnos</div>

              <div>
                Hola
                {addStudent.length <= 0 ? (
                  <div className="grid gap-4 w-full">
                    <b className="text-center text-2xl">Agregue un alumno</b>
                  </div>
                ) : (
                  <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                    <table className="w-full text-sm text-left text-gray-500 ">
                      <thead className=" text-xs text-gray-700 uppercase bg-gray-200 ">
                        <tr>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            #
                          </th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Nombre
                          </th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Apellido
                          </th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Correo
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {addStudent.map((student, index: number) => (
                          <tr
                            key={student.Usuarios_id}
                            className="bg-white border-b  hover:bg-gray-50"
                          >
                            <td className="px-6 py-4 whitespace-nowrap">
                              {index + 1}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              {student.Nombres}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              {student.Apellidos}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              {student.Correo}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}
              </div>

              <div className="mt-4">
                <button
                  type="submit"
                  className="rounded-lg btn btn-primary btn-block"
                >
                  Guardar
                </button>
              </div>
            </form>
          </div>
        </section>
      </div>
    </SigInLayout>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  // const { data } = await  // your fetch function here
  const { slug = "" } = query as { slug: string };

  let dataGroup: IDataGroup[] | undefined;

  if (slug === "new") {
    dataGroup = [];
  } else {
    dataGroup = await getDataGroup(slug);
  }

  return {
    props: {
      slug,
      dataGroup,
    },
  };
};

export default EdithGropupPage;
