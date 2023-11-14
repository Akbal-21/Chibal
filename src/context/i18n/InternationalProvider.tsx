import { FC, useReducer } from "react";
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

  const changeLanguage = (language: string) => {
    dispatch({
      type: "[International] - Change Language",
      payload: language,
    });
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
