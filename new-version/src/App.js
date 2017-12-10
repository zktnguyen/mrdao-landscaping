import React from 'react';
import { Route } from 'react-router-dom';
import PropTypes from 'prop-types';

import NavBar from './components/NavBar';
import Landing from './components/Landing';
import ScheduleForm from './components/ScheduleForm';
import ConfirmationPage from './components/ConfirmationPage';
import './App.css';

const App = ({location}) => (
  <div className="animated">
    <NavBar />
    <div>
      <Route location={location} path="/" exact component={Landing} />
      <Route location={location} path="/mrdao-landscaping/" exact component={Landing} />
      <Route location={location} path="/schedule" exact component={ScheduleForm} />
      <Route location={location}
        path="/mrdao-landscaping/schedule"
        exact
        component={ScheduleForm}
      />
      <Route path="/confirm" exact component={ConfirmationPage} />
      <Route location={location}
        path="/mrdao-landscaping/confirm"
        exact
        component={ConfirmationPage}
      />
    </div>
  </div>
);

App.propTypes = {
   location: PropTypes.shape({
     pathname: PropTypes.string.isRequired
   }).isRequired
 };

export default App;
