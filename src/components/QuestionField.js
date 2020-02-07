import React from 'react';
import { Container, Row, Col, ButtonToolbar, Button, InputGroup, FormControl, ButtonGroup } from 'react-bootstrap';
import { Html5Entities } from 'html-entities';

//this is needed to get around "dangerous code injection" protection in React. This method is safe. 
const htmlEntities = new Html5Entities();

class QuestionField extends React.Component {

  state = {
    editedQuestion: this.props.question ? this.props.question.question : '',
    editedAnswer: this.props.question ? this.props.question.answer : '',
    editedHint: this.props.question.hint ? this.props.question.hint : '',
    questionIsUpdated: false,
    answerIsUpdated: false,
  }
  
  updateAnswerField = (e) => {
    const newAnswer = e.currentTarget.value;
    this.setState({
      editedAnswer: newAnswer,
      answerIsUpdated: true
    })
  }
  updateQuestionField = (e) => {
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
  saveNewQuestion = () => {
    this.props.updateQuestion(this.props.index, this.state.editedQuestion);
    this.props.updateAnswer(this.props.index, this.state.editedAnswer);
    this.props.updateHint(this.props.index, this.state.editedHint);

  }
  render() {

    const editedQuestion = this.state.editedQuestion;
    const editedAnswer = this.state.editedAnswer;
    const editedHint = this.state.editedHint
    return (
        <>
        {/* question field */}
          <Col id="question-card-container">
            <Row >
              <Col>
                <div >
                  <InputGroup >
                    <InputGroup.Prepend>
                      <InputGroup.Text>Q</InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl placeholder="enter the question" defaultValue={editedQuestion != null ? editedQuestion : ''}
                      onChange={this.updateQuestionField}
                    />
                  </InputGroup>
                </div>
              </Col>
            </Row>
            { /*answer Field */ }
            <Row>
              <Col>
                <div>
                  <InputGroup>
                    <InputGroup.Prepend>
                      <InputGroup.Text>A</InputGroup.Text>
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
                    <InputGroup.Prepend>
                      <InputGroup.Text>H</InputGroup.Text>
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
                    <Button className="question-tool-bar-button" variant="secondary" size="sm" onClick={() => this.saveNewQuestion()}>save</Button>
                    <Button className="question-tool-bar-button" variant="secondary" size="sm" onClick={() => this.props.deleteQuestion(this.props.index)}>delete</Button>
                    <Button className="question-tool-bar-button" variant="secondary" size="sm" >{htmlEntities.decode('&#x2304;')}</Button>
                    <Button className="question-tool-bar-button" variant="secondary" size="sm" >{htmlEntities.decode('&#x2303;')}</Button>
                  </ButtonGroup>
                </ButtonToolbar>
              </Col>
            </Row>
          </Col>
        </>   
    )
  }
}

export default QuestionField;