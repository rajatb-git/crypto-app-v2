import React, { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

import { FirebaseContext } from '../firebase';

const PrivateRoute = ({ component: Component, ...rest }) => {
  const user = useContext(FirebaseContext).getUser();

  return (
    <Route
      {...rest}
      render={(props) => ((user && user.uid) ? (<Component {...props} />) : (<Redirect to="/login" />))}
    />
  );
};

PrivateRoute.propTypes = {
  component: PropTypes.func,
};

export default PrivateRoute;
