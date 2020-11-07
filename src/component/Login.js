import React, { useCallback, useContext } from "react";
import { withRouter, Redirect } from "react-router";
import app from "../firebase";
import { AuthContext } from '../context';
import {Link} from "react-router-dom";
import { Button, FormGroup, FormControl, Container } from "react-bootstrap";

const Login = ({ history }) => {
  const handleLogin = useCallback(
    async event => {
      event.preventDefault();
      const { email, password } = event.target.elements;
      try {
        await app
          .auth()
          .signInWithEmailAndPassword(email.value, password.value);
        history.push("/");
      } catch (error) {
        alert(error);
      }
    },
    [history]
  );

  const { currentUser } = useContext(AuthContext);
  console.log(currentUser);

  if (currentUser) {
    return <Redirect to="/" />;
  }

  return (
    <Container>
       <form onSubmit={handleLogin}>
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
                Login
              </Button>
            </form>
            <label>Don't you have an account<Link to="/signup"> Sign Up</Link></label> 
    </Container>    
  );
};

export default withRouter(Login);