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

const rootReducer = (state = initState, action) => {
  if (action.type === 'DELETE_QUESTION') {
    //Create new array of questions without the targetted question
    let newQuestions = state.questions.filter( question => {
     
      return action.id !== question.id;
    })
    return  {
      ...state,
      questions: newQuestions
    }
  }
  if (action.type === 'LOAD_QUIZ') {
  
    return sampleQuizes.find( quiz => quiz.quizid === action.key);
  }

  if (action.type === 'SAVE_QUESTIONS') {
    return {
      ...state,
      questions: action.questions
    }
  }
  if (action.type === 'ADD_NEW_QUESTION') {
    
    // deep clone of state (only works with JSON elements. Won't work if array of objects contains functions, etc)
    let newQuestions= JSON.parse(JSON.stringify(state.questions))
    newQuestions.push(action.newQuestion);

    return {
      ...state,
      questions: newQuestions
    }
  }
  if (action.type === 'SHIFT_QUESTION_UP') {

    let newQuestions= JSON.parse(JSON.stringify(state.questions))
    let index = newQuestions.findIndex(e => e.id === action.id);

    if (index > 0) {
    let el = newQuestions[index];
    newQuestions[index] = newQuestions[index - 1];
    newQuestions[index - 1] = el;
    }

    return {
      ...state,
      questions: newQuestions
    }
  }
  if (action.type === 'SHIFT_QUESTION_DOWN') {
    let newQuestions= JSON.parse(JSON.stringify(state.questions))
    let index = newQuestions.findIndex(e => e.id === action.id);

    if (index !== -1 && index < newQuestions.length - 1) {
      let el = newQuestions[index];
      newQuestions[index] = newQuestions[index + 1];
      newQuestions[index + 1] = el;
    }

    return {
      ...state,
      questions: newQuestions
    }

  }
  if (action.type === 'SAVE_TITLE') {
    return {
      ...state,
      title: action.title
    }
  }
  if (action.type === 'NEW_QUIZ') {
    console.log("new quiz created")
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
    
  }
  
  
  return state
}

export default rootReducer;