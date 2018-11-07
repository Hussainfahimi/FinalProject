import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class UserSignUp extends Component {
    constructor() {
        super();

        this.state = {
            email: '',
            password: '',
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
}

handleChange(e){
    let target = e.target;
    let value = target.type === 'checkbox' ? target.checked : target.value;
    let name = target.name;

    this.setState({
        [name]: value
    });
}

handleSubmit(e){
    e.preventDefault();

    console.log('The form was submited with the following data:')
    console.log(this.state);
}

render(){
    return (
        <div className="Form">
            <form onSubmit={this.handleSubmit} className="FieldsForm">
            <div className="Field">
                <label className="FieldForm__Label" htmlFor="email">E-Mail Address</label>
                <input type="email" id="email" className="Input__FormField" placeholder="Enter your email" name="email" value={this.state.email} onChange={this.handleChange} />
              </div>

              <div className="FormField-Form">
                <label className="FormField__Label-Form" htmlFor="password">Password</label>
                <input type="password" id="password" className="FormField__Input-Password" placeholder="Enter your password" name="password" value={this.state.password} onChange={this.handleChange} />
              </div>

              <div className="FormField-one">
                  <button className="FormField__Button mr-20">Sign In</button> <Link to="/" className="FormField__Link">Create an account</Link>

                  
              </div>
              
            </form>
          </div>

    );
}

}
export default UserSignUp;