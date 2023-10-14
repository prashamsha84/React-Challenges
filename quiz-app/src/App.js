import Quiz from "./components/Quiz";
import data from "./QuizData"
import {useState} from 'react'


function App() {
  const [currentQuestion, setCurrentQuestion]= useState(0)
 const [showScore, setShowScore]= useState(false)
 const [myscore, setScore] = useState(0)

const quizData = data.map((quiz, index) => {
  return (<Quiz  key={quiz.questionTxt} {...quiz} 
    questionNumber={index+1}
    totalQuestions={data.length}
    handlebtn={(isCorrect)=>handlebtn(isCorrect)}   

    />)
})

function handlebtn(isCorrect) {
 
  if(isCorrect===true){
    setScore.push(myscore + 1)
  }
  const nextQuestion = currentQuestion + 1;
  if (nextQuestion < data.length) {
    setCurrentQuestion(nextQuestion);
  }
   else{
    setShowScore(true)
   }
  
}
  return (
    <div className="container">
     {!showScore ? (
        quizData[currentQuestion]
      ) : (
        <div>
          <p>All questions have been answered.</p>
          <p>You Scored {myscore} out of {quizData.length}</p>
        </div>
      )}
  </div>
  );
}

export default App;

// {currentQuestion < data.length ? (
//   <Quiz
//     key={currentQuestion}
//     {...data[currentQuestion]}
//     questionNumber={currentQuestion + 1}
//     totalQuestions={data.length}
//     handlebtn={handlebtn}
//   />
// ) : (
//   <p>All questions have been answered.</p>
// )}