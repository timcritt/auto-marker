import React from 'react';
import {InputGroup, Button} from 'react-bootstrap';
import TextAnswer from './TextAnswer';
import MultipleChoiceAnswer from './MultipleChoiceAnswer'
import { connect } from 'react-redux';
import { TiTick,} from 'react-icons/ti';

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
    
    var answer;
    
    if (this.props.question.type === 'multi') {
      answer = <MultipleChoiceAnswer  
                  prependClassName={this.state.prependClassName} 
                  answerInputClassName={this.state.answerInputClassName} 
                  updateUserAnswer={this.updateUserAnswer}
                  isDisabled={this.state.isDisabled}
                  id={this.props.index}
                  question={this.props.question}
                />
    } else {

      answer = <TextAnswer questionNumber={this.props.question.number} 
                  prependClassName={this.state.prependClassName} 
                  answerInputClassName={this.state.answerInputClassName} 
                  updateUserAnswer={this.updateUserAnswer}
                  isDisabled={this.state.isDisabled}
                  id={this.props.index}
                />
    }

    return (
      <React.Fragment>
        <div className="question-container">
          <div className="question-text-container">{this.props.question.question}</div>
          
          <InputGroup id="enter-answer-field" className="flex-container flex-space-between" >
            {answer}
            <Button className={this.state.checkButtonClassName} 
              onClick={this.checkUserAnswer} 
              disabled={this.state.isDisabled}
            >
              {this.state.checkButtonContent}
            </Button>
          </InputGroup>
        </div>
      </React.Fragment>
    )
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

    if(Array.isArray(this.props.question.answer)) {
      if(this.state.userAnswer.trim().startsWith(`${this.props.question.answer[0]} `) || this.state.userAnswer.trim() === this.props.question.answer[0]) {
        console.log("left hand part is right")
      } else {
        console.log("left hand part is wrong")
      }
      if(this.state.userAnswer.trim().endsWith(`${this.props.question.answer[1]}`) || this.state.userAnswer.trim() === this.props.question.answer[0]) {
        console.log("right hand par is right")
      } else {
        console.log("right hand part is wrong")
      }
    } else {

      console.log(this.props.question.answer);
      if (this.props.question.answer.toLowerCase().trim() === this.state.userAnswer.toLowerCase().trim()) {
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
  checkTwoPointTextAnswer = () => {
    if(this.state.userAnswer.tolowerCase().trim().startsWith(this.props.question.answerLeft)) {

    }
  }
}

export default Question;
