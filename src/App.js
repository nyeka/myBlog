import React from "react";
import "./App.css";
import Blog from "./pages/Blog";
import { Switch, Route, Redirect } from "react-router-dom";
import Home from "./pages/Home";
import Blogku from "./data/blog";
import { HashRouter } from "react-router-dom";
import Krypto from "./data/crypto";
import JurnalBlog from "./data/oop";
import { Softare } from "./data/software";

const App = () => {
  return (
    <div className="container">
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <HashRouter>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/blog/2" component={Blogku} />
          <Route path="/blog/3" component={JurnalBlog} />
          <Route path="/blog/:id" component={Blog} />
          <Redirect to="/" />
        </Switch>
      </HashRouter>
    </div>
  );
};

export default App;
