import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import './App.css';
import WelcomeNavbar from './components/WelcomeNavbar';
import HomeNavbar from './components/HomeNavbar';
import FeedbackForm from './components/FeedbackForm';
import About from './components/About';
import Signup from './pages/signup';
import Login from './pages/login';
import Welcome from './pages/welcome';
import Home from './pages/Home';
import Profile from './components/ProfilePage';
import ProfilePage from './components/ProfilePage';
import ContactUs from './components/Contactus';


const App = () => {
  const location = useLocation(); // Now this will work

  return (
    <div>
      {/* Conditionally render navbar based on the route */}
      {location.pathname === '/' || location.pathname === '/login' || location.pathname === '/signup' ? (
        <WelcomeNavbar />
      ) : (
        <HomeNavbar />
      )}

      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/home" element={<Home />} />
        <Route path="/feedback" element={<FeedbackForm />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/about" element={<About />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/contactus" element={<ContactUs />} />


      </Routes>
    </div>
  );
};

const WrappedApp = () => (
  <Router>
    <App />
  </Router>
);

export default WrappedApp;
