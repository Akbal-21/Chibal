import { chibalApi } from "@/api";
import { SigInLayout, TableStudents } from "@/components";
import { AuthContext, GroupContext, InternationalContext } from "@/context";
import { getDataGroup } from "@/db/teacher";
import { IDataGroup } from "@/interface";
import { en, es } from "@/messages";
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
  { id_Level: 1, grado: "1ro Primaria" },
  { id_Level: 2, grado: "3ro Preescolar" },
];

const schoolShift = [
  { id_Shift: 1, turno: "Matutino" },
  { id_Shift: 2, turno: "Vespertino" },
];

const EdithGropupPage: NextPage<Props> = ({ slug, dataGroup }) => {
  // const [addStudent, setAddStudent] = useState<IDataStudentDB[]>([]);

  const [levelGroup, setLevelGroup] = useState({
    id_Level: 0,
    level: "",
  });

  const [shiftGroup, setShiftGroup] = useState({
    id_Shift: 0,
    horario: "",
  });

  const [nameGroup, setNameGroup] = useState("");

  const { user } = useContext(AuthContext);
  const { addStudent, students, resetStudents } = useContext(GroupContext);
  const router = useRouter();
  const navigateTo = (url: string) => {
    console.log(url);

    return router.replace(url);
  };

  let nivel;
  useEffect(() => {
    resetStudents();
    if (dataGroup.length === 1) {
      const { Grado, NombreGrupo, Grado_id, Turno } = dataGroup[0];
      if (!Grado || !Grado_id) {
        return;
      }

      nivel = Grado.Nivel;

      setNameGroup(NombreGrupo);

      setLevelGroup({
        id_Level: Grado_id,
        level: Grado.Nivel,
      });

      setShiftGroup({
        // biome-ignore lint/style/noNonNullAssertion: <explanation>
        id_Shift: Turno!.Turno_id,
        // biome-ignore lint/style/noNonNullAssertion: <explanation>
        horario: Turno!.Horario,
      });

      for (const key in dataGroup[0].Alumnos) {
        const student = dataGroup[0].Alumnos[key].Usuarios;

        addStudent(student);
      }
    }
  }, []);

  const {
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    defaultValues: { groupName: nameGroup, nivel },
  });

  const onSubmit = async (form: FormData) => {
    const teacher = user?.Usuarios_id;
    const { id_Level } = levelGroup;
    const { id_Shift } = shiftGroup;
    if (nameGroup.length < 2) {
      alert("El nombre debe de tener mas de 2 caractertes ");
      return;
    }
    let res;
    if (slug !== "new") {
      res = await chibalApi({
        method: "PUT",
        url: "/teacher/newGroup/addGroup",
        data: { nameGroup, teacher, id_Level, id_Shift, slug },
      });
    } else {
      res = await chibalApi({
        method: "POST",
        url: "/teacher/newGroup/addGroup",
        data: { nameGroup, teacher, id_Level, id_Shift },
      });

      const id_group = res.data.newGroup.Grupos_id;
      navigateTo(`/teacher/group/${id_group}/editStudent`);
      return;
    }
    router.replace("/teacher/group");
  };

  const { language } = useContext(InternationalContext);
  const ms = language === "en" ? en : es;

  return (
    <SigInLayout
      titel={
        slug === "new"
          ? ms.teacher.group.slug.index.createNewGroup
          : `${ms.teacher.group.slug.index.editGroup} ${slug}`
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
                    {ms.teacher.group.slug.index.nameGroup}:
                    {/* <label className="sr-only">Name</label> */}
                    <input
                      className="input input-solid max-w-full"
                      placeholder="1A"
                      value={nameGroup}
                      onChange={(e) =>
                        setNameGroup(e.target.value.replaceAll(" ", ""))
                      }
                    />
                  </div>

                  <div>
                    {ms.teacher.group.slug.index.grade}:
                    <br />
                    <div className="dropdown w-full">
                      {/* biome-ignore lint/a11y/noNoninteractiveTabindex: <explanation> */}
                      <label className="btn btn-solid-primary" tabIndex={0}>
                        {!levelGroup.level
                          ? ms.teacher.group.slug.index.slectGrade
                          : levelGroup.level}
                      </label>
                      <div className="w-full">
                        <ul className="dropdown-menu w-full">
                          {levelsSchool.map((level) => {
                            return (
                              // biome-ignore lint/a11y/useKeyWithClickEvents: <explanation>
                              <li
                                key={level.id_Level}
                                className="dropdown-item"
                                onClick={() =>
                                  setLevelGroup({
                                    id_Level: level.id_Level,
                                    level: level.grado,
                                  })
                                }
                              >
                                {level.grado}
                              </li>
                            );
                          })}
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div>
                    {ms.teacher.group.slug.index.shift}:
                    <br />
                    <div className="dropdown w-full">
                      {/* biome-ignore lint/a11y/noNoninteractiveTabindex: <explanation> */}
                      <label className="btn btn-solid-primary" tabIndex={0}>
                        {!shiftGroup.horario
                          ? ms.teacher.group.slug.index.selectShift
                          : shiftGroup.horario}
                      </label>
                      <div className="w-full">
                        <ul className="dropdown-menu w-full">
                          {schoolShift.map((shift) => {
                            return (
                              // biome-ignore lint/a11y/useKeyWithClickEvents: <explanation>
                              <li
                                key={shift.id_Shift}
                                className="dropdown-item"
                                onClick={() =>
                                  setShiftGroup({
                                    id_Shift: shift.id_Shift,
                                    horario: shift.turno,
                                  })
                                }
                              >
                                {shift.turno}
                              </li>
                            );
                          })}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* //*listado de alumnos */}
              <div>
                {students.length === 0 && slug !== "new" ? (
                  <div>
                    <div className="divider divider-horizontal">
                      {ms.teacher.group.slug.index.addStudents}
                    </div>
                    <div className="grid gap-4 w-full">
                      {/* biome-ignore lint/a11y/useButtonType: <explanation> */}
                      <button className="btn btn-success">
                        <b className="text-center text-xl">
                          {ms.teacher.group.slug.index.addStudents}
                        </b>
                      </button>
                    </div>
                  </div>
                ) : (
                  slug !== "new" && (
                    <div>
                      <div className="divider divider-horizontal">
                        {ms.teacher.group.slug.index.editStudents}
                      </div>
                      <div className="grid gap-4 w-full">
                        <button
                          className="btn btn-success"
                          type="button"
                          onClick={() =>
                            navigateTo(`/teacher/group/${slug}/editStudent`)
                          }
                        >
                          <b className="text-center text-xl">
                            {ms.teacher.group.slug.index.editStudents}
                          </b>
                        </button>
                      </div>
                      <div className="divider divider-horizontal">
                        {ms.teacher.group.slug.index.listOfStudent.title}
                      </div>

                      <TableStudents />
                    </div>
                  )
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
                    {ms.teacher.group.slug.index.saveGroup}
                  </div>
                  <div className="mt-4">
                    <button
                      type="submit"
                      className="rounded-lg btn btn-primary btn-block"
                    >
                      {ms.teacher.group.slug.index.save}
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
