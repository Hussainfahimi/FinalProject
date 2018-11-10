import React, { Component } from 'react';
import { HashRouter as Router, Route, NavLink } from 'react-router-dom';
import SignUpForm from './pages/SignUpForm';
import SignInForm from './pages/SignInForm';
import home from './pages/home';




import './App.css';

class App extends Component {
  render() {
    return (
      <Router basename="/react-auth-ui/">

        <div className="App">
          <div className="App__Aside">
            <div className="userSide">
              
            </div>
            
          </div>
          
          <div className="App__Form">
            <div className="PageSwitcher">
              <NavLink to="/sign-in" activeClassName="PageSwitcher__Item--Active" className="PageSwitcher__Item">Sign In</NavLink>
              <NavLink exact to="/SignUp" activeClassName="PageSwitcher__Item--Active" className="PageSwitcher__Item">Sign Up</NavLink>
            </div>
            <div className="headerText">
              <div className="col-md-4">

                <h3>Welcome to Fellow Traveler</h3>
              </div>
            </div><hr></hr>
            <div className="space">
            </div>
            <Route exact path="/SignUp" component={SignUpForm}>
            </Route>
            <Route  path="/home" component={home}>
            </Route>
            <Route path="/sign-in" component={SignInForm}>
            </Route>
          </div>

        </div>

      </Router>

    );
  }
  
}
export default App;
