import React from 'react';

class QuestionField extends React.Component {

  state = {
    editedQuestion: this.props.question ? this.props.question.question : 'hello',
    editedAnswer: this.props.question ? this.props.question.answer : 'answer',
    questionIsUpdated: false,
    answerIsUpdated: false
  }
  updateAnswerField = (e) => {
    const newAnswer = e.currentTarget.value;
    this.setState({
      editedAnswer: newAnswer,
      answerIsUpdated: true
    })
  }
  updateQuestionField = (e) => {
    const newQuestion = e.currentTarget.value;
    console.log(newQuestion);
    this.setState({
      editedQuestion: newQuestion,
      questionIsUpdated: true
    })
  }
  render() {

    const editedQuestion = this.state.editedQuestion;
    const editedAnswer = this.state.editedAnswer;
    return (
      <li>
        <label>   question:  </label>
        <input size={30}type="text" 
          defaultValue={editedQuestion != null ? editedQuestion : ''}
          onChange={this.updateQuestionField}
        />
        <button disabled={!this.state.questionIsUpdated} onClick={() => {
          this.props.updateQuestion(this.props.index, this.state.editedQuestion)
        }}
        >save
        </button>

        <label>   Answer:  </label>
        <input size={30}type="text" 
          defaultValue={editedAnswer != null ? editedAnswer : ''}
          onChange={this.updateAnswerField}
        />
        <button disabled={!this.state.answerIsUpdated} onClick={() => {
          this.props.updateAnswer(this.props.index, this.state.editedAnswer)
        }}>
        save
        </button> 
        <button onClick={() => this.props.deleteQuestion(this.props.index)}>delete</button>
      </li>
    )
  }
}

export default QuestionField;