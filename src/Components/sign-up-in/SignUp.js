import React, { useState } from "react"
import "./form.css"

const SignUp = () => {
    const [formVal, setFormVal] = useState({
      fullName: "",
      email: "",
      password: "",
      confirmedPassword: "",
    });
  
    const handleChange = (event) => {
      const { value, name } = event.target;
      setFormVal((prev)=> ({...prev, [name]: value}))
    };
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(formVal)
    }
    return (
      <div id="signup">
        <div className="form-container">
          <h1>Hello!</h1>
          <p>Please signup to continue</p>
          <form className="ui form" onSubmit={handleSubmit} >
            <div className="field">
              <label>Full Name</label>
              <input name="fullName" placeholder="John Doe" onChange={handleChange} />
            </div>
            <div className="field">
              <label>Email Address</label>
              <input name="email" placeholder="Johndoe@gmail.com" onChange={handleChange} />
            </div>
            <div className="field">
              <label>Password</label>
              <input name="password" placeholder="Password" onChange={handleChange} />
            </div>
            <div className="field">
              <label>Confirm Password</label>
              <input name="confirmedPassword" placeholder="Confirm Password" onChange={handleChange} />
            </div>
            <button className="ui button">Sign up</button>
          </form>
        </div>
      </div>
    );
  };

export default SignUp
