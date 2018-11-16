import React, { Component } from 'react';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';
import Home from './pages/Home';
import SignUpForm from './pages/SignUpForm';
import SignInForm from './pages/SignInForm';
import DriverForm from './pages/driverForm';



import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/sign-up" component={SignUpForm}></Route>
          <Route exact path="/sign-in" component={SignInForm}></Route>
          <Route path="/home" component={Home}></Route>
          <Route path="/driverForm" component={DriverForm}></Route>
          
        </div>
      </Router>
    );

  }

}

export default App;
