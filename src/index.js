import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Route, Switch } from 'react-router-dom';

import { MuiThemeProvider } from '@material-ui/core';
import { theme } from './theme.js';

import routes from 'routes';

import './index.css';

ReactDOM.render(
  <MuiThemeProvider theme={theme}>
    <HashRouter>
      <Switch>
      {
        routes.map((element, index) => {
          return <Route exact key={index} path={element.path} component={element.component}/>;
        })
      }
      </Switch>
    </HashRouter>
  </MuiThemeProvider>,
  document.getElementById('root')
);
