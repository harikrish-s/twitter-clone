import React, { useEffect, useState } from "react";
import './App.css';
import appleLogo from './assets/apple.png';
import googleLogo from './assets/google.png';

function Xlogin() {
  const [inputValue, setInputValue] = useState("");
  const [error, setError] = useState("");

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
    setError("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim() === "") {
      setError("Sorry, we could not find your account.");
      setTimeout(() => setError(""), 2000);
    } else {
      setError("");
    }
  };

  return (
    <div className="login-box">
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/5/57/X_logo_2023_%28white%29.png"
        alt="Logo"
        width="25px"
      />
      <h1>Sign in to X</h1>
      <button type="button" className="google-btn">
          <img src={googleLogo} alt="google-logo"/>
          Sign in with Google
        </button>
        <button type="button" className="google-btn">
          <img src={appleLogo} alt="apple-logo"/>
          Sign in with Apple
        </button>
        <hr></hr>
        <span>or</span>
        <p style={{ textAlign: "center" }}>or</p>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Phone, email address, or username"
            value={inputValue}
            onChange={handleInputChange}
          />
          <span className="error-message">{error}</span>
          <button className="google-btn" type="submit">Next</button>
        </form>
        <button className="fp-btn" type="submit">Forgot Password?</button>

        <div className="alt">
          <p>Don't have an account?
            <a href="https://twitter.com/i/flow/signup">Sign Up</a>
          </p>
        </div>
    </div>
  );
}

export default Xlogin;