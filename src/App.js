import React from "react";
import "./App.css";
import Blog from "./pages/Blog";
import { Switch, Route, Redirect } from "react-router-dom";
import Home from "./pages/Home";
import Blogku from "./data/blog";

const App = () => {
  return (
    <div className="container">
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/blog/2" component={Blogku} />
        <Route path="/blog/:id" component={Blog} />
        <Redirect to="/" />
      </Switch>
    </div>
  );
};

export default App;
