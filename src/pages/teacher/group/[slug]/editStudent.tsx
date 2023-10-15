import { AddStudent, SigInLayout } from "@/components";
import { getDataGroup } from "@/db/teacher";
import { IDataGroup } from "@/interface";
import { GetServerSideProps, NextPage } from "next";

interface Props {
  slug: string;
  dataGroup: IDataGroup[];
}

const editStudentPage: NextPage<Props> = ({ slug, dataGroup }) => {
  console.log(slug, dataGroup);

  return (
    <SigInLayout titel="Agregar Alumnos">
      <div className="pt-10">
        <section className="bg-gray-2 rounded-xl">
          <div className="p-8 shadow-lg">
            <form className="space-y-4" noValidate>
              <AddStudent />
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

export default editStudentPage;
