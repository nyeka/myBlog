import React from "react";
import "./App.css";
import Blog from "./pages/Blog";
import Home from "./pages/Home";

const App = () => {
  return (
    <div className="container">
      <Home />
      <Blog />
    </div>
  );
};

export default App;
