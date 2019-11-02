import React from "react";
import FormPage from "./FormPage.jsx";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import GoalsPage from "./GoalsPage.js";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact component={FormPage} />
          <Route path="/goals" component={GoalsPage} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
