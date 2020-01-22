import React, { useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import axios from 'axios';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import styles from './Login.scss';
import logoImg from '../../img/logo.png';
import { useAuth } from '../../context/Auth';

const Login = () => {
  const { authTokens, setAuthTokens } = useAuth();

  const [isLoggedIn, setLoggedIn] = useState(Boolean(authTokens));
  const [isError, setIsError] = useState(false);
  const [userName, setUserName] = useState(false);
  const [password, setPassword] = useState(false);

  const postLogin = () => {
    axios.post('http://localhost:3000/test', {
      userName, password
    }).then((result) => {
      if (result.status === 200) {
        setAuthTokens(result.data);
        setLoggedIn(true);
      } else {
        setIsError(true);
      }
    }).catch((e) => {
      setIsError(true);
    });
  };

  if (isLoggedIn) {
    return (<Redirect to="/" />);
  }

  return (
    <div>
      <Card className={styles.loginCard}>
        <Card.Img variant="top" src={logoImg} />
        <Card.Header style={{ textAlign: 'center' }}><h3>Crypto App</h3></Card.Header>
        <Card.Body>
          { isError && <p>The username or password provided were incorrect!</p> }
          <Form>
            <Form.Group controlId="formBasicEmail">
              <Form.Control
                type="email"
                placeholder="Email"
                onChange={(e) => {
                  setUserName(e.target.value);
                }}
              />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Control
                type="password"
                placeholder="Password"
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
            </Form.Group>

            <Button variant="primary" block onClick={postLogin}>Submit</Button>
          </Form>
        </Card.Body>
        <Card.Footer className="text-muted">
          <Link to="/signup">Don't have an account?</Link>
        </Card.Footer>
      </Card>
    </div>
  );
};

export default Login;
