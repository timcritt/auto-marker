const initialQuizState = {
  loading: false,
  quiz: {},
  error: ''
}

const redux = require('redux');

const createStore = redux.createStore;
const applyMiddleware = redux.applyMiddleware;
const thunkMiddleware = require('redux-thunk').default;
const axios = require('axios');

const FETCH_QUIZ_REQUEST = 'FETCH_QUIZ_REQUEST';
const FETCH_QUIZ_SUCCESS = 'FETCH_QUIZ_SUCCESS';
const FETCH_QUIZ_FAILURE = 'FETCH_QUIZ_FAILURE';

const FETCH_SECTIONS_REQUEST = 'FETCH_SECTIONS_REQUEST';
const FETCH_QUESTIONS_REQUEST = 'FETCH_QUESTIONS_REQUEST';
const FETCH_ANSWERS_REQUEST = 'FETCH_ANSWERS_REQUEST';

//action creators
const fetchQuizRequest = () => {
  return {
    type: FETCH_QUIZ_REQUEST
  }
}

const fetchQuizSuccess = (quiz) => {
  return {
    type: FETCH_QUIZ_SUCCESS,
    payload: quiz
  }
}

const fetchQuizFailure = (error) => {
  return {
    type: FETCH_QUIZ_FAILURE,
    payload: error
  }
}



const quizReducer = (state = initialQuizState, action) => {

  switch(action.type) {
    case FETCH_QUIZ_REQUEST:
      return {
        ...state,
        loading: true
      }
    case FETCH_QUIZ_SUCCESS:
      return {
        loading: false,
        quiz: action.payload,
        error: ''
      }
    case FETCH_QUIZ_FAILURE:
      return {
        loading: false,
        quiz: {},
        error: action.payload
      }
    case FETCH_SECTIONS_REQUEST:
      return {
        ...state,
        sections: action.payload
      }
    case FETCH_QUESTIONS_REQUEST:
    return {
      ...state,
      questions: action.payload
    }
    case FETCH_ANSWERS_REQUEST:
      return {
        ...state,
        answers: action.payload
      }
    default:
      return {state}
  }
}
/***********************************************************************/

const quiz = {
  quizId: null,
  numQuestions: 0,
  title: '',
  sections: [
    {
      section_id: null,
      numQuestions: 0,
      sectionTitle: '',
      questions: [
        {
          id: null,
          number: 1,
          question: '',
          answer: ''
        }
      ]
    }
  ]
};

const fetchQuiz = () => {
  return (dispatch) => {
    dispatch(fetchQuizRequest());

    axios.get('http://localhost:5000/quiz/3')
      .then(response => {
        quiz.quizId = response.data[0].quiz_id;
        quiz.title = response.data[0].quiz_title;
      })
      .then( () => axios.get('http://localhost:5000/quiz/section/3'))
      .then(response => {
        //add sections to quiz
        const sections = response.data;
        quiz.sections = sections;
        //console.log(quiz.sections);
      })
      .then( () => { 
      
        quiz.sections.forEach( section => {

          var index = quiz.sections.findIndex( (section2) => {
            return section.section_id === section2.section_id
          })
                              
          axios.get(`http://localhost:5000/quiz/section/question/${section.section_id}`)
          .then(response => {
            quiz.sections[index].questions = response.data;

          })
          .then( () => {
            quiz.sections[index].questions.forEach( question => {

              var questionIndex = quiz.sections[index].questions.findIndex( (question2) => question2.question_id = question.question_id);

              axios.get(`http://localhost:5000/quiz/section/question/answer/${question.question_id}`)
              .then( response => {

                quiz.sections[index].questions[questionIndex].answers = response.data;

              }).then( () => dispatch(fetchQuizSuccess(quiz)))
              .catch( error => {
                dispatch(fetchQuizFailure(error.message))
              })
            })
          })   
        })
      })
  }
}

const store = createStore(quizReducer, applyMiddleware(thunkMiddleware));
store.dispatch(fetchQuiz())
store.subscribe( () => console.log(store.getState()))    


