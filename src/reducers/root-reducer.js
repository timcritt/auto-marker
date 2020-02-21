import sampleQuiz from "../sampleQuiz"

const initState = {
  quizid: 1,
  title:'quiz title',
  questions: [
    { 
      id: 'question1',
      question: "init state question 1? ",
      answer: "Fluffy",
      hint: 'init hint 1'
    },
    {
      id: 'question2',
      question: "init state question 2 ",
      answer: "init state answer 2",
      hint: 'init hint 2'
    }
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
    return sampleQuiz
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
  
  return state
}

export default rootReducer;