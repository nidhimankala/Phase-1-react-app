import React, { Component } from 'react';
import FormUserDetails from './FormUserDetails';
import FormPersonalDetails from './FormPersonalDetails';
import Confirm from './Confirm';
import Success from './Success';
import Phone from './Phone';
import PhoneInput from './phoneInput';
import Otpverify from './otpVerify';
import Login from './Login';



export class UserForm extends Component {
  state = {
    step: 1,
    userid: '',
    licensecode: '',
    username: '',
    password: '',
    number: '',
    acard: '',
    email: '',
    vnumber: '',
    phone:'',
    hash:'',
    otp:'',

  };

  // Proceed to next step
  nextStep = () => {
    const { step } = this.state;
    this.setState({
      step: step + 1
    });
  };

  // Go back to prev step
  prevStep = () => {
    const { step } = this.state;
    this.setState({
      step: step - 1
    });
  };

  // Handle fields change
  handleChange = input => e => {
    this.setState({ [input]: e.target.value });
  };

  hashHandleChange = hash => e => {
    this.setState({ hash: hash });
  };

  render() {
    const { step } = this.state;
    const { firstName, lastName, email, occupation, city, bio, userid, licensecode, username, password, number, acard, vnumber, phone, hash, otp} = this.state;
    const values = { firstName, lastName, email, occupation, city, bio, userid, licensecode, username, password, number, acard, vnumber, phone, hash, otp };

    switch (step) {
      case 1:
        return (
          <FormUserDetails
            nextStep={this.nextStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
      case 2:
        return (
          <FormPersonalDetails
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
      case 3:
        return (
          <Confirm
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            values={values}
          />
        );
     
        case 4:
          return (
          <PhoneInput 
          nextStep={this.nextStep} 
          hashHandleChange={this.hashHandleChange} 
          handleChange={this.handleChange} 
          values={values} />
          );
      case 5:
        return (
          <Otpverify 
          nextStep={this.nextStep} 
          prevStep={this.prevStep} 
          handleChange={this.handleChange} 
          values={values} />
        );

      case 6:
        return <Success />;
      default:
        (console.log('This is a multi-step form built with React.'))
    }
  }
}

export default UserForm;

