import React from 'react';
import QuizPanel from './components/QuizPanel';
import CreateQuiz from './components/CreateQuiz';
import { connect } from 'react-redux';
import {Switch, BrowserRouter, Route} from 'react-router-dom'
import Navigation from './components/Navigation';
import './App.css';
import * as sampleQuizes from './sampleQuiz'
import LoadQuiz from './components/LoadQuiz';
import Landing from './components/Landing';

class App extends React.Component {
  
  render() {
    
    return (
      <React.Fragment>
      
      <BrowserRouter>
        <Navigation/>
          <Switch>
            <Route path='/quiz' exact component={QuizPanel} />
            <Route path='/createQuiz' exact component={CreateQuiz}/>
            <Route path='/loadQuiz' exact component={LoadQuiz}/>
            <Route path='/' exact component={Landing} />
          </Switch>
        </BrowserRouter>
      </React.Fragment>
    )
  }
}



export default App
