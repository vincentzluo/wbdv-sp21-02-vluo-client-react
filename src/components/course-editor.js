import React from 'react'
import {Link} from "react-router-dom";

// const CourseEditor = ({props}) =>
const CourseEditor = ({history}) =>
    <div>
      <h2>
        <Link to="/courses/table">
          <i className="fas fa-arrow-left"></i>
        </Link>
        Course Editor
        {/*<i onClick={() => props.history.goBack()}*/}
        {/*   className="fas fa-times float-right"></i>*/}
      </h2>
      <div className="container">

        <div className="row">
          <div className="col-4">

            <ul className="list-group">
              <li className="list-group-item active">
                Module 1
                <i className="pull-right fa fa-trash"></i>
              </li>
              <li className="list-group-item">
                Module 2
                <i className="pull-right fa fa-trash"></i>
              </li>
              <li className="list-group-item">
                Module 3
                <i className="pull-right fa fa-trash"></i>
              </li>
              <li className="list-group-item">
                Module 4
                <i className="pull-right fa fa-trash"></i>
              </li>
              <li className="list-group-item">
                Module 5
                <i className="pull-right fa fa-trash"></i>
              </li>
              <li className="list-group-item">
                Module 6
                <i className="pull-right fa fa-trash"></i>
              </li>
              <li className="list-group-item">
                Module 7
                <i className="pull-right fa fa-trash"></i>
              </li>
            </ul>
            <a className="nav-link" tabIndex="-1" href="#" aria-disabled="true">
              <i className="pull-right add-module fa fa-plus"></i>
            </a>

          </div>
          <div className="col-8">
            <ul className="nav nav-tabs">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Build
                  <i className="pull-right fa fa-trash"></i>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Pages</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Theme</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Store</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Apps</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Settings</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#" tabIndex="-1"
                   aria-disabled="true">
                  <i className="fa fa-plus"></i>
                </a>
              </li>
            </ul>

            <br/>

            <ul className="nav nav-pills">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Topic
                  1</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Topic 2</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Topic 3</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Topic 4</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#" tabIndex="-1"
                   aria-disabled="true">
                  <i className="fa fa-plus"></i>
                </a>
              </li>
            </ul>


          </div>
        </div>
      </div>
    </div>

export default CourseEditor