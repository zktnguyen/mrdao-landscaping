import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import {green800} from 'material-ui/styles/colors';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const muiTheme = getMuiTheme({
  appBar: {
    color: green800,
    height: 80,
  },
});

const MyThemeApp = () => (
  <MuiThemeProvider muiTheme={muiTheme}>
    <App/>
  </MuiThemeProvider>
);

ReactDOM.render(<MyThemeApp/>, document.getElementById('root'));
registerServiceWorker();
