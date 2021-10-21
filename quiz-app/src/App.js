import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Home from "./pages/Home";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Login} />
        <Route path="/Signup" exact component={Signup} />
        <Route path="/Home" exact component={Home} />
      </Switch>
    </Router>
  );
}

export default App;
