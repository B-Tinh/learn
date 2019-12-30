import React, { Component } from "react";

class EmployeeActionPage extends Component {
  render() {
    return (
      <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
        <form>
          <div className="form-group">
            <label for="">First Name:</label>
            <input type="text" className="form-control" />
          </div>
          <div className="form-group">
            <label for="">Last Name:</label>
            <input type="text" className="form-control" />
          </div>
          <div className="form-group">
            <label for="">Title:</label>
            <input type="text" className="form-control" />
          </div>
          <div className="form-group">
            <label for="">Email:</label>
            <input type="text" className="form-control" />
          </div>
          <div className="form-group">
            <label for="">Image:</label>
            <input type="text" className="form-control" />
          </div>
          <div className="form-group">
            <label for="">User Name:</label>
            <input type="text" className="form-control" />
          </div>
          <button type="submit" className="btn btn-primary">
            Save
          </button>
        </form>
      </div>
    );
  }
}

export default EmployeeActionPage;
