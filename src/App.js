import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import QuizTable from "./QuizTable/QuizTable";

class App extends Component {
  state = {
    questions: [
      {
        question: 'Teste',
        alt1: 'teste1',
        alt2: 'teste2',
        alt3: 'teste3',
        answ: ''
      }
    ],

    questionNumber: 0
  };

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Simple Quiz</h2>
        </div>
        <QuizTable questionNumber={this.state.questionNumber + 1} questionText={this.state.questions[this.state.questionNumber].question} questionAlts={[this.state.questions[this.state.questionNumber].alt1, this.state.questions[this.state.questionNumber].alt2, this.state.questions[this.state.questionNumber].alt3]} totalQNumber={this.state.questions.length} />
      </div>
    );
  }
}

export default App;

//Precisar: questoes[], questao = objeto
