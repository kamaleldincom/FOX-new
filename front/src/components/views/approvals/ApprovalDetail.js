import React, { Component } from 'react'
import { getProfileFetch, getDocumentList } from '../../../actions'
import { connect } from 'react-redux'
import {
  CForm,
  CFormGroup,
  CLabel,
  CRow,
  CCol,
  CTextarea,
  CLink,
  CButton,
  CEmbed,
  CCard,
  CCardBody,
  CCardHeader

} from "@coreui/react";
import DjangoCSRFToken from 'django-react-csrftoken'
import { FoxApiService } from '../../../services'

const foxApi = new FoxApiService();

class ProjectDetail extends Component {

  state = {
    description: "",
    created: "",
    last_resolved: "",
    status: "",
    project: "",
    manager: "",
    error: "",
    filename: "",
    file_id: ""
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleSubmit = async event => {
    event.preventDefault();
    if (this.state.status === "Rejected" && !this.state.description) {
      this.setState({
        error: 'Rejections reason was not provided! Please, specify the rejection reason!'
      })
    } else {
      this.formData = this.state;
      delete this.formData.error;
      delete this.formData.created;
      delete this.formData.last_resolved;
      await foxApi.patchEntityOf('approvals', this.props.match.params.id, this.formData)
        .then(() => {
          this.props.history.goBack()
        })
        .catch((error) => {
          console.error(error);
          this.setState({
            error: 'Project update failed!' +
              ' Please check your input and try again!' +
              ' In case this problem repeats, please contact your administrator!'
          })
        })
    }
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

  componentDidMount = async () => {
    await this.props.getProfileFetch()
      .then(() => foxApi.getDetailsOf('approvals', this.props.match.params.id))
      .then((data) => this.setState(
        { ...data }, () => {
          this.props.getDocumentList({ project_id: this.state.project }, true)
        }
      ))
    // .then(() => this.props.setProjectId(this.props.match.params.id))
  }

  render = () => {
    return (
      <CRow>
        <CCol>
          <CCard>
            <CCardHeader>
              Attached Documents
						</CCardHeader>
            <CCardBody>
              {this.props.documents
                ?
                this.props.documents.map((document, idx) => {
                  return (
                    <React.Fragment key={idx}>
                      <h6>
                        {document.name}
                      </h6>
                      {document.url_to_doc ?
                        <CLink
                          key={`dl-${document.id}`}
                          href={document.url_to_doc}
                          target="_blank"
                          className="btn btn-ghost-primary"
                        >
                          Open this document in Google Docs
            						</CLink>
                        :
                        <React.Fragment>
                          <CButton
                            variant="outline"
                            color="primary"
                            key={`cb-${document.id}`}
                            id={document.id}
                            name={document.id}
                            value={document.filename}
                            onClick={this.downloadFile}
                          >
                            Download document
              						</CButton>
                        </React.Fragment>
                      }
                    </React.Fragment>
                  )
                })
                :
                null}
            </CCardBody>
          </CCard>
          <CCard>
            <CCardBody>
              <CForm onSubmit={this.handleSubmit}>
                <DjangoCSRFToken />
                <CFormGroup>
                  <CLabel htmlFor="description">Reject reason:</CLabel>
                  <CTextarea
                    id="description"
                    name="description"
                    value={this.state.description ? this.state.description : ""}
                    onChange={this.handleChange}
                  >
                  </CTextarea>
                </CFormGroup>
                <CFormGroup>
                  <CButton
                    className="mr-3"
                    type="submit"
                    name="status"
                    value="Approved"
                    color="success"
                    variant="outline"
                    onClick={this.handleChange}
                  >
                    Approve
										</CButton>
                  <CButton
                    type="submit"
                    name="status"
                    value="Rejected"
                    color="danger"
                    variant="outline"
                    onClick={this.handleChange}
                  >
                    Reject
									</CButton>
                </CFormGroup>
                {this.state.error
                  ? <p>{this.state.error}</p>
                  : null
                }
              </CForm>
            </CCardBody>
          </CCard>
        </CCol>
      </CRow >
    )
  }
}

const mapStateToProps = state => {
  return {
    documents: state.additionalEntityListTable.tableData
  }
}

const mapDispatchToProps = dispatch => ({
  getProfileFetch: () => dispatch(getProfileFetch()),
  getDocumentList: (params, additional) => dispatch(getDocumentList(params, additional)),
})

export default connect(mapStateToProps, mapDispatchToProps)(ProjectDetail)
