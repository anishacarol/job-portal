import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import JobDetailsPage from "../src/pages/JobDetailsPage/JobDetailsPage";
import JobListPage from "../src/pages/JobListPage/JobListPage";
import "./App.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/job-list">
            <JobListPage />
          </Route>
          <Route path="/job-details">
            <JobDetailsPage />
          </Route>
          <Route path="/">
            <JobListPage />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
