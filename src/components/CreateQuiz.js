import React from 'react';
import QuestionField from './QuestionField'
import { Container, Row, Col, InputGroup, FormControl, Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'

//import { updateAnswer } from '../actions/quiz-actions';

class CreateQuiz extends React.Component {

  state = {
    editedTitle: this.props.title ? this.props.title : ''
  }
  updateTitle = (e) => {
    const title = e.currentTarget.value;
    //reactivate this if choosing to save title prop locally and then save to global state on save
    // this.setState({
    //   editedTitle: title
    // })
    this.props.saveTitle(title)
  }
  handleAddQuestion = () => {
    const newQuestion = {
      id: `question${Date.now()}`,
      question: '',
      answer: '',
      hint: ''
    }
    this.props.addNewQuestion(newQuestion);
  }
 
  render() {   
    return (
      <React.Fragment>
        
        <Col id="title-field-row" >
          <InputGroup >
            <FormControl  
              className="edit-title-field"
              placeholder="enter a title"
              defaultValue={this.props.title}
              onChange={this.updateTitle}
            />
          </InputGroup>
        </Col>
        <Col className="fixed-container create-container" >
       
          {Object.keys(this.props.questions)
            .map(key => 
              <QuestionField 
                index={key}
                key={this.props.questions[key].id}
                id={this.props.questions[key].id}
                question={this.props.questions[key]}
                updateQuestion={this.props.updateQuestion}
                updateAnswer={this.props.updateAnswer}
                addQuestion={this.props.addQuestion}
                deleteQuestion={this.props.deleteQuestion}
                addHint={this.props.addHint}
                updateHint={this.props.updateHint}
              />
            )
          }
        </Col>
        <Col className="add-question-button-container">
          <Button className="add-question-button" block onClick={(e) => this.handleAddQuestion()}>+ Add Question</Button>
        </Col>
      </React.Fragment>
    )
  }
}

const mapStateToProps = state => ({
  title: state.title,
  questions: state.questions
})

const mapActionsToProps = (dispatch) => {
  return {
    addNewQuestion: (newQuestion) => { dispatch({ type: 'ADD_NEW_QUESTION', newQuestion: newQuestion})},
    saveTitle: (title) => {dispatch({type: 'SAVE_TITLE', title: title})},
    loadQuiz: () => dispatch({type: "LOAD_QUIZ"}),
    
  }
}

export default connect(mapStateToProps, mapActionsToProps)(CreateQuiz);

