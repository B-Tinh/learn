import React, { Component } from "react";

class InforEmployees extends Component {
  render() {
    const { employee, index } = this.props;
    return (
      <tr>
        <td>{index + 1}</td>
        <td style={{ width: 130, height: 100 }}>
          <img
            style={{ width: 130, height: 100 }}
            src={employee.account.image}
            className="img-responsive"
            alt="Image"
          />
        </td>
        <td>
          <h5>{employee.first_name}</h5>
          <h5>{employee.last_name}</h5>
          <h5>{employee.title}</h5>
        </td>
        <td>{employee.account.userName}</td>
        <td>{employee.account.emali}</td>
        <td>
          <button type="button" className="btn btn-lg btn-success mr-10">
            Edit
          </button>
          <button type="button" className="btn btn-lg btn-danger">
            Delete
          </button>
        </td>
      </tr>
    );
  }
}

export default InforEmployees;
