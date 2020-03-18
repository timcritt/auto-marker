import React from 'react' 
import {InputGroup, FormControl} from 'react-bootstrap'

class TextAnswer extends React.Component {
  
  state = {
    answer: this.props.answer,

  }

  render () {
    console.log(this.props.answerInputClassName)
    return (
      <React.Fragment>
        <InputGroup.Prepend >
          <InputGroup.Text className={this.props.prependClassName} >{this.props.questionNumber}</InputGroup.Text>
        </InputGroup.Prepend>
        <div className={`flex-container flex-space-around flex-grow ${this.props.answerInputClassName}`}>
          <div className="padding-top padding-bottom">
            <input type="radio" key={this.props.id} name={this.props.id} value="A" onChange={this.props.updateUserAnswer} disabled={this.props.isDisabled}/>
            <span> A </span>
          </div>  
          <div className="padding-top padding-bottom">
            <input type="radio" key={this.props.id} name={this.props.id} value="B" onChange={this.props.updateUserAnswer} disabled={this.props.isDisabled}/>
            <span> B </span>
          </div>
          <div className="padding-top padding-bottom">
            <input type="radio" key={this.props.id} name={this.props.id} value="C" onChange={this.props.updateUserAnswer} disabled={this.props.isDisabled}/>
            <span> C </span>
          </div>
          <div className="padding-top padding-bottom">
            <input type="radio" key={this.props.id} name={this.props.id} value="D" onChange={this.props.updateUserAnswer} disabled={this.props.isDisabled}/>
            <span> D </span>
          </div>      
          </div>
      </React.Fragment>
    )
  }
} 

export default TextAnswer;