import React from 'react';

import Routing from './Routing/Router';
import Header from './components/Header/Header.jsx';

function App() {
  return (
    <div id="root" className="App">
      <Header />
      <Routing />
    </div>
  );
}

export default App;
