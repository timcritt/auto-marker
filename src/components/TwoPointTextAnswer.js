import React from 'react' 
import {InputGroup, FormControl} from 'react-bootstrap'

const TwoPointTextAnswer = (props) => {

  return (
    <React.Fragment>
      <InputGroup.Prepend >
        <InputGroup.Text className={props.prependClassName} id="prepend">{props.questionNumber}</InputGroup.Text>
      </InputGroup.Prepend>
      <FormControl  className={props.answerInputClassName} onChange={props.updateUserAnswer}
          key={props.id} disabled={props.isDisabled}
      />
    </React.Fragment>
  )
} 

export default TwoPointTextAnswer;