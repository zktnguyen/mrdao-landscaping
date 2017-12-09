import React, { Component } from 'react';

class ScheduleForm extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      email: '',
      time: { date: {}, hour: 0, minute: 0 },
      scheduleType: '',
      inquiryType: ''
    };
  }
  render() {
    return <div>This is my form</div>;
  }
}

export default ScheduleForm;