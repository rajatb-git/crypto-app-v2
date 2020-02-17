import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import Routing from './Routing/Router';
import Header from './components/Header/Header';
import { AuthContext } from './context/Auth';

const App = () => (
  <AuthContext.Provider>
    <Router>
      <Header />
      <Routing />
    </Router>
  </AuthContext.Provider>
);

export default App;
