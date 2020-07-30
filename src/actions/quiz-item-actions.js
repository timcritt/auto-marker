export const deleteQuestion = (sectionId, questionId) => {
  return {
    type: 'DELETE_QUIZ_ITEM',
    sectionId,
    questionId
  }
}

export const addNewQuestion = (questionType, sectionId) => {
  return {
    type: 'ADD_NEW_QUESTION', 
    questionType, 
    sectionId
  }
}

export const saveQuizItem = (question, questionId, sectionId, answer) => {
  return {
    type: "SAVE_QUIZ_ITEM",
    question,
    questionId,
    sectionId,
    answer
  }
}

export const shiftQuestionUp = (sectionId, questionId) => {
  return {
    type: 'SHIFT_QUESTION_UP', 
    sectionId, 
    questionId
  }
}

export const shiftQuestionDown = (sectionId, questionId) => {
  return {
    type: 'SHIFT_QUESTION_DOWN',
    sectionId,
    questionId
  }
}

export const changeNumberOfAnswers = (sectionId, questionId, count) => {
  return {
    type: 'CHANGE_NUMBER_OF_ANSWERS',
    sectionId,
    questionId,
    count
  }
}

export const setQuestionNumber = (sectionId, questionId, number) => {
  return {
    type: 'SET_QUESTION_NUMBER',
    sectionId,
    questionId,
    number
  }
}

export const copyQuestion = (sectionId, questionId) => {
    return {
      type: 'COPY_QUESTION',
      sectionId,
      questionId
    }
}