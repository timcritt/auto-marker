import React from 'react';

import Quiz from './components/Quiz';
import CreateQuiz from './components/CreateQuiz';
import sampleQuestions from "./sampleQuestions";
import './App.css';

class App extends React.Component {
  state = {
    questions: {},

  }
  loadSampleQuestions = () => {
    const questions = sampleQuestions;
    this.setState( {
      questions
    })
  }

  render() {
    return (
      <div>
        <Quiz loadSampleQuestions={this.loadSampleQuestions}></Quiz>
        <CreateQuiz></CreateQuiz>
      </div>
    )
  }

}

export default App;
