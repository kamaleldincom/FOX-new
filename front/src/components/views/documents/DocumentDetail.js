import React, { Component } from 'react'
import { getProfileFetch } from '../../../actions'
import { connect } from 'react-redux'
import {
  CForm,
  CFormGroup,
  CInput,
  CLabel, CRow,
  CCol,
  CSelect,
  CButton,
  CInputFile
} from "@coreui/react";
import DjangoCSRFToken from 'django-react-csrftoken'
import { FoxApiService } from '../../../services'

const foxApi = new FoxApiService();

const uploadOptions = [
  { id: 1, name: "URL" },
  { id: 2, name: "File upload" }
]

class DocumentDetail extends Component {

  state = {
    name: "",
    file: "",
    project: this.props.match.params.id,
    url_to_doc: "",
    error: false,
    upload_option: 2
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

  downloadFile = async () => {
    await foxApi.downloadDocument(this.props.match.params.doc_id)
      .then((blob) => {
        const url = window.URL.createObjectURL(new Blob([blob]));
        const link = document.createElement('a');
        link.href = url;
        const filename = this.state.file.split('/').pop();
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

  handleSubmit = async event => {
    event.preventDefault();
    this.requestData = this.state;
    if (this.requestData.upload_option === "1") {
      this.requestData.file = ""
    } else {
      this.requestData.url_to_doc = ""
    }
    delete this.requestData.error;
    delete this.requestData.upload_option;
    this.formData = new FormData
    Object.entries(this.requestData).forEach(([key, value]) => {
      this.formData.append(key, value);
    })
    this.formData.entries().forEach(entry => console.log(entry))
    await foxApi.patchEntityWithFiles('documents', this.props.match.params.doc_id, this.formData).then(() => {
      this.props.history.goBack()
    },
      (error) => {
        console.error(error);
        this.setState({
          error: 'Document update failed!' +
            ' Please check your input and try again!' +
            ' In case this problem repeats, please contact your administrator!'
        })
      })
  }

  componentDidMount = async () => {
    await this.props.getProfileFetch()
      .then(() => foxApi.getDetailsOf('documents', this.props.match.params.doc_id))
      .then((data) => {
        data.url_to_doc ?
          this.setState({
            upload_option: 1,
            ...data
          })
          :
          this.setState({ ...data })
      })
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
              :
              <React.Fragment>
                <CFormGroup>
                  <CButton
                    variant="outline"
                    color="success"
                    onClick={this.downloadFile}
                  >
                    Link to download current file
                  </CButton>
                </CFormGroup>
                <CFormGroup>
                  <CLabel htmlFor="file">Upload new File</CLabel>
                  <CInputFile id="file" name="file" onChange={this.handleFileUpload}
                    required />
                </CFormGroup>
              </React.Fragment>
            }
            <CFormGroup>
              <CButton type="submit" color="dark" variant="outline" block>Update Document</CButton>
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

// const mapStateToProps = state => {
//   return {
//   }
// }

const mapDispatchToProps = dispatch => ({
  getProfileFetch: () => dispatch(getProfileFetch())
})

export default connect(null, mapDispatchToProps)(DocumentDetail)
