import React, {useState} from 'react'
import {Link} from "react-router-dom";

const CourseRow = (
    {
      deleteCourse,
      updateCourse,
      course,
      lastModified,
      title,
      owner
    }) => {
  const [editing, setEditing] = useState(false)
  const [newTitle, setNewTitle] = useState(title)

  const deletePressed = (course) => {
    setEditing(false);
    deleteCourse(course)
  }

  const saveTitle = () => {
    setEditing(false)
    const newCourse = {
      ...course,
      title: newTitle
    }
    updateCourse(newCourse)
  }

  return (
      <tr>
        <td>
          {
            !editing &&
            <Link to={`/courses/table/edit/${course._id}`}>
              {title}
            </Link>
          }
          {
            editing &&
            <input
                onChange={(event) => setNewTitle(event.target.value)}
                value={newTitle}
                className="form-control"/>
          }
        </td>
        <td className="d-none d-sm-table-cell">{owner}</td>
        <td className="d-none d-md-table-cell" class>{lastModified}</td>
        <td>
          <Link to={`/courses/${course._id}/quizzes`}>
            Quizzes
          </Link>
        </td>
        <td>
          {!editing && <i onClick={() => setEditing(true)} className="fas fa-edit"></i>}
          {editing && <i onClick={() => saveTitle()} className="fas fa-check"></i>}
          {editing && <i onClick={() => deletePressed(course)} className="fas fa-trash"></i>}
        </td>
      </tr>
  )
}
export default CourseRow