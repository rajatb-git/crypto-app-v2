import React, { useState, useContext } from 'react';
import { Link, useHistory } from 'react-router-dom';

import './Login.scss';
import logoImg from '../../img/logo.png';
import { FirebaseContext } from '../../firebase';
import Input from '../../components/Input/Input';

const Login = () => {
  // const { authTokens, setAuthTokens } = useAuth();
  const firebase = useContext(FirebaseContext);
  const [errorMessage, setErrorMessage] = useState(null);
  const history = useHistory();

  if (firebase.getUser()) {
    history.push('/news');
  }

  const signIn = async e => {
    e.preventDefault();

    await firebase
      .doSignInWithEmailAndPassword(
        document.getElementById('email').value,
        document.getElementById('password').value
      )
      .then(user => {
        if (user.uid) {
          setErrorMessage(null);
          history.push('/home');
        } else {
          setErrorMessage('Something went wrong!');
        }
      }).catch(error => {
        setErrorMessage(error);
      });
  };

  return (
    <div className="login">
      <div className="login__img"><img src={logoImg} alt="Logo" /></div>
      <div className="login__header"><h3>Crypto App</h3></div>
      <div className="login__body">
        <p className="login__error">{ errorMessage && <p>{ errorMessage }</p> }</p>
        <form className="form">
          <Input
            id="email"
            type="email"
            placeholder="Email"
          />

          <Input
            id="password"
            type="password"
            placeholder="Password"
          />

          <button className="form__submit" onClick={(e) => signIn(e)} type="button">Submit</button>
        </form>
      </div>
      <div className="login__footer">
        <Link to="/signup">Don't have an account?</Link>
      </div>
    </div>
  );
};

export default Login;
