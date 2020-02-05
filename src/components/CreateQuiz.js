import React from 'react';
import QuestionField from './QuestionField'
import { Container, Row, Col, Button } from 'react-bootstrap';

class CreateQuiz extends React.Component {
  
  render() {
    return (
      <Container>
        <row>
          <Col md={{ span: 6, offset: 3 }}>
            <ol type="1">
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
            </ol>
            <Button block  onClick={(e) => this.props.addQuestion(e)}>+</Button>
          </Col>
        </row>
      </Container>
    )
  }
}

export default CreateQuiz;