import React from 'react';
import QuestionField from './QuestionField'

import { Container, Row, Col, ButtonToolbar, Button, InputGroup, FormControl, ButtonGroup } from 'react-bootstrap';
class CreateQuiz extends React.Component {
  
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
                    <FormControl  placeholder="enter the quiz title" 
                      onChange={this.updateQuestionField}
                    />
                  </InputGroup>
                </div>
              </Col>
            </Row>
              {Object.keys(this.props.questions)
                .map(key => 
                  <QuestionField 
                    key={key}
                    index={key}
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
            
            <Button className="add-question-button" block onClick={(e) => this.props.addQuestion(e)}>+ Add Question</Button>
          </Col>
        </Row>
      </Container>
    )
  }
}

export default CreateQuiz;