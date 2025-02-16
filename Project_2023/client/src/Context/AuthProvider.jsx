import { createContext, useState } from "react";

const AuthContext = createContext({});

export const AuthProvider = ({children}) => {
    const [auth, setAuth] = useState({});

    return (
        <AuthContext.Provider value={{auth, setAuth}}>
            {children} {/* components to be nested inside the Provider */}
        </AuthContext.Provider>
    )
}

export default AuthContext;

