import React, { Component, Fragment } from 'react';
import FileViewer from 'react-file-viewer';
import { FoxApiService } from '../services'
import { CSpinner, CCollapse, CButton } from '@coreui/react'

const foxApi = new FoxApiService();

const loading = (
  <div className="pt-3 text-center">
    <CSpinner size="sm" variant="grow" style={{ width: '4rem', height: '4rem' }} />
  </div>
)

class DisplayFile extends Component {

  state = {
    parts: [],
    doc_type: "",
    loaded: false,
    display_show: true
  }

  handleShow = () => {
    this.setState({
      display_show: !this.state.display_show
    });
  }

  getDisplayUrl = () => {
    const parts = this.state.parts;
    const url = `${foxApi.apiBase}documents/display/${parts[0]}/${parts[1]}/${parts[2]}/`;
    return url;
  }

  componentDidMount = () => {
    foxApi.getDisplayPermission(this.props.document.id)
      .then(
        data => {
          this.setState({
            ...data,
            loaded: true,
          })
        }
      )
      .catch(error => {
        console.log(error);
      });
  }
  render = () => {
    console.log(this.state);
    return (
      this.state.loaded ?
        <Fragment>
          <CButton
            block
            color="link"
            className="text-left m-0 p-0 mb-1"
            onClick={this.handleShow}
          >{this.state.display_show ? "Hide preview" : "Show preview"}</CButton>
          <CCollapse show={this.state.display_show}>
            <FileViewer
              fileType={this.state.doc_type}
              filePath={this.getDisplayUrl()} />
          </CCollapse>
        </Fragment>
        :
        loading
    )
  }
}
export default DisplayFile