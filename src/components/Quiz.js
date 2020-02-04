import React from 'react';
import Question from './Question';


class Quiz extends React.Component {
  
  render() {
    return (
      <div>
        <button onClick={this.props.loadSampleQuestions}>Load Sample Questions</button>
        <ol type="1">
          {Object.keys(this.props.questions)
            .map(key => 
              <Question 
                key={key}
                index={key}
                question={this.props.questions[key]}
                addHint={this.props.addHint}
                >
              </Question>
              
            )
          }
        </ol>
        <button >Edit Quiz</button>
        
      </div>
    );
  }
}

export default Quiz;