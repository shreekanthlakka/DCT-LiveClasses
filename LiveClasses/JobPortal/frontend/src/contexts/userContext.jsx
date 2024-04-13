import { createContext, useContext, useReducer } from "react";
import { loginApi } from "../services/userApiServices";
const initialState = {
    user: {},
    isLoading: false,
    errors: [],
};

const userContext = createContext();

function userReducer(state, action) {
    switch (action.type) {
        case "start":
            return { ...state, isLoading: true, errors: [] };
        case "fetchData":
            return { ...state, user: action.payload, isLoading: false };
        case "error":
            return { ...state, errors: action.payload, isLoading: false };
        case "default":
            return state;
    }
}

function UserContextProvider({ children }) {
    const [{ user, isLoading, errors }, dispatch] = useReducer(
        userReducer,
        initialState
    );

    const login = async (username, password) => {
        try {
            dispatch({ type: "start" });
            const user = await loginApi(username, password);
            if (user.success) {
                dispatch({ type: "fetchData", payload: user.user });
            }
            return user;
        } catch (error) {
            dispatch({ type: "error", payload: error.message });
        }
    };

    const value = {
        user,
        isLoading,
        errors,
        login,
    };

    return (
        <userContext.Provider value={value}>{children}</userContext.Provider>
    );
}

function useUser() {
    const context = useContext(userContext);
    if (!context) {
        throw new Error("user context is used outside its scope");
    }
    return context;
}

export { UserContextProvider, useUser };
