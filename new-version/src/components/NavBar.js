import React from 'react';
import muiThemeable from 'material-ui/styles/muiThemeable';
import IconButton from 'material-ui/IconButton';
import AppBar from 'material-ui/AppBar';

const NavBar = () => (
  <AppBar
    iconElementLeft={
      <IconButton iconClassName="material-icons">landscape</IconButton>
    }
    title="Mr. Dao Landscaping"
  />
);

export default muiThemeable()(NavBar);
