import React, { useCallback } from "react";
import { withRouter } from "react-router";
import {Link} from "react-router-dom";
import app from "../firebase";
import { Button, FormGroup, FormControl, ControlLabel, Container } from "react-bootstrap";

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
    <form onSubmit={handleSignUp}>
            <FormGroup controlId="email" bsSize="large">
              <h2>Email</h2>
              <FormControl
                autoFocus
                type="email"
                name="email"
                placeholder="Email" 
              />
            </FormGroup>
            <FormGroup controlId="password" bsSize="large">
              <h2>Password</h2>
              <FormControl
                name="password"
                type="password" 
                placeholder="Password"
              />
            </FormGroup>
            <Button type="submit">
            Sign Up
            </Button>
          </form>
          <label>Do you have an account<Link to="/login"> Login</Link></label>
    </Container>
  );
};

export default withRouter(SignUp);