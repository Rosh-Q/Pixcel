import React, { useState } from "react";
import "./form.css";

const SignIn = () => {
  const [formValue, setFormValue] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formValue);
  };

  const handleChange = (event) => {
    const {value, name}= event.target;
    setFormValue((preVal) => ({ ...preVal, [name]: value }));
  };

  return (
    <div id="signIn">
      <div className="form-container">
        <h1>Already have an account!</h1>
        <p>Log in to continue</p>
        <form className="ui form" onSubmit={handleSubmit}>
          <div className="field">
            <label>Email Address</label>
            <input
              name="email"
              placeholder="Johndoe@gmail.com"
              onChange={handleChange}
            />
          </div>
          <div className="field">
            <label>Password</label>
            <input
              name="password"
              placeholder="Password"
              onChange={handleChange}
            />
          </div>
          <button className="ui button">Login</button>
        </form>
      </div>
    </div>
  );
};
export default SignIn;
