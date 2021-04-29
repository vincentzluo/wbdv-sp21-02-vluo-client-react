import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom"
import Question from "./questions/question";
import questionService from "../../services/question-service"
import quizService from "../../services/quiz-service"

const Quiz = () => {
  const {quizId} = useParams()
  const [questions, setQuestions] = useState([])
  const [quizTitle, setQuizTitle] = useState("")
  useEffect(() => {
    questionService.findQuestionsForQuiz(quizId)
    .then((questions) => {
      setQuestions(questions)
    })
    quizService.findQuizById(quizId)
    .then((quiz) => {
      setQuizTitle(quiz.title)
    })
  }, [])

  return(
      <div>
        <h3> {quizTitle} </h3>
        <ul>
          {
            questions.map((question) => {
              return(
                  <li>
                    <Question question={question}/>
                  </li>
              )
            })
          }
        </ul>
      </div>
  )
}

export default Quiz;