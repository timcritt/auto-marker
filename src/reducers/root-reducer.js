import sampleQuizes from "../sampleQuiz"
import produce from "immer";

const initState = {
  ...sampleQuizes[0]
}

let index;

const rootReducer = (state = initState, action) => 
  produce(state, draft => {

    
    switch (action.type) {
      case "ADD_SECTION": { 
        let newSection = {
          id: `section${Date.now()}`,
          numQuestions: 0,
          sectionTitle: 'new part',
          questions:[]
        }
        draft.sections.push(newSection)  
        break
      }

      case "REMOVE_SECTION": {
        index = state.sections.findIndex( (section) => {
          return section.id === action.sectionId
        })
        draft.numQuestions -= draft.sections[index].numQuestions;
        draft.sections.splice(index, 1)
        break 
      }
      case "ADD_NEW_QUESTION": {
        
        const newQuestion = {
          id: `question${Date.now()}`,
          question: '',
          number:'',
          answer: action.type === 'multi' ? 'A' : '',
          hint: 'dd',
          type: action.questionType,
          numMultipleChoice: 4
        }
        
        const sectionIndex = state.sections.findIndex( (section) => {
          return section.id === action.sectionId
        })
        draft.numQuestions ++;
        draft.sections[sectionIndex].numQuestions++;
        const questionIndex = draft.sections[sectionIndex].questions.push(newQuestion);
        draft.sections[sectionIndex].questions[questionIndex-1].number = questionIndex;
        break
      }
      case "REMOVE_QUESTION": {
       const sectionIndex = draft.sections.findIndex( (section) => {
          return section.id === action.sectionId
        })
        const questionIndex = draft.sections[sectionIndex].questions.findIndex( (question) => {
          return question.id === action.questionId
        })
        draft.sections[sectionIndex].numQuestions --;
        draft.sections[sectionIndex].questions.splice(questionIndex , 1)
        draft.numQuestions --;
        break
      }
      case "SAVE_QUIZ_ITEM": {

        const sectionIndex = draft.sections.findIndex(s => s.id === action.sectionId); 
        const questionIndex = draft.sections[sectionIndex].questions.findIndex(q => q.id ===action.questionId)
        
        draft.sections[sectionIndex].questions[questionIndex].question = action.question;
        draft.sections[sectionIndex].questions[questionIndex].answer = action.answer;
       
        break 
      }
      case "LOAD_QUIZ":
        const newState = sampleQuizes.find( quiz => {

            return quiz.quizId === action.quizId
        })
        draft.quizId = newState.quizId
        draft.numQuestions = newState.numQuestions
        draft.loading = newState.loading
        draft.title = newState.title
        draft.sections = newState.sections
        break
       
      case 'CHANGE_NUMBER_OF_ANSWERS':
        let sectionIndex = draft.sections.findIndex(s => s.id === action.sectionId); 
        let questionIndex = draft.sections[sectionIndex].questions.findIndex(q => q.id ===action.questionId)
        if (action.count > 0) {
          if(state.sections[sectionIndex].questions[questionIndex].numMultipleChoice < 8) {
            draft.sections[sectionIndex].questions[questionIndex].numMultipleChoice += action.count;
          }
        }

        if (action.count < 0) {
          if(state.sections[sectionIndex].questions[questionIndex].numMultipleChoice > 2) {
            draft.sections[sectionIndex].questions[questionIndex].numMultipleChoice += action.count;
          }
        }

      break
      case 'SHIFT_QUESTION_UP':
        const sectionIndexUP = draft.sections.findIndex(s => s.id === action.sectionId); 
        const questionIndexUP = draft.sections[sectionIndexUP].questions.findIndex(q => q.id ===action.questionId)      
        
        let el = draft.sections[sectionIndexUP].questions[questionIndexUP];
        if (questionIndexUP > 0) {
          draft.sections[sectionIndexUP].questions[questionIndexUP] = draft.sections[sectionIndexUP].questions[questionIndexUP - 1];
          
          draft.sections[sectionIndexUP].questions[questionIndexUP - 1] = el;

          //moves up to previous section
        } else if (questionIndexUP === 0 && sectionIndexUP > 0) {
          //pushes to the end of the previous section
          draft.sections[sectionIndexUP-1].questions.push(el);
          //removes from the old section
          draft.sections[sectionIndexUP].questions.splice(0, 1);
        }
      break
      case 'SHIFT_QUESTION_DOWN':
        const sectionIndexDOWN = draft.sections.findIndex(s => s.id === action.sectionId); 
        const questionIndexDOWN = draft.sections[sectionIndexDOWN].questions.findIndex(q => q.id ===action.questionId)  

        let elDOWN = draft.sections[sectionIndexDOWN].questions[questionIndexDOWN];
        
        if (questionIndexDOWN < draft.sections[sectionIndexDOWN].questions.length -1) {
          draft.sections[sectionIndexDOWN].questions[questionIndexDOWN] = draft.sections[sectionIndexDOWN].questions[questionIndexDOWN + 1];
          draft.sections[sectionIndexDOWN].questions[questionIndexDOWN + 1] = elDOWN;

          //moves up to next section
        } else if (questionIndexDOWN === draft.sections[sectionIndexDOWN].questions.length -1 && sectionIndexDOWN < draft.sections.length -1 ) {
          console.log("in the last eslse if")
          
          //pushes to the end of the previous section
          draft.sections[sectionIndexDOWN +1].questions.unshift(elDOWN);
          //removes from the old section
          draft.sections[sectionIndexDOWN].questions.splice(questionIndexDOWN, 1);
        }
      break
      case 'SET_QUESTION_NUMBER':
        const sectionIndexSet = draft.sections.findIndex(s => s.id === action.sectionId); 
        const questionIndexSet = draft.sections[sectionIndexSet].questions.findIndex(q => q.id ===action.questionId)
        draft.sections[sectionIndexSet].questions[questionIndexSet].number = action.number; 
      break
      case 'ASSIGN_QUESTION_NUMBER':
      
      break
      default: 
        return draft
    }
})




