import { Html5Entities } from 'html-entities'

//this is needed to get around "dangerous code injection" protection in React. This method is safe. 
const htmlEntities = new Html5Entities();

const sampleQuiz1 = {
  quizid: 1,
  title:'FCE Test Book 1: Test 1: UoE Part 1',
  questions: [
    {
      id: 'question3',
      question: "Sample quiz question 1 ",
      answer: "sample quiz answer 1",
      hint: ''
    },
    {
      id: 'question4',
      question: "Sample quiz question 2 ",
      answer: "sample quiz answer 2",
      hint: ` ${htmlEntities.decode('&#x266A;')} ______ Bridge is falling down; falling down. ${htmlEntities.decode('&#x266A;')} `
    }
  ]
}
const sampleQuiz2 = {
  quizid: 2,
  title:'My sample quiz 2',
  questions: [
    {
      id: 'question5',
      question: "Sample quiz 2 question 1 ",
      answer: "sample quiz 2 answer 1",
      hint: ''
    },
    {
      id: 'question6',
      question: "Sample quiz 2 question 2 ",
      answer: "sample quiz 2 answer 2",
      hint: ` ${htmlEntities.decode('&#x266A;')} ______ Bridge is falling down; falling down. ${htmlEntities.decode('&#x266A;')} `
    }
  ]
}
const sampleQuiz3 = {
  quizid: 3,
  title:'My sample Quiz 3',
  questions: [
    {
      id: 'question7',
      question: "",
      answer: "sample quiz 3 answer 1",
      hint: ''
    },
    {
      id: 'question8',
      question: "",
      answer: "sample quiz 3 answer 2",
      hint: ` ${htmlEntities.decode('&#x266A;')} ______ Bridge is falling down; falling down. ${htmlEntities.decode('&#x266A;')} `
    },
    {
      id: 'question9',
      question: "",
      answer: "sample quiz 3 answer 2",
      hint: ` ${htmlEntities.decode('&#x266A;')} ______ Bridge is falling down; falling down. ${htmlEntities.decode('&#x266A;')} `
    },
    {
      id: 'question10',
      question: "",
      answer: "sample quiz 3 answer 2",
      hint: ` ${htmlEntities.decode('&#x266A;')} ______ Bridge is falling down; falling down. ${htmlEntities.decode('&#x266A;')} `
    },
    {
      id: 'question11',
      question: "",
      answer: "sample quiz 3 answer 2",
      hint: ` ${htmlEntities.decode('&#x266A;')} ______ Bridge is falling down; falling down. ${htmlEntities.decode('&#x266A;')} `
    },
    {
      id: 'question12',
      question: "",
      answer: "sample quiz 3 answer 2",
      hint: ` ${htmlEntities.decode('&#x266A;')} ______ Bridge is falling down; falling down. ${htmlEntities.decode('&#x266A;')} `
    },
    {
      id: 'question13',
      question: "",
      answer: "sample quiz 3 answer 2",
      hint: ` ${htmlEntities.decode('&#x266A;')} ______ Bridge is falling down; falling down. ${htmlEntities.decode('&#x266A;')} `
    },
    {
      id: 'question14',
      question: "",
      answer: "",
      hint: ` ${htmlEntities.decode('&#x266A;')} ______ Bridge is falling down; falling down. ${htmlEntities.decode('&#x266A;')} `
    },
    {
      id: 'question15',
      question: "",
      answer: "sample quiz 3 answer 2",
      hint: ` ${htmlEntities.decode('&#x266A;')} ______ Bridge is falling down; falling down. ${htmlEntities.decode('&#x266A;')} `
    },
    {
      id: 'question16',
      question: "",
      answer: "sample quiz 3 answer 2",
      hint: ` ${htmlEntities.decode('&#x266A;')} ______ Bridge is falling down; falling down. ${htmlEntities.decode('&#x266A;')} `
    }
  ]
}
const sampleQuiz4 = {
  quizid: 4,
  title:'My sample quiz 2',
  questions: [
    {
      id: 'question17',
      question: "Sample quiz 2 question 1 ",
      answer: "sample quiz 2 answer 1",
      hint: ''
    },
    {
      id: 'question18',
      question: "Sample quiz 2 question 2 ",
      answer: "sample quiz 2 answer 2",
      hint: ` ${htmlEntities.decode('&#x266A;')} ______ Bridge is falling down; falling down. ${htmlEntities.decode('&#x266A;')} `
    }
  ]
}
const sampleQuiz5 = {
  quizid: 5,
  title:'My sample quiz 2',
  questions: [
    {
      id: 'question19',
      question: "Sample quiz 2 question 1 ",
      answer: "sample quiz 2 answer 1",
      hint: ''
    },
    {
      id: 'question20',
      question: "Sample quiz 2 question 2 ",
      answer: "sample quiz 2 answer 2",
      hint: ` ${htmlEntities.decode('&#x266A;')} ______ Bridge is falling down; falling down. ${htmlEntities.decode('&#x266A;')} `
    }
  ]
}
const sampleQuiz6 = {
  quizid: 5,
  title:'My sample quiz 2',
  questions: [
    {
      id: 'question19',
      question: "Sample quiz 2 question 1 ",
      answer: "sample quiz 2 answer 1",
      hint: ''
    },
    {
      id: 'question20',
      question: "Sample quiz 2 question 2 ",
      answer: "sample quiz 2 answer 2",
      hint: ` ${htmlEntities.decode('&#x266A;')} ______ Bridge is falling down; falling down. ${htmlEntities.decode('&#x266A;')} `
    }
  ]
}
const sampleQuiz7 = {
  quizid: 5,
  title:'My sample quiz 2',
  questions: [
    {
      id: 'question19',
      question: "Sample quiz 2 question 1 ",
      answer: "sample quiz 2 answer 1",
      hint: ''
    },
    {
      id: 'question20',
      question: "Sample quiz 2 question 2 ",
      answer: "sample quiz 2 answer 2",
      hint: ` ${htmlEntities.decode('&#x266A;')} ______ Bridge is falling down; falling down. ${htmlEntities.decode('&#x266A;')} `
    }
  ]
}

const sampleQuizes = [sampleQuiz1, sampleQuiz2, sampleQuiz3, sampleQuiz4, sampleQuiz5, sampleQuiz6, sampleQuiz7];


export default sampleQuizes;