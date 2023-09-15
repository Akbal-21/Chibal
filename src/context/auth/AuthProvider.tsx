import { chibalApi } from "@/api";
import { IUser } from "@/interface";
import Cookies from "js-cookie";
import { FC, useEffect, useReducer } from "react";
import { AuthContext, authReducer } from "./";

export interface AuthState {
  isLoggedIn: boolean;
  user?: IUser;
}

const Auth_INITIAL_STATE: AuthState = {
  isLoggedIn: false,
  user: undefined,
};

interface Props {
  children?: JSX.Element | JSX.Element[];
}

export const AuthProvider: FC<Props> = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, Auth_INITIAL_STATE);

  useEffect(() => {
    checkToken();
  }, []);

  const checkToken = async () => {
    try {
      const { data } = await chibalApi.get("/user/validate-token");
      const { token, user } = data;
      Cookies.set("token", token);
      dispatch({ type: "[Auth] - Login", payload: user });
    } catch (error) {
      Cookies.remove("token");
    }
  };

  const loginUser = async (
    email: string,
    password: string,
  ): Promise<boolean> => {
    try {
      const { data } = await chibalApi.post("/user/login", { email, password });
      const { token, user } = data;
      Cookies.set("token", token);
      dispatch({ type: "[Auth] - Login", payload: user });
      return true;
    } catch (error) {
      return false;
    }
  };

  const logout = async () => {
    Cookies.remove("token");
    dispatch({ type: "[Auth] - Logout" });
  };

  return (
    <AuthContext.Provider
      value={{
        ...state,

        // *methods
        loginUser,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
