import React from 'react';

const EditRadioButtonItem = (props) => {

  //assigns a letter based on the position in the array, starting from 0 = A
  var letter = String.fromCharCode(` ${props.index + 65} `)

  return (
    <div className="padding-top padding-bottom">
      <label className="radio">
        <input className="radio-input" type="radio" 
          name={props.name} 
          value={letter} 
          onChange={props.handleAnswerChange}
          defaultChecked={props.answer === letter && "checked" }
        />
        {letter}
      </label>
    </div>
  )
}

export default EditRadioButtonItem;