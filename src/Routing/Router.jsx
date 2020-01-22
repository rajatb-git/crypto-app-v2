import React from 'react';
import { Route } from 'react-router-dom';

import PrivateRoute from './PrivateRoute';
import Landing from '../components/Landing/Landing';
import Login from '../pages/Login/Login';
import Signup from '../pages/Signup';
import FormContainer from '../components/Form/FormContainer';

const Routing = () => (
  <div>
    <PrivateRoute exact path="/" component={Landing} />
    <Route exact path="/login" component={Login} />
    <Route exact path="/signup" component={Signup} />
    <PrivateRoute path="/admin" component={FormContainer} />
  </div>
);

export default Routing;
