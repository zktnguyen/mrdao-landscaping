import React from 'react';
import { Route } from 'react-router-dom';
import PropTypes from 'prop-types';

import NavBar from './components/NavBar';
import Landing from './components/Landing';
import ScheduleForm from './components/ScheduleForm';
import './App.css';

const App = ({ location }) => (
  <div>
    <NavBar />
    <div>
      <Route location={location} exact path="/" component={Landing} />
      <Route location={location} exact path="/mrdao-landscaping/" component={Landing} />
      <Route location={location} exact path="/schedule" component={ScheduleForm} />
      <Route location={location} exact path="/mrdao-landscaping/schedule" component={ScheduleForm} />
    </div>
  </div>
);

App.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired
  }).isRequired
};

export default App;
