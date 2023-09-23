import { chibalApi } from "@/api";
import { IUser } from "@/interface";
import Cookies from "js-cookie";
import { create } from "zustand";

interface UserState {
  isLoggedIn: boolean;
  user?: IUser;
  token: string;
}

interface UserActions {
  // * functions
  loginUser: (email: string, password: string) => Promise<boolean>;
  checkToken: () => Promise<boolean>;
  logout: () => Promise<void>;
}

export const useLoginUser = create<UserState & UserActions>((set) => ({
  isLoggedIn: false,
  user: undefined,
  token: "",

  // * Actions
  loginUser: async (email: string, password: string): Promise<boolean> => {
    try {
      const { data } = await chibalApi.post("/user/login", {
        email,
        password,
      });
      const { token, user } = data;
      Cookies.set("token", token);
      Cookies.set("user", JSON.stringify(user));
      set({ user, isLoggedIn: true });
      return true;
    } catch (error) {
      return false;
    }
  },

  checkToken: async () => {
    if (!Cookies.get("token")) {
      return false;
    }

    try {
      const { data } = await chibalApi.get("/user/validate-token");

      const { token, user } = data;
      Cookies.set("token", token);
      set({ user, isLoggedIn: true });
      return true;
    } catch (error) {
      Cookies.remove("token");
      set({ user: undefined, isLoggedIn: false });
      return false;
    }
  },

  logout: async () => {
    Cookies.remove("token");
    set({ user: undefined, isLoggedIn: false });
  },
}));
