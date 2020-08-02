import React from 'react';

const RadioButtonItem = (props) => {
 
  //assigns a letter based on the position in the array, starting from 0 = A
  var letter = String.fromCharCode(` ${props.index + 65} `)

  return (
    <div className="padding-top padding-bottom">
      <label className="radio">
        <input className="radio-input" type="radio" 
          name={props.name} 
          value={letter} 
          onChange={props.updateUserAnswer}
          disabled={props.isDisabled}
        />
        {letter}
      </label>
    </div>
  )  
}

export default RadioButtonItem;