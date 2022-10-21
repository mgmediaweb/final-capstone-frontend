import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/button/Button';

const sendForm = () => {
  /* PUT SOME VALIDATION HERE */
  document.getElementById('bookingForm').submit();
};

function Signup() {
  return (
    <div className="container page-login">
      <form action="#" className="login-form" method="POST">
        <h2>SIGNUP</h2>
        <div className="add-padding-below">
          <input
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
          <Link to="/signup">
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
