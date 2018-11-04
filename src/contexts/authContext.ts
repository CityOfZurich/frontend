import { createContext } from "react";

export const AuthContext = createContext({
    isAuth: false,
    logIn: (value: string) => {}
})