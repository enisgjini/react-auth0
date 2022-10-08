import React from "react";
import "../App.css"
import { useAuth0 } from "@auth0/auth0-react";

const LoginButton = () => {
  const { loginWithRedirect, isAuthenticated } = useAuth0();

  return (
    !isAuthenticated && (
      <div className="login-form">
        <h1>Quiz Game by Enis Gjini</h1>
        <hr />
        <h1 class="waving-hand">👋</h1>
        <p>If you want to play you need to be log in or sign up</p>
        <button className="buttons-of-form" onClick={() => loginWithRedirect()}>
          Log In
        </button>
      </div>
    )
  );
};

export default LoginButton;
