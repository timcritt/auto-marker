import React from 'react';

import Quiz from './components/Quiz';

import './App.css';

class App extends React.Component {
  state = {
    questions: {},

  }

  render() {
    return <Quiz></Quiz>;
  }

}

export default App;
