import React from 'react';
import Question from './Question';
import QuestionField from './QuestionField'


class CreateQuiz extends React.Component {
  
  render() {
    return (
      <div>
        
        <ol type="1">
          {Object.keys(this.props.questions)
            .map(key => 
              <QuestionField 
                key={key}
                index={key}
                question={this.props.questions[key]}
                updateQuestion={this.props.updateQuestion}
                updateAnswer={this.props.updateAnswer}
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