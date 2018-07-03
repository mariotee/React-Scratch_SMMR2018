import React from 'react'
import ReactDOM from 'react-dom'
import { HashRouter, Route, Switch } from 'react-router-dom'
import { createBrowserHistory } from 'history'

import { MuiThemeProvider } from '@material-ui/core'
import { theme } from "./theme.js"

import routes from "routes"

ReactDOM.render(
  <MuiThemeProvider theme={theme}>
    <HashRouter history={history}>
      <Switch>
      {
        routes.map((element, index) =>
        {
          return <Route exact key={index} path={element.path} component={element.component}/>
        })
      }
      </Switch>
    </HashRouter>
  </MuiThemeProvider>,
  document.getElementById("root")
);
