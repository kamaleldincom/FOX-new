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
  CInputFile
} from "@coreui/react";
import DjangoCSRFToken from 'django-react-csrftoken'
import { FoxApiService } from '../../../services'

const foxApi = new FoxApiService();

class WorkerCreate extends Component {

  state = {
    name: "",
    contractor: this.props.contractor,
    birthday: "",
    card_number_id: "",
    license_number: "",
    license_scan: "",
    passport: "",
    passport_scan: "",
    safety_green_card: "",
    safety_green_card_scan: "",
    position_in_company: "",
    safety_quiz_answer: "",
    personal_declaration: "",
    special_competency: "",
    special_competency_scan: "",
    registration_number: "",
    error: false
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleFileUpload = event => {
    this.setState({
      [event.target.name]: event.target.files[0]
    });
  }

  handleSubmit = async event => {
    event.preventDefault();
    this.requestData = this.state;
    delete this.requestData.error;
    this.formData = new FormData
    Object.entries(this.requestData).forEach(([key, value]) => {
      this.formData.append(key, value);
    })
    await foxApi.createEntityWithFile('workers', this.formData)
      .then(() => {
        this.props.history.goBack()
      },
        (error) => {
          console.error(error);
          this.setState({
            error: 'Worker creation failed!' +
              ' Please check your input and try again!' +
              ' In case this problem repeats, please contact your administrator!'
          })
        })
  }

  componentDidMount = async () => {
    await this.props.getProfileFetch()
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
              <CLabel htmlFor="name">Name</CLabel>
              <CInput
                id="name"
                name='name'
                placeholder="Enter worker name"
                value={this.state.name}
                onChange={this.handleChange}
                required />
            </CFormGroup>
            <CFormGroup>
              <CLabel htmlFor="birthday">Birthday</CLabel>
              <CInput
                type="date"
                id="birthday"
                name="birthday"
                value={this.state.birthday}
                onChange={this.handleChange}
                required
              />
            </CFormGroup>
            <CFormGroup>
              <CLabel htmlFor="card_number_id">Card number ID</CLabel>
              <CInput
                id="card_number_id"
                name='card_number_id'
                placeholder="Enter ID"
                value={this.state.card_number_id}
                onChange={this.handleChange}
                required />
            </CFormGroup>
            <CFormGroup>
              <CLabel htmlFor="license_number">License Number</CLabel>
              <CInput
                id="license_number"
                name='license_number'
                placeholder="Enter worker name"
                value={this.state.license_number}
                onChange={this.handleChange}
                required />
              <CLabel htmlFor="license_scan">License scan</CLabel>
              <CInputFile id="license_scan" name="license_scan" onChange={this.handleFileUpload}
                required />
            </CFormGroup>
            <CFormGroup>
              <CLabel htmlFor="passport">Passport</CLabel>
              <CInput
                id="passport"
                name='passport'
                placeholder="Enter passport info"
                value={this.state.passport}
                onChange={this.handleChange}
                required />
              <CLabel htmlFor="passport_scan">Passport scan</CLabel>
              <CInputFile id="passport_scan" name="passport_scan" onChange={this.handleFileUpload}
                required />
            </CFormGroup>
            <CFormGroup>
              <CLabel htmlFor="safety_green_card">Safety Green Card</CLabel>
              <CInput
                id="safety_green_card"
                name='safety_green_card'
                placeholder="Enter card info"
                value={this.state.safety_green_card}
                onChange={this.handleChange}
                required />
              <CLabel htmlFor="safety_green_card_scan">Safety green card scan</CLabel>
              <CInputFile id="safety_green_card_scan" name="safety_green_card_scan" onChange={this.handleFileUpload}
                required />
            </CFormGroup>
            <CFormGroup>
              <CLabel htmlFor="special_competency">Special competency</CLabel>
              <CInput
                id="special_competency"
                name='special_competency'
                placeholder="Enter competency"
                value={this.state.special_competency}
                onChange={this.handleChange}
                required />
              <CLabel htmlFor="special_competency_scan">Special competency scan</CLabel>
              <CInputFile id="special_competency_scan" name="special_competency_scan" onChange={this.handleFileUpload}
                required />
            </CFormGroup>
            <CFormGroup>
              <CLabel htmlFor="competency_issued_by">Competency issued by</CLabel>
              <CInput
                id="competency_issued_by"
                name='competency_issued_by'
                placeholder="Enter legal entity"
                value={this.state.competency_issued_by}
                onChange={this.handleChange}
                required />
            </CFormGroup>
            <CFormGroup>
              <CLabel htmlFor="registration_number">Registration number</CLabel>
              <CInput
                id="registration_number"
                name='registration_number'
                placeholder="Enter registration number"
                value={this.state.registration_number}
                onChange={this.handleChange}
                required />
            </CFormGroup>
            <CFormGroup>
              <CLabel htmlFor="position_in_company">Position in Company</CLabel>
              <CInput
                id="position_in_company"
                name='position_in_company'
                placeholder="Enter worker position"
                value={this.state.position_in_company}
                onChange={this.handleChange}
                required />
            </CFormGroup>
            <CFormGroup>
              <CLabel htmlFor="safety_quiz_answer">Safety quiz answer</CLabel>
              <CInputFile id="safety_quiz_answer" name="safety_quiz_answer" onChange={this.handleFileUpload}
                required />
            </CFormGroup>
            <CFormGroup>
              <CLabel htmlFor="personal_declaration">Personal declaration</CLabel>
              <CInputFile id="personal_declaration" name="personal_declaration" onChange={this.handleFileUpload}
                required />
            </CFormGroup>


            <CFormGroup>
              <CButton type="submit" color="dark" variant="outline" block>Create Worker</CButton>
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
    contractor: state.currentUser.id,
  }
}

const mapDispatchToProps = dispatch => ({
  getProfileFetch: () => dispatch(getProfileFetch()),
})

export default connect(mapStateToProps, mapDispatchToProps)(WorkerCreate)
