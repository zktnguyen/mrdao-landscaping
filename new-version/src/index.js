import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import { green800 } from 'material-ui/styles/colors';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const muiTheme = getMuiTheme({
  appBar: {
    color: green800,
    height: 60
  }
});

const MyThemeApp = () => (
  <MuiThemeProvider muiTheme={muiTheme}>
    <App />
  </MuiThemeProvider>
);

render(
  <BrowserRouter>
    <Route component={MyThemeApp} />
  </BrowserRouter>,
  document.getElementById('root')
);
registerServiceWorker();
