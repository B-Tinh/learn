import React, { Component } from "react";
import InforEmployees from "./InforEmployees";

class ListEmployees extends Component {
  render() {
    return (
      <div>
        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
          <button type="button" className="btn btn-lg btn-info mb-10">
            Add Employee
          </button>
          <div class="panel panel-primary">
            <div class="panel-heading">
              <h3 class="panel-title">Employeer List</h3>
            </div>
            <div class="panel-body">
              <table className="table table-bordered table-hover">
                <thead>
                  <tr>
                    <th>STT</th>
                    <th>Avatar</th>
                    <th>Information</th>
                    <th>UserName</th>
                    <th>Email</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  <InforEmployees />
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ListEmployees;
