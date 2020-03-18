import React from 'react' 
import {InputGroup, FormControl} from 'react-bootstrap'

class TextAnswer extends React.Component {
  
  state = {
    
  }
  
  render () {
    return (
      <React.Fragment>
        <InputGroup.Prepend >
          <InputGroup.Text className={this.props.prependClassName} id="prepend">{this.props.questionNumber}</InputGroup.Text>
        </InputGroup.Prepend>
        <FormControl  className={this.props.answerInputClassName} onChange={this.props.updateUserAnswer}
           key={this.props.id} disabled={this.props.isDisabled}
        />
      </React.Fragment>
    )
  }
} 

export default TextAnswer;