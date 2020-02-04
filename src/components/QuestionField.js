import React from 'react';

class QuestionField extends React.Component {

  state = {
    editedQuestion: this.props.question ? this.props.question.question : 'hello',
    editedAnswer: this.props.question ? this.props.question.answer : 'answer',
    editedHint: this.props.question.hint ? this.props.question.hint : 'no hint',
    questionIsUpdated: false,
    answerIsUpdated: false,
    hasSeenHint: false
  }
  setSeenHint() {
    this.setState({
      hasSeenHint: true
    })

    console.log(this.state.hasSeenHint)
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
  updateHintField = (e) => {
    const newHint = e.currentTarget.value;
    console.log(`the updated hint field = ${newHint}`)
    this.setState({
      editedHint: newHint
    })
  }
  render() {

    const editedQuestion = this.state.editedQuestion;
    const editedAnswer = this.state.editedAnswer;
    const editedHint = this.state.editedHint
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
        <label> Hint: </label>
        <input size={editedHint.length > 30 ? editedHint.length : 30} type="text"
          defaultValue={editedHint != null ? editedHint : ''}
          onChange={this.updateHintField}
          
        />
        <button onClick={() => this.props.updateHint(this.props.index, this.state.editedHint)}>save</button>
        <button onClick={() => this.props.deleteQuestion(this.props.index)}>delete question</button>
      </li>
    )
  }
}

export default QuestionField;