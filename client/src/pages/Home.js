import React, { Component } from 'react';
import { Redirect, Link } from 'react-router-dom';
import driverForm from './driverForm';
import axios from 'axios';

import './home.css';

class Home extends Component {
    constructor() {
        super();

        this.state = {
            redirect: false,
            Driver: []
        };


    }
    componentDidMount() {
        if (window.localStorage.getItem('authorized') === 'true') {
            this.setState({ redirect: false })
        } else {
            this.setState({ redirect: true })
        }

        axios.get("/api/user/alldrivers").then(res =>
            this.setState({ Driver: res.data })
        )
            .catch(err => console.log(err));

    }
    render() {
        if (this.state.redirect) {
            return (<Redirect to="/sign-in"></Redirect>)
        }
        return (
            <div>
                <div className="row-md-10">
                    <div className="col-md-8"><h2>Available Drivers:</h2></div>

                    <div className="available-driver">
                
                        {this.state.Driver.map(driver => (
                            <div key={driver._id}>
                                
                                    <strong>
                                        {"Name: " + driver.fullName}<br />
                                        
                                        {"Email: " + driver.email}<br />
                                        {"Phone: " + driver.phone}<br />

                                        {"Trip Info: " + driver.trip}<br />

                                        {"Car Info: " + driver.car}<br />
                                       
                                       
                                    </strong>
                                    <hr />
                        
                            </div>
                        ))}

                    </div>

                </div>

                <div className="driver-registration">
                    <button type="submit" className="driver-btn" ><Link to="/driverForm" className="FormField__Link">Register as Driver</Link></button>
                </div>
            </div>
        );
    }
}


export default Home;

