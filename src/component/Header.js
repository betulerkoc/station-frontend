import React, {useContext} from 'react';
import app from '../firebase';
import { Nav, Navbar} from "react-bootstrap";
import {Link} from "react-router-dom";
import { AuthContext } from '../context';
import logo from '../logo.svg';

function Header(){

  const { currentUser } = useContext(AuthContext);
  console.log(currentUser.email);
  console.log(currentUser.uid);

  return (
  <>
    <Navbar bg="dark" variant="dark">
      <Link to="/"><img src={logo} alt="logo" /></Link>
      <Navbar.Collapse className="justify-content-end">
        <Navbar.Text>
        {currentUser.email} <Link onClick={() => app.auth().signOut()}> Sign Out </Link>
        </Navbar.Text>
      </Navbar.Collapse>
    </Navbar>
  </>
  );
}

export default Header;
