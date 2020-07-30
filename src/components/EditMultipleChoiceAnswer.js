import React from 'react';
import EditRadioButtonItem from './EditRadioButtonItem';

const EditMultipleChoiceAnswer = (props) => {
  
  const handleAnswerChange = (e) => {
    props.updateAnswerField(e);
  }

  var radioButtonItems = [];
  
    var i = 0;
    for (i=0; i < props.numMultipleChoice; i++) {
      radioButtonItems.push(
        <EditRadioButtonItem
          key={i}
          index={i}
          name={props.id}
          handleAnswerChange={handleAnswerChange}
          answer={props.answer}
        />)
    }

  return (
    <React.Fragment>
      <div id='answer-input-test' className="flex-container flex-grow flex-space-around answer-input ">
      {radioButtonItems.map(radioButton => {
        return radioButton;
      })}
      </div>
    </React.Fragment>
  )
}

export default EditMultipleChoiceAnswer;


