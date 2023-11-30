import { AuthContext } from "@/context";
import { Sen } from "next/font/google";
import { useContext } from "react";
import AdminPage from "./admin";
import StudentPage from "./student";
import SuperAdminPage from "./superAdmin";
import TeacherPage from "./teacher";

const letter = Sen({ subsets: ["latin"] });

export default function Home() {
  const { user } = useContext(AuthContext);

  return (
    <main className={`grid ${letter.className}`}>
      {user?.roll === "Administrador" && <AdminPage />}
      {user?.roll === "Maestro" && <TeacherPage />}
      {user?.roll === "Alumno" && <StudentPage />}
      {user?.roll === "SuperAdmin" && <SuperAdminPage />}
    </main>
  );
}
