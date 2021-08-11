// DEPENDENCIES
import React from 'react';
import { Router, Route, Switch, Redirect } from "react-router-dom";
import { createBrowserHistory } from 'history';

// COMPONENTS
import { Layout } from "./Layout/Layout";
import { BrowseQuestions } from './BrowseQuestions/BrowseQuestions';

// STYLE
import './App.css';

const App = () => {
  return (
    <div>
      <Router history={createBrowserHistory()}>
        <Layout>
          <Switch>
            <Route
              exact
              path="/"
              component={BrowseQuestions}
            />
            <Redirect to="/" />
          </Switch>
        </Layout>

      </Router>
    </div>
  );
}

export default App;
