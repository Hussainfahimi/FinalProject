import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';


import './home.css';
class DriverForm extends Component {
    constructor() {
        super();

        this.state = {
            fullName: '',
            email: '',
            password: '',
            phone: '',
            car: '',
            trip: ''
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

        console.log('The form was submitted with the followig data:');
        console.log(this.state);

        //date: this.state.date,
        //time: this.state.time


        axios.post("/api/user/driverForm", {
            fullName: this.state.fullName,
            email: this.state.email,
            password: this.state.password,
            phone: this.state.phone,
            car: this.state.car,
            trip: this.state.trip
        }).then(response => {
            console.log(response);
        }).catch(error => { 
            console.log(error); 
        });
    }

    render() {
        return (

            <div className="FormCenter">
                <form onSubmit={this.handleSubmit} className="FormField">
                    <p>Complete the belw form and wait for passenger contact</p> <hr></hr>
                    <div className="FormField">
                        <label className="FormField__Label" htmlFor="fullName">Full Name</label>
                        <input type="text" id="driver-name" className="FormField__Input" placeholder="Enter your full name" name="fullName" value={this.state.fullName} onChange={this.handleChange} />
                    </div>

                    <div className="FormField">
                        <label className="FormField__Label" htmlFor="email">E-Mail Address</label>
                        <input type="email" id="email" className="FormField__Input" placeholder="Enter your email" name="email" value={this.state.email} onChange={this.handleChange} />
                    </div>

                    <div className="FormField">
                        <label className="FormField__Label" htmlFor="phone">Phone</label>
                        <input type="tel" id="phone" className="FormField__Input" placeholder="Enter your phone #" name="phone" value={this.state.phone} onChange={this.handleChange} />
                    </div>

                    <div className="FormField">
                        <label className="FormField__Label" htmlFor="name">Car Discription</label>
                        <input type="text" id="car" className="FormField__Input" placeholder="Enter a your car information" name="car" value={this.state.car} onChange={this.handleChange} />
                    </div>

                    <div className="FormField">
                        <label className="FormField__Label" htmlFor="text">Trip Discription</label>
                        <input type="text" id="trip" className="FormField__Input" placeholder="Enter your trip information" name="trip" value={this.state.trip} onChange={this.handleChange} />
                    </div>
                        
                    
                    <div className="FormField">
                        <button type="submit" className="FormField__Button mr-20">Submit</button>
                    </div>
                </form>
            </div>
        );
    }
}
export default DriverForm;

/*

<div className="FormField">
                        <label className="FormField__Label" htmlFor="date">Travel Date</label>
                        <input type="date" id="date" className="FormField__Input" placeholder="Enter your travel date" name="date" value={this.state.date} onChange={this.handleChange} />
                    </div>

                    <div className="FormField">
                        <label className="FormField__Label" htmlFor="time">Travel Time</label>
                        <input type="time" id="time" className="FormField__Input" placeholder="Enter your trip information" name="time" value={this.state.time} onChange={this.handleChange} />
                    </div>

                    */