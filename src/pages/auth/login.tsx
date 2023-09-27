import { AuthLayouth } from "@/components/layouths";
import { useLoginUser } from "@/store/auth";
import { isEmail } from "@/utils";
import { useRouter } from "next/router";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { RiLockPasswordLine } from "react-icons/ri";
import { SiMaildotru } from "react-icons/si";

// ~ Icons

type FormData = {
  email: string;
  password: string;
};

const LoginPage = () => {
  const router = useRouter();

  const { loginUser, user } = useLoginUser();

  //*Formulario
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  // *Estados
  const [showError, setShowError] = useState(false);

  // *funcion del form
  const onLoginUser = async ({ email, password }: FormData) => {
    // await login(email, password);
    const isValidLogin = await loginUser(email, password);
    if (!isValidLogin) {
      setShowError(true);
      setTimeout(() => setShowError(false), 3000);
      return;
    }
    console.log(user);

    if (user?.roll === "Alumno") {
      router.replace("/student");
      return;
    }

    if (user?.roll === "Administrador") {
      router.replace("/admin");
      return;
    }
    if (user?.roll === "SuperAdmin") {
      router.replace("/super_admin");
      return;
    }

    if (user?.roll === "Maestro") {
      router.replace("/teacher");
      return;
    }
  };

  return (
    <AuthLayouth titel={"Inicio de sesión"}>
      <div className="flex min-h-screen flex-col items-center justify-between p-[calc(100%/4)] ">
        <div className="bg-my_sin w-[400px] p-2 rounded-md">
          <h1 className="text-center text-xl ">Inicio de sesión</h1>
          {showError && (
            <span className=" badge badge-error m-1">
              Correo o Contreseña incorrecta
            </span>
          )}
          <form onSubmit={handleSubmit(onLoginUser)} noValidate>
            {/* email */}
            <label className="form-label text-lg">Coreo electonico</label>
            {errors.email && (
              <span className=" badge badge-error m-1">
                {errors.email.message}
              </span>
            )}
            <div className="form-control relative w-full mb-4">
              <input
                type="email"
                className={
                  !errors.email
                    ? "input input-lg max-w-full pl-10"
                    : "input input-error input-lg max-w-full pl-10"
                }
                placeholder="Enter email"
                {...register("email", {
                  required: "Este campo es requerido",
                  validate: isEmail,
                })}
              />
              <span className="absolute inset-y-0 left-3 inline-flex items-center">
                <SiMaildotru />
              </span>
            </div>

            {/* password */}

            <label className="form-label text-lg">Contreseña</label>
            {errors.password && (
              <span className=" badge badge-error m-1">
                {errors.password.message}
              </span>
            )}

            <div className="form-control relative w-full mb-5">
              <input
                type="password"
                className={
                  !errors.password
                    ? "input input-lg max-w-full pl-10"
                    : "input input-error input-lg max-w-full pl-10 "
                }
                placeholder="Enter password"
                {...register("password", {
                  required: "Este campo es requerido",
                  minLength: { value: 6, message: "Minimo 6 caracteres" },
                })}
              />

              <span className="absolute inset-y-0 left-3 inline-flex items-center">
                <RiLockPasswordLine />
              </span>
            </div>
            {/* Button del inicio de sesion */}
            <button
              type="submit"
              className="btn btn-md btn-circle btn-primary w-full "
            >
              Ingresar
            </button>
            {/* Fin del form */}
          </form>
        </div>
      </div>
    </AuthLayouth>
  );
};

export default LoginPage;
