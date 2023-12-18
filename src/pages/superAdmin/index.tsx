import { SigInLayout } from "@/components";
import Link from "next/link";
import { en, es } from "@/messages";
import { useContext } from "react";
import { InternationalContext } from "@/context";
const SuperAdminPage = () => {
  const { language } = useContext(InternationalContext);
  const ms = language === "en" ? en : es;
  return (
    <SigInLayout titel={"Bienvenido"}>
      <div className="grid grid-row space-x-2 items-center justify-center mt-8">
        <strong className="text-center font-bold text-3xl">
          <p>{ms.welcome.welcome}</p>
          <p>{ms.welcome.message}</p>
          <br />
          <p>
            {ms.welcome.link}
            <Link
              href="https://drive.google.com/drive/folders/19anUJNc_j6-NiAoPelamHmlFnIZ_O6aH?usp=sharing"
              rel="noopener noreferrer"
              target="_blank"
            >
              {/* biome-ignore lint/a11y/useButtonType: <explanation> */}
              <button className="bg-violet-800 hover:bg-violet-900 text-white font-bold py-2 px-4 rounded">
                📘 {ms.welcome.manual}
              </button>
            </Link>
          </p>
          <br />
          <p>{ms.welcome.enjoy}</p>
          <p>
            <i>{ms.welcome.team}</i>
          </p>
        </strong>
      </div>
    </SigInLayout>
  );
};

export default SuperAdminPage;
