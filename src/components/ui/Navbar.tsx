import { AuthContext, InternationalContext } from "@/context";
import { en, es } from "@/messages";
import Link from "next/link";
import { useRouter } from "next/router";
import { useContext } from "react";

export const Navbar = ({ onReload = () => {} }) => {
  
  const { user, logout } = useContext(AuthContext);
  const router = useRouter();

  const navigateTo = (url: string) => {
    router.push(url);
  };

  const { language, changeLanguage } = useContext(InternationalContext);
  const ms = language === "en" ? en : es;

  const changeLanguageUser = () => {
    if (language === "en") {
      changeLanguage("es");
      console.log("Ingles");
    }
    if (language === "es") {
      changeLanguage("en");
      console.log("Espanol");
    }
  };

  return (
    <div className="navbar bg-coral rounded-lg">
      <div className="navbar-start">
        <Link href={"/"} className="navbar-item p-0">
          <h1 className="text-white text-2xl">
            <img src="/logo_chibal3.svg" alt="logo" width={"100px"} />
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
            <b>{ms.student.navbar.exercise}</b>
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
              <b>{ms.teacher.navbar.group}</b>
            </h1>
            {/* biome-ignore lint/a11y/useKeyWithClickEvents: <explanation> */}
            <h1
              className="text-white text-xl navbar-item"
              onClick={() => navigateTo("/teacher/exercise")}
            >
              <b>{ms.teacher.navbar.exercise}</b>
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
                <b>{ms.superAdmin.navbar.admins}</b>
              </h1>
              {/* biome-ignore lint/a11y/useKeyWithClickEvents: <explanation> */}
              <h1
                className="text-white text-xl navbar-item"
                onClick={() => navigateTo("/superAdmin/schools")}
              >
                <b>{ms.superAdmin.navbar.schools}</b>
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
              <b>{`${ms.navbar.hello} ${user?.Nombres} `}</b>
            </label>
            <div className="dropdown-menu dropdown-menu-bottom-left">
              {/* biome-ignore lint/a11y/useButtonType: <explanation> */}
              <button className="dropdown-item text-sm" onClick={logout}>
                {ms.navbar.logout}
              </button>
              <div className="divider" />
              {/* biome-ignore lint/a11y/useButtonType: <explanation> */}
              <button
                className="dropdown-item text-sm"
                onClick={() => {changeLanguageUser(); onReload(); }}
              >
                {language === "en" ? "🇲🇽 Español" : "🇺🇸 English"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
