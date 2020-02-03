import React from 'react';
import Question from './Question';


class CreateQuiz extends React.Component {
  
  render() {
    return (
      <div>
        <p>create quiz</p>
       
        <button onClick={this.addQuestion}>+</button>
      </div>
      
    )
  }
  addQuestion() {
    
  }
}

export default CreateQuiz;