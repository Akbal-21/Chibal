import Cookie from "js-cookie";
import { FC, useEffect, useReducer } from "react";
import { InternationalContext, internationalReducer } from "./";

export interface InternationalState {
  language: string;
}

const International_INITIAL_STATE: InternationalState = {
  language: "es",
};

interface Props {
  children?: JSX.Element | JSX.Element[];
}

export const InternationalProvider: FC<Props> = ({ children }) => {
  const [state, dispatch] = useReducer(
    internationalReducer,
    International_INITIAL_STATE,
  );

  useEffect(() => {
    const leng = Cookie.get("language");
    console.log(leng);
    if (leng === "es" || leng === "en") {
      changeLanguage(leng);
    }
  }, []);

  const changeLanguage = (language: string) => {
    dispatch({
      type: "[International] - Change Language",
      payload: language,
    });
    Cookie.set("language", language);
  };

  return (
    <InternationalContext.Provider
      value={{
        ...state,

        //Methods
        changeLanguage,
      }}
    >
      {children}
    </InternationalContext.Provider>
  );
};
