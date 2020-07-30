import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

//3rd party components
import { Row, Col, ButtonToolbar, Button, InputGroup, FormControl, ButtonGroup } from 'react-bootstrap';
import { IoIosArrowUp, IoIosArrowDown, IoIosSave } from 'react-icons/io'
import { /*TiLightbulb,*/ TiTimes } from 'react-icons/ti';
import {MdContentCopy} from 'react-icons/md';

//custom components
import EditTextAnswer from './EditTextAnswer';
import EditMultipleChoiceAnswer from './EditMultipleChoiceAnswer';
import EditTwoPointTextAnswer from './EditTwoPointTextAnswer';

//action creators
import 
    { deleteQuestion, saveQuizItem, shiftQuestionUp, shiftQuestionDown, changeNumberOfAnswers, 
      setQuestionNumber, copyQuestion } from '../actions/quiz-item-actions'

const EditQuizItem = (props) => {
  
  //local state to hold changes before save is made. Props are passed down from parent.
  const [editedQuestion, setEditedQuestion] = useState(props.question ? props.question.question : '');
  const [questionIsUpdated, setQuestionIsUpdated] = useState(false);
  const [editedAnswer, setEditedAnswer] = useState(props.question.answer ? props.question.answer : '');
  const [answerIsUpdated, setAnswerIsUpdated] = useState(false);

  //assign state from store with redux hook
  const quiz = useSelector(state => state)

  //get access to dispatch via redux hook
  const dispatch = useDispatch();

  //updates local state
  const updateAnswerField = (e) => {
    const newAnswer = e.currentTarget.value;
    setEditedAnswer(
      newAnswer
    );
    setAnswerIsUpdated(
      true
    )
  }

  //updates local state
  const updateTwoPointAnswerField = (e, side) => {

    var newEditedAnswer = editedAnswer.slice();

    if (side ==='left') {
      newEditedAnswer[0] = e.currentTarget.value;
    } else if (side === 'right') {
      newEditedAnswer[1] = e.currentTarget.value;
    }
      
    setEditedAnswer(
      newEditedAnswer
    );
    setAnswerIsUpdated(
      true
    )
  }

  //updates local state
  const handleChangeQuestionField = (e) => {
    const newQuestion = e.currentTarget.value;
    setEditedQuestion(
      newQuestion
    )
    setQuestionIsUpdated(true)
  }
 
  const calculateItemNumber = () => {
    
    //Assign a number according to the quizitem's position in the questions array
    var number = parseInt(props.index) + 1;

    //Allows numbering to continue from previous non-empty section. 
    var previousSectionIndex; 

    console.log(props.restartNumbering)
    if(!props.restartNumbering && props.sectionIndex > 0) {
      //loop backwards over the sections array looking for a non empty section 
      for (var i = props.sectionIndex -1; i >= 0; i--) {
        if(quiz.sections[i].questions.length > 0) {
          //never reached if section is first in array OR if there are no previous non-empty sections OR "restart numbering" is selected. 
          previousSectionIndex = i;
          const previousQuestionIndex = quiz.sections[previousSectionIndex].questions.length -1;
          number = number + quiz.sections[previousSectionIndex].questions[previousQuestionIndex].number;
          break
        }
      }
    }
    console.log(number)
    dispatch(setQuestionNumber(props.sectionId, props.question.id, number));
  }
 
    calculateItemNumber();
    
    let questionComponent;

    if (props.question.type === "multi") {
      questionComponent =  (
        <React.Fragment>
          <div className="flex-container  " >            
            <EditMultipleChoiceAnswer
              updateAnswerField={updateAnswerField}
              answer={editedAnswer}
              numMultipleChoice={props.question.numMultipleChoice}
              id={props.question.id}
              index={props.question.index}
            />
            <div className="align-self-stretch" >
              <button className="add-radio-button check-answer-button" 
                onClick={ () => dispatch(changeNumberOfAnswers(props.sectionId, props.question.id, -1))}> - </button>
              <button className="add-radio-button check-answer-button" 
                onClick={ () => dispatch(changeNumberOfAnswers(props.sectionId, props.question.id, +1))}> + </button>
            </div>
          </div>
        </React.Fragment>
      )
    } else if (props.question.type === 'twoPointText') {
      questionComponent = (
        <React.Fragment>
        <div className="flex-container  " >            
          <EditTwoPointTextAnswer
            updateTwoPointAnswerField={updateTwoPointAnswerField}
            answer={editedAnswer}
            id={props.question.id}
            index={props.question.index}
          />
        </div>
      </React.Fragment>
      )
      
    } else {
      questionComponent = (
        <EditTextAnswer
          updateAnswerField={updateAnswerField}
          answer={editedAnswer}
          id={props.question.id}
          index={props.index}
        />
      )
    }    
    return (
      <React.Fragment>
      {/* question field */}
        <Col id="question-card-container">
          <Row>
            <Col>
              <InputGroup id="enter-answer-field">
                <InputGroup.Prepend >
                  <InputGroup.Text id="prepend-edit-answer-field">{props.question.number}</InputGroup.Text>
                </InputGroup.Prepend>
                <FormControl placeholder="enter the question" 
                  onChange={handleChangeQuestionField} defaultValue={editedQuestion}
                  //defaultValue is only for initial render. Changing state won't trigger re-render 
                  //form field will only rerender when this key is changed.
                  key={props.question.id}
                />
              </InputGroup>
            </Col>
          </Row>
            { /*answer Field */ }
          <Row >
            <Col >
              {questionComponent}
            </Col>
          </Row>
           { /* hint field*/ }
         {/* <Row>
            <Col>
              <InputGroup>
                <InputGroup.Prepend >
                  <InputGroup.Text><TiLightbulb className="input-symbol" /></InputGroup.Text>
                </InputGroup.Prepend>
                <FormControl placeholder="enter a hint (optional)" defaultValue={editedHint != null ? editedHint : ''}
                  onChange={this.updateHintField}
                />
              </InputGroup>
            </Col>
         </Row> */}
          <Row>
            <Col>
              <ButtonToolbar id="question-tool-bar" className="d-flex flex-column">
                <ButtonGroup >
                  <Button className="question-tool-bar-button" variant="secondary" size="sm" onClick={() => dispatch(saveQuizItem(editedQuestion, props.question.id, props.sectionId, editedAnswer))}><IoIosSave className='question-toolbar-symbol' /></Button>
                  <Button className="question-tool-bar-button" variant="secondary" size="sm" onClick={() => dispatch(deleteQuestion(props.sectionId, props.question.id))}><TiTimes className='question-toolbar-symbol' /></Button>
                  <Button className="question-tool-bar-button" variant="secondary" size="sm" onClick={() => dispatch(copyQuestion(props.sectionId, props.question.id))}><MdContentCopy className='question-toolbar-symbol' /></Button>
                  <Button className="question-tool-bar-button" variant="secondary" size="sm" onClick={() => dispatch(shiftQuestionDown(props.sectionId, props.question.id))}><IoIosArrowDown className='question-toolbar-symbol' /></Button>
                  <Button className="question-tool-bar-button" variant="secondary" size="sm" onClick={() => dispatch(shiftQuestionUp(props.sectionId, props.question.id))}><IoIosArrowUp className='question-toolbar-symbol'/></Button>
                </ButtonGroup>
              </ButtonToolbar>
            </Col>
          </Row>
        </Col>
      </React.Fragment>
    )
  }

export default EditQuizItem;