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
          <Row id="title-container" >
            <div id="title-container" >
              My Quizes
            </div>
          </Row>
          <div   >
            <div className="quiz-selector fixed-container">
              {sampleQuizes.map( quiz => {
                return (
              <Col className="flex-item" sm={{span:12}} md={{span: 4}}
                key={quiz.index}
                quizid={quiz.quizid}
                >
                <div>
                  <div><span className="quiz-title-small">{quiz.title}</span></div>
                  <div><span className="num-questions">{quiz.questions.length} questions</span></div>
                </div>
                <Link to='/createQuiz'
                    onClick={() => this.handleLoadQuiz(quiz.quizid)} 
                  >
                  edit 
                </Link>
                <Link to='/Quiz'
                    onClick={() => this.handleLoadQuiz(quiz.quizid)} >
                    preview
                </Link>
              </Col>
                )
              })}
            </div>
          </div>
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