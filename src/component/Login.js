import React, { useCallback, useContext } from "react";
import { withRouter, Redirect } from "react-router";
import app from "../firebase";
import { AuthContext } from '../context';
import {Link} from "react-router-dom";

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

  if (currentUser) {
    return <Redirect to="/" />;
  }

  return (
    <div>
      <h1>Log in</h1>
      <form onSubmit={handleLogin}>
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
        <button type="submit">Log in</button>
        <br/>
      </form>
         <label>Don't you have an account<Link to="/signup"> Sign Up</Link></label>
    </div>
  );
};

export default withRouter(Login);