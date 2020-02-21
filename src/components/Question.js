import React from 'react';
import questionStatus from '../enums';
import { Container, Row, Col } from 'react-bootstrap';
import { saveQuiz } from '../actions/quiz-actions';
import { connect } from 'react-redux';

class Question extends React.Component {

  state = {
    userAnswer: "",
    correctlyAnswered: false,
    answered: false,
    hintVisibilty: 'hidden',
    hasSeenHint: false,
  }
  render() {
    return (
      <div>   
        <div>{this.props.questions[this.props.index].question}</div>
        <div>
          <input onChange={this.updateUserAnswer}></input>
          <button onClick={this.checkUserAnswer}>Check</button>
          <span>{this.renderQuestionStatus()}</span>
          <button onClick={this.toggleShowHint}>{this.state.hintVisibilty === 'hidden' ? 'show hint' : 'hide hint'}</button>
          <span style={{visibility: this.state.hintVisibilty}}>{` ${this.props.questions[this.props.index].hint ? this.props.questions[this.props.index].hint : 'no hint'  }`}</span>
        </div>
      </div>
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

const mapStateToProps = state => ({
  
  title: state.title,
  questions: state.questions
  
})

const mapActionsToProps = {
  onSaveQuiz: saveQuiz
}

export default connect(mapStateToProps, mapActionsToProps)(Question);
