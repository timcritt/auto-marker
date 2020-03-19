import React from 'react';
import EditQuizItem from './EditQuizItem'
import { Col, InputGroup, FormControl, Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import LoadingBar from './LoadingBar'

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
  handleAddQuestion = (type) => {    
    
    const newQuestion = {
      id: `question${Date.now()}`,
      question: '',
      answer: type === 'multi' ? 'A' : '',
      hint: '',
      type: type,
      numMultiAnswers: 4
    }
    this.props.addNewQuestion(newQuestion);
  }
 
  render() {   
    
    if(this.props.loading) {
      return (
      <div className="loading-bar">
          <LoadingBar ></LoadingBar>
      </div>
      )
    }
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
              <EditQuizItem
                index={key}
                key={this.props.questions[key].id}
                id={this.props.questions[key].id}
                question={this.props.questions[key]}
                numMultiAnswers={this.props.questions[key].numMultiAnswers}
                updateQuestion={this.props.updateQuestion}
                updateAnswer={this.props.updateAnswer}
                addQuestion={this.props.addQuestion}
                deleteQuestion={this.props.deleteQuestion}
                addHint={this.props.addHint}
                updateHint={this.props.updateHint}
                type={this.props.questions[key].type}
                answer={this.props.questions[key].answer}
                
              />
            )
          }
        </Col>
        <Col className="add-question-button-container">
          <Button className="add-question-button" onClick={() => this.handleAddQuestion('multi')}>+ Add multiple choice question</Button>
          <Button className="add-question-button" onClick={() => this.handleAddQuestion('text')}>+ Add text question</Button>
        </Col>
      </React.Fragment>
    )
  }
}

const mapStateToProps = state => ({
  title: state.title,
  questions: state.questions,
  loading: state.loading,
  
})

const mapActionsToProps = (dispatch) => {
  return {
    addNewQuestion: (newQuestion) => { dispatch({ type: 'ADD_NEW_QUESTION', newQuestion: newQuestion})},
    saveTitle: (title) => {dispatch({type: 'SAVE_TITLE', title: title})},
    loadQuiz: () => dispatch({type: "LOAD_QUIZ"}),
    
  }
}

export default connect(mapStateToProps, mapActionsToProps)(CreateQuiz);

