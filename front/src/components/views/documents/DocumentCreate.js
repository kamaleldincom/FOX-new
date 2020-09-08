import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import {
  CForm,
  CFormGroup,
  CInput,
  CLabel,
  CRow,
  CCol,
  CSelect,
  CButton,
  CInputFile,
} from "@coreui/react";
import DjangoCSRFToken from 'django-react-csrftoken';
import { FoxApiService } from '../../../services';
import { getProfileFetch, } from '../../../actions';


const foxApi = new FoxApiService();

const uploadOptions = [
  { id: 1, name: "URL" },
  { id: 2, name: "File upload" }
]

class DocumentCreate extends Component {

  state = {
    name: "",
    file: "",
    project: this.props.match.params.id,
    url_to_doc: "",
    upload_option: 1,
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
    delete this.requestData.upload_option;
    this.formData = new FormData
    Object.entries(this.requestData).forEach(([key, value]) => {
      this.formData.append(key, value);
    })
    await foxApi.createEntityWithFile('documents', this.formData)
      .then(() => {
        this.props.history.push(`/projects/${this.props.match.params.id}/documents`)
      },
        (error) => {
          console.error(error);
          this.setState({
            error: 'Document creation failed!' +
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
                placeholder="Enter document name"
                value={this.state.name}
                onChange={this.handleChange}
                required />
            </CFormGroup>
            <CFormGroup>
              <CLabel htmlFor="upload_option">File upload option</CLabel>
              <CSelect
                id="upload_option"
                name="upload_option"
                placeholder="Choose contractor"
                value={this.state.upload_option}
                onChange={this.handleChange}
                required
              >
                {uploadOptions.map((option) => {
                  return (
                    <option key={option.id} value={option.id}>{option.name}</option>
                  )
                })
                }
              </CSelect>
            </CFormGroup>

            {this.state.upload_option == 1 ?
              <CFormGroup>
                <CLabel htmlFor="url_to_doc">Url to document</CLabel>
                <CInput
                  type="url"
                  id="url_to_doc"
                  name="url_to_doc"
                  placeholder="https://example.com"
                  pattern="https://.*"
                  value={this.state.url_to_doc}
                  onChange={this.handleChange}
                  required />
              </CFormGroup>
              : <CFormGroup>
                <CLabel htmlFor="file">File</CLabel>
                <CInputFile id="file" name="file" onChange={this.handleFileUpload}
                  required />
              </CFormGroup>
            }
            <CFormGroup>
              <CButton type="submit" color="dark" variant="outline" block>Create Document</CButton>
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
  getProfileFetch: () => dispatch(getProfileFetch()),
})

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(DocumentCreate))
