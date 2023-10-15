import { chibalApi } from "@/api";
import { SigInLayout } from "@/components";
import { AuthContext } from "@/context";
import { getDataGroup } from "@/db/teacher";
import { IDataGroup, IDataStudentDB } from "@/interface";
import { GetServerSideProps, NextPage } from "next";
import { useRouter } from "next/router";
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

const levelsSchool = [
  { id: 1, grado: "1ro Primaria" },
  { id: 2, grado: "3ro Preescolar" },
];

const schoolShift = [
  { id: 1, turno: "Matutino" },
  { id: 2, turno: "Vespertino" },
];

const EdithGropupPage: NextPage<Props> = ({ slug, dataGroup }) => {
  const [addStudent, setAddStudent] = useState<IDataStudentDB[]>([]);
  const { user } = useContext(AuthContext);
  const router = useRouter();
  const navigateTo = (url: string) => {
    router.push(url);
  };

  console.log(user?.roll);

  let nivel;
  let groupName;

  if (dataGroup.length > 0) {
    const { Grado, NombreGrupo } = dataGroup[0];
    if (!Grado) {
      return;
    }
    nivel = Grado.Nivel;
    groupName = NombreGrupo;
    console.log(dataGroup);

    useEffect(() => {
      setAddStudent([]);

      console.log(dataGroup[0].Alumnos);

      for (const key in dataGroup[0].Alumnos) {
        const data = dataGroup[0].Alumnos[key].Usuarios;
        const { Apellidos, Correo, Nombres, Usuarios_id } = data;
        setAddStudent((prevStudent) => [
          ...prevStudent,
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

              {/* //*listado de alumnos */}
              <div>
                {addStudent.length <= 0 ? (
                  slug !== "new" && (
                    <div>
                      <div className="divider divider-horizontal">
                        Agregar Alumnos
                      </div>
                      <div className="grid gap-4 w-full">
                        {/* biome-ignore lint/a11y/useButtonType: <explanation> */}
                        <button className="btn btn-success">
                          <b className="text-center text-xl">Agregar Alumnos</b>
                        </button>
                      </div>
                    </div>
                  )
                ) : (
                  <div>
                    <div className="divider divider-horizontal">
                      Editar Alumnos
                    </div>
                    <div className="grid gap-4 w-full">
                      {/* biome-ignore lint/a11y/useButtonType: <explanation> */}
                      <button
                        className="btn btn-success"
                        onClick={() =>
                          navigateTo(`/teacher/group/${slug}/editStudent`)
                        }
                      >
                        <b className="text-center text-xl">Editar alumnos</b>
                      </button>
                    </div>
                    <div className="divider divider-horizontal">
                      Lista de Alumnos
                    </div>

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
                  </div>
                )}
              </div>
              {slug === "new" ? (
                <div>
                  <div className="divider divider-horizontal">
                    Crear y agregar Alumnos
                  </div>
                  <div className="mt-4">
                    <button
                      type="submit"
                      className="rounded-lg btn btn-primary btn-block"
                    >
                      Crear
                    </button>
                  </div>
                </div>
              ) : (
                <div>
                  <div className="divider divider-horizontal">
                    Guardart Grupo
                  </div>
                  <div className="mt-4">
                    <button
                      type="submit"
                      className="rounded-lg btn btn-primary btn-block"
                    >
                      Guardar
                    </button>
                  </div>
                </div>
              )}
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
