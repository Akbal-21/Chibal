import { TeacherLayouth } from "@/components";
import { getDataGroup } from "@/db/teacher";
import { IDataGroup } from "@/interface";
import { useStudentStore } from "@/store";

interface Props {
  slug: string;
  dataGroup: IDataGroup[];
}
interface FormData {
  NombreGrupo: string;
  nivel: string;
}

const levelsSchool = [
  { id: 1, grado: "1ro Primaria" },
  { id: 2, grado: "3ro Preescolar" },
];

const EdithGropupPage: NextPage<Props> = ({ slug, dataGroup }) => {
  const { addStudent, students, resetStore } = useStudentStore();

  const { Grado, NombreGrupo } = dataGroup[0];
  if (!Grado) {
    return;
  }
  const nivel = Grado.Nivel;

  useEffect(() => {
    resetStore();
    for (const key in dataGroup[0].Alumnos) {
      const data = dataGroup[0].Alumnos[key].Usuarios;
      addStudent(data);
    }
  }, []);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    defaultValues: { NombreGrupo, nivel },
  });

  return (
    <TeacherLayouth
      titel={
        slug === "new" ? "Crear un nuevo Grupo" : `Editar el grupo ${slug}`
      }
    >
      <div className="pt-10">
        <section className="bg-gray-2 rounded-xl">
          <div className="p-8 shadow-lg">
            <form className="space-y-4" noValidate>
              <div className="form-control relative w-full">
                <div className=" grid grid-cols-custom-2_2 w-full gap-5">
                  <div>
                    Nombre del grupo:
                    {/* <label className="sr-only">Name</label> */}
                    <input
                      className="input input-solid max-w-full"
                      placeholder="1A"
                      type="text"
                      {...register("NombreGrupo")}
                    />
                  </div>
                  <div>
                    Grado
                    <select className="select select-secondary">
                      {levelsSchool.map((level) => (
                        <option key={level.id} {...register("nivel")}>
                          {level.grado}
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
                    />
                  </label>
                </div>
                <div>
                  Contraseña
                  <input
                    className="input input-solid max-w-full"
                    placeholder="Contraseña"
                    type="password"
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
                  />
                </div>
                <div>
                  Apellidos
                  <input
                    className="input input-solid max-w-full"
                    placeholder="Apellidos"
                    type="text"
                  />
                </div>
              </div>
              <div>
                <button className="btn btn-success mt-6 w-full" type="button">
                  Agregar
                </button>
              </div>
              <div className="divider divider-horizontal">Lista de Alumnos</div>

              <div>
                {students.length < 0 ? (
                  <div className="grid gap-4 w-full">Agregue un alumno</div>
                ) : (
                  students.map((student) => (
                    <div key={student.Usuarios_id} className="grid grid-cols-3">
                      <div>{student.Nombres}</div>
                      <div>{student.Apellidos}</div>
                      <div>{student.Correo}</div>
                    </div>
                  ))
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
    </TeacherLayouth>
  );
};

import { GetServerSideProps, NextPage } from "next";
import { useEffect } from "react";
import { useForm } from "react-hook-form";

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  // const { data } = await  // your fetch function here
  const { slug = "" } = query as { slug: string };

  const dataGroup: IDataGroup[] | undefined = await getDataGroup(slug);

  console.log(dataGroup);

  return {
    props: {
      slug,
      dataGroup,
    },
  };
};

export default EdithGropupPage;
