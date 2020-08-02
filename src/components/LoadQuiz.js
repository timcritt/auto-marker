import React, { useState, useEffect } from 'react';
import {Container, Col, Row} from 'react-bootstrap';
import sampleQuizes from '../sampleQuiz';
import LoadingBar from './LoadingBar';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

//action creaters
import { loadQuiz, newQuiz } from '../actions/quiz-actions'

const LoadQuiz = () => {
  
  //local state
  const [filterTerm, setFilterTerm] = useState('');
  const [quizzesHaveFetched, setQuizzesHaveFetched] = useState(false);

  const [quizzes, setQuizzes] = useState();

  useEffect( () => {
    fetch("http://localhost:5000/quiz-summaries")
    .then(
      res => res.json() )  
    .then( data => setQuizzes(data) )
    .then( () => setQuizzesHaveFetched(true))
  }, []) //empty dependency [] means useEffect only runs once when the component is mounted, not infinitely

  //connect dispatch
  const dispatch = useDispatch();
  
  const handleUpdateFilterTerm = (e) => {
    setFilterTerm(
      e.currentTarget.value
    )
  }
  
  if(quizzesHaveFetched) {
    quizzes.forEach(quiz => console.log(quiz));
  }

  return (
    <Container>
      <Col id="edit-quiz-container" md={{ span: 10, offset: 1 }}>
        <Row>
          <Col className="flex-container flex-space-between padding-right padding-left padding-bottom" >
            <div className="load-quiz-container-title" >
              My Quizes
            </div>
            <input className="search-field" placeholder="search" onChange={handleUpdateFilterTerm}/>
          </Col>
        </Row>
        <div className="quiz-selector">
        {quizzesHaveFetched  && quizzes.filter( quiz => {
          return quiz.quiz_title.toLowerCase().includes(filterTerm.toLowerCase().trim())
          }).map( (quiz,index) => {
            return (
              <Col className="flex-item" sm={{span:12}} md={{span: 6}} lg={{span: 4}}
                key={index}
                quizid={quiz.quiz_title}
                >
                <Link className="load-quiz-link" to='/Quiz' onClick={() => dispatch(loadQuiz(quiz.quiz_id))} >
                  <div className="margin-inside-columns">
                      <div>
                        <div><span className="quiz-title-small">{quiz.quiz_title}</span></div>
                        <div><span className="num-questions">{quiz.count} questions</span></div>
                      </div>
                  </div>
                </Link>
              </Col>
          )})}

          <Col className="flex-item" sm={{span:12}} md={{span: 6}} lg={{span: 4}}>
            <div className="margin-inside-columns new-quiz">
              <Link className="add-quiz-x" onClick={ () => dispatch(newQuiz())} to="/Quiz"  
              >+
              </Link>
            </div>
          </Col>
        </div>
      </Col>  
    </Container>
  )
}

export default LoadQuiz;