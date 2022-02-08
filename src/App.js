import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
// import "./style.css"
import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";

import BlogList from "./components/blog-list.component";
import CreateBlog from "./components/create-blog.component";
import EditBlog from "./components/edit-blog.component";


class App extends Component {
  render() {
    return (
      <Router>
        <div className="container">
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link to="/" className="navbar-brand">MERN-Stack Blog App</Link>
            <div className="collpase nav-collapse">
              <ul className="navbar-nav mr-auto">
                <li className="navbar-item">
                  <Link to="/" className="nav-link">Blogs</Link>
                </li>
                <li className="navbar-item">
                  <Link to="/create" className="nav-link">Create Blog</Link>
                </li>
              </ul>
            </div>
          </nav>
          <Routes>
            <Route path="/" exact element={<BlogList/>} />
            <Route path="/edit/:id" element={<EditBlog/>} />
            <Route path="/create" element={<CreateBlog/>} />
          </Routes>
        </div>
      </Router>
    );
  }
}

export default App;