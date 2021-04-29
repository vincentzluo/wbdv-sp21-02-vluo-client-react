import React, {useState} from "react";

const MultipleChoiceQuestion = ({question}) => {
  const [yourAnswer, setYourAnswer] = useState("")
  const [selected, setSelected] = useState("")
  return(
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
          {
            question.choices.map((choice) => {
              return(
                  <li className={`list-group-item
                            ${yourAnswer === '' || (choice !== yourAnswer && choice !== question.correct) ? '' : (yourAnswer === question.correct || choice === question.correct) ? 
                      'list-group-item-success' : 'list-group-item-danger'}`}>
                    <label><input
                        onClick={() => {
                          setSelected(choice)
                        }}
                        type="radio"
                        name={question._id}/> {choice}</label>
                    <i className={`fas
                            ${yourAnswer === '' || (choice !== yourAnswer && choice !== question.correct) ? '' : (yourAnswer === question.correct || choice === question.correct) ?
                        'fa-check' : 'fa-times'}`}></i>
                  </li>
              )
            })
          }
        </ul>
        <p>
          Your answer: {selected}
        </p>
        <p></p>
        <button className='btn-success' onClick={() => {
          setYourAnswer(selected)
        }}>Grade</button>
      </div>
  )
}

export default MultipleChoiceQuestion