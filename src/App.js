import React, { Component } from "react";
import update from "immutability-helper";
import * as math from "mathjs";
import "./App.css";
import CalButtons from "./components/CalButtons";
import SingleButton from "./components/SingleButton";
import DisplayResult from "./components/DisplayResult";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      operations: []
    };

    this.onHandleClick = this.onHandleClick.bind(this);
  }

  calculatorCalculation = event => {
    let result = this.state.operations.join("");
    if (result) {
      result = eval(result);
      result = math.format(result, { precision: 14 });
      this.setState({
        operations: [result]
      });
    }
  };

  calculateReset() {
    this.setState({
      operations: []
    });
  }

  onHandleClick(event) {
    const value = event.target.getAttribute("value");
    switch (value) {
      case "clear":
        this.calculateReset();
        break;
        
      case "equal":
        this.calculatorCalculation();
        break;

      default:
        const newOperations = update(this.state.operations, { $push: [value] });
        this.setState({
          operations: newOperations
        });
        break;
    }
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <DisplayResult>{this.state.operations}</DisplayResult>
          <CalButtons>
            <SingleButton
              onClick={this.onHandleClick}
              label="C"
              value="clear"
            ></SingleButton>{" "}
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
              label="1"
              value="1"
            ></SingleButton>
            <SingleButton
              onClick={this.onHandleClick}
              label="0"
              value="0"
            ></SingleButton>
            <SingleButton
              onClick={this.onHandleClick}
              label="/"
              value="/"
            ></SingleButton>{" "}
            <SingleButton
              onClick={this.onHandleClick}
              label="8"
              value="8"
            ></SingleButton>
            <SingleButton
              onClick={this.onHandleClick}
              label="5"
              value="5"
            ></SingleButton>
            <SingleButton
              onClick={this.onHandleClick}
              label="2"
              value="2"
            ></SingleButton>
            <SingleButton
              onClick={this.onHandleClick}
              label="."
              value="."
            ></SingleButton>
            <SingleButton
              onClick={this.onHandleClick}
              label="x"
              value="*"
            ></SingleButton>{" "}
            <SingleButton
              onClick={this.onHandleClick}
              label="9"
              value="9"
            ></SingleButton>
            <SingleButton
              onClick={this.onHandleClick}
              label="6"
              value="6"
            ></SingleButton>
            <SingleButton
              onClick={this.onHandleClick}
              label="3"
              value="3"
            ></SingleButton>
            <SingleButton
              onClick={this.onHandleClick}
              label="CE"
              value="CE"
            ></SingleButton>
            <SingleButton
              onClick={this.onHandleClick}
              label="-"
              value="-"
            ></SingleButton>{" "}
            <SingleButton
              onClick={this.onHandleClick}
              label="+"
              value="+"
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
