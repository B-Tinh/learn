import React, { Component } from 'react';
import "./App.css";
import Menu from './components/Menu';
import ListEmployees from './components/ListEmployees';

class App extends Component {
  render() {
    return (
      <div>
        <Menu />
        <div className="container">
          <div className="row">
            <ListEmployees />      
          </div>
        </div>
      </div>
    );
  }
}

export default App;