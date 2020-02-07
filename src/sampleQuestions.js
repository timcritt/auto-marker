import { Html5Entities } from 'html-entities'

//this is needed to get around "dangerous code injection" protection in React. This method is safe. 
const htmlEntities = new Html5Entities();

const sampleQuestions = {
   
  question1: {
    question: "What colour is the sky? ",
    answer: "blue",
    hint: ''
  },
  question2: {
    question: "What is the capital of England? ",
    answer: "London",
    hint: ` ${htmlEntities.decode('&#x266A;')} ______ Bridge is falling down; falling down. ${htmlEntities.decode('&#x266A;')} `
  },
 
}






export default sampleQuestions;

// ` ${htmlEntities.decode('&#x270E;')}  `

// ` ${htmlEntities.decode('&#119189;')} `