import React from 'react';
import {Col, Row} from 'react-bootstrap';
import { connect } from 'react-redux';
import LoadingBar from './LoadingBar'
import Section from './Section'

class TakeQuiz extends React.Component {

  render() {
    if(this.props.loading) {
      return (
        <div className="loading-bar">
          <LoadingBar></LoadingBar>
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
        
        {this.props.sections.map( (section) => {
          return ( 
            <Section section={section}
              key={section.id}
            />
          )
        })}
      </React.Fragment>
    )
  }
}

const mapStateToProps = state => ({
  sections: state.sections,
  title: state.title,
  loading: state.loading
})

const mapActionsToProps = (dispatch) => {
  return {
    loadQuiz: () => dispatch({type: "LOAD_QUIZ"})
  }
   
}

export default connect(mapStateToProps, mapActionsToProps)(TakeQuiz);
