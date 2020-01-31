import React, { useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

// import app from 'firebase/app';
// import 'firebase/auth';

import Firebase from './components/Firebase/Firebase';

import Routing from './Routing/Router';
import Header from './components/Header/Header';
import { AuthContext } from './context/Auth';

function App() {
  // const config = {
  //   apiKey: process.env.FIREBASE_API_KEY,
  //   authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  //   databaseURL: process.env.FIREBASE_DATABASE_URL,
  //   projectId: process.env.FIREBASE_PROJECT_ID,
  //   storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  //   messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID
  // };

  // app.initializeApp(config);
  // const auth = app.auth();
  const firebase = new Firebase();
  const [authTokens, setAuthTokens] = useState(localStorage.getItem('tokens'));

  const setTokens = (data) => {
    localStorage.setItem('tokens', data);
    setAuthTokens(data);
  };

  return (
    <AuthContext.Provider value={{ authTokens, setAuthTokens: setTokens, firebase }}>
      <Router>
        <Header />
        <Routing />
      </Router>
    </AuthContext.Provider>
  );
}

export default App;
