import React, { Component } from 'react'
import { getProfileFetch, getDocumentList, setProjectId } from '../../../actions'
import { connect } from 'react-redux'
import {
  CForm,
  CFormGroup,
  CLabel, CRow,
  CCol,
  CLink,
  CButton,
  CInputFile
} from "@coreui/react";
import DjangoCSRFToken from 'django-react-csrftoken'
import { FoxApiService } from '../../../services'
import FoxProjectDocumentDownLoadUploadFormGroup from '../../forms/FoxProjectDocumentDownloadUploadFormGroup';

const foxApi = new FoxApiService();

class ProjectUploadDocs extends Component {

  state = {
    filename: "",
    file_id: "",
    project: this.props.match.params.id,
    url_to_doc: "",
    upload_files: {},
    error: false,
  }

  downloadFile = async (e) => {
    this.setState({
      filename: e.target.value,
      file_id: e.target.name
    }, () => {
      foxApi.downloadDocument(this.state.file_id)
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
        .catch((error) => {
          console.error('File download failed!');
          console.error(error)
        })
    })
  }

  handleFileUpload = event => {
    const { upload_files } = this.state;
    upload_files[event.target.name] = event.target.files[0];
    this.setState({
      upload_files: upload_files
    });
  }

  handleSubmit = async event => {
    event.preventDefault();
    const { upload_files } = this.state;

    Object.entries(upload_files).forEach(([key, value]) => {

      const uploadFilesData = new FormData();
      uploadFilesData.append('file', value);
      upload_files[key] = uploadFilesData
    })

    await Promise.all([
      Object.entries(upload_files).forEach(([key, value]) => {
        foxApi.patchEntityWithFiles("documents", key, value);
      })
    ])
      .then(() => {
        this.props.history.goBack()
      })
      .catch((error) => {
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
      .then(() => this.props.getDocumentList({
        target_type: "Contractor",
        project_id: this.props.match.params.id
      }, false))
  }

  render = () => {
    let documentWidgetArray = []

    if (this.props.documents) {
      documentWidgetArray = this.props.documents.map((document) => {
        return (
          <FoxProjectDocumentDownLoadUploadFormGroup
            document={document}
            handleFileUpload={this.handleFileUpload}
            downloadFile={this.downloadFile}
          />
        )
      })
    }

    return (
      <CRow>
        <CCol>
          <CForm
            onSubmit={this.handleSubmit}
          >
            <DjangoCSRFToken />
            {documentWidgetArray}
            <CFormGroup>
              <CButton type="submit" color="dark" variant="outline" block>Submit documents</CButton>
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
    documents: state.entityListTable.tableData
  }
}

const mapDispatchToProps = dispatch => ({
  getProfileFetch: () => dispatch(getProfileFetch()),
  getDocumentList: (params, additional) => dispatch(getDocumentList(params, additional)),
  setProjectId: (id) => dispatch(setProjectId(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(ProjectUploadDocs)
