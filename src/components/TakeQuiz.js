import React from 'react';
import {Col, Row} from 'react-bootstrap';
import { useSelector } from 'react-redux';
import LoadingBar from './LoadingBar'
import Section from './Section'

const TakeQuiz = () => {
  
  //map state to props
  const title = useSelector(state => state.title);
  const sections = useSelector(state => state.sections);
  const loading = useSelector(state => state.loading);

  if(loading) {
    return (
      <div className="loading-bar">
        <LoadingBar></LoadingBar>
      </div>
    )
  }
  
  return (
    <React.Fragment>
      <Col>
        <div>{loading}</div>
        <Row id="title-container">
          {title}
        </Row>
      </Col>
      
      {sections.map( (section) => {
        return ( 
          <Section section={section}
            key={section.id}
          />
        )
      })}
    </React.Fragment>
  )
}
  
export default TakeQuiz;
