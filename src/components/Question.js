import React from 'react';
import questionStatus from '../enums';
import { Container, Row, Button} from 'react-bootstrap';
import { saveQuiz } from '../actions/quiz-actions';
import { connect } from 'react-redux';
import { TiLightbulb } from 'react-icons/ti'

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
      <React.Fragment>
        <Row id="question-container">
          {this.props.questions[this.props.index].question}
        </Row>
        <Row className="answer-row">
          <input className="answer-input" onChange={this.updateUserAnswer}></input>
          <Button className="check-answer-button" onClick={this.checkUserAnswer}>check</Button>
          <button onClick={this.toggleShowHint}><TiLightbulb/></button>
          <span>{this.renderQuestionStatus()}</span>
        </Row>
      </React.Fragment>
    )
  }
  renderQuestionStatus = () => {
    if(this.state.answered) {
      if(this.state.correctlyAnswered) {
        return <span style={{color: "green"}}> {questionStatus.CORRECT} </span>
      } else {
        return <span style={{color: "#ae1e1e"}}> {questionStatus.INCORRECT} </span>
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
