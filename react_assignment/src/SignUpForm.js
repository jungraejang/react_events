import React from "react";
import { countries } from "../src/countries.js";

class SignUpForm extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "",
      email: "",
      DOB: "",
      country: "",
      dietary_choice: "",
      reason: "",
      submittedDraft: false,
      submittedFinal: false
    };
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  submitDraft = () => {
    this.setState({
      submittedDraft: true
    });
  };

  submitFinal = () => {
    this.setState({
      submittedFinal: true
    })
  }
  // submitDraft = (event) => {
  //   return <p className="submitted">{this.state.name}<p>
  // };

  createCountriesOption = () => {
    return countries.map(country => {
      return <option value={country.name}>{country.name}</option>;
    });
  };

  render() {
    if (this.state.submittedFinal === true) {
      return (
        <div>
        <p>Thank you for submission. Please wait up to 3 years for response</p>
        </div>
      )
    } if (this.state.submittedDraft === true) {
      console.log("worked")
      return (
        <div className="submissionDraft">
        <p>{this.state.name}</p>
        <p>{this.state.email}</p>
        <p>{this.state.DOB}</p>
        <p>{this.state.country}</p>
        <p>{this.state.dietary_choice}</p>
        <p>{this.state.reason}</p>
        <button className="submitFinal" onClick={this.submitFinal}>Submit Final</button>
        </div>
      )
    }
    return (
      <React.Fragment>
        <h1>Sign up for free trip to Mars FOREVER</h1>
        <div>
          <form onChange={this.handleChange} onsubmit={this.submitDraft}>
            <label htmlFor="name">Name: </label>
            <input
              type="text"
              placeholder="Your Name"
              name="name"
              value={this.state.name}
              id="name"
            />
            <br />
            <label htmlFor="name">Email: </label>
            <input
              type="text"
              placeholder="Your Email"
              name="email"
              value={this.state.email}
              id="name"
            />
            <br />
            <label htmlFor="name">What is your date of birth?</label>
            <input
              type="date"
              placeholder="Your DOB"
              name="DOB"
              value={this.state.DOB}
              id="name"
            />
            <br />
            <label htmlFor="name">Which country are you from?</label>
            <select name="country">{this.createCountriesOption()}</select>
            <br />
            <label htmlFor="name">What is your dietary preferrence?</label>
            <select name="dietary_choice">
              <option value="blank" />
              <option value="noPreference">No Preference</option>
              <option value="vegetarian">Vegetarian</option>
              <option value="vegan">Vegan</option>
            </select>
            <br />
            <label htmlFor="name">Why do you want to be a Mars Settler?</label>
            <input
              type="text"
              placeholder="Please tell us why"
              name="reason"
              value={this.state.reason}
              id="reason"
            />
          </form>
          <button className="submitDraftButton" onClick={this.submitDraft}>
            Submit
          </button>
        </div>
      </React.Fragment>
    );
  }
}

export default SignUpForm;
