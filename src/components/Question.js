import React from 'react';
import questionStatus from '../enums'


class Question extends React.Component {

  state = {
    userAnswer: "",
    correctlyAnswered: false,
    answered: false,
    hintVisibilty: 'hidden',
    hasSeenHint: false
  }
  render() {
    return (
      <li>
        <div>{this.props.question.question}</div>
        <div>
          <input onChange={this.updateUserAnswer}></input>
          <button onClick={this.checkUserAnswer}>Check</button>
          <span>{this.renderQuestionStatus()}</span>
          <button onClick={this.toggleShowHint}>{this.state.hintVisibilty === 'hidden' ? 'show hint' : 'hide hint'}</button>
          <span style={{visibility: this.state.hintVisibilty}}>{` ${this.props.question.hint ? this.props.question.hint : 'no hint'  }`}</span>
        </div>
      </li>
    )
  }
  renderQuestionStatus = () => {
    if(this.state.answered) {
      if(this.state.correctlyAnswered) {
        return <span style={{color: "green"}}> {questionStatus.CORRECT} </span>
      } else {
        return <span style={{color: "red"}}> {questionStatus.INCORRECT} </span>
      }
    }
    return <span>{questionStatus.UNANSWERED}</span>
    
  }
  toggleShowHint = () => {
    const hintVisibilty = this.state.hintVisibilty === 'hidden' ? 'visible' : 'hidden';
    this.setState({hintVisibilty})
    
  }
  updateUserAnswer = (e) => {
    var userAnswer = e.currentTarget.value;
    this.setState({
      userAnswer
    });
  }
  checkUserAnswer = () => {
    if (this.props.question.answer.toLowerCase() === this.state.userAnswer.toLowerCase()) {
      this.setState({
        correctlyAnswered: true,
        answered: true
      })
    } else {
      this.setState({
        correctlyAnswered: false,
        answered: true
      })
    }
  }
}

export default Question;