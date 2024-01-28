import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './Login';
import Home from './Home';
import CardComponent from './CardComponent';
import Contact from './Contact';
import './App.css';
import Navbar from './Navbar';
import NotFound from './NotFound';
import MoreInfo from './MoreInfo';


const App = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [email, setEmail] = useState('');

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/login" element={<Login setLoggedIn={setLoggedIn} setEmail={setEmail} />} />
        <Route path="/" element={<Home loggedIn={loggedIn} email={email} />} />
        <Route path="cardComponent" element={<CardComponent />} />
        <Route path="contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/MoreInfo/:index" element={<MoreInfo />} />

      </Routes>
    </Router>
  );
};

export default App;
