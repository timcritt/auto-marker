import React from 'react';
import { Container, Row, Col, ButtonToolbar, Button, InputGroup, FormControl, ButtonGroup } from 'react-bootstrap';
import { Html5Entities } from 'html-entities';
import { connect } from 'react-redux';
import { saveQuiz } from '../actions/quiz-actions';
import { IoIosArrowUp, IoIosArrowDown, IoIosSave, IoMdSettings, IoMdTrash, IoIosHelpCircleOutline, IoIosHelpCircle, IoMdKey,  } from 'react-icons/io'
import { TiLightbulb, TiDeleteOutline, TiTimes, TiPen } from 'react-icons/ti'

//this is needed to get around "dangerous code injection" protection in React. This method is safe. 
const htmlEntities = new Html5Entities();

class QuestionField extends React.Component {

  state = {
    editedQuestion:  this.props.question.question,
    editedAnswer: this.props.question ? this.props.question.answer : '',
    editedHint: this.props.question ? this.props.question.hint : '',
    questionIsUpdated: false,
    answerIsUpdated: false,
  }
  updateAnswerField = (e) => {
    const newAnswer = e.currentTarget.value;
    this.setState({
      editedAnswer: newAnswer,
      answerIsUpdated: true
    })
    console.log(this.state.editedAnswer)
  }
  handleChangeQuestionField = (e) => {
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
  handleSaveQuestion = (id) => {
    
    const questions = JSON.parse(JSON.stringify(this.props.questions))
    
    let i = 0;
    for (i=0; i<questions.length; i++) {
      if (questions[i].id === id) {
        questions[i].question = this.state.editedQuestion;
        questions[i].answer = this.state.editedAnswer;
        questions[i].hint = this.state.editedHint;
        
      }
    }    
    this.props.saveQuestions(questions)
  }
  handleShiftQuestionUp = (id) => {
    this.props.shiftQuestionUp(id);
    
  }
  handleShiftQuestionDown = (id) => {
    this.props.shiftQuestionDown(id);
  }


  handleDeleteQuestion = (id) => {
    this.props.deleteQuestion(id);
  }

  handleLoadQuiz = () => {
    //put some code here to pick which quiz to load
    console.log("loading quiz")
    this.props.loadQuiz();
  }
 
  render() {

    const questionNumber = `${(parseInt(this.props.index) + 1).toString()}`;
    const editedAnswer = this.state.editedAnswer;
    const editedHint = this.state.editedHint
    return (
      <React.Fragment>
      {/* question field */}
        <Col id="question-card-container">
          <Row >
            <Col>
              <div>
                <InputGroup id="enter-answer-field">
                  <InputGroup.Prepend >
                    <InputGroup.Text id="prepend-edit-answer-field">{questionNumber}</InputGroup.Text>
                  </InputGroup.Prepend>
                  <FormControl placeholder="enter the question" defaultValue={this.state.editedQuestion}
                    onChange={this.handleChangeQuestionField}
                    //defaultValue is only for initial render. Changing state won't trigger render 
                    //form field will only rerender when this key is changed. A bit
                    key={this.props.id}
                  />
                </InputGroup>
              </div>
            </Col>
          </Row>
          { /*answer Field */ }
          <Row >
            <Col>
              <div>
                <InputGroup>
                  <InputGroup.Prepend>
                    <InputGroup.Text><IoMdKey className="input-symbol"/></InputGroup.Text>
                  </InputGroup.Prepend>
                  <FormControl placeholder="enter the answer" defaultValue={editedAnswer != null ? editedAnswer : ''}
                    onChange={this.updateAnswerField}
                  />
                </InputGroup>
              </div>
            </Col>
          </Row>
          { /* hint field*/ }
          <Row>
            <Col>
              <div>
                <InputGroup>
                  <InputGroup.Prepend >
                    <InputGroup.Text><TiLightbulb className="input-symbol" /></InputGroup.Text>
                  </InputGroup.Prepend>
                  <FormControl placeholder="enter a hint (optional)" defaultValue={editedHint != null ? editedHint : ''}
                    onChange={this.updateHintField}
                  />
                </InputGroup>
              </div>
            </Col>
          </Row>
          <Row >
            <Col >
              <ButtonToolbar id="question-tool-bar" className="d-flex flex-column">
                <ButtonGroup >
                  <Button className="question-tool-bar-button" variant="secondary" size="sm" onClick={() => this.handleSaveQuestion(this.props.id)}><IoIosSave className='question-toolbar-symbol' /></Button>
                  <Button className="question-tool-bar-button" variant="secondary" size="sm" onClick={() => this.handleDeleteQuestion(this.props.id)}><TiTimes className='question-toolbar-symbol' /></Button>
                  <Button className="question-tool-bar-button" variant="secondary" size="sm" onClick={() => this.handleShiftQuestionDown(this.props.id)}><IoIosArrowDown className='question-toolbar-symbol' /></Button>
                  <Button className="question-tool-bar-button" variant="secondary" size="sm" onClick={() => this.handleShiftQuestionUp(this.props.id)}><IoIosArrowUp className='question-toolbar-symbol'/></Button>
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
  return { 
    title: state.title,
    questions: state.questions,
    
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    
    deleteQuestion: (id) => { dispatch({type: 'DELETE_QUESTION', id: id})},
    saveQuestions: (questions) => { dispatch({type: 'SAVE_QUESTIONS', questions: questions})},
    shiftQuestionUp: (id) => { dispatch({type: 'SHIFT_QUESTION_UP', id: id})},
    shiftQuestionDown: (id) => { dispatch({type: 'SHIFT_QUESTION_DOWN', id: id})},
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(QuestionField);