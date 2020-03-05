import React from 'react';
import questionStatus from '../enums';
import { Container, Col, Row, Button, InputGroup, FormControl} from 'react-bootstrap';
import { saveQuiz } from '../actions/quiz-actions';
import { connect } from 'react-redux';
import { TiLightbulb } from 'react-icons/ti';


class Question extends React.Component {

  state = {
    userAnswer: "",
    correctlyAnswered: false,
    answered: false,
    hintVisibilty: 'hidden',
    hasSeenHint: false,
    
  }
  render() {

    const questionNumber = `${(parseInt(this.props.index) + 1).toString()}. `;

    return (
      <React.Fragment>
        <InputGroup >
        <div>
          <p>{questionNumber}{this.props.questions[this.props.index].question}</p>
        </div>
        
        </InputGroup>
        <Row >
          <Col className="quiz-question-container"  >
            <InputGroup>
              <FormControl id="enter-answer-field" className="answer-input" onChange={this.updateUserAnswer}
                key={this.props.id}
              />
                <Button className="check-answer-button" onClick={this.checkUserAnswer}>check</Button>
            </InputGroup>
          </Col>
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
