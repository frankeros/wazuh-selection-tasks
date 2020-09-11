import React from "react";
import {
  Switch,
  Route
} from "react-router-dom";
import HomePage from './pages/HomePage/HomePage';
import TabsPage from './pages/TabsPage/TabsPage';
import ApiPage from './pages/ApiPage/ApiPage';

export default function Routes() {
  return (
    <Switch>
      <Route path="/tabs">
        <TabsPage />
      </Route>
      <Route path="/api">
        <ApiPage />
      </Route>
      <Route path="/">
        <HomePage />
      </Route>
    </Switch>
  );
}

