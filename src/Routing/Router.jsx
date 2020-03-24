import React from 'react';
import { Route, Switch } from 'react-router-dom';
import PrivateRoute from './PrivateRoute';

import { News, Login, Signup } from '../pages';

const Routing = () => (
  <div>
    <Switch>
      <PrivateRoute exact path="/" component={News} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/signup" component={Signup} />

      <PrivateRoute component={News} />
    </Switch>
  </div>
);

export default Routing;
