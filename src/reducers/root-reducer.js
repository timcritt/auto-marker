import sampleQuizes from "../sampleQuiz"

const initState = {
  quizid: 1,
  title:'',
  
  questions: [
    { 
      id: 'default',
      question: "question falied to load",
      answer: "",
      hint: ''
    },
  
  ]
}
let newQuestions;
  let index;

const rootReducer = (state = initState, action) => {
  
  let newState = {...state}

  switch(action.type) {
  
    case 'DELETE_QUESTION':
        newQuestions = state.questions.filter( question => {
        return action.id !== question.id;
      })
      return  {
        ...state,
        questions: newQuestions
      }
    case 'LOAD_QUIZ':
      newState = sampleQuizes.find( quiz => quiz.quizid === action.key)
      return {
        ...newState,
        loading: false
      }
    case 'SAVE_QUESTIONS':
      return {
        ...state,
        questions: action.questions
      }
    case 'ADD_NEW_QUESTION':
      // deep clone of state (only works with JSON elements. Won't work if array of objects contains functions, etc)
      newQuestions = JSON.parse(JSON.stringify(state.questions))
      newQuestions.push(action.newQuestion);

      return {
        ...state,
        questions: newQuestions
      }
    case 'SHIFT_QUESTION_UP':
      newQuestions= JSON.parse(JSON.stringify(state.questions))
      index = newQuestions.findIndex(e => e.id === action.id);
  
      if (index > 0) {
      let el = newQuestions[index];
      newQuestions[index] = newQuestions[index - 1];
      newQuestions[index - 1] = el;
      }
      return {
        ...state,
        questions: newQuestions
      }
    case 'SHIFT_QUESTION_DOWN': 
      newQuestions= JSON.parse(JSON.stringify(state.questions))
      index = newQuestions.findIndex(e => e.id === action.id);

      if (index !== -1 && index < newQuestions.length - 1) {
        let el = newQuestions[index];
        newQuestions[index] = newQuestions[index + 1];
        newQuestions[index + 1] = el;
      }
      return {
        ...state,
        questions: newQuestions
      }
    case 'SAVE_TITLE':
      return {
        ...state,
        title: action.title
      }
    case 'NEW_QUIZ':
      return {
        ...state,
        quizid: 99,
        title:'New Quiz',
        questions: [
          {
            id: 'question99',
            question: "",
            answer: "",
            hint: ''
          }
        ]  
      }
    case 'LOADING':
      console.log('loading')
      return {
        ...newState,
        loading: true
      }  
    default : return state;
  }
}

export default rootReducer;