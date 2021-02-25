import React from 'react'
import CourseCard from "../course-card/course-card";
import {Link} from "react-router-dom";
import './course-grid.css'

const CourseGrid = ({updateCourse, deleteCourse, courses}) =>
    <div>
      <div className="row buttons">
          <i className="fas fa-2x fa-folder folder"/>
          <i className="fas fa-2x fa-sort-alpha-up-alt sort"/>
          <Link to="/courses/table">
            <i className="fas fa-list fa-2x table"></i>
          </Link>
      </div>
      <div className="row">
        {
          courses.map(course =>
              <CourseCard
                  updateCourse={updateCourse}
                  deleteCourse={deleteCourse}
                  course={course}
                  title={course.title}
              />
          )
        }
      </div>
    </div>

export default CourseGrid