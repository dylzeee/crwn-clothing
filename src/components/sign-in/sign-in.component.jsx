import React, { Component } from "react";
import { CustomButton } from "../custom-button/custom-button.component";
import { FormInput } from "../form-input/form-input.component";
import './sign-in.style.css'

class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    }
  }

  handleSubmit = e => {
    e.preventDefault();
    this.setState({ email: '', password: '' })
  }
  handleChange = e => {
    const { value, name } = e.target;
    this.setState({ [name]: value });
  }

  render() {
    return (
      <div className='sign-in'>
        <h2>I already have an account</h2>
        <span>Sign in with your username and password</span>

        <form onSubmit={this.handleSubmit}>
          <FormInput
            handleChange={this.handleChange}
            type='email'
            name='email'
            label='email'
            value={this.state.email}
            required
          />
          <FormInput
            handleChange={this.handleChange}
            type='password'
            name='password'
            value={this.state.password}
            label='password'
            required
          />
          <CustomButton type='submit' value='Submit Form'>Sign In</CustomButton>
        </form>

      </div>
    )
  }
}
export default SignIn