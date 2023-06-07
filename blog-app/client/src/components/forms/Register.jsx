import React, { useState } from "react";
import "./Register.css";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  let navigate = useNavigate();

  function signupHandler(e) {
    e.preventDefault();
    axios
      .post("https://blog-server-production-27a6.up.railway.app/api/users/", {
        name: name,
        email: email,
        password: password,
      })
      .then(function (response) {
        console.log(response);
        // Do something with the response here, such as redirect to a new page or display a success message
        navigate("/profile");
      })
      .catch(function (error) {
        console.log(error);
        // Handle the error here, such as displaying an error message to the user or logging the error
      });
  }

  function changeNameHandler(e) {
    setName(e.target.value);
  }

  function changeEmailHandler(e) {
    setEmail(e.target.value);
  }

  function changePasswordHandler(e) {
    setPassword(e.target.value);
  }

  function changePasswordHandler2(e) {
    if (password === e.target.value) {
      setPassword2(e.target.value);
    }
  }

  return (
    <>
      <div className="register-container">
        <form onSubmit={signupHandler} className="register-form">
          <h1>Register</h1>
          <input type="text" placeholder="Name" onChange={changeNameHandler} />
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
          <input
            type="password"
            placeholder="Retype Password"
            onChange={changePasswordHandler2}
          />
          <button className="register-btn">Submit</button>
          <p className="p-login">
            Already have an account?
            <Link to="/login">
              <span>Login here</span>
            </Link>
          </p>
        </form>
      </div>
    </>
  );
}

export default Register;
