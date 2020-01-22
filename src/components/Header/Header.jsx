import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';

const Header = () => (
  <Navbar bg="dark" variant="dark" expand="lg">
    <Navbar.Brand href="#home">Crypto App</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="mr-auto">
        <Link className="nav-link" to="/">Home</Link>
        <Link className="nav-link" to="/admin">Admin</Link>
        <Link className="nav-link" to="/signup">Signup</Link>
        <Link className="nav-link" to="/login">Login</Link>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
);

export default Header;
