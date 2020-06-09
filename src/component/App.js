import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import PrivateRoute from './PrivateRoute';
import {AuthProvider} from '../context';
import SignUp from './SignUp';
import Login from './Login';
import Map from './Map';

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
  // <div>
  //   <User/>
  // </div>
  );
}

export default App;
