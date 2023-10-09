import { useLoginUser } from "@/store/auth";
import Link from "next/link";

export const SuperAdminNavbar = () => {
  const { user } = useLoginUser();

  return (
    <div className="navbar bg-coral rounded-lg">
      <div className="navbar-start">
        <Link href={"/"} className="navbar-item">
          Chiba'l
        </Link>
      </div>
      <div className="navbar-center">
        <Link href={"/superAdmin/admins"} className="navbar-item">
          Administradores
        </Link>
        <Link href={"/superAdmin/schools"} className="navbar-item">
          Escuelas
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
