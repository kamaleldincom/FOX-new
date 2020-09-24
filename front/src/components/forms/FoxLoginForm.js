import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  CForm,
  CFormGroup,
  CInput,
  CContainer,
  CRow,
  CCol,
  CInputGroup,
  CInputGroupAppend,
  CInputGroupPrepend,
  CInputGroupText,
  CButton,
  CImg
} from "@coreui/react";
import CIcon from '@coreui/icons-react'
import DjangoCSRFToken from 'django-react-csrftoken'
import { userLoginFetch } from '../../actions'


class FoxLoginForm extends Component {

  state = {
    username: "",
    password: "",
    show_password: false
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  toggleShowPassword = () => {
    console.log("clicked");
    this.setState({
      show_password: !this.state.show_password
    })
  }

  handleSubmit = event => {
    event.preventDefault()
    let submitForm = this.state
    delete submitForm.show_password
    this.props.userLoginFetch(submitForm)
  }

  render() {
    const { username, password, show_password } = this.state
    return (
      <CContainer fluid={true}>
        <CRow className="mb-2">
          <CCol md="8" className="mx-auto">
            <CImg
              width="100%"
              src='/static/front/images/signed-logo.png'
              className="mb-2"
            />
          </CCol>
        </CRow>
        <CRow className="mt-2 mb-2" alignHorizontal="center">
          <CCol className="mx-auto">
            <h1 className="fox-login-welcome">Welcome to FOX!</h1>
            <p className="fox-login-welcome"> Please log in to your account.</p>
          </CCol>
        </CRow>
        <CRow className="mt-2 mb-2">
          <CCol className="mx-auto">
            <CForm
              onSubmit={this.handleSubmit}
            >
              <DjangoCSRFToken />
              <CFormGroup>
                <CInputGroup>
                  <CInputGroupPrepend>
                    <CInputGroupText invalid className={`fox-input-before${this.props.loginError ? "-invalid" : ""}`}>
                      <CIcon name="cilUser" />
                    </CInputGroupText>
                  </CInputGroupPrepend>
                  <CInput
                    id="username"
                    name='username'
                    placeholder="Username"
                    value={username}
                    onChange={this.handleChange}
                    invalid={this.props.loginError}
                    required />
                  <CInputGroupAppend>
                    <CInputGroupText className={`fox-input-after${this.props.loginError ? "-invalid" : ""}`}>
                      <CIcon name="blank" />
                    </CInputGroupText>
                  </CInputGroupAppend>
                </CInputGroup>
              </CFormGroup>
              {show_password ?
                <CFormGroup>
                  <CInputGroup>
                    <CInputGroupPrepend>
                      <CInputGroupText className={`fox-input-before${this.props.loginError ? "-invalid" : ""}`}>
                        <CIcon name="cilLockLocked" />
                      </CInputGroupText>
                    </CInputGroupPrepend>
                    <CInput
                      id="password"
                      name="password"
                      placeholder="Password"
                      value={password}
                      onChange={this.handleChange}
                      invalid={this.props.loginError}
                      required
                    />
                    <CInputGroupAppend>
                      <CInputGroupText onClick={this.toggleShowPassword} className={`fox-input-after${this.props.loginError ? "-invalid" : ""}`}>
                        <CIcon name="cilLowVision" />
                      </CInputGroupText>
                    </CInputGroupAppend>
                  </CInputGroup>
                </CFormGroup>
                :
                <CFormGroup>
                  <CInputGroup>
                    <CInputGroupPrepend>
                      <CInputGroupText className={`fox-input-before${this.props.loginError ? "-invalid" : ""}`}>
                        <CIcon name="cilLockLocked" />
                      </CInputGroupText>
                    </CInputGroupPrepend>
                    <CInput
                      type="password"
                      id="password"
                      name="password"
                      placeholder="Password"
                      value={password}
                      onChange={this.handleChange}
                      invalid={this.props.loginError}
                      required
                    />
                    <CInputGroupAppend>
                      <CInputGroupText onClick={this.toggleShowPassword} className={`fox-input-after${this.props.loginError ? "-invalid" : ""}`}>
                        <CIcon name="cilMagnifyingGlass" />
                      </CInputGroupText>
                    </CInputGroupAppend>
                  </CInputGroup>
                </CFormGroup>}
              {this.props.loginError
                ? <p className={"fox-form-invalid-feedback"}>The username or password you have entered is invalid.
                Please try again.</p>
                : null
              }
              <CFormGroup>
                <CButton shape="pill" type="submit" value="Submit" color="dark" block >Login</CButton>
              </CFormGroup>
            </CForm>
            <CButton type="link" size="sm" className="align-self-center">Forgot password?</CButton>
          </CCol>
        </CRow>
      </CContainer >
    )
  }
}

const mapStateToProps = state => {
  return {
    currentUser: state.currentUser,
    loginError: state.loginError
  }
}

const mapDispatchToProps = dispatch => ({
  userLoginFetch: userInfo => dispatch(userLoginFetch(userInfo))
})

export default connect(mapStateToProps, mapDispatchToProps)(FoxLoginForm)