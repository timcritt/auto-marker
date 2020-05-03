import React from 'react';
import {Container, Col, Row} from 'react-bootstrap'
import sampleQuizes from '../sampleQuiz'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'

class LoadQuiz extends React.Component {
  state = {
    filterTerm: ''
  }
  render () {
    return (
      <Container>
        <Col id="edit-quiz-container" md={{ span: 10, offset: 1 }}>
          <Row>
            <Col className="flex-container flex-space-between padding-right padding-left padding-bottom" >
              <div className="load-quiz-container-title" >
                My Quizes
              </div>
              <input className="search-field" placeholder="search" onChange={this.handleUpdateFilterTerm}/>
            </Col>
          </Row>
          <div className="quiz-selector">
          {sampleQuizes.filter( quiz => {
            return quiz.title.toLowerCase().includes(this.state.filterTerm.toLowerCase().trim())
            }).map( (quiz,index) => {
              return (
                <Col className="flex-item" sm={{span:12}} md={{span: 6}} lg={{span: 4}}
                  key={index}
                  quizid={quiz.quizid}
                  >
                  <Link className="load-quiz-link" to='/Quiz' onClick={() => this.props.loadQuiz(quiz.quizId)} >
                    <div className="margin-inside-columns">
                        <div>
                          <div><span className="quiz-title-small">{quiz.title}</span></div>
                          <div><span className="num-questions">{quiz.numQuestions} questions</span></div>
                        </div>
                    </div>
                  </Link>
                </Col>
            )})}

            <Col className="flex-item" sm={{span:12}} md={{span: 6}} lg={{span: 4}}>
              <div className="margin-inside-columns new-quiz">
                <Link className="add-quiz-x" onClick={this.props.newQuiz} to="/Quiz"  
                >+
                </Link>
              </div>
            </Col>
          </div>
        </Col>  
      </Container>
    )
  }
  handleLoadQuiz (key)  {
    this.props.loadQuiz(key);
  }
  handleUpdateFilterTerm = (e) => {
    this.setState({
      filterTerm: e.currentTarget.value
    })
  }
}

const mapActionsToProps = (dispatch) => {
  return {
    loadQuiz: (quizId) => dispatch({type: 'LOAD_QUIZ', quizId}),
    newQuiz: () => dispatch({type: "NEW_QUIZ"})
  }
}

export default connect(null, mapActionsToProps)(LoadQuiz);