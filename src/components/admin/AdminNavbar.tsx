import { useLoginUser } from "@/store/auth";
import Link from "next/link";

export const AdminNavbar = () => {
  const { user } = useLoginUser();

  return (
    <div className="navbar bg-coral rounded-lg">
      <div className="navbar-start">
        <Link href={"/"} className="navbar-item">
          Chiba'l
        </Link>
      </div>
      <div className="navbar-center">
        <Link
          href={`/admin/teacher/${user?.Usuarios_id}`}
          className="navbar-item"
        >
          Maestros
        </Link>
        <Link href={"/"} className="navbar-item">
          Escuela
        </Link>
      </div>
      <div className="navbar-end">
        <Link href={"/"} className="navbar-item">
          {`Hola ${user?.Nombres} `}
        </Link>
      </div>
    </div>
  );
};
