import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import Routing from './Routing/Router';
import { Header } from './components';
import Firebase, { FirebaseContext } from './firebase';

const App = () => (
  <FirebaseContext.Provider value={new Firebase()}>
    <Router>
      <Header />
      <Routing />
    </Router>
  </FirebaseContext.Provider>
);

export default App;
