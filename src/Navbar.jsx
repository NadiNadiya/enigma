import React from 'react';
import { NavLink } from 'react-router-dom';


const Navbar = () => {
  const navLinkStyle = {
    color: "white", 
    textDecoration: "none",  
    marginRight: "10px",  
  };
  
  return (
    <nav style={{ textAlign: "center", margin: "20px", background: "rgb(152, 100, 237)", padding: "10px", }}>
    <NavLink to="/" style={navLinkStyle}>Home</NavLink> |{"  "}
    <NavLink to="contact" style={navLinkStyle}>Contact</NavLink>|{"  "}
    <NavLink to="cardComponent" style={navLinkStyle}>Cards</NavLink>|{"  "}
    <NavLink to="login" style={navLinkStyle}>Login</NavLink>
</nav>


  );
};

export default Navbar;