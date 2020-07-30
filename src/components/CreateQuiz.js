import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import EditSection from './EditSection'
import { Col, InputGroup, FormControl, Button } from 'react-bootstrap';
import LoadingBar from './LoadingBar';

//action creators
import { saveTitle } from '../actions/quiz-actions';
import { addSection } from '../actions/section-actions';

const CreateQuiz = () => {

  const title = useSelector(state => state.title ? state.title : '');
  const loading = useSelector(state => state.loading);
  const sections = useSelector(state => state.sections)

  const dispatch = useDispatch();

  const updateTitle = (e) => {
    const title = e.currentTarget.value;
    dispatch(saveTitle(title));
  }
  
  if(loading) {
    return (
    <div className="loading-bar">
        <LoadingBar></LoadingBar>
    </div>
    )
  }
  return (
    <React.Fragment>
      <Col id="title-field-row" >
        <InputGroup >
          <FormControl  
            className="edit-title-field"
            placeholder="enter a title"
            defaultValue={title}
            onChange={updateTitle}
          />
        </InputGroup>
      </Col>
      <Col className="fixed-container">
        {Object.keys(sections).map( key=> {
                      
          return ( 
            <EditSection 
              section={sections[key]}
              key={sections[key].id}
              id={sections[key].id}
              index={key}
            />
          )
        })}
      </Col>
      <Col className="add-question-button-container">
        <Button className="add-question-button" onClick={() => dispatch(addSection())}>+section</Button>
      </Col>
    </React.Fragment>
  )
}

export default CreateQuiz;

