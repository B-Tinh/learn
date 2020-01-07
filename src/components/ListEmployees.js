import React, { Component } from "react";
import InforEmployees from "./InforEmployees";
import { connect } from 'react-redux';
import callApi from './../utils/apiCaller';
class ListEmployees extends Component {

  constructor(props){
    super(props);
    this.state = {
      employees: []
    }
  }

  componentDidMount(){
    callApi('employees', 'GET', null).then(res =>{
      this.setState({
        employees: res.data
      })
    })
  }
  render() {
    const {employees} = this.state;
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

const mapStateToProps = state => {
  return {
    employees: state.employees
  };
}

export default connect(mapStateToProps, null)(ListEmployees);
