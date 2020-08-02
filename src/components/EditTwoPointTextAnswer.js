import React, { useState } from 'react';
import {InputGroup, FormControl} from 'react-bootstrap';
import {IoMdKey} from 'react-icons/io'

const EditTwoPointTextAnswer = (props) => {
  
  //local state
  const [editedAnswer] = useState(props.answer ? props.answer : ['',''])
  
  return (
    <InputGroup>
      <InputGroup.Prepend>
        <InputGroup.Text><IoMdKey className="input-symbol"/></InputGroup.Text>
      </InputGroup.Prepend>
      <FormControl className="two-part-answer" placeholder="enter the left part of the answer" defaultValue={editedAnswer[0]}
        onChange={(e) => props.updateTwoPointAnswerField(e, 'left')}
      />
      <FormControl className="two-part-answer" placeholder="enter the right part of the answer" defaultValue={editedAnswer[1]}
        onChange={(e) => props.updateTwoPointAnswerField(e, 'right')}
      />
    </InputGroup>
  )
}

export default EditTwoPointTextAnswer;