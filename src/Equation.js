import React, { Component } from 'react';


class Equation extends Component {
  constructor(props) {
    super(props);
    const valuesArray = this.makeNewEquation();
    this.state = {
      value1: valuesArray[0],
      value2: valuesArray[1],
      value3: valuesArray[2],
      proposedAnswer: valuesArray[3],
    };
  }
  
  makeNewEquation = () => {
    console.log("makeNewQuestion() ini... ")
    const value1 = Math.floor(Math.random() * 100);
    const value2 = Math.floor(Math.random() * 100);
    const value3 = Math.floor(Math.random() * 100);
    const proposedAnswer = Math.floor(Math.random() * 3) + (value1 + value2 + value3);
    return [value1, value2, value3, proposedAnswer];
  };
   
  check = (value) => {
    const sum = this.state.value1 + this.state.value2 + this.state.value3;
    this.updateEquation()
    if (sum === this.state.proposedAnswer && value || sum !== this.state.proposedAnswer && !value) {
      return this.props.success()
    } else {
      return this.props.mistake()   
    }
  }

  updateEquation = () => {
    const newEquation = this.makeNewEquation()
    this.setState((prevState) => ({
      value1: newEquation[0],
      value2: newEquation[1],
      value3: newEquation[2],
      proposedAnswer: newEquation[3],
    }))
  }

  render() {
    console.log("Equation iniciando... this.state ", this.state, "this.props ", this.props);
    const { value1, value2, value3, proposedAnswer } = this.state
    return (
      <React.Fragment>
      <div className="equation">
        <p className="text"> {value1 + " + " + value2 + " + " + value3 + " = " + proposedAnswer} </p>
      </div>
      
      <button
        onClick={() => this.check(true)}>
          True
      </button>
      <button 
        onClick={() => this.check(false)}>
          False
      </button>
      </React.Fragment>
    )
  }
}

export default Equation