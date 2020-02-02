import React from 'react';

class Question extends React.Component {

  state = {
    userAnswer: ""
  }

  render() {
    return (
      <div>
        <p>{this.props.question.question}</p>
        <input onChange={this.updateUserAnswer}></input>
        <button onClick={this.checkQuestion}>Check</button>
      </div>
    )
  }
  setQuestion(question) {
    this.setState({
      question: question
    })
  }
  updateUserAnswer = (e) => {
    var userAnswer = e.currentTarget.value;
    this.setState({
      userAnswer
    });
  }
  checkQuestion = (userAnswer) => {
    if (this.state.answer === this.state.userAnswer) {
      alert("correct!");
    } else {
      alert("incorrect!");
    }
  }
}

export default Question;