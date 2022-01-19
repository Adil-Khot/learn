import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import classes from "./Login.module.css";

const SignupScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const history = useNavigate();

  const onSignupClicked = () => {
    alert("Signup Clicked");
  };

  return (
    <div className={classes.LoginBox}>
      <h1>Sign Up</h1>
      {errorMessage && <div className={classes.fail}>{errorMessage}</div>}

      <input
        value={email}
        placeholder="youremail@xyz.com"
        onChange={(e) => {
          setEmail(e.target.value);
        }}
      ></input>

      <input
        value={password}
        type="password"
        placeholder="password"
        onChange={(e) => {
          setPassword(e.target.value);
        }}
      ></input>

      <input
        value={confirmPassword}
        type="password"
        placeholder="Confirm password"
        onChange={(e) => {
          setConfirmPassword(e.target.value);
        }}
      ></input>
      <hr />

      <button
        onClick={onSignupClicked}
        disabled={!email || !password || password != confirmPassword}
      >
        Sign Up
      </button>
      <button>
        <Link to="/login">Already have an account? Login</Link>
      </button>
    </div>
  );
};

export default SignupScreen;
