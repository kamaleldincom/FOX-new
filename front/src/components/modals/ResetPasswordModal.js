import React, { Component } from 'react'
import {
  CButton,
  CModal,
  CModalBody,
  CModalFooter,
  CModalHeader,
  CModalTitle,
} from '@coreui/react'
import { FoxApiService } from '../../services'

const foxApi = new FoxApiService()

class ResetPasswordModal extends Component {

  state = {
    email: this.props.email,
    error: false,
    success: false
  }

  handleSubmit = async () => {
    const requestData = this.state;
    delete requestData.success;
    delete requestData.error;
    await foxApi.resetPassword(requestData)
      .then(() => {
        this.setState({
          success: true,
          error: false
        })
      })
      .catch((error) => {
        console.error(error);
        this.setState({
          error: 'Could not reset your password!' +
            ' Please check your the email you entered and try again!' +
            ' In case this problem repeats, please contact your administrator!'
        })
      })
  }

  render = () => {
    const { error, success } = this.state
    return (
      <CModal
        show={this.props.show}
        onClose={this.props.setModalVisibility}
        color="dark"
      >
        <CModalHeader closeButton>
          <CModalTitle>Request password reset</CModalTitle>
        </CModalHeader>
        <CModalBody>
          {success ?
            <p className="fox-form-valid-feedback">Password reset application was successful. Please check your email for further instructions</p>
            :
            <p>Are you sure you want to reset your password?</p>
          }
          {error
            ? <p className="fox-form-invalid-feedback">{error}</p>
            : null
          }
        </CModalBody>
        <CModalFooter>
          {success ? null : <CButton shape="pill" color="primary" onClick={this.handleSubmit}>Confirm</CButton>}
          {' '}<CButton shape="pill" color="dark" onClick={this.props.setModalVisibility}>{success ? "Close" : "Cancel"}</CButton>
        </CModalFooter>
      </CModal >
    )
  }
}

export default ResetPasswordModal
