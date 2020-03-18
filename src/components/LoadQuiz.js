import React from 'react';
import {Container, Col, Row} from 'react-bootstrap'
import sampleQuizes from '../sampleQuiz'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'
import {loadQuiz} from '../actions/quiz-actions'

class LoadQuiz extends React.Component {
  state = {
    filterTerm: ''
  }
  render () {
    return (
      <Container>
        <Col id="edit-quiz-container" md={{ span: 10, offset: 1 }}>
         
          <Row>
            <Col className="flex-container flex-space-around padding-right padding-left padding-bottom" >
              <div className="load-quiz-container-title" >
                My Quizes
              </div>
              <input className="search-field" placeholder="search" onChange={this.handleUpdateFilterTerm}/>
            </Col>
          </Row>
          <div className="quiz-selector fixed-container">
          {sampleQuizes.filter( quiz => {
            return quiz.title.toLowerCase().includes(this.state.filterTerm.toLowerCase().trim())
          
            }).map( quiz => {
              return (
                <Col className="flex-item" sm={{span:12}} md={{span: 6}} lg={{span: 4}}
                  key={quiz.index}
                  quizid={quiz.quizid}
                  >
                  <Link className="load-quiz-link" to='/Quiz' onClick={() => this.handleLoadQuiz(quiz.quizid)} >
                    <div className="margin-inside-columns">
                        <div>
                          <div><span className="quiz-title-small">{quiz.title}</span></div>
                          <div><span className="num-questions">{quiz.questions.length} questions</span></div>
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

  handleFilterByName () {

  }
}
const mapActionsToProps = (dispatch) => {
  return {
    loadQuiz: (key) => dispatch(loadQuiz(key)),
    newQuiz: () => dispatch({type: "NEW_QUIZ",})
  }
}

export default connect(null, mapActionsToProps)(LoadQuiz);