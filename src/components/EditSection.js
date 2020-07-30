import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import EditQuizItem from './EditQuizItem';
import { InputGroup, FormControl, Col, Row, Button} from 'react-bootstrap';

import { addNewQuestion } from '../actions/quiz-item-actions';
import { addSection, removeSection, saveSectionTitle } from '../actions/section-actions';

const EditSection = (props) => {
  
  //local state
  const [restartNumbering, setRestartNumbering] = useState(false);
  
  const dispatch = useDispatch();

  const handleCheckBoxTick = (e) => {
    let restart;
    e.currentTarget.checked ? restart = true : restart = false;
    setRestartNumbering(restart);
  }

  const handleChangeSectionTitle = (e) => {
    dispatch(saveSectionTitle(props.section.id, e.currentTarget.value));
  }
  console.log(props.id)
  return(
    <React.Fragment>
      <Col className='section-container'>
        <div className="section-title-container flex-container flex-space-between">
          <InputGroup >
            <FormControl 
              
              placeholder="enter section title" 
              defaultValue={props.section.sectionTitle} 
              onChange={handleChangeSectionTitle}
            />
          </InputGroup>
        </div>
        <Col className="restart-numbering-container">
          {props.index > 0 && 
          <label>
            <input type="checkbox" id="restartNumbering" name="restartNumbering" 
              onClick={handleCheckBoxTick}
            />restart numbering
          </label>
          }
        </Col>
          {Object.keys(props.section.questions)
            .map(key =>  
              <EditQuizItem 
                key={props.section.questions[key].id}
                index={key}
                sectionId={props.section.id}
                question={props.section.questions[key]}
                restartNumbering={restartNumbering}
                sectionIndex={props.index}
                >
              </EditQuizItem>  
            ) 
          }
        <div className="flex-container">
          <Button className="add-question-button" onClick={ () => dispatch(addNewQuestion("multi", props.id))}>+multiple choice</Button>
          <Button className="add-question-button" onClick={ () => dispatch(addNewQuestion("", props.id))}>+free text</Button>
          <Button className="add-question-button" onClick={ () => dispatch(addNewQuestion("twoPointText", props.id))}>+ Part 4</Button>
          <Button className="add-question-button flex-align-self-end" onClick={ () => dispatch(removeSection(props.id))}>remove section</Button> 
        </div>
      </Col>
    </React.Fragment>
  )
}

export default EditSection;

