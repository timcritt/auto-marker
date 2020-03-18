import React from 'react';
import { connect } from 'react-redux';
import { Row, Col, ButtonToolbar, Button, InputGroup, FormControl, ButtonGroup } from 'react-bootstrap';
import { IoIosArrowUp, IoIosArrowDown, IoIosSave, IoMdKey,  } from 'react-icons/io'
import { TiLightbulb, TiTimes } from 'react-icons/ti'
import EditTextAnswer from './EditTextAnswer'
import EditMultipleChoiceAnswer from './EditMultipleChoiceAnswer';


class EditQuizItem extends React.Component {
  state = {
    editedQuestion:  this.props.question.question,
    editedHint: this.props.question ? this.props.question.hint : '',
    questionIsUpdated: false,
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
    const editedHint = this.state.editedHint
    return (
      <React.Fragment>
      {/* question field */}
        <Col id="question-card-container">
          <Row >
            <Col>
              <InputGroup id="enter-answer-field">
                <InputGroup.Prepend >
                  <InputGroup.Text id="prepend-edit-answer-field">{questionNumber}</InputGroup.Text>
                </InputGroup.Prepend>
                <FormControl placeholder="enter the question" defaultValue={this.state.editedQuestion}
                  onChange={this.handleChangeQuestionField}
                  //defaultValue is only for initial render. Changing state won't trigger re-render 
                  //form field will only rerender when this key is changed.
                  key={this.props.id}
                />
              </InputGroup>
            </Col>
          </Row>
          { /*answer Field */ }
          <Row >
            <Col>
              <EditMultipleChoiceAnswer
                updateAnswerField={this.updateAnswerField}
                answer={this.props.question.answer}
                id={this.props.question.id}>
              </EditMultipleChoiceAnswer>
            </Col>
          </Row>
          { /* hint field*/ }
          <Row>
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


export default connect(mapStateToProps, mapDispatchToProps)(EditQuizItem);