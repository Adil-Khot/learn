import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import classes from "./Login.module.css";

const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const history = useNavigate();

  const onLoginClicked = () => {
    alert("Login Clicked");
  };

  return (
    <div className={classes.LoginBox}>
      <h1>Log In</h1>
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
      <hr />

      <button onClick={onLoginClicked} disabled={!email || !password}>
        Log In
      </button>
      <button
        onClick={() => {
          history.push("/forgot-password");
        }}
      >
        Forgot your password?
      </button>
      <button>
        <Link to="/signup">Don't have an account yet? Sign Up</Link>
      </button>
    </div>
  );
};

export default LoginScreen;
