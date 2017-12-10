import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';
import PropTypes from 'prop-types';

import { green800, orange500, blue500 } from 'material-ui/styles/colors';

const styles = {
  errorStyle: {
    color: orange500
  },
  underlineStyle: {
    borderColor: green800
  },
  floatingLabelStyle: {
    color: green800
  },
  floatingLabelFocusStyle: {
    color: blue500
  }
};

class ScheduleForm extends Component {
  constructor() {
    super();
    this.state = {
      data: {
        name: '',
        address: '',
        city: '',
        zip: '',
        availability: 1,
        note: '',
        contactInfo: ''
      }
    };
  }

  onInputChange = e => {
    const { name } = e.target;
    let { value } = e.target;
    if (name === 'zip') value = parseInt(value, 10);
    this.setState({ data: { ...this.state.data, [name]: value } });
  };



  onSubmit = () => this.props.history.push("/confirm");

  resetForm = () =>
  this.setState({
    data: {
      name: '',
      address: '',
      city: '',
      zip: '',
      appointmentType: '',
      contactInfo: '',
      availability: 1,
      note: ''
    }
  });

  handleDropdownChange = (event, index, value) => {
    const availability = value;
    this.setState({ data: { ...this.state.data, availability } });
  };

  render() {
    const { data } = this.state;
    return (
      <div className="container schedule-form animated fadeIn">
        <div className="row text-center">
          <h3>Schedule an appointment with Mr. Dao</h3>
        </div>
        <div className="row information-form">
          <div className="col-xs-12 col-md-6 ">
            <TextField
              floatingLabelText="Name"
              hintText="Name (First Last)"
              value={data.name}
              name="name"
              onChange={this.onInputChange}
              underlineFocusStyle={styles.underlineStyle}
              floatingLabelFocusStyle={styles.floatingLabelStyle}
            />
            <br />
            <TextField
              hintText="Street Address"
              floatingLabelText="Address"
              name="address"
              value={data.address}
              onChange={this.onInputChange}
              underlineFocusStyle={styles.underlineStyle}
              floatingLabelFocusStyle={styles.floatingLabelStyle}
            />
            <br />
            <TextField
              hintText="Serving the East Bay"
              floatingLabelText="City"
              name="city"
              value={data.city}
              onChange={this.onInputChange}
              underlineFocusStyle={styles.underlineStyle}
              floatingLabelFocusStyle={styles.floatingLabelStyle}
            />
            <br />
            <TextField
              hintText="5-digit code"
              floatingLabelText="Zip Code"
              name="zip"
              value={data.zip}
              onChange={this.onInputChange}
              underlineFocusStyle={styles.underlineStyle}
              floatingLabelFocusStyle={styles.floatingLabelStyle}
            />
            <br /><br/>
            <TextField
              hintText="E-mail (name@example.com) or Phone Number (xxx) xxx-xxxx"
              name="contactInfo"
              value={data.contactInfo}
              onChange={this.onInputChange}
              underlineFocusStyle={styles.underlineStyle}
            />
            <br />
          </div>
          <div className="col-md-6 col-xs-12" style={{ textAlign: 'left' }}>
            <h4>
              Availability<small> (Time of the day)</small>
            </h4>
            <DropDownMenu
              name="availability"
              value={data.availability}
              onChange={this.handleDropdownChange}
            >
              <MenuItem value={1} label="7am - 12pm" primaryText="Morning" />
              <MenuItem value={2} label="12pm - 5pm" primaryText="Afternoon" />
              <MenuItem value={3} label="5pm - 9pm" primaryText="Evening" />
            </DropDownMenu>
            <br />
            <br />
            <TextField
              hintText="Message or Notes"
              floatingLabelText="Note to Mr. Dao"
              name="note"
              multiLine
              fullWidth
              value={data.note}
              onChange={this.onInputChange}
              underlineFocusStyle={styles.underlineStyle}
              floatingLabelFocusStyle={styles.floatingLabelStyle}
            />
            <br />
          </div>
        </div>
        <br />
        <div className="row schedule-buttons">
          <button type="button" className="btn btn-primary" onClick={this.onSubmit}>
            Submit
          </button>
          <button type="button" className="btn btn-danger" onClick={this.resetForm}>
            Reset Form
          </button>
        </div>
      </div>
    );
  }
}

ScheduleForm.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired
  }).isRequired
};

export default ScheduleForm;
