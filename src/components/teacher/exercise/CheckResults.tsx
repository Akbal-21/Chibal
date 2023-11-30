import { chibalApi } from "@/api";
import { InternationalContext } from "@/context";
import { LineByStudentID } from "@/interface";
import { en, es } from "@/messages";
import { ChangeEvent, FC, useContext, useEffect, useState } from "react";
import { Td, Tr } from "react-super-responsive-table";

interface Props {
  lineStudent: LineByStudentID;
  id_Student: string;
}

export const CheckResults: FC<Props> = ({ lineStudent, id_Student }) => {
  const [isUpdate, setIsUpdate] = useState<boolean>(true);
  const [shift, setShift] = useState<number>(0);
  // const [id_stud, setid_stud] = useState(second)
  const { language } = useContext(InternationalContext);
  const ms = language === "en" ? en : es;

  useEffect(() => {
    setShift(lineStudent.Puntaje);
  }, []);

  const onChangeUpdate = (e: ChangeEvent<HTMLInputElement>) => {
    setShift(Number(e.target.value));
    setIsUpdate(false);
  };

  const updateShift = async () => {
    if (shift >= 101 || shift < 0) {
      return alert("No se puede poner mas de 100 o menos de 0");
    }
    const { Inciso_id } = lineStudent;
    const update = await chibalApi({
      method: "PUT",
      url: "/teacher/exercise/updateShift",
      data: {
        shift,
        Inciso_id,
        id_Student,
      },
    });
    if (!update) {
      return alert("Lo sentimos hubo un problema");
    }
    console.log({ shift, update });
    setIsUpdate(true);
  };

  return (
    <Tr className="bg-white border-b  hover:bg-gray-100 ">
      <Td className="px-6 whitespace-nowrap">
        <img
          src={String(lineStudent.Imagen)}
          alt={ms.teacher.exercise.pdf.studentDraw}
          width={50}
          height={50}
        />
      </Td>
      <Td className="px-6 py-1 text-xl font-bold whitespace-nowrap">
        {lineStudent.Respuesta}
      </Td>
      <Td className="px-6 py-1 text-xl font-bold whitespace-nowrap">
        {lineStudent.Incisos.LoSolicitado}
      </Td>
      <Td className="px-6 py-1 text-xl font-bold whitespace-nowrap">
        <input
          type="number"
          className="input input-primary"
          value={shift}
          onChange={(e) => onChangeUpdate(e)}
        />
      </Td>
      <Td className="px-6 py-1 text-xl font-bold whitespace-nowrap">
        {/* biome-ignore lint/a11y/useButtonType: <explanation> */}
        <button
          className="btn btn-secondary"
          disabled={isUpdate}
          onClick={updateShift}
        >
          {ms.teacher.exercise.pdf.update}
        </button>
      </Td>
    </Tr>
  );
};
