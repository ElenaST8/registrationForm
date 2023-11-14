import React, { Component } from "react";

class RegistrationForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      userName: "",
      password: "",
      age: "",
      error: null,
    };
  }

  handleInputChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = () => {
    const { email, userName, password, age } = this.state;

    if (!email || !userName || !password || !age) {
      const emptyField = Object.keys(this.state).find(
        (key) => !this.state[key]
      );
      this.setState({ error: `Поле "${emptyField}" не заповнене` });
      return;
    }

    this.setState({
      email: "",
      userName: "",
      password: "",
      age: "",
      error: null,
    });

    console.log("Дані про користувача:", { email, userName, age });
  };

  render() {
    const { email, userName, password, age, error } = this.state;

    return (
      <div className="content">
        <label>
          Email:
          <input
            type="text"
            name="email"
            value={email}
            onChange={this.handleInputChange}
          />
        </label>
        <label>
          UserName:
          <input
            type="text"
            name="userName"
            value={userName}
            onChange={this.handleInputChange}
          />
        </label>
        <label>
          Password:
          <input
            type="password"
            name="password"
            value={password}
            onChange={this.handleInputChange}
          />
        </label>
        <label>
          Age:
          <input
            type="text"
            name="age"
            value={age}
            onChange={this.handleInputChange}
          />
        </label>
        <button onClick={this.handleSubmit}>Send</button>
        {error && <div style={{ color: "red" }}>{error}</div>}
      </div>
    );
  }
}

export default RegistrationForm;
