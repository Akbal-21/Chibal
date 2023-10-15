import { AddStudent, SigInLayout } from "@/components";
import { getDataGroup } from "@/db/teacher";
import { IDataGroup } from "@/interface";
import { useStudentsStore } from "@/store";
import { GetServerSideProps, NextPage } from "next";

interface Props {
  slug: string;
  dataGroup: IDataGroup[];
}

const editStudentPage: NextPage<Props> = ({ slug, dataGroup }) => {
  console.log(slug, dataGroup);
  const {
    students,
    fetchStudents, // carga alumnos del grupo (dataGroup) al localsession
    setState,
    reset,
    addNewStudent,
    getStudentInfo,
    deleteStudent,
  } = useStudentsStore();

  return (
    <SigInLayout titel="Agregar Alumnos">
      <div className="pt-10">
        <section className="bg-gray-2 rounded-xl">
          <div className="p-8 shadow-lg">
            <form className="space-y-4" noValidate>
              <AddStudent />
            </form>
            <div>
              {/* biome-ignore lint/a11y/useButtonType: <explanation> */}
              <button
                className="btn btn-success mt-6 w-full"
                //* llamar a alguna funcion
                //onClick={() => fetchStudents(dataGroup)}
                //onClick={() => reset()}
                onClick={() => console.log(getStudentInfo("8"))}
              >
                funcion de Storage
              </button>
            </div>
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

export default editStudentPage;
