import { useLoginUser } from "@/store/auth";
import Link from "next/link";

export const TeacherNavbar = () => {
  const { user } = useLoginUser();

  return (
    <div className="navbar bg-fuzzy_Wuzzy rounded-lg">
      <div className="navbar-start">
        <Link href={"/"} className="navbar-item">
          <h1 className="text-white text-2xl">
            <b>Chiba'l</b>
          </h1>
        </Link>
      </div>
      <div className="navbar-center">
        <Link href={"/teacher/group/"} className="navbar-item">
          <h1 className="text-white text-xl">
            <b>Grupo</b>
          </h1>
        </Link>
        <Link href={"/teacher/exercise"} className="navbar-item">
          <h1 className="text-white text-xl">
            <b>Ejercicios</b>
          </h1>
        </Link>
      </div>
      <div className="navbar-end">
        <Link href={"/"} className="navbar-item">
          <h1 className="text-white text-xl">
            <b>{`Hola ${user?.Nombres} `}</b>
          </h1>
        </Link>
      </div>
    </div>
  );
};
