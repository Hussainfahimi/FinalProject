import React, { Component } from 'react';
import { Redirect, HashRouter as Router, Route, NavLink, Link } from 'react-router-dom';
import axios from 'axios';


class SignInForm extends Component {
    constructor() {
        super();

        this.state = {
            email: '',
            password: '',
            redirect: false
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        let target = e.target;
        let value = target.type === 'checkbox' ? target.checked : target.value;
        let name = target.name;

        this.setState({
            [name]: value
        });
    }

    handleSubmit(e) {
        e.preventDefault();

        console.log('The form was submitted with the following data:');
        console.log(this.state);
        axios.post("/api/user/signin", {
            email: this.state.email,
            password: this.state.password
        }).then(response => {
            console.log(response);
            if (response.data && response.data[0] && response.data[0]._id && (response.data[0]._id.length > 0)) {
                console.log("yes");
                this.setState({ redirect: true });
            }
            else {
                console.log("no")
            }
        }).catch(error => {
            console.log(error);
        });
    }

    render() {

        if (this.state.redirect) {
            return (<Redirect to="/home"></Redirect>)
        }
        else {

            return (
            <div className="App">
                <div className="App__Aside">
                    <div className="userSide"></div>
                </div>
                <div className="App__Form">
                    <div className="PageSwitcher">
                        <NavLink to="/sign-in" activeClassName="PageSwitcher__Item--Active" className="PageSwitcher__Item">Sign In</NavLink>
                        <NavLink exact to="/sign-up" activeClassName="PageSwitcher__Item--Active" className="PageSwitcher__Item">Sign Up</NavLink>
                    </div>
                    <div className="headerText">
                        <div className="col-md-4">
        
                            <h3>Welcome to Fellow Traveler</h3>
                        </div>
                    </div><hr></hr>
                    <div className="space"></div>
                    <div className="FormCenter">
                        <form onSubmit={this.handleSubmit} className="FormFields">
                            <div className="FormField">
                                <label className="FormField__Label" htmlFor="email">E-Mail Address</label>
                                <input type="email" id="email" className="FormField__Input" placeholder="Enter your email" name="email" value={this.state.email} onChange={this.handleChange} />
                            </div>

                            <div className="FormField">
                                <label className="FormField__Label" htmlFor="password">Password</label>
                                <input type="password" id="password" className="FormField__Input" placeholder="Enter your password" name="password" value={this.state.password} onChange={this.handleChange} />
                            </div>

                            <div className="FormField">
                                <button id="main-signIn" type="submit" className="FormField__Button mr-20">Sign In</button> <Link to="/" className="FormField__Link">Create an account</Link>
                            </div>
                        </form>
                    </div>
                </div>
            </div>   

            );

        }
    }
    
}

export default SignInForm;
