
const sampleQuiz2 = 
{
  quizId: 2,
  numQuestions: 4,
  loading: false,
  title:'FCE Use of English',
  sections: 
  [
    { 
      id: 'section1',
      numQuestions: 2,
      sectionTitle: 'Part 1', 
      questions:[
        {
          id: 'question21',
          number: 1,
          question: '',
          answer: 'new answer format 21',
          hint: 'new hint format 21'
        },
        {
          id: 'question22',
          number: 2,
          question: '',
          answer:[ '', ''], 
          hint: 'new hint format 22',
          type: 'twoPointText'
       }
      ],
      
    },
    { 
      id: 'section2',
      numQuestions: 2,
      sectionTitle: 'Part 2',
      questions:[
        {
          id: 'question23',
          number: 1,
          question: '11',
          answer: 'new answer format 23',
          hint: 'new hint format 23',
          type: 'multi',
          numMultipleChoice: 4
        },
        {
          id: 'question24',
          number: 2,
          question: '22',
          answer: 'new answer format 24',
          hint: 'new hint format 24',
          type: 'multi',
          numMultipleChoice: 4
        },
      ]
    }
  ]
}
const sampleQuiz3 = 
{
  quizId: 3,
  numQuestions: 2,
  loading: false,
  title:'Quiz 2',
  sections: 
  [
    { 
      id: 'section1',
      numQuestions: 2,
      sectionTitle: 'Part 1', 
      questions:[
        {
          id: 'question21',
          number: 1,
          question: '',
          answer: 'new answer format 21',
          hint: 'new hint format 21'
        },
        {
          id: 'question22',
          number: 2,
          question: '',
          answer:[ '', ''], 
          hint: 'new hint format 22',
          type: 'twoPointText'
       }
      ],
    },
  ]
}
const sampleQuiz4 = 
{
  quizId: 3,
  numQuestions: 2,
  loading: false,
  title:'Quiz 3',
  sections: 
  [
    { 
      id: 'section1',
      numQuestions: 2,
      sectionTitle: 'Part 1', 
      questions:[
        {
          id: 'question21',
          number: 1,
          question: '',
          answer: 'new answer format 21',
          hint: 'new hint format 21'
        },
        {
          id: 'question22',
          number: 2,
          question: '',
          answer:[ '', ''], 
          hint: 'new hint format 22',
          type: 'twoPointText'
       }
      ],
    },
  ]
}

const sampleQuizes = [sampleQuiz2, sampleQuiz3, sampleQuiz4];


export default sampleQuizes;