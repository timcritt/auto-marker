import React from 'react' 
import {InputGroup, FormControl} from 'react-bootstrap'

const TextAnswer = (props) => {

  return (
    <React.Fragment>
      <InputGroup.Prepend >
        <InputGroup.Text className={props.prependClassName} id="prepend" >{props.questionNumber}</InputGroup.Text>
      </InputGroup.Prepend>
      <FormControl  className={props.answerInputClassName} onChange={props.updateUserAnswer} placeholder="your answer..."
          key={props.id} disabled={props.isDisabled}
      />
    </React.Fragment>
  )
} 

export default TextAnswer;