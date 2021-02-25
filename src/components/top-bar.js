import {Link} from "react-router-dom";
import React from "react";

class TopBar extends React.Component {
  constructor(props) {
    super(props);
  }
    handleChange = (event) => {
      this.props.setName(event.target.value);
    }

    render()
    {
      return (
          <div>
            <Link to="/">
              <i className="fas fa-2x fa-home float-right"></i>
            </Link>
            <div className="wbdv-sticky-top wbdv-padding-5px">
              <div className="row">
                <div className="col-1">
                  <i className="fa fa-bars fa-2x options"></i>
                </div>
                <div className="col-2 d-none d-sm-block">
                  <h4>Course Manager</h4>
                </div>
                <div className="col-8">
                  <input className="form-control"
                         value={this.props.courseName}
                         onChange={this.handleChange}
                         placeholder="New Course Title"/>
                </div>
                <div className="col-1">
                  <i className="fa fa-plus fa-2x add-button"
                     onClick={this.props.addCourse}></i>
                </div>
              </div>
            </div>
          </div>
      )
    }
  }

  export
  default
  TopBar;
