

 export default function Quiz(props){
const styles ={
    backgroundColor:
      props.isCorrect === true
        ? "green"
        : props.isCorrect === false
        ? "red"
        : "white",
  }
   
    return(
        <div className="quizs">
            <div> <h1>Question {props.questionNumber}/{props.totalQuestions}</h1>
            <h3>{props.questionTxt}</h3></div>
             <div className="answersOption">
                {props.answersOpt.map(opt=>(
                    <button onClick={props.handlebtn} key={opt.answer} style={styles}>{opt.answer}</button>
                ))}
                
             </div>
        </div>
    )
 }