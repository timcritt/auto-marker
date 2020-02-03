import React from 'react';
import Question from './Question';


class Quiz extends React.Component {
  
  render() {
    return (
      <div>
        <button onClick={this.props.loadSampleQuestions}>Load Sample Questions</button>
        <ul>
          {Object.keys(this.props.questions)
            .map(key => 
              <Question 
                key={key}
                question={this.state.questions[key]}
                >
              </Question>
            )
          }
        </ul> 
      </div>
    );
  }
}

export default Quiz;