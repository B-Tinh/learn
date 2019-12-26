import React, { Component } from "react";

class Menu extends Component {
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
      </div>
    );
  }
}

export default Menu;
