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

class WorkerDetail extends Component {

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
    error: false,
    filename: "",
    doc_type: "",
    upload_files: {}
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleFileUpload = event => {
    this.setState({
      upload_files: { [event.target.name]: event.target.files[0] },
      [event.target.name]: ""
    }, () => console.log(this.state));
  }

  handleSubmit = async event => {
    event.preventDefault();
    this.requestData = this.state;
    const { upload_files } = this.requestData
    delete this.requestData.upload_files
    delete this.requestData.error;
    delete this.requestData.filename;
    delete this.requestData.doc_type;
    delete this.requestData.license_scan;
    delete this.requestData.passport_scan;
    delete this.requestData.safety_green_card_scan;
    delete this.requestData.special_competency_scan;
    delete this.requestData.safety_quiz_answer;
    delete this.requestData.personal_declaration;
    this.formData = new FormData
    Object.entries(this.requestData).forEach(([key, value]) => {
      this.formData.append(key, value);
    })

    upload_files ? Object.entries(upload_files).forEach(([key, value]) => {
      this.formData.append(key, value)
    }) : null
    this.formData.entries().forEach(([key, value]) => console.log(key, value))
    await foxApi.patchEntityWithFiles('workers', this.props.match.params.id, this.formData)
      .then(() => {
        this.props.history.goBack()
      },
        (error) => {
          console.error(error);
          this.setState({
            error: 'Worker update failed!' +
              ' Please check your input and try again!' +
              ' In case this problem repeats, please contact your administrator!'
          })
        })
  }

  downloadFile = async (e) => {
    this.setState({
      filename: e.target.value,
      doc_type: e.target.name
    }
      , () => {
        foxApi.downloadWorkerDocument(this.props.match.params.id, this.state.doc_type)
          .then((blob) => {
            const url = window.URL.createObjectURL(new Blob([blob]));
            const link = document.createElement('a');
            link.href = url;
            const filename = this.state.filename.split('/').pop();
            link.setAttribute('download', filename);
            document.body.appendChild(link);
            link.click();
            link.parentNode.removeChild(link);
          })
          .then(() => { console.log('file downloaded') })
          .catch((error) => {
            console.error('File download failed!');
            console.error(error)
          })
      }
    )
  }

  componentDidMount = async () => {
    await this.props.getProfileFetch()
      .then(() => foxApi.getDetailsOf('workers', this.props.match.params.id))
      .then((data) => this.setState({ ...data }))
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
              <CButton
                variant="outline"
                color="success"
                id="license_scan"
                name="license_scan"
                value={this.state.license_scan}
                onClick={this.downloadFile}
              >
                Download
      				</CButton>
              <CLabel htmlFor="license_scan">Upload new file</CLabel>
              <CInputFile id="license_scan" name="license_scan" onChange={this.handleFileUpload}
              />
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
              <CButton
                variant="outline"
                color="success"
                id="passport_scan"
                name="passport_scan"
                value={this.state.passport_scan}
                onClick={this.downloadFile}
              >
                Download
      				</CButton>
              <CLabel htmlFor="license_scan">Upload new file</CLabel>
              <CInputFile id="passport_scan" name="passport_scan" onChange={this.handleFileUpload}
              />
            </CFormGroup>
            <CFormGroup>
              <CLabel htmlFor="safety_green_card">Safety Green Card</CLabel>
              <CInput
                id="safety_green_card"
                name='safety_green_card'
                placeholder="Enter card info"
                value={this.state.safety_green_card}
                onChange={this.handleChange}
              />
              <CLabel htmlFor="safety_green_card_scan">Safety green card scan</CLabel>
              <CButton
                variant="outline"
                color="success"
                id="safety_green_card_scan"
                name="safety_green_card_scan"
                value={this.state.safety_green_card_scan}
                onClick={this.downloadFile}
              >
                Download
      				</CButton>
              <CLabel htmlFor="license_scan">Upload new file</CLabel>
              <CInputFile id="safety_green_card_scan" name="safety_green_card_scan" onChange={this.handleFileUpload}
              />
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
              <CButton
                variant="outline"
                color="success"
                id="special_competency_scan"
                name="special_competency_scan"
                value={this.state.special_competency_scan}
                onClick={this.downloadFile}
              >
                Download
      				</CButton>
              <CLabel htmlFor="license_scan">Upload new file</CLabel>
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
              <CLabel htmlFor="position_in_company">Position in Company</CLabel>
              <CInput
                id="position_in_company"
                name='position_in_company'
                placeholder="Enter worker position"
                value={this.state.position_in_company}
                onChange={this.handleChange}
              />
            </CFormGroup>
            <CFormGroup>
              <CLabel htmlFor="safety_quiz_answer">Safety quiz answer</CLabel>
              <CButton
                variant="outline"
                color="success"
                id="safety_quiz_answer"
                name="safety_quiz_answer"
                value={this.state.safety_quiz_answer}
                onClick={this.downloadFile}
              >
                Download
      				</CButton>
              <CLabel htmlFor="license_scan">Upload new file</CLabel>
              <CInputFile id="safety_quiz_answer" name="safety_quiz_answer" onChange={this.handleFileUpload}
              />
            </CFormGroup>
            <CFormGroup>
              <CLabel htmlFor="personal_declaration">Personal declaration</CLabel>
              <CButton
                variant="outline"
                color="success"
                id="personal_declaration"
                name="personal_declaration"
                value={this.state.personal_declaration}
                onClick={this.downloadFile}
              >
                Download
      				</CButton>
              <CLabel htmlFor="license_scan">Upload new file</CLabel>
              <CInputFile id="personal_declaration" name="personal_declaration" onChange={this.handleFileUpload}
              />
            </CFormGroup>


            <CFormGroup>
              <CButton type="submit" color="dark" variant="outline" block>Save changes</CButton>
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

export default connect(mapStateToProps, mapDispatchToProps)(WorkerDetail)