import { useLoginUser } from "@/store/auth";
import Link from "next/link";

export const StudentNavbar = () => {
  const { user } = useLoginUser();

  return (
    <div className="navbar bg-coral rounded-lg">
      <div className="navbar-start">
        <Link href={"/"} className="navbar-item">
          <b className="text-lg text-slate-200">
          Chiba'l
          </b>
        </Link>
      </div>
      <div className="navbar-end">
        <Link href={"/"} className="navbar-item">
          <b className="text-base text-slate-200">
          {`Hola ${user?.Nombres} `}
          </b>
        </Link>
      </div>
    </div>
  );
};
