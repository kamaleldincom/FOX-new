import React, { Component, Suspense } from 'react'
import { connect } from 'react-redux'
import { FoxApiService } from '../services'
import { getProfileFetch } from '../actions'
import {
  CButton,
  CListGroup,
  CListGroupItem,
} from "@coreui/react";

const foxApi = new FoxApiService();

class CompetencyReview extends Component {

  state = {
    name: "",
    file: "",
    issued_by: "",
  }

  downloadFile = async () => {
    foxApi.downloadWorkerCompetency(this.props.competencyId)
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
      }
      )
  }

  componentDidMount = async () => {
    await this.props.getProfileFetch()
      .then(() => foxApi.getDetailsOf('worker_special_competencies', this.props.competencyId))
      .then((data) => this.setState(
        { ...data }))
      .catch(error => console.log(error))
  }

  render = () => {
    return (
      <CListGroup flush>
        <CListGroupItem>
          <p><strong>Competency scan: </strong></p>
          <CButton
            variant="outline"
            color="success"
            id="file"
            onClick={this.downloadFile}
          >Download</CButton>
        </CListGroupItem>
        <CListGroupItem>
          <p><strong>Issued_by: </strong>{this.state.issued_by}</p>
        </CListGroupItem>
      </CListGroup>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  getProfileFetch: () => dispatch(getProfileFetch()),
})

export default connect(null, mapDispatchToProps)(CompetencyReview)

