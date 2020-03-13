import React from 'react';
import {Container, Col, Row, Button} from 'react-bootstrap'
import sampleQuizes from '../sampleQuiz'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'

class LoadQuiz extends React.Component {

  render () {
    return (
      <Container>
        <Col id="edit-quiz-container" md={{ span: 6, offset: 3 }}>
          <Col id="title-field-row" >
            <Row id="title-container">
              <div id="title-container">
                My Quizzes
              </div>
            </Row>
          </Col>
          <Col className="quiz-list-container">
            {sampleQuizes.map( quiz => {
              return (
                <React.Fragment>
                  <div 
                    key={quiz.index}
                    quizid={quiz.quizid}
                   
                      >{quiz.title}
                  </div>
                  <Link to='/createQuiz'>
                    <Button  onClick={() => this.handleLoadQuiz(quiz.quizid)} className="edit-quiz-button">edit quiz</Button>
                  </Link>
                  <Link to='/Quiz'>
                    <Button onClick={() => this.handleLoadQuiz(quiz.quizid)} className="edit-quiz-button">preview</Button>
                  </Link>
                  
                </React.Fragment>
              )
            })}
          </Col>
        </Col>  
      </Container>
    )
  }
  handleLoadQuiz (key)  {
    this.props.loadQuiz(key);
  }
}

const mapActionsToProps = (dispatch) => {
  return {
    loadQuiz: (key) => dispatch({type: "LOAD_QUIZ", key: key}),
  }
}

export default connect(null, mapActionsToProps)(LoadQuiz);