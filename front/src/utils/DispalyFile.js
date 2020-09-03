import React, { Component } from 'react';
import FileViewer from 'react-file-viewer';
import { FoxApiService } from '../services'

const foxApi = new FoxApiService();

class DisplayFile extends Component {

  state = {
    url: ""
  }

  getFileType = (filename) => {
    const type = filename.split(".").pop()
    return type
  }

  componentDidMount = () => {
    foxApi.downloadDocument(this.props.document.id)
      .then(
        (blob) => {
          console.log("blob", blob);
          blob = blob.slice(0, blob.size, "application/pdf")
          console.log("blob2", blob);
          const url = window.URL.createObjectURL(new Blob([blob], { type: "application/pdf" }))
          console.log(url);
          return url;
        }
      )
      .then(url => {

        this.setState({ url: url })
      })
  }
  render = () => {
    return (

      <FileViewer
        fileType={this.getFileType(this.props.document.filename)}
        filePath={this.state.url} />
    )
  }
}
export default DisplayFile