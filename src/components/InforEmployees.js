import React, { Component } from "react";

class InforEmployees extends Component {
  render() {
    return (
      <tr>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
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
