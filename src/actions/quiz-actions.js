
export const loading = () => {
  return {
    type: "LOADING"
  }
}

export const loadQuizAsync = (key) => {
  return {type: "LOAD_QUIZ", key: key};
}

export const loadQuiz = (key) => {

  return dispatch  => {
    dispatch(loading())
    
    setTimeout( () => {
      dispatch(loadQuizAsync(key));
    }, 3000)   
    

  }
}



