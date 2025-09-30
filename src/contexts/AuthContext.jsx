import { createContext, useContext, useReducer } from "react";
import { authService } from "../services/authService";

const AuthContext = createContext();

const initialState = {
    user: authService.getCurrentUser(),
    isAuthenticated: authService.isAuthenticated()
}

function authReducer(state, action){

    switch(action.type){
        case "LOGIN":
            return {...state, user: action.payload, isAuthenticated: true};
        case "LOGOUT":
            return {...state, user: null, isAuthenticated: false};
        default:
            return state;
    }

}

export const AuthProvider = ({ children }) => {

    const [state, dispatch] = useReducer(authReducer, initialState);

    const login = (username, password) => {
        const user = authService.login(username, password);
        if (user) dispatch({type: "LOGIN", payload: user})
        return user;
    };

    const logout = () => {
        authService.logout();
        dispatch({type: "LOGOUT"});
    };

    return(
        <AuthContext.Provider value={{...state, login, logout}}>
            {children}
        </AuthContext.Provider>
    );
}

export const useAuth = () => useContext(AuthContext);