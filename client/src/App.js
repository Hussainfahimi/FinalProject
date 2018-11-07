import React, { Component } from 'react';
import { HashRouter as Router, Route, NavLink } from 'react-router-dom';
import SignUpForm from './pages/SignUpForm';
import SignInForm from './pages/SignInForm';






import './App.css';

class App extends Component {
  render() {
    return (
      <Router basename="/react-auth-ui/">
        <div className="App">
          <div className="App__Aside">
            <div className="userSide">
            
              <div className="col-md-8">
                <h3>Register as User</h3><hr></hr>
              </div>
              
            </div>
            
          </div>
          
          <div className="App__Form">
            <div className="PageSwitcher">
              <NavLink to="/sign-in" activeClassName="PageSwitcher__Item--Active" className="PageSwitcher__Item">Sign In</NavLink>
              <NavLink exact to="/" activeClassName="PageSwitcher__Item--Active" className="PageSwitcher__Item">Sign Up</NavLink>
            </div>
            <div className="headerText">
              <div className="col-md-4">

                <h3>Register as Driver</h3>
              </div>
            </div><hr></hr>
            <div className="space">
            </div>
            <div className="FormTitle">
              <NavLink to="/sign-in" activeClassName="FormTitle__Link--Active" className="FormTitle__Link"><h5>Sign In</h5></NavLink> or <NavLink exact to="/" activeClassName="FormTitle__Link--Active" className="FormTitle__Link"><h5>Sign Up</h5></NavLink>
            </div>

            <Route exact path="/" component={SignUpForm}>
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
