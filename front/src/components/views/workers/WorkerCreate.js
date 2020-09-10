import React, { Component } from 'react'
import DjangoCSRFToken from 'django-react-csrftoken'
import { connect } from 'react-redux'
import {
  CForm,
  CFormGroup,
  CInput,
  CLabel,
  CRow,
  CCol,
  CButton,
  CInputFile
} from "@coreui/react";
import { getProfileFetch } from '../../../actions'
import { FoxApiService } from '../../../services'
import { FoxFormGroupWithUpload, FoxSelectFormGroup, FoxReactSelectFormGroup } from '../../forms'

const foxApi = new FoxApiService();


const positions = [
  { value: -1, label: "Choose worker position" },
  { value: "Weld", label: "Welder" },
  { value: "Fit", label: "Fitter" },
  { value: "Help", label: "Helper" },
  { value: "Rig", label: "Rigger" },
  { value: "SafeOff", label: "Safety Officer" },
  { value: "Plumb", label: "Plumber" },
  { value: "Tech", label: "Technician" },
  { value: "Electr", label: "Electrician" },
  { value: "FlrInst", label: "Flooring Installer" },
  { value: "HVACInst", label: "HVAC Installer" },
  { value: "InsInst", label: "Insulation Installer" },
  { value: "Surv", label: "Surveyor" },
  { value: "BrcMans", label: "Brick Manson" },
  { value: "Roof", label: "Roofer" },
  { value: "SiteSuper", label: "Site Supervisor" },
  { value: "Other", label: "Other" }
]

const tradeCompetencies = [
  { id: -1, position: "Choose trade competency" },
  { id: "Civ", position: "Civil" },
  { id: "Electr", position: "Electrical" },
  { id: "Mech", position: "Mechanical" },
  { id: "Infra", position: "Infra" },
  { id: "Gen", position: "General" },
  { id: "Safe", position: "Safety" },
  { id: "Secur", position: "Security" },
]

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
    position_in_company: -1,
    safety_quiz_answer: "",
    personal_declaration: "",
    special_competency: "",
    special_competency_scan: "",
    registration_number: "",
    trade_competency: -1,
    error: false
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    }, () => console.log(this.state));
  }

  handleReactSelect = (option, event) => {
    this.setState({
      [event.name]: option.value
    }, () => console.log(this.state))
  }

  handleFileUpload = event => {
    this.setState({
      [event.target.name]: event.target.files[0]
    });
  }

  handleSubmit = async event => {
    event.preventDefault();
    if (this.state.position_in_company === -1) {
      this.setState({
        error: 'Worker position in company was not selected! Please, choose position form the list'
      })
    }
    else if (this.state.trade_competency === -1) {
      this.setState({
        error: 'Trade competency was not selected! Please, choose competency form the list'
      })
    }
    else {
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
            <FoxReactSelectFormGroup
              options={positions}
              inputInfo="position_in_company"
              inputValue={this.state.position_in_company}
              handleChange={this.handleReactSelect}
            />
            <FoxSelectFormGroup
              options={tradeCompetencies}
              inputInfo="trade_competency"
              inputValue={this.state.trade_competency}
              handleChange={this.handleChange}
            />
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
            <FoxFormGroupWithUpload
              inputValue={this.state.license_number}
              handleChange={this.handleChange}
              handleFileUpload={this.handleFileUpload}
              inputInfo="license_number"
              uploadInfo="license_scan"
            />
            <FoxFormGroupWithUpload
              inputValue={this.state.passport}
              handleChange={this.handleChange}
              handleFileUpload={this.handleFileUpload}
              inputInfo="passport"
              uploadInfo="passport_scan"
            />
            <FoxFormGroupWithUpload
              inputValue={this.state.safety_green_card}
              handleChange={this.handleChange}
              handleFileUpload={this.handleFileUpload}
              inputInfo="safety_green_card"
              uploadInfo="safety_green_card_scan"
            />
            <FoxFormGroupWithUpload
              inputValue={this.state.special_competency}
              handleChange={this.handleChange}
              handleFileUpload={this.handleFileUpload}
              inputInfo="special_competency"
              uploadInfo="special_competency_scan"
            />
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
