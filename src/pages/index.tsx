import { useLoginUser } from "@/store/auth";
import { useRouter } from "next/router";
import AdminPage from "./admin";

export default function Home() {
  // const { isLoggedIn, user } = useContext(AuthContext);
  const { isLoggedIn, user } = useLoginUser();
  const router = useRouter();

  return (
    <main>
      {user?.roll === "Administrador" && <AdminPage />}
      {user?.roll === "Maestro" && <AdminPage />}
      {user?.roll === "Alumno" && <AdminPage />}
      {user?.roll === "SuperAdmin" && <AdminPage />}
    </main>
  );
}
