import React from "react";
import "./nav.css";
import { Link } from "react-router-dom";
import { useAuthContext } from "../../hooks/useAuthContext";
import { useLogOut } from "../../hooks/useLogout";

const Nav = () => {
  const { user } = useAuthContext();
  const { logOut } = useLogOut();

  return (
    <div className="nav-container">
      <div className="nav">
        <div className="nav-logo">Jotter</div>
        <div className="nav-list">
          <ul>
            {user ? (
              <span
                style={{ cursor: "pointer" }}
                className="link"
                onClick={logOut}
              >
                Log Out
              </span>
            ) : (
              <>
                <Link className="link" to="/login">
                  Login
                </Link>
                <Link className="link" to="/signup">
                  Sign Up
                </Link>
              </>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Nav;
