import { TeacherLayouth } from "@/components";
import { FC, useState } from "react";
import ReactDatePicker from "react-datepicker";
import { BsFillCalendarFill } from "react-icons/bs";
import { Props } from "./[slug]";

export const ExcersisePage: FC<Props> = ({ exercise, typeOfExercise }) => {
  const [startDate, setStartDate] = useState<Date | null>(new Date());

  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <TeacherLayouth titel={`Ejercicio ${exercise.Ejercicios_id}`}>
      <div className="pt-11">
        <section className="bg-gray-2 rounded-xl">
          <div className="p-8 shadow-lg">
            <form className="space-y-4">
              <div className="form-control relative w-full">
                Nombre del ejercicio:
                {/* <label className="sr-only">Name</label> */}
                <input
                  className="input input-solid max-w-full"
                  placeholder="Name"
                  type="text"
                  id="name"
                />
              </div>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div className="w-full">
                  Tipo de Ejercicio:
                  <div className="dropdown">
                    {/* biome-ignore lint/a11y/noNoninteractiveTabindex: <explanation> */}
                    <label className="btn btn-solid-primary my-2" tabIndex="0">
                      Click
                    </label>
                    <div className="dropdown-menu">
                      <a className="dropdown-item text-sm">Profile</a>
                      <a tabIndex="-1" className="dropdown-item text-sm">
                        Account settings
                      </a>
                      <a tabIndex="-1" className="dropdown-item text-sm">
                        Subscriptions
                      </a>
                    </div>
                  </div>
                </div>

                <div>
                  Fecha a publicar:
                  <div className="form-control relative w-full ">
                    <BsFillCalendarFill />
                    <ReactDatePicker
                      className="input input-solid"
                      selected={startDate}
                      onChange={(date) => setStartDate(date)}
                    />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div className="w-full">
                  Tipo de Ejercicio:
                  <input
                    className="input input-solid"
                    placeholder="Email address"
                    type="text"
                  />
                </div>

                <div>
                  <label className="sr-only" htmlFor="phone">
                    Phone
                  </label>
                  <input
                    className="input input-solid"
                    placeholder="Phone Number"
                    type="tel"
                    id="phone"
                  />
                </div>
              </div>

              <div className="mt-4">
                <button
                  type="button"
                  className="rounded-lg btn btn-primary btn-block"
                >
                  Send Enquiry
                </button>
              </div>
            </form>
          </div>
        </section>
      </div>
    </TeacherLayouth>
  );
};
