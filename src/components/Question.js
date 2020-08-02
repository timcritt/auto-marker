import React, { useState } from 'react';
import { InputGroup, Button } from 'react-bootstrap';
import TextAnswer from './TextAnswer';
import MultipleChoiceAnswer from './MultipleChoiceAnswer'
import { TiTick,} from 'react-icons/ti';

const Question = (props) => {

  //local state
  const [userAnswer, setUserAnswer] = useState("");
  const [correctlyAnswered, setCorrectlyAnswered] = useState(false);
  const [answered, setAnswered] = useState(false);
  const [hintVisibilty, setHintVisibility] = useState('hidden');
  const [hasSeenHint, setHasSeenHint] = useState(false);
  const [answerInputClassName, setAnswerInputClassName] = useState('answer-input');
  const [isDisabled, setIsDisabled] = useState(false);
  const [checkButtonContent, setCheckButtonContent] = useState('check');
  const [checkButtonClassName, setCheckButtonClassName] = useState('check-answer-button');
  const [prependClassName, setPrependClassName] = useState('');   
    
  // const toggleShowHint = () => {
  //   const hintVisibilty = hintVisibilty === 'hidden' ? 'visible' : 'hidden';
  //   this.setState({hintVisibilty})
  // }

  const updateUserAnswer = (e) => {
    var userAnswer = e.currentTarget.value;
    setUserAnswer(userAnswer);
    setCheckButtonContent('check');
  }

  const checkUserAnswer = () => {
    if(Array.isArray(props.question.answer)) {
      if(userAnswer.trim().startsWith(`${props.question.answer[0]} `) || userAnswer.trim() === props.question.answer[0]) {
        console.log("left hand part is right")
      } else {
        console.log("left hand part is wrong")
      }
      if(userAnswer.trim().endsWith(`${props.question.answer[1]}`) || userAnswer.trim() === props.question.answer[0]) {
        console.log("right hand par is right")
      } else {
        console.log("right hand part is wrong")
      }
    } else {

      if (props.question.answer.toLowerCase().trim() === userAnswer.toLowerCase().trim()) {
        setCorrectlyAnswered(true);
        setAnswered(true);
        setAnswerInputClassName('correctly-answered');
        setIsDisabled(true);
        setCheckButtonContent(<TiTick/>);
        setCheckButtonClassName('check-button-correct');
        setPrependClassName('prepend-correct');
        
      } else {
        setCorrectlyAnswered(false);
        setAnswered(true);
        setAnswerInputClassName('incorrectly-answered');
      }
    }
  }

  var answer;

  if (props.question.type === 'multi') {

    answer = <MultipleChoiceAnswer  
                prependClassName={prependClassName} 
                answerInputClassName={answerInputClassName} 
                updateUserAnswer={updateUserAnswer}
                isDisabled={isDisabled}
                id={props.index}
                question={props.question}
              />
  } else {

    answer = <TextAnswer questionNumber={props.question.number} 
              prependClassName={prependClassName} 
              answerInputClassName={answerInputClassName} 
              updateUserAnswer={updateUserAnswer}
              isDisabled={isDisabled}
              id={props.index}
            />
  }

  return (
    <React.Fragment>
      <div className="question-container">
        <div className="question-text-container">{props.question.question}</div>
        
        <InputGroup id="enter-answer-field" className="flex-container flex-space-between" >
          {answer}
          <Button className={checkButtonClassName} 
            onClick={checkUserAnswer} 
            disabled={isDisabled}
          >
            {checkButtonContent}
          </Button>
        </InputGroup>
      </div>
    </React.Fragment>
  )
}

export default Question;
