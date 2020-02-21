import React from 'react';
import QuestionField from './QuestionField'
import { Container, Row, Col, InputGroup, FormControl, Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'

//import { updateAnswer } from '../actions/quiz-actions';

class CreateQuiz extends React.Component {
  updateTitle = (e) => {
    const title = e.currentTarget.value;
    this.props.updateTitle(title)
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
      <Container>
        <Row>
          <Col id="quiz-container" md={{ span: 6, offset: 3 }}>
            <Row id="title-field-row" >
              <Col md={{ span: 6, offset: 3 }} >
                <div >
                  <InputGroup >
                    <InputGroup.Prepend>
                      <InputGroup.Text>T</InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl  
                      placeholder="enter a title"
                      value={this.props.title}
                      onChange={this.updateTitle}
                    />
                  </InputGroup>
                </div>
              </Col>
            </Row>
              {Object.keys(this.props.questions)
                .map(key => 
                  <QuestionField 
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
            <Button className="add-question-button" block onClick={(e) => this.handleAddQuestion()}>+ Add Question</Button>
          </Col>
        </Row>
        <Link to='/Quiz'>
          <Button>take quiz</Button>
        </Link>
      </Container>
    )
  }
}

const mapStateToProps = state => ({
  title: state.title,
  questions: state.questions
})

const mapActionsToProps = (dispatch) => {
  return {
    addNewQuestion: (newQuestion) => { dispatch({ type: 'ADD_NEW_QUESTION', newQuestion: newQuestion})}
  }
}

export default connect(mapStateToProps, mapActionsToProps)(CreateQuiz);

