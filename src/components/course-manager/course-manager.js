import React from 'react'
import CourseTable from "../course-table/course-table";
import CourseGrid from "../course-grid/course-grid";
import CourseEditor from "../course-editor";
import {Link, Route} from "react-router-dom";
import courseService, {findAllCourses, deleteCourse} from "../../services/course-service";
import TopBar from "../top-bar";
import './course-manager.css';

class CourseManager extends React.Component {
  state = {
    courseName: '',
    courses: [],
    qwe: 123,
    sdf: 456
  }

  updateCourse = (course) => {
    console.log(course)
    courseService.updateCourse(course._id, course)
    .then(status => this.setState((prevState) => ({
      ...prevState,
      courses: prevState.courses.map(
          (c) => c._id === course._id ? course : c)
    })))
  }

  componentDidMount = () =>
      // findAllCourses()
      //     .then(actualCourses => this.setState({
      //       courses: actualCourses
      //     }))
      findAllCourses()
      .then(courses => this.setState({courses}))

  addCourse = () => {
    const newCourse = {
      title: this.state.courseName,
      owner: "Me",
      lastModified: "1/1/2021"
    }
    courseService.createCourse(newCourse)
    .then(course => this.setState(
        (prevState) => ({
          ...prevState,
          courses: [
            ...prevState.courses,
            course
          ]
        })))

    // this.state.courses.push(newCourse)
    // this.setState(this.state)
    this.setState({courseName: ''});
  }

  deleteCourse = (courseToDelete) => {
    courseService.deleteCourse(courseToDelete._id)
    .then(status => {
      // const newCourses = this.state.courses
      //     .filter(course => course !== courseToDelete)
      // this.setState({
      //   courses: newCourses
      // })
      // this.setState((prevState) => {
      //   // let nextState = {...prevState}
      //   // nextState.courses =
      //   //     prevState
      //   //         .courses
      //   //         .filter(course => course !== courseToDelete)
      //
      //   let nextState = {
      //     ...prevState,
      //     courses: prevState.courses.filter
      //               (course => course !== courseToDelete)
      //   }
      //
      //   return nextState
      // })

      this.setState((prevState) => ({
        ...prevState,
        courses: prevState.courses.filter
        (course => course !== courseToDelete)
      }))
    })
  }

  setName = (courseName) => {
    this.setState({courseName: courseName})
  }

  render() {
    return(
        <div>
          <Route path="/courses/table">
            <TopBar addCourse={this.addCourse} setName={this.setName} courseName={this.state.courseName}/>
            <CourseTable
                updateCourse={this.updateCourse}
                deleteCourse={this.deleteCourse}
                courses={this.state.courses}/>
            <div className="col-1 float bottom-add-button">
              <i className="fa fa-plus fa-2x" onClick={this.addCourse}></i>
            </div>
          </Route>
          <Route path="/courses/grid">
            <TopBar addCourse={this.addCourse} setName={this.setName} courseName={this.state.courseName}/>
            <CourseGrid
                updateCourse={this.updateCourse}
                deleteCourse={this.deleteCourse}
                courses={this.state.courses}/>
            <div className="col-1 float bottom-add-button">
              <i className="fa fa-plus fa-2x" onClick={this.addCourse}></i>
            </div>
          </Route>
          <Route path="/courses/editor"
                 render={(props) => <CourseEditor {...props}/>}>
          </Route>
        </div>
    )
  }
}

export default CourseManager