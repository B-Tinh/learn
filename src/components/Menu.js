import React, { Component } from "react";
import { Route, Link } from "react-router-dom";

const menus = [
  {
    name: "Home Page",
    to: "/",
    exact: true
  },
  {
    name: "Employees Managent",
    to: "/employee-list",
    exact: false
  }
];

const MenuLink = ({ label, to, activeHover }) => {
  return (
    <Route
      path={to}
      exact={activeHover}
      children={({ match }) => {
        let active = match ? "active" : "";
        return (
          <li className={active}>
            <Link to={to}>{label}</Link>
          </li>
        );
      }}
    />
  );
};
class Menu extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-default">
          <div className="container-fluid">
            <div className="navbar-header">
              <a className="navbar-brand">Learn</a>
            </div>
            <ul className="nav navbar-nav" style={{textAlign: "center"}}>{this.showMenus(menus)}</ul>
          </div>
        </nav>
      </div>
    );
  }

  showMenus = () => {
    let result = null;
    if (menus.length > 0) {
      result = menus.map((menu, index) => {
        return (
          <MenuLink
            key={index}
            label={menu.name}
            to={menu.to}
            activeHover={menu.exact}
          />
        );
      });
    }
    return result;
  };
}

export default Menu;