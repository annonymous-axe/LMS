import { Navigate } from "react-router";
import { useAuth } from "./AuthContext";

export default function ProtectedRoute({ children, role }){

    const { isAuthenticated, user } = useAuth();

    console.log(isAuthenticated);
    console.log(user);
    

    if(!isAuthenticated) return <Navigate to="/pages/login" />

    if(role && user.role !== role){
        return <h1 className="text-center mt-10">Unauthorized 🚫</h1>;
    }

    return children;

}