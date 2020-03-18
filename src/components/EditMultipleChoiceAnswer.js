import React from 'react';
import {InputGroup, FormControl} from 'react-bootstrap';
import {IoMdKey} from 'react-icons/io'

class EditMultipleChoiceAnswer extends React.Component {
  
  state = {
    editedAnswer: this.props.answer ? this.props.answer : '',
    answerIsUpdated: false,
  }

  render () {    
    return (
      <React.Fragment>
        <div className="flex-container flex-space-around flex-grow answer-input ">
          <div className="padding-top padding-bottom">
            <input type="radio" name={this.props.id} value="A" onChange={this.handleAnswerChange}/>
            <span> A </span>
          </div>  
          <div className="padding-top padding-bottom">
            <input type="radio" name={this.props.id} value="B" onChange={this.handleAnswerChange}/>
            <span> B </span>
          </div>
          <div className="padding-top padding-bottom">
            <input type="radio" name={this.props.id} value="C" onChange={this.handleAnswerChange}/>
            <span> C </span>
          </div>
          <div className="padding-top padding-bottom">
            <input type="radio" name={this.props.id} value="D" onChange={this.handleAnswerChange}/>
            <span> D </span>
          </div>      
        </div>
      </React.Fragment>
    )
  }
  handleAnswerChange = (e) => {
    this.props.updateAnswerField(e);
  }
}

export default EditMultipleChoiceAnswer;