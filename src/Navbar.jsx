import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav style={{ textAlign: "center" }}>
    <NavLink to="/">Home</NavLink> |{"  "}
    <NavLink to="contact">Contact</NavLink>|{"  "}
    <NavLink to="cardComponent">Cards</NavLink>|{"  "}
    <NavLink to="login">Login</NavLink>
</nav>

  );
};

export default Navbar;