//   let newState = {...state}

//   switch(action.type) {
  
//     case 'CHANGE_NUMBER_OF_ANSWERS':
//         newQuestions = JSON.parse(JSON.stringify(state.questions))
//         index = newQuestions.findIndex(e => e.id === action.id);      
        
//         if (action.count > 0) {
//           if(state.questions[index].numMultiAnswers < 8) {
//             newQuestions[index].numMultiAnswers += action.count;
//           }
//         }

//         if (action.count < 0) {
//           if(state.questions[index].numMultiAnswers > 2) {
//             newQuestions[index].numMultiAnswers += action.count;
//           }
//         }

//         return {
//           ...state,
//           questions: newQuestions
//         }
//     case 'ADD_SECTION':
      
//       console.log('adding section')
  
//       let newSections = state.sections.slice()
      
//       const newSection = {
//         id: `section${Date.now()}`,
//         sectionTitle: 'Part 3',
//         questions:[]
//       }
      
//       newSections.push(newSection);
//       return {
//         ...state,
//         sections: newSections
//       }
//     case 'DELETE_QUESTION':
//         newQuestions = state.questions.filter( question => {
//           return action.id !== question.id;
//       })
//       return  {
//         ...state,
//         questions: newQuestions
//       }
//     case 'LOAD_QUIZ':
//       newState = sampleQuizes.find( quiz => quiz.quizid === action.key)
//       console.log(newState)
//       return {
//         ...newState,
//         loading: false
//       }
//     case 'SAVE_QUESTIONS':
//       return {
//         ...state,
//         questions: action.questions
//       }
//     case 'ADD_NEW_QUESTION':
//       // deep clone of state (only works with JSON elements. Won't work if array of objects contains functions, etc)
//       newQuestions = {
//         id: `question${Date.now()}`,
//         question: 'new question format 21',
//         answer: 'new answer format 21',
//         hint: 'new hint format 21'
//       }
//       newQuestions.push(action.newQuestion);

//       return {
//         ...state,
//         questions: newQuestions
//       }
//     case 'SHIFT_QUESTION_UP':
//       newQuestions= JSON.parse(JSON.stringify(state.questions))
//       index = newQuestions.findIndex(e => e.id === action.id);
  
//       if (index > 0) {
//       let el = newQuestions[index];
//       newQuestions[index] = newQuestions[index - 1];
//       newQuestions[index - 1] = el;
//       }
//       return {
//         ...state,
//         questions: newQuestions
//       }
//     case 'SHIFT_QUESTION_DOWN': 
//       newQuestions= JSON.parse(JSON.stringify(state.questions))
//       index = newQuestions.findIndex(e => e.id === action.id);

//       if (index !== -1 && index < newQuestions.length - 1) {
//         let el = newQuestions[index];
//         newQuestions[index] = newQuestions[index + 1];
//         newQuestions[index + 1] = el;
//       }
//       return {
//         ...state,
//         questions: newQuestions
//       }
//     case 'SAVE_TITLE':
//       return {
//         ...state,
//         title: action.title
//       }
//     case 'NEW_QUIZ':
//       return {
//         ...state,
//         quizid: 99,
//         title:'New Quiz',
//         questions: [
//           {
//             id: 'question99',
//             question: "",
//             answer: "",
//             hint: ''
//           }
//         ]  
//       }
//     case 'LOADING':
//       console.log('loading')
//       return {
//         ...newState,
//         loading: true
//       }  
//     default : return state;
//   }
// }

export default rootReducer;