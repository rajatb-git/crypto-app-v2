import React from 'react';
import { Link, useHistory } from 'react-router-dom';

import { FirebaseContext } from '../../firebase';
import './Header.scss';

const Header = () => {
  const history = useHistory();

  const logout = (firebase) => {
    firebase.doSignOut();
    history.push('/login');
  };

  return (
    <FirebaseContext.Consumer>
      {
      firebase => (
        <nav className="navbar">
          <div className="navbar__brand">
            <a className="navbar__brand--link" href="#home">Crypto App</a>
          </div>
          <div />
          <div className="navbar__actions">
            {firebase.getUser() ? (
              <>
                <Link className="navbar__actions--link" to="/news">News</Link>
                <button type="button" className="navbar__actions--button" onClick={() => logout(firebase)}>Logout</button>
              </>
            ) : ''}
          </div>
        </nav>
      )
    }
    </FirebaseContext.Consumer>
  );
};

export default Header;
