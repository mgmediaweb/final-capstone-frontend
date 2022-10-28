import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import store from '../redux/store';
import AboutScreen from '../routes/About';
import NewScreen from '../routes/admin/New';
import LoginScreen from '../routes/Login';
import SignupScreen from '../routes/Signup';
import Navbar from '../components/navbar/Navbar';

describe('Testing component rednering propperly', () => {
  test('renders About screen', () => {
    const tree = render(
      <BrowserRouter>
        <Provider store={store}>
          <AboutScreen />
        </Provider>
      </BrowserRouter>,
    );
    expect(tree).toMatchSnapshot();
  });
  test('renders Navbar component', () => {
    const tree = render(
      <BrowserRouter>
        <Provider store={store}>
          <Navbar />
        </Provider>
      </BrowserRouter>,
    );
    expect(tree).toMatchSnapshot();
  });
  test('renders New screen', () => {
    const tree = render(
      <BrowserRouter>
        <Provider store={store}>
          <NewScreen />
        </Provider>
      </BrowserRouter>,
    );
    expect(tree).toMatchSnapshot();
  });
  test('renders Login screen', () => {
    const tree = render(
      <BrowserRouter>
        <Provider store={store}>
          <LoginScreen />
        </Provider>
      </BrowserRouter>,
    );
    expect(tree).toMatchSnapshot();
  });
  test('renders Signup screen', () => {
    const tree = render(
      <BrowserRouter>
        <Provider store={store}>
          <SignupScreen />
        </Provider>
      </BrowserRouter>,
    );
    expect(tree).toMatchSnapshot();
  });
});
