import "./Signin.css";
import { useContext } from "react";
import { UserContext } from "../../App";
import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import { Link } from "react-router-dom";

function Signin() {
  const { setUser } = useContext(UserContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  let navigate = useNavigate();

  function signupHandler(e) {
    e.preventDefault();
    axios
      .post("https://blog-server-production-27a6.up.railway.app/api/users/login", {
        email: email,
        password: password,
      })
      .then(function (response) {
        console.log(response, "this is the response");
        setUser(response.data);

        // Do something with the response here, such as redirect to a new page or display a success message
        navigate("/profile");
      })
      .catch(function (error) {
        console.log(error);
        // Handle the error here, such as displaying an error message to the user or logging the error
      });
  }

  function changeEmailHandler(e) {
    setEmail(e.target.value);
  }

  function changePasswordHandler(e) {
    setPassword(e.target.value);
  }
  return (
    <>
      <div className="login-container">
        <form onSubmit={signupHandler} className="register-form">
          <h1>Login</h1>

          <input
            type="email"
            placeholder="Email"
            onChange={changeEmailHandler}
          />
          <input
            type="password"
            placeholder="Password"
            onChange={changePasswordHandler}
          />
          <button className="register-btn">Submit</button>
          <p>
            Don't have an account?{" "}
            <Link to="/signup" className="link">
              Register here
            </Link>
          </p>
        </form>
      </div>
    </>
  );
}

export default Signin;
