import { AuthContext } from "@/context";
import { useContext } from "react";
import AdminPage from "./admin";
import StudentPage from "./student";
import SuperAdminPage from "./superAdmin";
import TeacherPage from "./teacher";

export default function Home() {
  const { user } = useContext(AuthContext);
  console.log(user);

  return (
    <main className={"grid "}>
      {user?.roll === "Administrador" && <AdminPage />}
      {user?.roll === "Maestro" && <TeacherPage />}
      {user?.roll === "Alumno" && <StudentPage />}
      {user?.roll === "SuperAdmin" && <SuperAdminPage />}
    </main>
  );
}
