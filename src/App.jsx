/* eslint linebreak-style: ["error", "windows"] */
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import AboutScreen from './routes/About';
import BookingScreen from './routes/Booking';
import DetailScreen from './routes/Detail';
import HomeScreen from './routes/Home';
import ReservationScreen from './routes/Reservation';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route element={<AboutScreen />} path="/about" />
        <Route element={<BookingScreen />} path="/booking" />
        <Route element={<DetailScreen />} path="/models/:id" />
        <Route element={<ReservationScreen />} path="/reservation" />
        <Route element={<HomeScreen />} path="/models" />
        <Route index element={<HomeScreen />} />
        <Route
          element={
            <section className="flex-center"><div className="container text-center">404 Page not found</div></section>
          }
          path="*"
        />
      </Routes>
    </Router>
  );
}

export default App;
