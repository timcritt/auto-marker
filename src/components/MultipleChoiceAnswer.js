import React from 'react' 
import {InputGroup} from 'react-bootstrap';
import RadioButtonItem from './RadioButtonItem'

class MultipleChoiceAnswer extends React.Component {
  render () {
    console.log(this.props.question)
    var radioButtonItems = [];
  
    var i = 0;
    for (i=0; i<this.props.question.numMultipleChoice; i++) {

      radioButtonItems.push(
        <RadioButtonItem
          key={i}
          index={i}
          name={this.props.id}
          updateUserAnswer={this.props.updateUserAnswer}
          answer={this.props.answer}
          isDisabled={this.props.isDisabled}
        />)
    }
    return (
      <React.Fragment>
        <InputGroup.Prepend >
          <InputGroup.Text className={this.props.prependClassName} id="prepend">{this.props.question.number}</InputGroup.Text>
        </InputGroup.Prepend>
        <div className={`flex-container flex-space-around flex-grow answer-input ${this.props.answerInputClassName}`}>
          {radioButtonItems.map(radioButton => {
            return radioButton;
          })}
        </div>
      </React.Fragment>
    )
  }
} 

export default MultipleChoiceAnswer;