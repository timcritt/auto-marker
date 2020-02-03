import React from 'react';
import Question from './Question';
import QuestionField from './QuestionField'


class CreateQuiz extends React.Component {
  state = {
    newQuestions: {}
  }
  render() {
    return (
      <div>
        <button onClick={this.props.loadSampleQuestions}>Load Sample Questions</button>
        <ol type="1">
          {Object.keys(this.props.questions)
            .map(key => 
              <QuestionField 
                key={key}
                index={key}
                question={this.props.questions[key]}
                updateQuestion={this.props.updateQuestion}
                >
              </QuestionField>
            )
          }
        </ol>
      </div>
    )
  }
  addQuestion() {
    
  }
}

export default CreateQuiz;