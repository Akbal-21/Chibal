import { AuthLayouth } from "@/components/layouths";
import { AuthContext } from "@/context";
import { isEmail } from "@/utils";
import { useRouter } from "next/router";
import { useContext, useState } from "react";
import { useForm } from "react-hook-form";

type FormData = {
  email: string;
  password: string;
};

const LoginPage = () => {
  const router = useRouter();

  const { loginUser } = useContext(AuthContext);

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
    const isValidLogin = await loginUser(email, password);
    if (!isValidLogin) {
      setShowError(true);
      setTimeout(() => setShowError(false), 3000);
      return;
    }

    router.replace("/");
  };

  return (
    <AuthLayouth titel={"Inicio de sesión"}>
      <div
        className={
          "flex min-h-screen flex-col items-center justify-between p-[calc(100%/4)] "
        }
      >
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
                {/* biome-ignore lint/a11y/noSvgWithoutTitle: <explanation> */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-content3"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                  />
                </svg>
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
                {/* biome-ignore lint/a11y/noSvgWithoutTitle: <explanation> */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-content3"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                  />
                </svg>
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
