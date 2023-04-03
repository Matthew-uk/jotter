import { useState } from "react";
import { jotterAuth, jotterStore } from "../firebase/firebaseConfig";
import { useAuthContext } from "./useAuthContext";

export const useSignUp = () => {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const { user, dispatch } = useAuthContext();
  // const createdAt = Timestamp.fromDate();

  const signUp = async (email, password, displayName) => {
    try {
      setLoading(true);
      setError(null);
      const res = await jotterAuth.createUserWithEmailAndPassword(
        email,
        password
      );
      await res.user.updateProfile({ displayName });
      jotterStore.collection("Users").add({ displayName, email, password });
      dispatch({ type: "LOGIN", payload: res.user });
      setLoading(false);
      console.log(user);
    } catch (err) {
      setError(err);
    }
  };
  return {
    signUp,
    error,
    loading,
  };
};
