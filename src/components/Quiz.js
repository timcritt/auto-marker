import React from 'react';
import Question from './Question';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Button, Col } from 'react-bootstrap';
//import  * as QuizActions  from '../actions/quiz-actions';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'



class Quiz extends React.Component {
  
  render() {
    return (
      <Container>
        <Col id="take-quiz-container" md={{ span: 6, offset: 3 }}>
          <Col >
            <Row id="title-container">
              <div id="title-container">
                {this.props.title}
              </div>
            </Row>
          </Col>
          <Col>
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
            <Row>
              <Col>
                
                <Link to='/createQuiz'>
                  <Button className="edit-quiz-button">edit quiz</Button>
                </Link>
              </Col>
            </Row>
          </Col>
        </Col>
      </Container>
    );
  }
  handleLoadQuiz = () => {
    //put some code here to pick which quiz to load
    console.log("loading quiz")
    this.props.loadQuiz();
  }
}

const mapStateToProps = state => ({
  title: state.title,
  questions: state.questions
})

const mapActionsToProps = (dispatch) => {
  return {
    //rmember to add the action property of the quiz that you want to load
    loadQuiz: () => dispatch({type: "LOAD_QUIZ"})
  }
   
}

export default connect(mapStateToProps, mapActionsToProps)(Quiz);

