import React, { Component } from "react";

export default class PersonalInfo extends Component {
  render() {
    return (
      <div className="personal-info">
        <div>
          <label>First Name</label>
          <input
            placeholder="Enter First Name"
            onChange={this.props.handleChange("firstName")}
            defaultValue={this.props.firstName}
          />
        </div>
        <div>
          <label>Middle Name</label>
          <input
            placeholder="Enter Middle Name"
            onChange={this.props.handleChange("middleName")}
            defaultValue={this.props.middleName}
          />
        </div>
        <div>
          <label>Last Name</label>
          <input
            placeholder="Enter Last Name"
            onChange={this.props.handleChange("lastName")}
            defaultValue={this.props.lastName}
          />
        </div>
        <div>
          <label>SSN#</label>
          <input
            type="number"
            placeholder="Enter SSN#"
            onChange={this.props.handleChange("ssn#")}
            defaultValue={this.props.ssn}
          />
        </div>
        <div>
          <label>DoB</label>
          <input
            placeholder="Enter Date of Birth"
            onChange={this.props.handleChange("DOB")}
            defaultValue={this.props.dob}
          />
        </div>
        <div>
          <label>Gender</label>
          <select
            onChange={this.props.handleChange("gender")}
            defaultValue={this.props.gender}
          >
            <option value="" disabled>
              {this.props.placeholder}
            </option>
            {this.props.genderOptions.map(option => {
              return (
                <option key={option} value={option} label={option}>
                  {option}
                </option>
              );
            })}
          </select>
        </div>
        <div>
          <label>Phone</label>
          <input
            placeholder="Enter Phone Number"
            onChange={this.props.handleChange("phone")}
            defaultValue={this.props.phone}
          />
        </div>
        <div>
          <label>Email Address</label>
          <input
            type="email"
            placeholder="Email Address"
            onChange={this.props.handleChange("email")}
            defaultValue={this.props.email}
          />
        </div>
        <div>
          <label>D/L#</label>
          <input
            placeholder="Driver Licence Number "
            onChange={this.props.handleChange("driverLicence")}
            defaultValue={this.props.driverLicence}
          />
        </div>
        <div>
          <label>D/L Expiry Date</label>
          <input
            placeholder="D/L Expiry Date "
            onChange={this.props.handleChange("dLExpiry")}
            defaultValue={this.props.dLExpiry}
          />
        </div>
      </div>
    );
  }
}
