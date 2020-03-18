import React from 'react';
import questionStatus from '../enums';
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

    const questionNumber = `${(parseInt(this.props.index) + 1).toString()}`;
    console.log(this.props.type)
    if(this.props.type === 'multi') {
      return (
        <React.Fragment>
          <div className="question-container">
            <div className="question-text-container">{this.props.questions[this.props.index].question}</div>
            <InputGroup id="enter-answer-field" className="flex-container flex-space-between" >
              <MultipleChoiceAnswer questionNumber={questionNumber} 
                prependClassName={this.state.prependClassName} 
                answerInputClassName={this.state.answerInputClassName} 
                updateUserAnswer={this.updateUserAnswer}
                isDisabled={this.state.isDisabled}
                id={this.props.index}
                />
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
    } else {
    return (
      <React.Fragment>
          <div className="question-container">
            <div className="question-text-container">{this.props.questions[this.props.index].question}</div>
            <InputGroup id="enter-answer-field" className="flex-container flex-space-between" >
              <TextAnswer questionNumber={questionNumber} 
                prependClassName={this.state.prependClassName} 
                answerInputClassName={this.state.answerInputClassName} 
                updateUserAnswer={this.updateUserAnswer}
                isDisabled={this.state.isDisabled}
                id={this.props.index}
                />
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
    console.log(this.props.question.answer)
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
  questions: state.questions,

  
})

const mapActionsToProps = {
  onSaveQuiz: 'SAVE_QUIZ'
}

export default connect(mapStateToProps, mapActionsToProps)(Question);
