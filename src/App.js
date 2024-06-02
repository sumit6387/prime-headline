import "./App.css";

import React, { Component } from "react";
import NavBar from "./components/NavBar";
import News from "./components/News";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route
              path="/"
              element={<News pageSize={5} category="general" country="in" />}
            ></Route>
            <Route
              path="/technology"
              element={<News pageSize={5} category="technology" country="in" />}
            ></Route>
            <Route
              path="/sports"
              element={<News pageSize={5} category="sports" country="in" />}
            ></Route>
            <Route
              path="/science"
              element={<News pageSize={5} category="science" country="in" />}
            ></Route>
            <Route
              path="/health"
              element={<News pageSize={5} category="health" country="in" />}
            ></Route>
            <Route
              path="/entertainment"
              element={
                <News pageSize={5} category="entertainment" country="in" />
              }
            ></Route>
            <Route
              path="/business"
              element={<News pageSize={5} category="business" country="in" />}
            ></Route>
          </Routes>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
