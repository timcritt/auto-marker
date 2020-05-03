import React from 'react';
import {InputGroup, FormControl} from 'react-bootstrap';
import {IoMdKey} from 'react-icons/io'

class EditTwoPointTextAnswer extends React.Component {
  
  state = {
    editedAnswer:  this.props.answer ? this.props.answer : ['','']
  }
  
  render () {
    return (
      <InputGroup>
        <InputGroup.Prepend>
          <InputGroup.Text><IoMdKey className="input-symbol"/></InputGroup.Text>
        </InputGroup.Prepend>
        <FormControl className="two-part-answer" placeholder="enter the left part of the answer" defaultValue={this.state.editedAnswer[0]}
          onChange={(e) => this.props.updateTwoPointAnswerField(e, 'left')}
        />
        <FormControl className="two-part-answer" placeholder="enter the right part of the answer" defaultValue={this.state.editedAnswer[1]}
          onChange={(e) => this.props.updateTwoPointAnswerField(e, 'right')}
        />
      </InputGroup>
    )
  }
}

export default EditTwoPointTextAnswer;