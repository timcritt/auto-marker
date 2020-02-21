import React from 'react';
import Question from './Question';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Button } from 'react-bootstrap';
//import  * as QuizActions  from '../actions/quiz-actions';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'

class Quiz extends React.Component {
  
  render() {
    return (
      <Container>
        <Row></Row>
        <Row>
          <button onClick={this.handleLoadQuiz}>Load Sample Questions</button>
        </Row>
        <Row>
          <span>{this.props.title}</span>
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
        <Link to='/createQuiz'>
          <Button>edit quiz</Button>
        </Link>
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

