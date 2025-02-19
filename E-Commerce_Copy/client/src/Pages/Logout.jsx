import { Navigate } from "react-router-dom";
import { useLogout } from "../Hooks/useAuth";

export default function Logout() {

    const logout = useLogout();
    logout();

    return <Navigate to="/" />
}