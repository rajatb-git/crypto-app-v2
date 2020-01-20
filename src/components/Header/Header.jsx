import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { BrowserRouter as Router, Link } from 'react-router-dom';

const Header = () => (
  <Navbar bg="dark" variant="dark" expand="lg">
    <Navbar.Brand href="#home">Crypto App</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Router>
        <Nav className="mr-auto">
          <Link class="nav-link" to="/">Home</Link>
          <Link class="nav-link" to="/admin">Admin</Link>
        </Nav>
      </Router>
    </Navbar.Collapse>
  </Navbar>
);

export default Header;
