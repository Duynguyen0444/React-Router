import React, {Component} from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import routes from './Routes';
import Menu from './Components/Menu';

class App extends Component {
  // ---------------------------FUNCTION---------------------------
  showContentMenu = routes => {
    var result = null;
    if (routes.length > 0) {
      result = routes.map((route, index) => {
        return (<Route
          key={index}
          path={route.path}
          exact={route.exact}
          component={route.main}/>);
      });
    }
    return result;
  }
  // ---------------------------END FUNCTION---------------------------
  render() {
    return (
      <Router>
        {/* Menu */}
        <Menu/> {/* Nội dung - Mapping*/}
        <Switch>
          {this.showContentMenu(routes)}
        </Switch>
      </Router>
    );
  }
}

export default App;