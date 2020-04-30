import React from 'react';
import { connect } from 'react-redux';
import { Row, Col, ButtonToolbar, Button, InputGroup, FormControl, ButtonGroup } from 'react-bootstrap';
import { IoIosArrowUp, IoIosArrowDown, IoIosSave } from 'react-icons/io'
import { TiLightbulb, TiTimes } from 'react-icons/ti'
import EditTextAnswer from './EditTextAnswer'
import EditMultipleChoiceAnswer from './EditMultipleChoiceAnswer';

class EditQuizItem extends React.Component {
  state = {
    editedQuestion:  this.props.question ? this.props.question.question : '',
    editedHint: this.props.question ? this.props.question.hint : '',
    questionIsUpdated: false,
    editedAnswer: this.props.question.answer ? this.props.question.answer : '',
    answerIsUpdated: false,
  }
  updateAnswerField = (e) => {
    const newAnswer = e.currentTarget.value;
    this.setState({
      editedAnswer: newAnswer,
      answerIsUpdated: true
    })
  }
  handleChangeQuestionField = (e) => {
    const newQuestion = e.currentTarget.value;
    this.setState({
      editedQuestion: newQuestion,
      questionIsUpdated: true
    })
  }
  handleChangeSectionTitle = (e) => {
    const editedSectionTitle= e.currentTarget.value;
    this.props.addSectionTitle(this.props.id, editedSectionTitle);
    
  }
  updateHintField = (e) => {
    const newHint = e.currentTarget.value;
    this.setState({
      editedHint: newHint
    })
  }
  
  
  calculateItemNumber = () => {
    
    //Asign a number according to the quizitem's position in the questions array
    var number = parseInt(this.props.index) + 1;
   
    if(!this.props.restartNumbering && this.props.sectionIndex > 0) {
      const lastPositionIndex = this.props.sections[this.props.sectionIndex-1].questions.length -1
      number = number + this.props.sections[this.props.sectionIndex-1].questions[lastPositionIndex].number
    } 
    this.props.setQuestionNumber(this.props.sectionId, this.props.question.id, number)
  }
 
  render() {
    this.calculateItemNumber();
    
    let questionComponent;

    if (this.props.question.type === "multi") {
      questionComponent =  (
        <React.Fragment>
          <div className="flex-container  " >            
            <EditMultipleChoiceAnswer
              updateAnswerField={this.updateAnswerField}
              answer={this.state.editedAnswer}
              numMultipleChoice={this.props.question.numMultipleChoice}
              id={this.props.question.id}
              index={this.props.question.index}
            />
            <div className="align-self-stretch" >
              <button className="add-radio-button check-answer-button" 
                onClick={ () => this.props.changeNumberOfanswers(this.props.sectionId, this.props.question.id, -1)}> - </button>
              <button className="add-radio-button check-answer-button" 
                onClick={ () => this.props.changeNumberOfanswers(this.props.sectionId, this.props.question.id, +1)}> + </button>
            </div>
          </div>
        </React.Fragment>
      )
    } else {
      questionComponent = (
        <EditTextAnswer
          updateAnswerField={this.updateAnswerField}
          answer={this.state.editedAnswer}
          id={this.props.question.id}
          index={this.props.key}
        />
      )
    }    
    return (
      <React.Fragment>
      {/* question field */}
        <Col id="question-card-container">
          <Row>
            <Col>
              <InputGroup id="enter-answer-field">
                <InputGroup.Prepend >
                  <InputGroup.Text id="prepend-edit-answer-field">{this.props.question.number}</InputGroup.Text>
                </InputGroup.Prepend>
                <FormControl placeholder="enter the question" 
                  onChange={this.handleChangeQuestionField} defaultValue={this.state.editedQuestion}
                  //defaultValue is only for initial render. Changing state won't trigger re-render 
                  //form field will only rerender when this key is changed.
                  key={this.props.question.id}
                  
                />
              </InputGroup>
            </Col>
          </Row>
            { /*answer Field */ }
          <Row >
            <Col >
              {questionComponent}
            </Col>
          </Row>
           { /* hint field*/ }
         {/* <Row>
            <Col>
              <InputGroup>
                <InputGroup.Prepend >
                  <InputGroup.Text><TiLightbulb className="input-symbol" /></InputGroup.Text>
                </InputGroup.Prepend>
                <FormControl placeholder="enter a hint (optional)" defaultValue={editedHint != null ? editedHint : ''}
                  onChange={this.updateHintField}
                />
              </InputGroup>
            </Col>
         </Row> */}
          <Row>
            <Col>
              <ButtonToolbar id="question-tool-bar" className="d-flex flex-column">
                <ButtonGroup >
                  <Button className="question-tool-bar-button" variant="secondary" size="sm" onClick={() => this.props.saveQuizItem(this.state.editedQuestion, this.props.question.id, this.props.sectionId, this.state.editedAnswer)}><IoIosSave className='question-toolbar-symbol' /></Button>
                  <Button className="question-tool-bar-button" variant="secondary" size="sm" onClick={() => this.props.deleteQuestion(this.props.sectionId, this.props.question.id)}><TiTimes className='question-toolbar-symbol' /></Button>
                  <Button className="question-tool-bar-button" variant="secondary" size="sm" onClick={() => this.props.shiftQuestionDown(this.props.sectionId, this.props.question.id)}><IoIosArrowDown className='question-toolbar-symbol' /></Button>
                  <Button className="question-tool-bar-button" variant="secondary" size="sm" onClick={() => this.props.shiftQuestionUp(this.props.sectionId, this.props.question.id)}><IoIosArrowUp className='question-toolbar-symbol'/></Button>
                </ButtonGroup>
              </ButtonToolbar>
            </Col>
          </Row>
        </Col>
      </React.Fragment>
    )
  }
}

const mapStateToProps = (state) => {

  const  quiz  = state
  return quiz;
}

const mapDispatchToProps = (dispatch) => {
  return {
    deleteQuestion: (sectionId, questionId) => { dispatch({type: 'REMOVE_QUESTION', sectionId, questionId})},
    saveQuizItem: (question, id, sectionId, answer) => { dispatch({type: 'SAVE_QUIZ_ITEM', question, questionId: id, sectionId, answer})},
    shiftQuestionUp: (sectionId, questionId) => { dispatch({type: 'SHIFT_QUESTION_UP', sectionId, questionId})},
    shiftQuestionDown: (sectionId, questionId) => { dispatch({type: 'SHIFT_QUESTION_DOWN', sectionId, questionId})},
    changeNumberOfanswers: (sectionId, questionId, count) => { dispatch({type: 'CHANGE_NUMBER_OF_ANSWERS', sectionId, questionId, count})},
    setQuestionNumber: (sectionId, questionId, number) => {dispatch({type: 'SET_QUESTION_NUMBER', sectionId, questionId, number})}

  }
}


export default connect(mapStateToProps, mapDispatchToProps)(EditQuizItem);