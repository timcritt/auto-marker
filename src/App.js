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
          addQuestion={this.addQuestion}
          deleteQuestion={this.deleteQuestion}
          updateAnswer={this.updateAnswer}
          
          addHint={this.addHint}
          updateHint={this.updateHint}
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
  addQuestion = (e) => {
    //gets the index of the question as ordered in the list of questions
    //var listIndex = e.currentTarget.previousElementSibling.childElementCount + 1;
    const newQuestion = {
      question: '',
      answer: '',
      hint: ''
    }

    const myDate = new Date();
    const index = myDate.getMilliseconds();

    const questions = this.state.questions;
    questions[`question${index}`] = newQuestion;

    this.setState({
      questions
    })
  }
  
  updateHint = (questionIndex, updatedHint) => {
        
    console.log(updatedHint)
    const questions = {...this.state.questions}
    questions[questionIndex].hint = updatedHint;
    this.setState(
      questions
    )
  }
  deleteQuestion = (key) => {
    const questions = this.state.questions
    delete questions[key];
    this.setState( {
      questions
    })
  }
}

export default App;
