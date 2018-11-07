
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import App from '../App';

        class nav extends Component {
            render(){
                return(
            <div className="PageSwitcher">
              <NavLink to="/sign-in" activeClassName="PageSwitcher__Item--Active" className="PageSwitcher__Item">Sign In</NavLink>
              <NavLink exact to="/sign-up" activeClassName="PageSwitcher__Item--Active" className="PageSwitcher__Item">Sign Up</NavLink>
            </div>
                );
            }

        }