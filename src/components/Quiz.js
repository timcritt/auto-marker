import React from 'react';
import Question from './Question';
import sampleQuestions from "../sampleQuestions";

class Quiz extends React.Component {
  state = {
    questions: ["Question 1", "Question 2", "Question 3"],
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
        <button onClick={this.loadSampleQuestions}>Load Sample Questions</button>
        <ul>
          {Object.keys(this.state.questions)
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