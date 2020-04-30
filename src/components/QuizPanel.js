import React from 'react';
import TakeQuiz from './TakeQuiz';
import CreateQuiz from './CreateQuiz';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container,Col, Tabs, Tab } from 'react-bootstrap';
//import  * as QuizActions  from '../actions/quiz-actions';
import { connect } from 'react-redux';


class QuizPanel extends React.Component {

  render() {
    return (
      <Container>
        <Col id="take-quiz-container" md={{ span: 6, offset: 3 }} lg={{span: 10, offset: 1}}>
        <div>{this.props.numQuestions  }</div>
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
  ...state
})

const mapActionsToProps = (dispatch) => {
  console.log("loading quix")
  return {
    
    loadQuiz: () => dispatch({type: "LOAD_QUIZ"})
  }
   
}

export default connect(mapStateToProps, mapActionsToProps)(QuizPanel);

