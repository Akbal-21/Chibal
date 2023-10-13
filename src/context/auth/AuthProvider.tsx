import { chibalApi } from "@/api";
import { IUser } from "@/interface";
import Cookies from "js-cookie";
import { signOut, useSession } from "next-auth/react";
import { useRouter } from "next/router";
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
  const { data, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    dispatch({ type: "[Auth] - Login", payload: data?.user as IUser });
  }, [data, status]);

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
    // dispatch({ type: "[Auth] - Logout" });
    signOut();
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
