import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

import { useAuth } from '../context/Auth';

const PrivateRoute = ({ component: Component, ...rest }) => {
  const { authTokens } = useAuth();

  return (
    <Route
      {...rest}
      render={(props) => (authTokens ? (<Component {...props} />) : (<Redirect to="/login" />))}
    />
  );
};

PrivateRoute.propTypes = {
  component: PropTypes.func,
};

export default PrivateRoute;
