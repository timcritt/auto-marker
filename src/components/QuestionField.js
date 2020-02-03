import React from 'react';

class QuestionField extends React.Component {

  state = {
    question: this.props.question.question
  }

  updateQuestionField = (e) => {
    var newQuestion = e.currentTarget.value;
    this.setState({
      question: newQuestion
    })
  }
  render() {
    return (
      <li>
        <label>question:  </label>
        <input size={this.props.question.question.length}type="text" 
          defaultValue={this.state.question}
          onChange={this.updateQuestionField}
        />
        <button onClick={() => {
                  console.log(this.props.index)
          this.props.updateQuestion(this.props.index, this.state.question)
        }}>save</button> 
      </li>
    )
  }
}

export default QuestionField;