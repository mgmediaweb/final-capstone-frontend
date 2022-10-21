import { Link } from 'react-router-dom';

const LoginScreen = () => {
  const text = 'Admin';

  return (
    <div className="container page-reservation">
      <div className="info-container">
        <Link to="/admin">
          {text}
        </Link>
      </div>
    </div>
  );
};

export default LoginScreen;
