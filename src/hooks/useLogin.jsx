import { useState } from "react";
import { jotterAuth } from "../firebase/firebaseConfig";
import { useAuthContext } from "./useAuthContext";

export const useLogin = () => {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const { dispatch } = useAuthContext();

  const login = async (email, password) => {
    try {
      setLoading(true);
      setError(null);
      const res = await jotterAuth.signInWithEmailAndPassword(email, password);
      dispatch({ type: "LOGIN", payload: res.user });
      setLoading(false);
    } catch (err) {
      setLoading(false);
      setError(err.message);
    }
  };
  return {
    error,
    loading,
    login,
  };
};
