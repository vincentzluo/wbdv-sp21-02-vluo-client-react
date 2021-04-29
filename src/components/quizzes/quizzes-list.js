import React, {useState, useEffect} from "react";
import {Link, useParams} from "react-router-dom";
import quizService from "../../services/quiz-service";

const QuizzesList = () => {
  const {courseId} = useParams()
  const [quizzes, setQuizzes] = useState([])
  useEffect(() => {
    quizService.findAllQuizzes()
    .then((quizzes) => {
      setQuizzes(quizzes)
    })
  }, [])
  return (
      <div>
        <h2>Quizzes</h2>
        <table className="table">
          <tbody>
          {
            quizzes.map((quiz) =>
                <tr>
                  <td>
                    <Link to={`/courses/${courseId}/quizzes/${quiz._id}`}>
                      {quiz.title}
                    </Link>
                  </td>
                  <td>
                    <Link to={`/courses/${courseId}/quizzes/${quiz._id}`}
                          className="btn btn-primary">Start</Link>
                  </td>
                </tr>)
          }
          </tbody>
        </table>
      </div>
  );
}

export default QuizzesList;
