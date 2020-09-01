import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { getProfileFetch } from '../../../actions'
import {
  CForm,
  CFormGroup,
  CRow,
  CCol,
  CLabel,
  CInput
} from "@coreui/react";
import DjangoCSRFToken from 'django-react-csrftoken'

class CompanyDocuments extends Component {

  state = {
    safetyVideoURL: "",
    personalDeclarationURL: "",
    company: this.props.company
  }

  handleChange = event => {
    this.setState({
        [event.target.name]: event.target.value
    });
    console.log(this.props);
}

  componentDidMount = () => {
    this.props.getProfileFetch()
  }

  render = () => {
    return (
      <CRow>
        <CCol>
          <CForm onSubmit={this.handleSubmit} >
            <DjangoCSRFToken />
            <CFormGroup>
              <CLabel htmlFor="safetyVideoURL">Safety Video URL:</CLabel>
              <CInput
                id="safetyVideoURL"
                name="safetyVideoURL"
                placeholder="URL"
                value={this.state.safetyVideoURL}
                onChange={this.handleChange}
                required />
            </CFormGroup>
            <CFormGroup>
              <CLabel htmlFor="personalDeclarationURL">Personal Declaration:</CLabel>
              <CInput
                id="personalDeclarationURL"
                name="personalDeclarationURL"
                placeholder="URL"
                value={this.state.safetyVideoURL}
                readOnly
              />
            </CFormGroup>

          </CForm>
        </CCol>
      </CRow >
    )
  }
}

const mapStateToProps = state => {
  return {
    username: state.currentUser.username,
  }
}

const mapDispatchToProps = dispatch => ({
  getProfileFetch: () => dispatch(getProfileFetch()),
})

export default connect(mapStateToProps, mapDispatchToProps)(CompanyDocuments)
