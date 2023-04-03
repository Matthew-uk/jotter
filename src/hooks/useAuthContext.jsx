import { useContext } from "react";
import { AuthContext } from "../context/authContext";

export const useAuthContext = () => {
  const context = useContext(AuthContext);
  if (context) {
    return context;
  } else {
    console.log("AuthContext used outside it's scope!!!");
  }
};
