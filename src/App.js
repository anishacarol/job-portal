import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import JobDetailsPage from "../src/pages/JobDetailsPage/JobDetailsPage";
import JobListPage from "../src/pages/JobListPage/JobListPage";
import * as Styled from "./App.styles";

function App() {
  return (
    <Styled.App>
      <BrowserRouter>
        <Styled.Header>
          <h1>Job Portal</h1>
        </Styled.Header>
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
    </Styled.App>
  );
}

export default App;
