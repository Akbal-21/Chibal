import { chibalApi } from "@/api";
import { GroupContext } from "@/context";
import { isEmail } from "@/utils";
import { FC, useContext } from "react";
import { useForm } from "react-hook-form";
import { BiUserCircle } from "react-icons/bi";
import { RiLockPasswordLine } from "react-icons/ri";
import { SiMaildotru } from "react-icons/si";

interface Props {
  slug: string;
}

type FormData = {
  names: string;
  lastsNames: string;
  email: string;
  password: string;
};

export const AddStudent: FC<Props> = ({ slug }) => {
  const { addStudent, students } = useContext(GroupContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  // *Estados
  const handleAddStudent = async ({
    email,
    lastsNames,
    names,
    password,
  }: FormData) => {
    const data = await chibalApi({
      url: "/teacher/newGroup",
      method: "POST",
      data: {
        email,
        lastsNames,
        names,
        password,
        slug,
      },
    });

    console.log(data);
  };
  return (
    <div>
      <div className="divider divider-horizontal">Agregar un alumno</div>
      <form onSubmit={handleSubmit(handleAddStudent)} noValidate>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div>
            <div>
              <label className="form-label text-lg">Nombres</label>
              {errors.names && (
                <span className=" badge badge-error m-1">
                  {errors.names.message}
                </span>
              )}
              <div className="form-control relative w-full mb-4">
                <input
                  type="text"
                  className={
                    !errors.names
                      ? "input input-lg max-w-full pl-10"
                      : "input input-error input-lg max-w-full pl-10"
                  }
                  placeholder="Nombres"
                  {...register("names", {
                    required: "Este campo es requerido",
                    minLength: { value: 3, message: "Minimo 3 caracteres" },
                  })}
                />
                <span className="absolute inset-y-0 left-3 inline-flex items-center">
                  <BiUserCircle />
                </span>
              </div>
            </div>
          </div>
          <div>
            <div>
              <label className="form-label text-lg">Apellidos</label>
              {errors.lastsNames && (
                <span className=" badge badge-error m-1">
                  {errors.lastsNames.message}
                </span>
              )}
              <div className="form-control relative w-full mb-4">
                <input
                  type="text"
                  className={
                    !errors.lastsNames
                      ? "input input-lg max-w-full pl-10"
                      : "input input-error input-lg max-w-full pl-10"
                  }
                  placeholder="Apellidos"
                  {...register("lastsNames", {
                    required: "Este campo es requerido",
                    minLength: { value: 3, message: "Minimo 3 caracteres" },
                  })}
                />
                <span className="absolute inset-y-0 left-3 inline-flex items-center">
                  <BiUserCircle />
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div>
            <label className="form-label text-lg">Correo</label>
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
          </div>
          <div>
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
          </div>
        </div>

        <div>
          <button className="btn btn-success mt-6 w-full" type="submit">
            Agregar
          </button>
        </div>
      </form>
    </div>
  );
};
