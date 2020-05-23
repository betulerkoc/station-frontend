import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import SignUp from './SignUp';
import Login from './Login';
import Map from './Map';
import {AuthProvider} from '../context';
import PrivateRoute from './PrivateRoute';

function App(){

  return (
  <AuthProvider>
   <Router>
       <div>
          <PrivateRoute exact path="/" component={Map} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={SignUp} />
       </div>
   </Router>
   </AuthProvider>
  );
}

export default App;
