import React, { Component } from 'react';
import TextField from 'material-ui/TextField';

class ScheduleForm extends Component {
  constructor() {
    super();
    this.state = {
      name: ''
    };
  }

  render() {
    return (
      <div className="container schedule-form text-center">
        <div className="row">
            <h3>Schedule an appointment with Mr. Dao</h3>
        </div>
        <div className="row">
          <TextField hintText="name" value={this.state.name} />
          <br />
        </div>
      </div>
    );
  }
}

export default ScheduleForm;
