import React from 'react';
import {InputGroup, FormControl} from 'react-bootstrap';
import {IoMdKey} from 'react-icons/io'

class EditTextAnswer extends React.Component {
  
  state = {
    editedAnswer: this.props.answer ? this.props.answer : '',
    answerIsUpdated: false,
  }

  render () {

    const editedAnswer = this.state.editedAnswer;

    return (
      <InputGroup>
        <InputGroup.Prepend>
          <InputGroup.Text><IoMdKey className="input-symbol"/></InputGroup.Text>
        </InputGroup.Prepend>
        <FormControl placeholder="enter the answer" defaultValue={editedAnswer != null ? editedAnswer : ''}
          onChange={this.props.updateAnswerField}
        />
      </InputGroup>
    )
  }
}

export default EditTextAnswer;