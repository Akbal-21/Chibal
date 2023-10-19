import { AuthLayouth } from "@/components/layouths";
import { AuthContext } from "@/context";
import { isEmail } from "@/utils";
import { GetServerSideProps } from "next";
import { getSession, signIn } from "next-auth/react";
import { useRouter } from "next/router";
import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { RiLockPasswordLine } from "react-icons/ri";
import { SiMaildotru } from "react-icons/si";

type FormData = {
  email: string;
  password: string;
};

const LoginPage = () => {
  const router = useRouter();

  // const { loginUser, user } = useLoginUser();
  const { loginUser, user } = useContext(AuthContext);

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
    await signIn("credentials", { email, password });

    // if (!signIn) {
    //   setShowError(true);
    //   setTimeout(() => setShowError(false), 3000);
    //   return;
    // }
  };

  return (
    <AuthLayouth titel={"Inicio de sesión"}>
      <div className="grid min-h-screen grtid-col items-center justify-between p-[calc(100vh/3)] ">
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

// You should use getServerSideProps when:
// - Only if you need to pre-render a page whose data must be fetched at request time

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  const session = await getSession({ req });
  // biome-ignore lint/suspicious/noExplicitAny: <explanation>
  const user: any = structuredClone(session?.user);
  console.log(user);

  if (user?.roll === "Alumno") {
    return {
      redirect: {
        destination: "/student",
        permanent: false,
      },
    };
  }
  if (user?.roll === "Administrador") {
    return {
      redirect: {
        destination: "/admin",
        permanent: false,
      },
    };
  }
  if (user?.roll === "SuperAdmin") {
    return {
      redirect: {
        destination: "/superAdmin",
        permanent: false,
      },
    };
  }
  if (user?.roll === "Maestro") {
    return {
      redirect: {
        destination: "/teacher",
        permanent: false,
      },
    };
  }

  return {
    props: {},
  };
};

export default LoginPage;
