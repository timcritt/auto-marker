
export const loading = () => {
  return {
    type: "LOADING"
  }
}

export const loadQuizAsync = (quiz_id) => {
  return {
    type: "LOAD_QUIZ", quiz_id};
}

export const loadQuiz = (quiz_id) => {

  return dispatch  => {
    dispatch(loading())
    
    setTimeout( () => {
      dispatch(loadQuizAsync(quiz_id));
    }, 500)   
  }
}

export const saveTitle = (title) => {
  return {
    type: 'SAVE_TITLE',
    title
  }
}

export const newQuiz = () => {
  console.log('returning new quiz from the action creator')
  return {
    type: 'NEW_QUIZ'
  }
}


