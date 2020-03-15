import React from 'react';
import questionStatus from '../enums';
import { Container, Col, Row, Button, InputGroup, FormControl} from 'react-bootstrap';
import { saveQuiz } from '../actions/quiz-actions';
import { connect } from 'react-redux';
import { TiTick, TiTimes} from 'react-icons/ti'


class Question extends React.Component {

  state = {
    userAnswer: "",
    correctlyAnswered: false,
    answered: false,
    hintVisibilty: 'hidden',
    hasSeenHint: false,
    answerInputClassName: 'answer-input',
    isDisabled: false,
    checkButtonContent: 'check',
    checkButtonClassName: 'check-answer-button',
    prependClassName: ''
  }
  render() { 

    const questionNumber = `${(parseInt(this.props.index) + 1).toString()}`;

    return (
      <React.Fragment>
        <div className="question-container">
        <div className="question-text-container">{this.props.questions[this.props.index].question}</div>
        <InputGroup id="enter-answer-field" >
          <InputGroup.Prepend >
            <InputGroup.Text className={this.state.prependClassName} id="prepend">{questionNumber}</InputGroup.Text>
          </InputGroup.Prepend>
          <FormControl  className={this.state.answerInputClassName} onChange={this.updateUserAnswer}
            key={this.props.id} disabled={this.state.isDisabled}
          />
          <Button className={this.state.checkButtonClassName} onClick={this.checkUserAnswer} disabled={this.state.isDisabled}>{this.state.checkButtonContent}</Button>
        </InputGroup>
        </div>
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
      userAnswer,
      checkButtonContent: 'check',
    });
  }
  checkUserAnswer = () => {
    if (this.props.question.answer.toLowerCase().trim() === this.state.userAnswer.toLowerCase().trim()) {
      console.log("question correct");
      this.setState({
        correctlyAnswered: true,
        answered: true,
        answerInputClassName: 'correctly-answered',
        isDisabled: true,
        checkButtonContent: <TiTick/>,
        checkButtonClassName: 'check-button-correct',
        prependClassName: 'prepend-correct'
      })
    } else {
      this.setState({
        correctlyAnswered: false,
        answered: true,
        answerInputClassName: 'incorrectly-answered',
        
        
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
