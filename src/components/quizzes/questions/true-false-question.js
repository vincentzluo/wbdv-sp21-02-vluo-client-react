import React, {useState} from "react";

const TrueFalseQuestion = ({question}) => {
  const [yourAnswer, setYourAnswer] = useState("")
  const [selected, setSelected] = useState("")
  return (
      <div>
        <h5>
          {question.question}
          {
            yourAnswer !== '' && question.correct === yourAnswer &&
            <i className="fas fa-check"></i>
          }
          {
            yourAnswer !== '' && question.correct !== yourAnswer &&
            <i className="fas fa-times"></i>
          }
        </h5>
        <ul className="list-group">
          <li className={`list-group-item
                            ${yourAnswer === '' || (yourAnswer
              === question.correct && question.correct === "false") ? '' : ("true" === question.correct) ?
              'list-group-item-success' : 'list-group-item-danger'}`}>
            <label><input
                onClick={() => {
                  setSelected("true")
                }}
                type="radio"
                name={question._id}/>TRUE</label>
            <i className={`fas
                            ${yourAnswer === '' || (yourAnswer
                === question.correct && question.correct === "false") ? '' : ("true" === question.correct) ?
                'fa-check' : 'fa-times'}`}></i>
          </li>
          <li className={`list-group-item
                            ${yourAnswer === '' || (yourAnswer
              === question.correct && question.correct === "true") ? '' : ("false" === question.correct) ?
              'list-group-item-success' : 'list-group-item-danger'}`}>
            <label><input
                onClick={() => {
                  setSelected("false")
                }}
                type="radio"
                name={question._id}/>FALSE</label>
            <i className={`fas
                            ${yourAnswer === '' || (yourAnswer
                === question.correct && question.correct === "true") ? '' : ("false" === question.correct) ?
                'fa-check' : 'fa-times'}`}></i>
          </li>
        </ul>
        <p>
          Your answer: {selected}
        </p>
        <p></p>
        <button className='btn-success' onClick={() => {
          setYourAnswer(selected)
        }}>Grade
        </button>
      </div>
  )
}

export default TrueFalseQuestion
