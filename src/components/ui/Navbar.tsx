import { AuthContext } from "@/context";
import Link from "next/link";
import { useRouter } from "next/router";
import { useContext } from "react";

export const Navbar = () => {
  const { user, logout } = useContext(AuthContext);
  const router = useRouter();

  const navigateTo = (url: string) => {
    router.push(url);
  };

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
        {user?.roll === "Alumno" ? (
          // biome-ignore lint/a11y/useKeyWithClickEvents: <explanation>
          <h1
            className="text-white text-xl navbar-item"
            onClick={() => navigateTo("/student")}
          >
            <b>Ejercicios</b>
          </h1>
        ) : user?.roll === "Administrador" ? (
          <>
            {/* biome-ignore lint/a11y/useKeyWithClickEvents: <explanation> */}
            <h1
              className="text-white text-xl navbar-item"
              onClick={() => navigateTo("/admin")}
            >
              <b>Maestros</b>
            </h1>
            
          </>
        ) : user?.roll === "Maestro" ? (
          <>
            {/* biome-ignore lint/a11y/useKeyWithClickEvents: <explanation> */}
            <h1
              className="text-white text-xl navbar-item"
              onClick={() => navigateTo("/teacher/group")}
            >
              <b>Grupo</b>
            </h1>
            {/* biome-ignore lint/a11y/useKeyWithClickEvents: <explanation> */}
            <h1
              className="text-white text-xl navbar-item"
              onClick={() => navigateTo("/teacher/exercise")}
            >
              <b>Ejercicios</b>
            </h1>
          </>
        ) : (
          user?.roll === "SuperAdmin" && (
            <>
              {/* biome-ignore lint/a11y/useKeyWithClickEvents: <explanation> */}
              <h1
                className="text-white text-xl navbar-item"
                onClick={() => navigateTo("/superAdmin/admins")}
              >
                <b>Administradores</b>
              </h1>
              {/* biome-ignore lint/a11y/useKeyWithClickEvents: <explanation> */}
              <h1
                className="text-white text-xl navbar-item"
                onClick={() => navigateTo("/superAdmin/schools")}
              >
                <b>Escuelas</b>
              </h1>
            </>
          )
        )}
      </div>
      <div className="navbar-end">
        <div className="dropdown-container">
          <div className="dropdown">
            <label
              className="flex cursor-pointer px-0 text-white text-xl"
              // biome-ignore lint/a11y/noNoninteractiveTabindex: <explanation>
              tabIndex={0}
            >
              <b>{`Hola ${user?.Nombres} `}</b>
            </label>
            <div className="dropdown-menu dropdown-menu-bottom-left">
              {/* biome-ignore lint/a11y/useButtonType: <explanation> */}
              <button className="dropdown-item text-sm" onClick={logout}>
                Salir
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
