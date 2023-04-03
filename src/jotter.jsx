import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LandingPage from "./pages/landingPage/landingPage";
import Login from "./pages/login/login";
import SignUp from "./pages/signUp/signUp";
import Dashboard from "./pages/dashboard/dashboard";
import { useAuthContext } from "./hooks/useAuthContext";
import Loading from "./components/loading/loading";

const Jotter = () => {
  const { user, authIsReady } = useAuthContext();
  return (
    <BrowserRouter>
      {!authIsReady ? (
        <Loading />
      ) : (
        <Routes>
          <Route path="/" Component={user ? Dashboard : LandingPage} />
          <Route path="/login" Component={user ? Dashboard : Login} />
          <Route path="/signup" Component={user ? Dashboard : SignUp} />
        </Routes>
      )}
    </BrowserRouter>
  );
};

export default Jotter;
