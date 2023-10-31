import { AuthContext } from "@/context";
import { useRouter } from "next/router";
import { useContext } from "react";
import AdminPage from "./admin";
import StudentPage from "./student";
import SuperAdminPage from "./superAdmin";
import TeacherPage from "./teacher";

export default function Home() {
  const router = useRouter();
  const { user } = useContext(AuthContext);
  console.log(user);

  return (
    <main>
      {user?.roll === "Administrador" && <AdminPage />}
      {user?.roll === "Maestro" && <TeacherPage />}
      {user?.roll === "Alumno" && <StudentPage />}
      {user?.roll === "SuperAdmin" && <SuperAdminPage />}
    </main>
  );
}
