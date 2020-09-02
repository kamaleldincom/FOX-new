import React, { Component } from 'react'
import { getProfileFetch } from '../../../actions'
import { connect } from 'react-redux'
import {
  CForm,
  CFormGroup,
  CInput,
  CLabel, CRow,
  CCol,
  CButton,
  CSelect
} from "@coreui/react";
import DjangoCSRFToken from 'django-react-csrftoken'
import { FoxApiService } from '../../../services'

const positions = [
  { id: -1, position: "Choose manager position" },
  { id: "SafeMan", position: "Safety Manager" },
  { id: "SecMan", position: "Security Manager" },
  { id: "SecOff", position: "Security Officer" },
  { id: "SiteOwn", position: "Site Owner" },
  { id: "WorkOwn", position: "Owner of Work" },
  { id: "SecGrd", position: "Security Guards" }
]

const foxApi = new FoxApiService();

class ClientManagerCreate extends Component {

  state = {
    username: "",
    name: "",
    email: "",
    position: -1,
    department: "",
    company: this.props.company,
    role: "CliMan",
    error: false
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleSubmit = async event => {
    event.preventDefault();
    if (parseInt(this.state.position) === -1) {
      this.setState({
        error: 'Client manager position was not selected! Please, choose position form the list'
      })
    } else {
      this.formData = this.state;
      delete this.formData.error;
      await foxApi.createEntityOf('client_managers', this.formData).then(() => {
        this.props.history.goBack()
      },
        (error) => {
          console.error(error);
          this.setState({
            error: 'Client manager creation failed!' +
              ' Please check your input and try again!' +
              ' In case this problem repeats, please contact your administrator!'
          })
        })
    }

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
              <CLabel htmlFor="username">Enter client manager username. This will be used for login</CLabel>
              <CInput
                id="username"
                name='username'
                placeholder="Username"
                value={this.state.username}
                onChange={this.handleChange}
                required />
            </CFormGroup>
            <CFormGroup>
              <CLabel htmlFor="name">Enter client manager verbose name</CLabel>
              <CInput
                id="name"
                name='name'
                placeholder="Verbose name"
                value={this.state.name}
                onChange={this.handleChange}
                required />
            </CFormGroup>
            <CFormGroup>
              <CLabel htmlFor="email">Enter client manager email</CLabel>
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
              <CLabel htmlFor="target_type">Client Manager Position</CLabel>
              <CSelect
                id="position"
                name="position"
                placeholder="Choose position"
                value={this.state.position}
                onChange={this.handleChange}
                required
              >
                {positions.map((option) => {
                  return (
                    <option key={option.id} value={option.id}>{option.position}</option>
                  )
                }
                )}
              </CSelect>
            </CFormGroup>
            <CFormGroup>
              <CLabel htmlFor="department">Enter client manager department</CLabel>
              <CInput
                id="department"
                name="department"
                placeholder="Department"
                value={this.state.department}
                onChange={this.handleChange}
                required />
            </CFormGroup>
            <CFormGroup>
              <CButton type="submit" color="dark" variant="outline" block>Create client manager</CButton>
            </CFormGroup>
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

export default connect(mapStateToProps, mapDispatchToProps)(ClientManagerCreate)

