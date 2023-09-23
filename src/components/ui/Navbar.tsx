import { useLoginUser } from "@/store/auth";
import Link from "next/link";

export const Navbar = () => {
  const { user } = useLoginUser();
  return (
    <div className="navbar bg-coral rounded-lg">
      <div className="navbar-start">
        <Link href={"/"} className="navbar-item">
          Chiba'l
        </Link>
      </div>
      <div className="navbar-center">
        <Link href={"/"} className="navbar-item">
          Home
        </Link>
        <Link href={"/"} className="navbar-item">
          About
        </Link>
        <Link href={"/"} className="navbar-item">
          Contact
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
