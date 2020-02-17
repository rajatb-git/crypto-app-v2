import React from 'react';
import { Link } from 'react-router-dom';

import './Header.scss';

const Header = () => (
  <nav className="navbar">
    <div className="navbar__brand">
      <a className="navbar__brand--link" href="#home">Crypto App</a>
    </div>
    <div />
    <div className="navbar__actions">
      <Link className="navbar__actions--link" to="/news">News</Link>
    </div>
  </nav>
);

export default Header;
