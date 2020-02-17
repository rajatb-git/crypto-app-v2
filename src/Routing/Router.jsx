import React from 'react';
import { Route, Switch } from 'react-router-dom';

import News from '../components/News/News';
import Login from '../pages/Login/Login';
import Signup from '../pages/Signup';

const Routing = () => (
  <div>
    <Switch>
      <Route exact path="/" component={News} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/signup" component={Signup} />

      <Route component={News} />
    </Switch>
  </div>
);

export default Routing;
