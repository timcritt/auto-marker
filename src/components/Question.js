import React from 'react';

class Question extends React.Component {

  state = {
    userAnswer: "",
    correctlyAnswered: false,
    answered: false
  }
  render() {
    return (
      <li>
        <div>{this.props.question.question}</div>
        <input onChange={this.updateUserAnswer}></input>
        <button onClick={this.checkUserAnswer}>Check</button>
        {this.state.correctlyAnswered && this.state.answered ? (
          <span style={{color: "green"}}> correct!</span>
        ) : (
          ''
        )}
        {!this.state.correctlyAnswered && this.state.answered ? (
          <span style={{color: "red"}}> incorrect!</span>
        ) : (
          ''
        )}
        
      </li>
    )
  }
  
  updateUserAnswer = (e) => {
    var userAnswer = e.currentTarget.value;
    this.setState({
      userAnswer
    });
  }
  checkUserAnswer = () => {
    if (this.props.question.answer.toLowerCase() === this.state.userAnswer.toLowerCase()) {
      this.setState({
        correctlyAnswered: true,
        answered: true
      })
    } else {
      this.setState({
        correctlyAnswered: false,
        answered: true
      })
    }
  }
}

export default Question;