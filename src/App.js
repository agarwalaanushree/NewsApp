//import logo from './logo.svg';
import "./App.css";

import React, { Component } from "react";
import Navbar from "./components/Navbar";
import News from "./components/News";
import LoadingBar from "react-top-loading-bar";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      mode: "light",
      //mode1: "light",
      //setMode: setMode
    };
  }

  toggleMode = () => {
    if (this.state.mode === "light") {
      this.setState({ mode: "dark" });
      document.body.style.backgroundColor = "#12121f";
    } else {
      this.setState({ mode: "light" });
      document.body.style.backgroundColor = "white";
    }
  };

  state = {
    progress: 0,
  };

  pageSize = 5;
  apiKey = process.env.REACT_APP_NEWS_API;
  setProgress = (progress) => {
    this.setState({ progress: progress });
  };

  render() {
    //this.c = "Anu";

    return (
      <BrowserRouter>
        <LoadingBar
          color="#f11946"
          progress={this.state.progress}
          /* onLoaderFinished={() => setProgress(0)} */
        />
        <Navbar mode={this.state.mode} toggleMode={this.toggleMode} />

        <Routes>
          <Route
            path="/"
            element={
              <News
                setProgress={this.setProgress}
                apiKey={this.apiKey}
                key="general"
                mode={this.state.mode}
                pageSize={this.pageSize}
                country="in"
                category="general"
              />
            }
          />
          <Route
            path="business/*"
            element={
              <News
                setProgress={this.setProgress}
                apiKey={this.apiKey}
                key="business"
                mode={this.state.mode}
                pageSize={this.pageSize}
                country="in"
                category="business"
              />
            }
          />
          <Route
            path="entertainment/*"
            element={
              <News
                setProgress={this.setProgress}
                apiKey={this.apiKey}
                key="entertainment"
                mode={this.state.mode}
                pageSize={this.pageSize}
                country="in"
                category="entertainment"
              />
            }
          />
          <Route
            path="general/*"
            element={
              <News
                setProgress={this.setProgress}
                apiKey={this.apiKey}
                key="general"
                mode={this.state.mode}
                pageSize={this.pageSize}
                country="in"
                category="general"
              />
            }
          />
          <Route
            path="health/*"
            element={
              <News
                setProgress={this.setProgress}
                apiKey={this.apiKey}
                key="health"
                mode={this.state.mode}
                pageSize={this.pageSize}
                country="in"
                category="health"
              />
            }
          />
          <Route
            path="science/*"
            element={
              <News
                setProgress={this.setProgress}
                apiKey={this.apiKey}
                key="science"
                mode={this.state.mode}
                pageSize={this.pageSize}
                country="in"
                category="science"
              />
            }
          />
          <Route
            path="sports/*"
            element={
              <News
                setProgress={this.setProgress}
                apiKey={this.apiKey}
                key="sports"
                mode={this.state.mode}
                pageSize={this.pageSize}
                country="in"
                category="sports"
              />
            }
          />
          <Route
            path="technology/*"
            element={
              <News
                setProgress={this.setProgress}
                apiKey={this.apiKey}
                key="technology"
                mode={this.state.mode}
                pageSize={this.pageSize}
                country="in"
                category="technology"
              />
            }
          />
        </Routes>
      </BrowserRouter>
    );
  }
}
