import React from 'react';
import EditRadioButtonItem from './EditRadioButtonItem';

class EditMultipleChoiceAnswer extends React.Component {
  
   render () {    
    var radioButtonItems = [];
    var i = 0;
    for (i=0; i<this.props.numMultipleChoice; i++) {
      radioButtonItems.push(
        <EditRadioButtonItem
          key={i}
          index={i}
          name={this.props.id}
          handleAnswerChange={this.handleAnswerChange}
          answer={this.props.answer}
        />)
    }
    return (
      <React.Fragment>
        <div id='answer-input-test' className="flex-container flex-grow flex-space-around answer-input ">
        {radioButtonItems.map(radioButton => {
          return radioButton;
        })}
        </div>
      </React.Fragment>
    )
  }

  handleAnswerChange = (e) => {
    this.props.updateAnswerField(e);
  }
}

export default EditMultipleChoiceAnswer;


