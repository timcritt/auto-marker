import React, {useState} from 'react' 
import {InputGroup} from 'react-bootstrap';
import RadioButtonItem from './RadioButtonItem'

const MultipleChoiceAnswer = (props) => {
  
  const answer =  useState(props.answer)

  console.log(this.props.answer)
  var radioButtonItems = [];
  console.log(this.props.question.numMultiAnswers)
  var i = 0;
  for (i=0; i<this.props.question.numMultiAnswers; i++) {

    radioButtonItems.push(
      <RadioButtonItem
        key={i}
        index={i}
        name={this.props.id}
        handleAnswerChange={handleAnswerChange}
        answer={props.answer}    
      />
    )
  }
  return (
    <React.Fragment>
      <div className="flex-container flex-space-around flex-grow answer-input ">
        {radioButtonItems.map(radioButton => {
          return radioButton;
        })}
      </div>
    </React.Fragment>
  )
} 

export default MultipleChoiceAnswer;