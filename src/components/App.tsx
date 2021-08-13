// DEPENDENCIES
import React, { FC } from "react";
import { Router, Route, Switch, Redirect } from "react-router-dom";

// COMPONENTS
import { Layout } from "./Layout/Layout";
import BrowseQuestions from "./BrowseQuestions/BrowseQuestions";

// STYLE
import "./App.css";

interface IProps {
  history: any;
}

const App: FC<IProps> = ({ history }) => {
  return (
    <div>
      <Router history={history}>
        <Layout>
          <Switch>
            <Route exact path="/" component={BrowseQuestions} />
            <Redirect to="/" />
          </Switch>
        </Layout>
      </Router>
    </div>
  );
};

export { App };
