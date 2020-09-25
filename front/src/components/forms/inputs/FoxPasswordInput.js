import React, { Component } from 'react';
import {
  CFormGroup,
  CInput,
  CInputGroup,
  CInputGroupAppend,
  CInputGroupPrepend,
  CInputGroupText,
} from "@coreui/react";
import CIcon from '@coreui/icons-react'

// inputName
// password
// placeholder
// submitError
// handleChange

class FoxPasswordInput extends Component {

  state = {
    showPassword: false
  }

  toggleShowPassword = () => {
    this.setState({
      showPassword: !this.state.showPassword
    });
  }

  render() {
    const { showPassword } = this.state;
    return (
      showPassword ?
        <CFormGroup>
          < CInputGroup >
            <CInputGroupPrepend>
              <CInputGroupText className={`fox-input-before${this.props.submitError ? "-invalid" : ""}`}>
                <CIcon name="cilLockLocked" />
              </CInputGroupText>
            </CInputGroupPrepend>
            <CInput
              id={this.props.inputName}
              name={this.props.inputName}
              placeholder={this.props.placeholder}
              value={this.props.password}
              onChange={this.props.handleChange}
              invalid={this.props.submitError}
              required
            />
            <CInputGroupAppend>
              <CInputGroupText onClick={this.toggleShowPassword} className={`fox-input-after${this.props.submitError ? "-invalid" : ""}`}>
                <CIcon name="cilLowVision" />
              </CInputGroupText>
            </CInputGroupAppend>
          </CInputGroup >
        </CFormGroup >
        :
        <CFormGroup>
          <CInputGroup>
            <CInputGroupPrepend>
              <CInputGroupText className={`fox-input-before${this.props.submitError ? "-invalid" : ""}`}>
                <CIcon name="cilLockLocked" />
              </CInputGroupText>
            </CInputGroupPrepend>
            <CInput
              type="password"
              id={this.props.inputName}
              name={this.props.inputName}
              placeholder={this.props.placeholder}
              value={this.props.password}
              onChange={this.props.handleChange}
              invalid={this.props.submitError}
              required
            />
            <CInputGroupAppend>
              <CInputGroupText onClick={this.toggleShowPassword} className={`fox-input-after${this.props.submitError ? "-invalid" : ""}`}>
                <CIcon name="cilMagnifyingGlass" />
              </CInputGroupText>
            </CInputGroupAppend>
          </CInputGroup>
        </CFormGroup>
    )
  }

}

export default FoxPasswordInput