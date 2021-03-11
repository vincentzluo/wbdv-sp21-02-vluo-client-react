import React, {useState} from 'react'
import {Link} from "react-router-dom";
import './course-card.css'

const CourseCard = ({updateCourse, deleteCourse, course, title}) => {
  const [editing, setEditing] = useState(false)
  const [newTitle, setNewTitle] = useState(title)

  const saveTitle = () => {
    setEditing(false)
    const newCourse = {
      ...course,
      title: newTitle
    }
    updateCourse(newCourse)
  }

  const deletePressed = (course) => {
    setEditing(false);
    deleteCourse(course)
  }

  return (
      <div className="col-md-4 col-sm-6 col-lg-3 col-xs-12">
        <div className="card">

          <img
              src="https://www.valuecoders.com/blog/wp-content/uploads/2016/08/react.png"
              className="card-img-top" alt="..."/>
          <div className="card-body">
            {!editing && <h5 className="card-title">{course.title}</h5>}
            {editing && <input
                onChange={(event) => setNewTitle(event.target.value)}
                value={newTitle}
                className="form-control"/>}
            <p className="card-text">Some quick example text to build on the
              card title and make up the bulk of the card's
              content.</p>
            <img src={``}/>
            <Link to={`/courses/grid/edit/${course._id}`} className="btn btn-primary">
              {course.title}
            </Link>
            {!editing && <i onClick={() => setEditing(true)}
                           className="fas fa-edit edit-course"></i>}
            {editing && <i onClick={() => deletePressed(course)} className="fas fa-trash delete-course"></i>}
            {editing && <i onClick={() => saveTitle()} className="fas fa-check confirm-edit"></i>}
          </div>
        </div>
      </div>
  )
}

export default CourseCard