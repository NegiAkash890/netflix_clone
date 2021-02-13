import React, { useState } from "react";
import "./Login.css";
import SignupScreen from "./SignupScreen";

function Login() {
  const [signIn, setSignIn] = useState(false);

  return (
    <div className="loginScreen">
      <div className="login_background">
        <img
          className="login_logo"
          src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
        />
        <button className="login_btn" onClick={() => setSignIn(true)}>
          SIGN IN
        </button>
        <div className="login_gradient"></div>
      </div>
      <div className="login_body">
        {signIn ? (
          <SignupScreen />
        ) : (
          <>
            <h1>Unlimited movies, TV shows and more.</h1>
            <h2>Watch anywhere. Cancel anytime.</h2>
            <h3>
              Ready to watch? Enter your email to create or restart your
              membership.
            </h3>
            <div className="input_field">
              <form>
                <input placeholder="Email Address" name="email" type="email" />
                <button className="get_started" onClick={() => setSignIn(true)}>
                  Get Started
                </button>
              </form>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default Login;
