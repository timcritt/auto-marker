export const UPDATE_QUIZ = 'quiz:updateQuiz';
export const UPDATE_TITLE ='title:updateTitle';
export const UPDATE_QUESTION = 'question:updateQuestion'
export const ADD_QUESTION = 'question:addQuestion'
export const DELETE_QUESTION = 'questuin:deleteQuestion'

export function saveQuiz(newQuiz) {
  return {
    type: UPDATE_QUIZ,
    payload: {
      quiz: newQuiz
    }
  }
}

export function updateTitle(newTitle) {
  return {
    type: UPDATE_TITLE,
    payload: {
      title: newTitle
    }
  }
}

export function updateQuestion(newQuestion) {
  return {
    type: UPDATE_QUESTION,
    payload: {
      question: newQuestion
    }
  }
}

export function addQuestion(newQuestion) {
  return {
    type: ADD_QUESTION,
    payload: {
      question: newQuestion
    }
  }
}

