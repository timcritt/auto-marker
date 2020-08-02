import React from 'react';
import {InputGroup, FormControl} from 'react-bootstrap';
import {IoMdKey} from 'react-icons/io'

const EditTextAnswer = (props) => {
  
  return (
    <InputGroup>
      <InputGroup.Prepend>
        <InputGroup.Text><IoMdKey className="input-symbol"/></InputGroup.Text>
      </InputGroup.Prepend>
      <FormControl placeholder="enter the answer" defaultValue={props.answer != null ? props.answer : ''}
        onChange={props.updateAnswerField}
      />
    </InputGroup>
  )
}

export default EditTextAnswer;