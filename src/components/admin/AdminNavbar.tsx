import { useLoginUser } from "@/store/auth";
import Link from "next/link";

export const AdminNavbar = () => {
  const { user } = useLoginUser();

  return (
    <div className="navbar bg-coral rounded-lg">
      <div className="navbar-start">
        <Link href={"/"} className="navbar-item">
          <h1 className="text-white text-2xl">
            <b>Chiba'l</b>
          </h1>
        </Link>
      </div>
      <div className="navbar-center">
        <Link
          href={`/admin/teacher/${user?.Usuarios_id}`}
          className="navbar-item"
        >
          <h1 className="text-white text-xl">
            <b>Maestros</b>
          </h1>
        </Link>
        <Link href={"/"} className="navbar-item">
          <h1 className="text-white text-xl">
            <b>Escuela</b>
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
