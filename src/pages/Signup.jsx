import React from 'react';
import { Link } from 'react-router-dom';

import logoImg from '../img/logo.png';
import Input from '../components/Input/Input';

const Signup = () => (
  // <div className="signup">
  //   <Logo src={logoImg} />
  //   <Form>
  //     <Input type="email" placeholder="email" />
  //     <Input type="password" placeholder="password" />
  //     <Input type="password" placeholder="password again" />
  //     <Button>Sign Up</Button>
  //   </Form>
  //   <Link to="/signup">Already have an account?</Link>
  // </div>
  <div className="signup">
    {/* <div className="signup__img"><img src={logoImg} alt="Logo" /></div>
    <div className="signup__header"><h3>Crypto App</h3></div>
    <div className="signup__body">
      <p className="signup__error">{ errorMessage && <p>{ errorMessage }</p> }</p>
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
    <div className="signup__footer">
      <Link to="/signup">Don't have an account?</Link>
    </div> */}
  </div>
);

export default Signup;
