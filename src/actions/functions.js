
export default fetchQuiz = () => {

  const serverDomain = 'http://localhost:5000/';


  var quiz; 

  fetch("http://localhost:5000/quiz-summaries")
      .then(
        res => res.json() )  
      .then( data => quiz = data )
      .then( () => setQuizzesHaveFetched(true))

  console.log(quiz);

}