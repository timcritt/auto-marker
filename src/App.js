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
    const questions = {...sampleQuestions};
    console.log(questions)
    this.setState( {
      questions: sampleQuestions
    })
  }
  render() {
    return (
      <div>
        <Quiz loadSampleQuestions={this.loadSampleQuestions}
          questions={this.state.questions}
        />
        <CreateQuiz questions={this.state.questions}
          updateQuestion={this.updateQuestion}
          updateAnswer={this.updateAnswer}
        />  
      </div>
    )
  }
  updateQuestion = (questionIndex, updatedQuestion) => {
    const questions = {...this.state.questions}
    questions[questionIndex].question = updatedQuestion;
    this.setState(
      questions
    )

  }
  updateAnswer = (questionIndex, updatedAnswer) => {
    const questions = {...this.state.questions}
    questions[questionIndex].answer = updatedAnswer;
    this.setState(
      questions
    )

  }



}

export default App;
