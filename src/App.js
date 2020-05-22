import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Equation from './Equation.js';

class App extends Component {
  state = {  
    numCorrect: 0,
	numQuestion: 0,
  } 

  success = () => {
    this.setState((prevState) => ({
      numCorrect: prevState.numCorrect + 1,
      numQuestion: prevState.numQuestion + 1,
    }))
  }

  mistake = () => {
    this.setState((prevState) => ({
      numQuestion: prevState.numQuestion + 1,
    }))
  } 

  render() {
    console.log("App iniciando... this.state ", this.state, " this.props ", this.props)
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">ReactND - Coding Practice</h1>
        </header>
        <div className="game">
          <h2>Mental Math</h2>
            <Equation success={this.success} mistake={this.mistake}/>
          <p className="text">
            Your Score: {this.state.numCorrect}/{this.state.numQuestion}
          </p>
        </div>
      </div>
    );
  }
}

export default App;
