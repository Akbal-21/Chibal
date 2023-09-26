import { TeacherLayouth } from "@/components";
import { MdPostAdd } from "react-icons/md";
const ExcercisePage = () => {
  return (
    <TeacherLayouth titel="Ejercicios">
      <div className="grid grid-cols-custom-2 items-center w-full">
        <div className="p-1 mt-20 relative flex justify-center items-center">
          Hola como estas
        </div>
        <div className="p-1 relative">
          {/* biome-ignore lint/a11y/useButtonType: <explanation> */}
          <button className="btn btn-secondary w-48">
            <h1 className="text-2xl">
              <MdPostAdd />
            </h1>
            <b>Crear nuevo Ejercicio</b>
          </button>
        </div>
      </div>
    </TeacherLayouth>
  );
};

export default ExcercisePage;
