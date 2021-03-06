import * as React from "react";
import { BrowserRouter, Switch, Redirect, Route } from "react-router-dom";
import FileSelectionPage from "pages/FileSelectionPage";
import SearchPage from "pages/SearchPage";
import DataTablePage from "pages/DataTablePage";

export const Router: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={FileSelectionPage} />
        <Route path="/search" component={SearchPage} />
        <Route path="/result" component={DataTablePage} />
        <Redirect path="*" to="/" />
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
