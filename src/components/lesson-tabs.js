import React, {useEffect} from 'react'
import {connect} from "react-redux";
import EditableItem from "./editable-item";
import {useParams} from "react-router-dom";
import lessonService from '../services/lesson-service'

const LessonTabs = (
    {
      lessons,
      findLessonsForModule,
      createLessonForModule,
      updateLesson,
      deleteLesson
    }) => {
  const {courseId, moduleId, lessonId, layout} = useParams();
  useEffect(() => {
    console.log("LOAD LESSONS FOR MODULE: " + moduleId)
    if (moduleId !== "undefined" && typeof moduleId !== "undefined") {
      findLessonsForModule(moduleId)
    }
  }, [moduleId])
  return (
      <div>
        <h2>Lessons</h2>
        <ul className="nav nav-pills">
          {
            lessons.map(lesson =>
                <li className="nav-item">
                  <EditableItem
                      key={lesson._id}
                      active={lesson._id === lessonId}
                      to={`/courses/${layout}/edit/${courseId}/modules/${moduleId}/lessons/${lesson._id}`}
                      updateItem={updateLesson}
                      deleteItem={deleteLesson}
                      lessonId={lessonId}
                      item={lesson}/>
                </li>
            )
          }
          <li>
            <i onClick={() => createLessonForModule(moduleId)}
               className="fas fa-plus"></i>
          </li>
        </ul>
      </div>)
}

const stpm = (state) => {
  return {
    lessons: state.lessonReducer.lessons
  }
}
const dtpm = (dispatch) => {
  return {
    findLessonsForModule: (moduleId) => {
      console.log("LOAD LESSONS FOR MODULE:")
      console.log(moduleId)
      lessonService.findLessonsForModule(moduleId)
      .then(lessons => dispatch({
        type: "FIND_LESSONS",
        lessons
      }))
    },
    createLessonForModule: (moduleId) => {
      console.log("CREATE LESSON FOR MODULE: " + moduleId)
      lessonService
      .createLessonForModule(moduleId, {title: "New Lesson"})
      .then(lesson => dispatch({
        type: "CREATE_LESSON",
        lesson
      }))
    },
    updateLesson: (lesson) => {
      lessonService.updateLesson(lesson._id, lesson)
      .then(status => dispatch({
        type: "UPDATE_LESSON",
        lesson
      }))
    },
    deleteLesson: (lesson) => {
      lessonService.deleteLesson(lesson._id)
      .then(status => dispatch({
        type: "DELETE_LESSON",
        lessonToDelete: lesson
      }))
    }
  }
}

export default connect(stpm, dtpm)(LessonTabs)