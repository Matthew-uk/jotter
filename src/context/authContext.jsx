import { createContext, useEffect, useReducer, useState } from "react";
import { jotterAuth } from "../firebase/firebaseConfig";

export const AuthContext = createContext();
const initialState = {
  user: null,
  error: null,
  authIsReady: false,
};

const AuthReducer = (state, action) => {
  switch (action.type) {
    case "LOGIN":
      return { ...state, user: action.payload };
    case "LOG_OUT":
      return { ...state, user: null };
    case "AUTH_IS_READY":
      return { ...state, authIsReady: true, user: action.payload };
    default:
      return state;
  }
};

export const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AuthReducer, initialState);

  useEffect(() => {
    const unsub = jotterAuth.onAuthStateChanged((user) => {
      dispatch({
        type: "AUTH_IS_READY",
        payload: user,
      });
    });
    return unsub;
  }, []);
  return (
    <AuthContext.Provider value={{ ...state, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};
