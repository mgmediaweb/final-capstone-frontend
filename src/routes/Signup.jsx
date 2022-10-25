/* eslint linebreak-style: ["error", "windows"] */
import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/button/Button';

function Signup() {
  const name = useRef();
  const email = useRef();
  const password = useRef();
  const loginForm = useRef();

  const sendForm = async () => {
    const signupOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(
        {
          name: name.current.value.trim(),
          email: email.current.value.trim(),
          password: password.current.value,
        },
      ),
    };

    await fetch('https://elsonotake-backend.herokuapp.com/api/v1/users', signupOptions);

    const loginOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(
        {
          name: name.current.value.trim(),
          password: password.current.value,
        },
      ),
    };

    const dataResponse = await fetch('https://elsonotake-backend.herokuapp.com/api/v1/auth/login', loginOptions);
    const userData = await dataResponse.json();
    localStorage.setItem('current_user', JSON.stringify(userData));
    window.location.href = '/';
  };

  return (
    <div className="container page-login">
      <form action="#" className="login-form" method="POST" id="signup-form" ref={loginForm}>
        <h2>SIGNUP</h2>
        <div className="add-padding-below">
          <input
            ref={name}
            type="text"
            id="name"
            name="name"
            className="form-field"
            placeholder="Name"
            required
          />
        </div>

        <div className="add-padding-below">
          <input
            ref={email}
            type="email"
            id="email"
            name="email"
            className="form-field"
            placeholder="Email"
            required
          />
        </div>

        <div className="add-padding-below">
          <input
            ref={password}
            type="text"
            id="password"
            name="password"
            className="form-field"
            placeholder="Password"
            required
          />
        </div>

        <p className="signin-message">
          Already have an account?
          <Link to="/login">
            LOGIN
          </Link>
        </p>

        <div className="form-bottom-bar">
          <Button
            btnAxn={sendForm}
            label="Signup"
            size="main"
            color="dark"
          />
        </div>
      </form>

    </div>
  );
}

export default Signup;
