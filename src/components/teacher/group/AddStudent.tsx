import { chibalApi } from "@/api";
import { GroupContext, InternationalContext } from "@/context";
import { en, es } from "@/messages";
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
  const { language } = useContext(InternationalContext);

  const ms = language === "en" ? en : es;

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
              <label className="form-label text-lg">
                {ms.teacher.group.slug.createStudent.name}
              </label>
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
                  placeholder={ms.teacher.group.slug.createStudent.name}
                  {...register("names", {
                    required: "Este campo es requerido",
                    minLength: { value: 3, message: "Mínimo 3 caracteres" },
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
              <label className="form-label text-lg">
                {ms.teacher.group.slug.createStudent.surnames}
              </label>
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
                  placeholder={ms.teacher.group.slug.createStudent.surnames}
                  {...register("lastsNames", {
                    required: "Este campo es requerido",
                    minLength: { value: 3, message: "Mínimo 3 caracteres" },
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
            <label className="form-label text-lg">
              {ms.teacher.group.slug.createStudent.mail}
            </label>
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
                placeholder={ms.teacher.group.slug.createStudent.mail}
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
            <label className="form-label text-lg">
              {ms.teacher.group.slug.createStudent.password}
            </label>
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
                placeholder={ms.teacher.group.slug.createStudent.password}
                {...register("password", {
                  required: "Este campo es requerido",
                  minLength: { value: 6, message: "Mínimo 6 caracteres" },
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
            {ms.teacher.group.slug.createStudent.add}
          </button>
        </div>
      </form>
    </div>
  );
};
