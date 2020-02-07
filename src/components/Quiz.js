import React from 'react';
import Question from './Question';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';


class Quiz extends React.Component {
  
  render() {
    return (
      <Container>
        <Row></Row>
        <Row>
          <button onClick={this.props.loadSampleQuestions}>Load Sample Questions</button>
        </Row>
        <Row>
          <span>{this.props.questions.title}</span>
        </Row>
        <Row>
          <ol type="none">
            {Object.keys(this.props.questions)
              .map(key => 
                <Question 
                  key={key}
                  index={key}
                  question={this.props.questions[key]}
                  >
                </Question>   
              )
            }
          </ol>
        </Row>
      </Container>
    );
  }
}

export default Quiz;