import React from 'react';
import TakeQuiz from './TakeQuiz';
import CreateQuiz from './CreateQuiz';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container,Col, Tabs, Tab } from 'react-bootstrap';

const QuizPanel = (props) => {

  return (
    <Container>
      <Col id="take-quiz-container" md={{ span: 8, offset: 2 }} lg={{span: 8, offset: 2}}>
      <div>{props.numQuestions  }</div>
        <Tabs className="tab" defaultActiveKey="view" >
          <Tab   eventKey="view" title="View">
            <TakeQuiz />
          </Tab>
          <Tab eventKey="edit" title="edit">
            <CreateQuiz/>
          </Tab>
        </Tabs>
      </Col>
    </Container>
  ); 
}

export default QuizPanel;

