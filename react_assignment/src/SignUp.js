import React from "react";

class SignUp extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "",
      email: "",
      favorite_flavor: ""
    };
    this.handleChange = this.handleChange.bind(this);
    // this.handleChangeEmail = this.handleChangeEmail.bind(this);
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  render() {
    console.log(this.state);
    return (
      <>
        <h1>Sign Up!</h1>
        <form onChange={this.handleChange}>
          <label htmlFor="name"> Name </label>
          <input
            type="text"
            placeholder="Your Name"
            name="name"
            value={this.state.name}
            id="name"
          />
          <br />
          <label htmlFor="name"> Email </label>
          <input
            type="text"
            placeholder="Your Email"
            name="email"
            value={this.state.email}
            id="email"
          />
          <br />
          <br />
          Favorite Flavors
          <select name="favorite_flavor">
            <option value="strawberry"> strawberry </option>
            <option value="chocolate"> chocolate </option>
            <option value="vanilla"> vanilla </option>
          </select>
        </form>
      </>
    );
  }
}

export default SignUp;
