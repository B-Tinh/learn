import React, { Component } from "react";
import ListEmployees from "../../components/ListEmployees";

class ListEmployeePage extends Component {
  render() {
    return (
      <div>
        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
          <button type="button" className="btn btn-lg btn-info mb-10">
            Add Employee
          </button>
          <ListEmployees />
        </div>
      </div>
    );
  }
}

export default ListEmployeePage;
