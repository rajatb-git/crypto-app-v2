import React, { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';

import './Login.scss';
import logoImg from '../../img/logo.png';
import { FirebaseContext } from '../../firebase';
import { Input, Card } from '../../components';

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
        if (user && user.uid) {
          setErrorMessage(null);
          history.push('/home');
        } else {
          setErrorMessage('Something went wrong!');
        }
      }).catch(error => {
        setErrorMessage(error);
      });
  };

  const footer = [{
    text: 'Login',
    onClick: (e) => signIn(e)
  }];

  return (
    <div className="login">
      <Card heading="Crypto App" imgSrc={logoImg} footer={footer}>
        <div className="login__body">
          { errorMessage && <p className="login__error">{ errorMessage }</p> }
          <form className="form">
            <Input
              id="email"
              type="email"
              placeholder="Email"
              defaultValue="testuser@test.com"
            />

            <Input
              id="password"
              type="password"
              placeholder="Password"
              defaultValue="helloworld"
            />

            {/* <Button onClick={(e) => signIn(e)} text="Submit" /> */}
          </form>
        </div>
      </Card>
    </div>
  );
};

export default Login;
