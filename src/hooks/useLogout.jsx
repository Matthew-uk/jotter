import { jotterAuth } from "../firebase/firebaseConfig";
import { useAuthContext } from "./useAuthContext";

export const useLogOut = () => {
  const { dispatch } = useAuthContext();

  const logOut = () => {
    dispatch({ type: "LOG_OUT" });
    jotterAuth.signOut();
  };
  return { logOut };
};
