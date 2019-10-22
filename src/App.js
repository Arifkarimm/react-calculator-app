import React, { Component } from "react";
import "./App.css";
import CalButtons from "./components/CalButtons";
import SingleButton from "./components/SingleButton";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      operations: []
    };

    this.onHandleClick = this.onHandleClick.bind(this);
  }

  onHandleClick() {
    console.log("success");
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <CalButtons>
            <SingleButton
              onClick={this.onHandleClick}
              label="7"
              value="7"
            ></SingleButton>
            <SingleButton
              onClick={this.onHandleClick}
              label="4"
              value="4"
            ></SingleButton>
            <SingleButton
              onClick={this.onHandleClick}
              label="="
              value="equal"
            ></SingleButton>
          </CalButtons>
        </header>
      </div>
    );
  }
}

export default App;
