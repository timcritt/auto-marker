import React from 'react';
import Quiz from './components/Quiz';
import CreateQuiz from './components/CreateQuiz';
import { connect } from 'react-redux';
import {Switch, BrowserRouter, Route} from 'react-router-dom'

import './App.css';
import sampleQuiz from './sampleQuiz'

class App extends React.Component {
  
  loadSampleQuestions = () => {
  console.log(sampleQuiz)
  this.props.onUpdateQuiz(sampleQuiz)
  }

  render() {
    console.log(sampleQuiz)
    return (
      <BrowserRouter>
        <Switch>
          <Route path='/quiz' exact component={Quiz} />
          <Route path='/createQuiz' exact component={CreateQuiz} loadSampleQuestions={this.loadSampleQuestions}/>
          <Route path='/' render={ () => <div>404</div>} />
        </Switch>
      </BrowserRouter>
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


  
  updateHint = (questionIndex, updatedHint) => {
        
    console.log(updatedHint)
    const questions = {...this.state.questions}
    questions[questionIndex].hint = updatedHint;
    this.setState(
      questions
    )
  }
  
}



export default App
