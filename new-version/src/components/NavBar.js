import React from 'react';
import muiThemeable from 'material-ui/styles/muiThemeable';
import AppBar from 'material-ui/AppBar';

const NavBar = (props) => (
  <AppBar title="Mr. Dao Landscaping"/>
);

export default muiThemeable()(NavBar);