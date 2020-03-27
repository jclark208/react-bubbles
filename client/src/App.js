import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch, Link  } from "react-router-dom";
import BubblePage from './components/BubblePage';
import PrivateRoute from './components/PrivateRoute';
import ColorList from './components/ColorList'
import Login from "./components/Login";
import "./styles.scss";

function App() {
  return (
    <Router>
            <div className="App">
        <Route exact path="/" component={Login} />
  

        <Switch>
          <PrivateRoute exact path='/bubbles' component={BubblePage} />

        </Switch>

      </div>
    </Router>
  );
}

export default App;
