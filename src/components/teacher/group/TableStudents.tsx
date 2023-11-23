import { GroupContext, InternationalContext } from "@/context";
import { en, es } from "@/messages";
import { useContext } from "react";

export const TableStudents = () => {
  const { students } = useContext(GroupContext);
  const { language } = useContext(InternationalContext);
  const ms = language === "en" ? en : es;

  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
      <table className="w-full text-sm text-left text-gray-500 ">
        <thead className=" text-xs text-gray-700 uppercase bg-gray-200 ">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              #
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              {ms.teacher.group.slug.index.listOfStudent.name}
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              {ms.teacher.group.slug.index.listOfStudent.surnames}
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              {ms.teacher.group.slug.index.listOfStudent.mail}
            </th>
          </tr>
        </thead>
        <tbody>
          {students.map((student, index: number) => (
            <tr
              key={student.Usuarios_id}
              className="bg-white border-b  hover:bg-gray-50"
            >
              <td className="px-6 py-4 whitespace-nowrap">{index + 1}</td>
              <td className="px-6 py-4 whitespace-nowrap">{student.Nombres}</td>
              <td className="px-6 py-4 whitespace-nowrap">
                {student.Apellidos}
              </td>
              <td className="px-6 py-4 whitespace-nowrap">{student.Correo}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
