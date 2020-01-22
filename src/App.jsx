import React, { useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import Routing from './Routing/Router';
import Header from './components/Header/Header';
import { AuthContext } from './context/Auth';

function App() {
  const [authTokens, setAuthTokens] = useState(localStorage.getItem('tokens'));

  const setTokens = (data) => {
    localStorage.setItem('tokens', data);
    setAuthTokens(data);
  };

  return (
    <AuthContext.Provider value={{ authTokens, setAuthTokens: setTokens }}>
      <Router>
        <Header />
        <Routing />
      </Router>
    </AuthContext.Provider>
  );
}

export default App;
