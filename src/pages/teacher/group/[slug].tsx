import { TeacherLayouth } from "@/components";
import { getDataGroup } from "@/db/teacher";
import { getExerciseAnswers } from "@/db/teacher/answers";
import { IDataGroup } from "@/interface";

interface Props {
  slug: string;
  dataGroup: IDataGroup[];
}

const EdithGropupPage: NextPage<Props> = ({ slug, dataGroup }) => {
  console.log(dataGroup);

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
                    />
                  </div>
                  <div>
                    Grado
                    <select className="select select-secondary">
                      <option>3ro de Preescolar</option>
                      <option>1ro de Primaria</option>
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
                <br />
                <div className="grid grid-cols-custom-2 gap-4 w-full">Hola</div>
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

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  // const { data } = await  // your fetch function here
  const { slug = "" } = query as { slug: string };

  console.log(slug);

  const dataGroup: IDataGroup[] | undefined = await getDataGroup(slug);

  const test = await getExerciseAnswers("4");

  console.log(test);

  return {
    props: {
      slug,
      dataGroup,
    },
  };
};

export default EdithGropupPage;
