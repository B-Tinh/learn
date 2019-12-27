import React, { Component } from "react";
import InforEmployees from "./InforEmployees";

class ListEmployees extends Component {
  render() {
    const employees = [];
    const infoEmployee = employees.map((employee, index) => {
      return <InforEmployees key={index} employee={employee} index={index} />;
    });
    return (
      <div>
        <div className="panel panel-primary">
          <div className="panel-heading">
            <h3 className="panel-title">Employeer List</h3>
          </div>
          <div className="panel-body">
          <div class="table-responsive">  
            <table className="table table-bordered">
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
              <tbody>{infoEmployee}</tbody>
            </table>
          </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ListEmployees;
