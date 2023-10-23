import { chibalApi } from "@/api";
import { AuthContext } from "@/context";
import { LineByStudentID } from "@/interface";
import { ChangeEvent, FC, useContext, useEffect, useState } from "react";
interface Props {
  lineStudent: LineByStudentID;
}

export const CheckResults: FC<Props> = ({ lineStudent }) => {
  const [isUpdate, setIsUpdate] = useState<boolean>(true);
  const [shift, setShift] = useState<number>(0);

  const { user } = useContext(AuthContext);
  useEffect(() => {
    setShift(lineStudent.Puntaje);
  }, []);

  const onChangeUpdate = (e: ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
    setShift(Number(e.target.value));
    setIsUpdate(false);
  };

  const updateShift = async () => {
    if (shift >= 101 || shift < 0) {
      return alert("No se puede poner mas de 100 o menos de 0");
    }
    const { Inciso_id } = lineStudent;
    const id_Student = user?.Usuarios_id;
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
    <tr className="bg-white border-b  hover:bg-gray-100 ">
      <td className="px-6 py-4 whitespace-nowrap">
        <img
          src={String(lineStudent.Imagen)}
          alt="Nose"
          width={35}
          height={35}
        />
      </td>
      <td className="px-6 py-4 whitespace-nowrap">{lineStudent.Respuesta}</td>
      <td className="px-6 py-4 whitespace-nowrap">
        {lineStudent.Incisos.LoSolicitado}
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        <input
          type="number"
          className="input input-primary"
          value={shift}
          onChange={(e) => onChangeUpdate(e)}
        />
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        {/* biome-ignore lint/a11y/useButtonType: <explanation> */}
        <button
          className="btn btn-secondary"
          disabled={isUpdate}
          onClick={updateShift}
        >
          Actualizar
        </button>
      </td>
    </tr>
  );
};
