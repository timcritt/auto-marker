import { Html5Entities } from 'html-entities'

//this is needed to get around "dangerous code injection" protection in React. This method is safe. 
const htmlEntities = new Html5Entities();

const questionStatus = {

  CORRECT: htmlEntities.decode('&#x2705;'),
  INCORRECT: htmlEntities.decode('&#x274C;'),
  UNANSWERED: ` ${htmlEntities.decode('&#x270E;')}  `
}

export default questionStatus;