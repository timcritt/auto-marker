import React from 'react' 
import {InputGroup} from 'react-bootstrap';
import RadioButtonItem from './RadioButtonItem'

const MultipleChoiceAnswer = (props) => {
  
  var radioButtonItems = [];

  var i = 0;
  for (i = 0; i < props.question.numMultipleChoice; i++) {

    radioButtonItems.push(
      <RadioButtonItem
        key={i}
        index={i}
        name={props.id}
        updateUserAnswer={props.updateUserAnswer}
        answer={props.answer}
        isDisabled={props.isDisabled}
      />)
  }
  return (
    <React.Fragment>
      <InputGroup.Prepend >
        <InputGroup.Text className={props.prependClassName} id="prepend">{props.question.number}</InputGroup.Text>
      </InputGroup.Prepend>
      <div className={`flex-container flex-space-around flex-grow answer-input ${props.answerInputClassName}`}>
        {radioButtonItems.map(radioButton => {
          return radioButton;
        })}
      </div>
    </React.Fragment>
  )
}

export default MultipleChoiceAnswer;