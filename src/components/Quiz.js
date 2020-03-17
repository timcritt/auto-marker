import React from 'react';
import Question from './Question';
import TakeQuiz from './TakeQuiz';
import CreateQuiz from './CreateQuiz';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Button, Col, Tabs, Tab } from 'react-bootstrap';
//import  * as QuizActions  from '../actions/quiz-actions';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'

class Quiz extends React.Component {

  render() {
    
    return (
      <Container>
        <Col id="take-quiz-container" md={{ span: 6, offset: 3 }} lg={{span: 10, offset: 1}}>
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
}

const mapStateToProps = state => ({
  title: state.title,
  questions: state.questions
})

const mapActionsToProps = (dispatch) => {
  console.log("loading quix")
  return {
    
    loadQuiz: () => dispatch({type: "LOAD_QUIZ"})
  }
   
}

export default connect(mapStateToProps, mapActionsToProps)(Quiz);

