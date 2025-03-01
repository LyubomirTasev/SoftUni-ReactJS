import { useContext } from "react";
import { login } from "../api/auth-api"
import { AuthContext } from "../context/AuthContext";

export const useLogin = () => {
    const {changeAuthState} = useContext(AuthContext);

    const loginHandler = async (email, password) => {
           const result = await login(email, password);
           changeAuthState(result);

           return result;
    }

    return loginHandler;
}

export const useRegister = () => {
    const {changeAuthState} = useContext(AuthContext);

    const registerHandler = async (email, password) => {
        const result = await register(email, password);
        changeAuthState(result);

        return result;
    }

    return registerHandler;
}

export const useLogout = () => {
    const {logout} = useContext(AuthContext);

    const logoutHandler = () => {
        
        logout();
    }

    return logoutHandler;
}