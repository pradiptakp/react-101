/*
  Ini entry point reactnya, disini dipake buat define react router
*/

import React from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import { createBrowserHistory } from "history";
import { APP_ROUTE } from "./routes";
import PrivateRoute from "components/PrivateRoute";
import PublicRoute from "components/PublicRoute";
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/lib/integration/react';
import { persistor, store } from './store';

export const history = createBrowserHistory();

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={<div />} persistor={persistor}>
        <Router>
          <Switch>
            {APP_ROUTE.map((value, index) => {
              if (value.private) {
                return (
                  <PrivateRoute
                    key={value.name}
                    component={value.component}
                    path={value.path}
                    exact={value.exact}
                  />
                );
              } else {
                return (
                  <PublicRoute
                    key={value.name}
                    restricted={value.restricted}
                    path={value.path}
                    component={value.component}
                    exact={value.exact}
                  />
                );
              }
            })}
          </Switch>
        </Router>
      </PersistGate>
    </Provider>
  );
};

export default App;
