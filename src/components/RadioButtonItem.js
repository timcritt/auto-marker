import React from 'react';

class RadioButtonItem extends React.Component {

  render () {
    
    //assigns a letter based on the position in the array, starting from 0 = A
    var letter = String.fromCharCode(` ${this.props.index + 65} `)

    return (
      <div className="padding-top padding-bottom">
        <label className="radio">
          <input className="radio-input" type="radio" 
            name={this.props.name} 
            value={letter} 
            onChange={this.props.updateUserAnswer}
            disabled={this.props.isDisabled}
          />
          {letter}
        </label>
     
      </div>
    )
  }
}

export default RadioButtonItem;