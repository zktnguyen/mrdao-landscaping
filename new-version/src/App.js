import React from 'react';
import { Route } from 'react-router-dom';
//import PropTypes from 'prop-types';

import NavBar from './components/NavBar';
import Landing from './components/Landing';
import ScheduleForm from './components/ScheduleForm';
import './App.css';

const App = () => (
  <div>
    <NavBar />
    <div>
      <Route exact path="/" component={Landing} />
      <Route exact path="/mrdao-landscaping/" component={Landing} />
      <Route exact path="/schedule" component={ScheduleForm} />
      <Route exact path="/mrdao-landscaping/schedule" component={ScheduleForm} />
    </div>
  </div>
);

// App.propTypes = {
//   location: PropTypes.shape({
//     pathname: PropTypes.string.isRequired
//   }).isRequired
// };

export default App;
