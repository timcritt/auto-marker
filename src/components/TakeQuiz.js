import React from 'react';
import {Col, Row} from 'react-bootstrap';
import Question from './Question';
import { connect } from 'react-redux';
import LoadingBar from './LoadingBar'

class TakeQuiz extends React.Component {

  render() {
    
    if(this.props.loading) {
      return (
        <div className="loading-bar">
          <LoadingBar ></LoadingBar>
        </div>
      )
    }
    
    return (
      <React.Fragment>
          <Col>
            <div>{this.props.loading}</div>
            <Row id="title-container">
              {this.props.title}
            </Row>
          </Col>
          <Col className="fixed-container">
            {Object.keys(this.props.questions)
              .map(key => 
                <Question 
                  key={key}
                  index={key}
                  question={this.props.questions[key]}
                  type={this.props.questions[key].type}
                  >
                </Question>   
              )
            }
          </Col>
      </React.Fragment>
    )
  }
}

const mapStateToProps = state => ({
  title: state.title,
  questions: state.questions,
  loading: state.loading
})

const mapActionsToProps = (dispatch) => {
  return {
    loadQuiz: () => dispatch({type: "LOAD_QUIZ"})
  }
   
}

export default connect(mapStateToProps, mapActionsToProps)(TakeQuiz);
