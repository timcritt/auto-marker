import React from 'react';
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
                addQuestion={this.props.addQuestion}
                deleteQuestion={this.props.deleteQuestion}
                addHint={this.props.addHint}
                updateHint={this.props.updateHint}
                >
              </QuestionField>
            )
          }
        </ol>
        <button onClick={(e) => this.props.addQuestion(e)}>Add</button>
      </div>
    )
  }
}

export default CreateQuiz;