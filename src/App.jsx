import React, { Component } from 'react';
import './App.css';
import { Button } from "./components/Button";
import { Input } from "./components/Input";
import { ClearButton } from "./components/ClearButton";
import * as math from "mathjs"; // straight ref to math.js npm package

class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            input: ""
            // initial input value
        };
    }
    addToInput = val => {
        if (val === 'x') {
            val = "*";
        }
        if (isNaN(val) && isNaN(
            this.state.input[this.state.input.length-1]
        )){
            this.setState({
                input: this.state.input
            });
        } else {
            this.setState({
                input: this.state.input + val
            });
        }
    }
    handleEqual = () => {
        this.setState({
            input: math.eval(this.state.input)
            // handles evaluation on function ( = )
        });
    };
    render() {
    return (
      <div className="app">
          <h1>AWESOME CALCULATOR</h1>
          <div className="calc-wrapper">
              <Input input={this.state.input} />
              <div className="row">
                    <Button handleClick={this.addToInput}>7</Button>
                    <Button handleClick={this.addToInput}>8</Button>
                    <Button handleClick={this.addToInput}>9</Button>
                    <Button handleClick={this.addToInput}>/</Button>
              </div>
              <div className="row">
                    <Button handleClick={this.addToInput}>4</Button>
                    <Button handleClick={this.addToInput}>5</Button>
                    <Button handleClick={this.addToInput}>6</Button>
                    <Button handleClick={this.addToInput}>x</Button>
              </div>
              <div className="row">
                    <Button handleClick={this.addToInput}>1</Button>
                    <Button handleClick={this.addToInput}>2</Button>
                    <Button handleClick={this.addToInput}>3</Button>
                    <Button handleClick={this.addToInput}>+</Button>
              </div>
              <div className="row">
                    <Button handleClick={this.addToInput}>.</Button>
                    <Button handleClick={this.addToInput}>0</Button>
                    <Button handleClick={() => this.handleEqual()}>=</Button>
                    <Button handleClick={this.addToInput}>-</Button>
              </div>
              <div className="row">
                    <ClearButton handleClear={ () => this.setState({input: ""})} placeholder="Clear">CLEAR</ClearButton>
              </div>
          </div>
      </div>
    );
  }
}

export default App;