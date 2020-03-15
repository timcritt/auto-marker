import React from 'react';
import {Col, Row, Tab } from 'react-bootstrap';
import Question from './Question';
import { connect } from 'react-redux';

class TakeQuiz extends React.Component {

  render() {
    return (
      <React.Fragment>
        <Col>
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
  questions: state.questions
})

const mapActionsToProps = (dispatch) => {
  console.log("loading quix")
  return {
    
    loadQuiz: () => dispatch({type: "LOAD_QUIZ"})
  }
   
}

export default connect(mapStateToProps, mapActionsToProps)(TakeQuiz);
