import React, { Component } from 'react'
import {
  CButton,
  CModal,
  CModalBody,
  CModalFooter,
  CModalHeader,
  CModalTitle,
  CForm,
  CFormGroup,
  CInput, CLabel
} from '@coreui/react'
import { FoxApiService } from '../../services'

const foxApi = new FoxApiService()

class ExtendModal extends Component {

  state = {
    extend_date: "",
    status: "Extended",
    error: false
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = async () => {
    const requestData = this.state;
    delete requestData.error;
    await foxApi.patchEntityOf("projects", this.props.projectId, requestData)
      .then(() => {
        this.props.updateList("CliAdm")
          .then(() => {
            this.props.setModalVisibility()
          })
      })
      .catch((error) => {
        console.error(error);
        this.setState({
          error: 'Could not extend project!' +
            ' Please check your input and try again!' +
            ' In case this problem repeats, please contact your administrator!'
        })
      })
  }


  render = () => {
    const { extend_date, error } = this.state
    return (
      <CModal
        show={this.props.show}
        onClose={this.props.setModalVisibility}
        color="dark"
      >
        <CModalHeader closeButton>
          <CModalTitle>Confirm Project Extension</CModalTitle>
        </CModalHeader>
        <CModalBody>
          <CForm>
            <CFormGroup>
              <CLabel htmlFor="extend_date">Extend this project till:</CLabel>
              <CInput type="datetime-local" name="extend_date" value={extend_date} onChange={this.handleChange} required />
            </CFormGroup>
          </CForm>
          {error
            ? <p className={"fox-form-invalid-feedback"}>{error}</p>
            : null
          }
        </CModalBody>
        <CModalFooter>
          <CButton shape="pill" color="primary" onClick={this.handleSubmit}>Confirm</CButton>{' '}
          <CButton shape="pill" color="dark" onClick={this.props.setModalVisibility}>Cancel</CButton>
        </CModalFooter>
      </CModal>
    )
  }
}

export default ExtendModal
