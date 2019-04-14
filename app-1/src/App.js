import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userInput: ""
    };
  }

  handleChange(value) {
    this.setState({ userInput: value });
  }

  render() {
    console.log(this.state);
    return (
      <div className="App">
        <input onChange={e => this.handleChange(e.target.value)} type="text" />
        <p>{this.state.userInput}</p>
      </div>
    );
  }
}

export default App;
