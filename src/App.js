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
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <CalButtons>
            <SingleButton>7</SingleButton>
          </CalButtons>
        </header>
      </div>
    );
  }
}

export default App;
