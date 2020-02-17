import React, { useState } from 'react';
import { Link, Redirect } from 'react-router-dom';

import './Login.scss';
import logoImg from '../../img/logo.png';
import { useAuth } from '../../context/Auth';

const Login = () => {
  // const { authTokens, setAuthTokens } = useAuth();
  const { authActions } = useAuth();

  // const [isLoggedIn, setLoggedIn] = useState(Boolean(authTokens));
  const [isLoggedIn, setLoggedIn] = useState(authActions.isLoggedIn());
  const [isError, setIsError] = useState(false);

  let errorMsg = 'The username or password provided were incorrect!';

  const postLogin = () => {
    const [email, password] = [document.getElementById('email').value, document.getElementById('password').value];
    authActions.doSignInWithEmailAndPassword(email, password)
      .then((response) => {
        return response ? setLoggedIn(true) : setLoggedIn(false);
      })
      .catch((error) => {
        if (error) {
          errorMsg = error.message;
        }
        setLoggedIn(false);
        setIsError(true);
      });
    // axios.post('http://localhost:3000/test', {
    //   userName, password
    // }).then((result) => {
    //   if (result.status === 200) {
    //     setAuthTokens(result.data);
    //     setLoggedIn(true);
    //   } else {
    //     setIsError(true);
    //   }
    // }).catch((e) => {
    //   setIsError(true);
    // });
  };

  if (isLoggedIn) {
    return (<Redirect to="/" />);
  }

  return (
    <div>
      {/* <Card className="card">
        <Card.Img variant="top" src={logoImg} />
        <Card.Header style={{ textAlign: 'center' }}><h3>Crypto App</h3></Card.Header>
        <Card.Body>
          <p className="card__error">{ isError && <p>{ errorMsg }</p> }</p>
          <Form>
            <Form.Group controlId="formBasicEmail">
              <Form.Control
                id="email"
                type="email"
                placeholder="Email"
              />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Control
                id="password"
                type="password"
                placeholder="Password"
              />
            </Form.Group>

            <Button variant="primary" block onClick={postLogin}>Submit</Button>
          </Form>
        </Card.Body>
        <Card.Footer className="text-muted">
          <Link to="/signup">Don't have an account?</Link>
        </Card.Footer>
      </Card> */}
    </div>
  );
};

export default Login;
