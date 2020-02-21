import { Html5Entities } from 'html-entities'

//this is needed to get around "dangerous code injection" protection in React. This method is safe. 
const htmlEntities = new Html5Entities();

const sampleQuiz = {
  quizid: 1,
  title:'quiz title',
  questions: [
    {
      id: 'question3',
      question: "sample quiz question 1 ",
      answer: "sample quiz answer 1",
      hint: ''
    },
    {
      id: 'question4',
      question: "sample quiz question 2 ",
      answer: "sample quiz answer 2",
      hint: ` ${htmlEntities.decode('&#x266A;')} ______ Bridge is falling down; falling down. ${htmlEntities.decode('&#x266A;')} `
    }
  ]
}

// const sampleQuiz= {
//   user: 'sample user',
//   title: 'sample quiz',
//   questions: 
//   {
//     sample1: {
//       question: "sample quiz question 1 ",
//       answer: "sample quiz answer 1",
//       hint: ''
//       }
//     ,
//     sample2: {
//     question: "sample quiz question 2 ",
//     answer: "sample quiz answer 2",
//     hint: ` ${htmlEntities.decode('&#x266A;')} ______ Bridge is falling down; falling down. ${htmlEntities.decode('&#x266A;')} `
//     }
//   }
  
// }

export default sampleQuiz;