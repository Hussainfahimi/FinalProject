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
                <div className="driver-table">
                <div className="driver-registration">
                        <button type="submit" className="driver-btn" ><Link to="/driverForm" className="FormField__Link rigister">Register as Driver</Link></button>
                    </div>
                    <hr />
                    <div className="driver-available"><h2>Available Drivers:</h2></div>
                    

                    <div className="available-driver">

                        <div className="card-group">
                            <div className="card">
                                <div className="card-body">


                                    {this.state.Driver.map(driver => (
                                        <div key={driver._id}>

                                            <strong>
                                                <h3 className="card-title"> {"Name: " + driver.fullName}<br /></h3>

                                                <h5 className="card-text"> {"Email: " + driver.email}<br /></h5>

                                                <h5 className="card-text">  {"Phone: " + driver.phone}<br /></h5>

                                                <h5 className="card-text">  {"Trip Info: " + driver.trip}<br /></h5>

                                                <h5 className="card-text"> {"Car Info: " + driver.car}<br /></h5>


                                            </strong>
                                            <hr />
                                        </div>
                                    ))}



                                </div>


                            </div>

                        </div>

                    </div>

                </div>


            </div>
        );
    }
}


export default Home;

