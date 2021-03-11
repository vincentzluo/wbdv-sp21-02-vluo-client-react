import React, {useState, useEffect} from 'react'
import {Link, useParams} from "react-router-dom";
import moduleReducer from "../reducers/modules-reducer";
import lessonReducer from "../reducers/lesson-reducer";
import {combineReducers, createStore} from "redux";
import {Provider} from "react-redux";
import ModuleList from "./module-list";
import LessonTabs from "./lesson-tabs";
import TopicPills from "./course-editor/topic-pills";
import topicReducer from "../reducers/topic-reducer";
import courseService from "../services/course-service";

const reducer = combineReducers({
  moduleReducer: moduleReducer,
  lessonReducer: lessonReducer,
  topicReducer: topicReducer
})

// const store = createStore(moduleReducer)
// const store = createStore(lessonReducer)
const store = createStore(reducer)

const CourseEditor = ({history}) => {
  const {courseId, layout} = useParams();
  const [courseTitle, setCourseTitle] = useState('');
  useEffect(() => getTitle(courseId));

  const getTitle = (courseId) => {
    courseService.findCourseById(courseId).then(course => setCourseTitle(course.title));
  }

  return (
      <Provider store={store}>
        <div>
          <h2>
            <Link to={`/courses/${layout}`}>
              <i className="fas fa-times"></i>
            </Link>
            {courseTitle}
            <i onClick={() => history.goBack()}
               className="fas fa-times float-right"></i>
            {/*<i onClick={() => props.history.goBack()}*/}
            {/*   className="fas fa-times float-right"></i>*/}
          </h2>
          <div className="row">
            <div className="col-4">
              <ModuleList/>
            </div>
            <div className="col-8">
              <LessonTabs/>
              <br/>
              <TopicPills/>
            </div>
          </div>
        </div>
      </Provider>)}

export default CourseEditor