/* eslint linebreak-style: ["error", "windows"] */
import { Link } from 'react-router-dom';
import Button from '../components/button/Button';
import './Login.scss';

const sendForm = () => {
  /* PUT SOME VALIDATION HERE */
  document.getElementById('bookingForm').submit();
};

const LoginScreen = () => (
  <div className="container page-login">

    <form action="#" className="login-form" method="POST">
      <h2>LOGIN</h2>

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
        Don&apos;t have an account yet?
        <Link to="/signup">
          SIGN UP
        </Link>
      </p>

      <div className="form-bottom-bar">
        <Button
          btnAxn={sendForm}
          label="Login"
          size="main"
          color="dark"
        />
      </div>
    </form>

  </div>
);

export default LoginScreen;
