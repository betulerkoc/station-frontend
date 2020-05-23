import React, {useContext} from 'react';
import app from '../firebase';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import {Link} from "react-router-dom";
import { AuthContext } from '../context';

function Header(){

  const { currentUser } = useContext(AuthContext);
  console.log(currentUser.email);

  return (
  <>
    <Navbar bg="dark" variant="dark">
      <Link to="/">Charging Station</Link>
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
