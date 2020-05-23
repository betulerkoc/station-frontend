import React, { useCallback } from "react";
import { withRouter } from "react-router";
import {Link} from "react-router-dom";
import app from "../firebase";
import Container from 'react-bootstrap/Container';

const SignUp = ({ history }) => {
  const handleSignUp = useCallback(async event => {
    event.preventDefault();
    const { email, password } = event.target.elements;
    try {
      await app
        .auth()
        .createUserWithEmailAndPassword(email.value, password.value);
      history.push("/");
    } catch (error) {
      alert(error);
    }
  }, [history]);

  return (
    <Container>
      <h1>Sign up</h1>
      <form onSubmit={handleSignUp}>
        <label>
          Email:
          <input name="email" type="email" placeholder="Email" />
        </label>
        <br/>
        <label>
          Password:
          <input name="password" type="password" placeholder="Password" />
        </label>
        <br/>
        <button type="submit">Sign Up</button>
      </form>
      <label>Do you have an account<Link to="/login"> Login</Link></label>
    </Container>
  );
};

export default withRouter(SignUp);