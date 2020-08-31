import React, { Component } from 'react'
import { getProfileFetch, getWorkerList, getDocumentList, setProjectId } from '../../../actions'
import { connect } from 'react-redux'
import {
  CForm,
  CFormGroup,
  CLabel,
  CRow,
  CCol,
  CButton,
  CInputCheckbox,
  CInputFile
} from "@coreui/react";
import DjangoCSRFToken from 'django-react-csrftoken'
import { FoxApiService } from '../../../services'

const foxApi = new FoxApiService();

class WorkerAssign extends Component {

  state = {
    workers: [],
    error: false,
    filename: "",
    file_id: "",
    upload_files: {}
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
        .then(() => { console.log('file downloaded') })
        .catch((error) => {
          console.error('File download failed!');
          console.error(error)
        })
    })
  }


  handleCheck = event => {
    const { workers } = this.state
    event.target.checked ?
      workers.push(event.target.value)
      :
      workers.splice(workers.indexOf(event.target.value), 1);
    this.setState({
      workers: workers
    }, () => console.log(this.state));
  }

  handleFileUpload = event => {
    // const [worker, template] = event.target.name.split('-')
    const { upload_files } = this.state;
    upload_files[event.target.name] = event.target.files[0];
    this.setState({
      upload_files: upload_files
    }, console.log(this.state));
  }

  handleSubmit = async event => {
    event.preventDefault();
    const { workers, upload_files } = this.state;
    const workersData = { workers: workers };
    const uploadFileList = [];

    Object.entries(upload_files).forEach(([key, value]) => {
      const uploadFilesData = new FormData();
      const [worker, template] = key.split('-');
      uploadFilesData.append('worker', worker);
      uploadFilesData.append('template', template);
      uploadFilesData.append('file', value);
      uploadFileList.push(uploadFilesData);
    })
    await Promise.all([
      foxApi.patchEntityOf("projects", this.props.match.params.id, workersData),
      uploadFileList.forEach(file => foxApi.createEntityWithFile("worker_documents", file)),
    ])
      .then(() => {
        this.props.history.goBack()
      },
        (error) => {
          console.error(error);
          this.setState({
            error: 'Workers assignment failed!' +
              ' Please check your input and try again!' +
              ' In case this problem repeats, please contact your administrator!'
          })
        })
  }

  componentDidMount = async () => {
    await this.props.getProfileFetch()
      .then(() => this.props.getWorkerList())
      .then(() => this.props.getDocumentList(
        {
          target_type: "Worker",
          project_id: this.props.match.params.id
        },
        true))
      .then(() => this.props.setProjectId(this.props.match.params.id))
  }

  render = () => {
    let downloadButtonArray = {};
    let workerList = {}
    if (this.props.documents) {
      downloadButtonArray = this.props.documents.map((document) => {
        return (
          <CFormGroup key={`fg-${document.id}`} className="d-flex">
            <CButton
              variant="outline"
              color="success"
              key={`cb-${document.id}`}
              id={document.id}
              name={document.id}
              value={document.filename}
              onClick={this.downloadFile}
            >
              Download
      </CButton>
            <CLabel key={`lb-${document.id}`} htmlFor={document.id}>{document.name}</CLabel>
          </CFormGroup>
        )
      })
      workerList = this.props.workers.map((worker) => {
        return (
          <CFormGroup key={`fg-${worker.id}`} variant="checkbox" className="checkbox d-flex">
            <CInputCheckbox
              key={`cb-${worker.id}`}
              id={worker.id}
              name={worker.id}
              value={worker.id}
              onChange={this.handleCheck}
            />
            <CLabel key={`lb-${worker.id}`} variant="checkbox" className="form-check-label mr-4" htmlFor={worker.id}>{worker.name}</CLabel>
            {this.props.documents.map((document) => {
              return (
                <React.Fragment key={`fr-${worker.id}`}>
                  <CLabel key={`lb-${worker.id}-${document.id}`}
                    htmlFor={`file-${document.id}`}
                  >
                    {document.name}
                  </CLabel>
                  <CInputFile key={`of-${worker.id}-${document.id}`}
                    id={`file-${document.id}`}
                    name={`${worker.id}-${document.id}`}
                    onChange={this.handleFileUpload}
                  />

                </React.Fragment>

              )
            })}
          </CFormGroup>
        )
      })
    } else {
      downloadButtonArray = null;
      workerList = null
    }
    return (
      <CRow>
        <CCol>
          <CForm onSubmit={this.handleSubmit}>
            <DjangoCSRFToken />
            <CFormGroup>
              {downloadButtonArray}
            </CFormGroup>
            <CFormGroup>
              {workerList}
            </CFormGroup>

            <CFormGroup>
              <CButton type="submit" color="success" variant="outline" block>Save changes</CButton>
            </CFormGroup>
            {this.state.error
              ? <p>{this.state.error}</p>
              : null
            }
          </CForm>
        </CCol >
      </CRow >
    )
  }
}

const mapStateToProps = state => {
  return {
    workers: state.entityListTable.tableData,
    company: state.currentUser.company,
    role: state.currentUser.role,
    contractor: state.currentUser.id,
    documents: state.additionalEntityListTable.tableData
  }
}

const mapDispatchToProps = dispatch => ({
  getProfileFetch: () => dispatch(getProfileFetch()),
  getWorkerList: () => dispatch(getWorkerList()),
  getDocumentList: (params, additional) => dispatch(getDocumentList(params, additional)),
  setProjectId: (id) => dispatch(setProjectId(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(WorkerAssign)
