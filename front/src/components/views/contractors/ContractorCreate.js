import React, { Component } from 'react'
import { getProfileFetch } from '../../../actions'
import { connect } from 'react-redux'
import {
  CForm,
  CFormGroup,
  CInput,
  CLabel, CRow,
  CCol,
  CButton
} from "@coreui/react";
import DjangoCSRFToken from 'django-react-csrftoken'
import { FoxApiService } from '../../../services'

const foxApi = new FoxApiService();

class ContractorCreate extends Component {

  state = {
    username: "",
    email: "",
    company: this.props.company,
    role: "Contr",
    error: false
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
    console.log(this.props);
  }

  handleSubmit = async event => {
    event.preventDefault();
    this.formData = this.state;
    delete this.formData.error;
    await foxApi.createEntityOf('contractors', this.formData).then(() => {
      this.props.history.goBack()
    },
      (error) => {
        console.error(error);
        this.setState({
          error: 'Contractor creation failed!' +
            ' Please check your input and try again!' +
            ' In case this problem repeats, please contact your administrator!'
        })
      })
  }

  componentDidMount = () => {
    this.props.getProfileFetch()
  }

  render = () => {
    return (
      <CRow>
        <CCol>
          <CForm
            onSubmit={this.handleSubmit}
          >
            <DjangoCSRFToken />
            <CFormGroup>
              <CLabel htmlFor="username">Enter contractor username</CLabel>
              <CInput
                id="username"
                name='username'
                placeholder="Username"
                value={this.state.username}
                onChange={this.handleChange}
                required />
            </CFormGroup>
            <CFormGroup>
              <CLabel htmlFor="email">Enter contractor email</CLabel>
              <CInput
                id="email"
                type="email"
                name="email"
                placeholder="Email"
                value={this.state.email}
                onChange={this.handleChange}
                required
              />
            </CFormGroup>
            <CFormGroup>
              <CButton type="submit" color="dark" variant="outline" block>Create contractor</CButton>
            </CFormGroup>
            {this.props.registerErrorFlag
              ? <p>{this.props.errorMessage ? this.props.errorMessage : 'INVALID CREDENTIALS! PLEASE, CHECK YOUR PASSWORD AND PASSWORD CONFIRMATION FIELDS!'}</p>
              : null
            }
            {this.state.error
              ? <p>{this.state.error}</p>
              : null
            }
          </CForm>
        </CCol>
      </CRow >
    )
  }
}

const mapStateToProps = state => {
  return {
    company: state.currentUser.company,
  }
}

const mapDispatchToProps = dispatch => ({
  getProfileFetch: () => dispatch(getProfileFetch())
})

export default connect(mapStateToProps, mapDispatchToProps)(ContractorCreate)

