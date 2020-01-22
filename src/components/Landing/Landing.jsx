import React from 'react';
import Button from 'react-bootstrap/Button';

import { useAuth } from '../../context/Auth';

const Landing = () => {
  const { setAuthTokens } = useAuth();

  const logOut = () => {
    setAuthTokens();
  };

  return (
    <div>
      <h2>Landing</h2>
      <Button onClick={logOut}>Logout</Button>
    </div>
  );
};

export default Landing;
