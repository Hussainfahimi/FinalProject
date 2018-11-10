import React, { Component } from 'react';
import { Redirect, Link } from 'react-router-dom';
import axios from 'axios';

import './home.css';
class Home extends Component {
    constructor() {
        super();

        this.state = {
redirect:false
        };

        
    }
    componentDidMount(){
        if(window.localStorage.getItem('authorized')==='true'){
            this.setState({redirect: false})
        }else{
            this.setState({redirect: true})
        }
    }
    render() {
        if (this.state.redirect) {
            return (<Redirect to="/sign-in"></Redirect>)
        }
        return (

            
            <div className="home-main">
            Hello there
            <div className="col-md-4">
            <button className="driver-btn" type="submit" id= "btn"><h3>Register as Driver</h3></button>
            </div>
            
            </div>
        );
    }
}

export default Home;
