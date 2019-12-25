import React, { Component } from 'react';
import "./App.css";

class App extends Component {
  render() {
    return (
      <div>
        <div className="navbar navbar-default">
          <a className="navbar-brand">Learn</a>
          <ul className="nav navbar-nav">
            <li className="active">
              <a>HomePage</a>
            </li>
            <li>
              <a>Employees Managent</a>
            </li>
          </ul>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">            
              <button type="button" className="btn btn-lg btn-primary mb-10">Add Employee</button>            
              <div class="panel panel-primary">
                  <div class="panel-heading">
                    <h3 class="panel-title">List Employees</h3>
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
                <tr>
                  <td></td>
                  <td></td>
                  <td></td> 
                  <td></td>
                  <td></td>
                  <td>                   
                    <button type="button" className="btn btn-lg btn-success mr-10">Edit</button>
                    <button type="button" className="btn btn-lg btn-danger">Delete</button>                   
                  </td>
                </tr>
              </tbody>
            </table>
                  </div>
              </div>
                         
            </div>          
          </div>
        </div>
      </div>
    );
  }
}

export default App;