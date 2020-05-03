import React from 'react';
import {InputGroup, FormControl} from 'react-bootstrap';
import {IoMdKey} from 'react-icons/io'

class EditTextAnswer extends React.Component {
  render () {
    return (
      <InputGroup>
        <InputGroup.Prepend>
          <InputGroup.Text><IoMdKey className="input-symbol"/></InputGroup.Text>
        </InputGroup.Prepend>
        <FormControl placeholder="enter the answer" defaultValue={this.props.answer != null ? this.props.answer : ''}
          onChange={this.props.updateAnswerField}
        />
      </InputGroup>
    )
  }
}

export default EditTextAnswer;