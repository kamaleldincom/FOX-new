import React from 'react'

import {
  CFormGroup,
  CRow,
  CCol,
  CLabel,
  CInputFile,
  CButton
} from '@coreui/react'

const makeLabel = inputString => {
  return inputString.split("_").map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')
}

const FoxFormGroupDownloadUpload = props => {
  return (
    <CFormGroup>
      <CRow >
        <CCol md="1">
          <CLabel htmlFor={props.inputInfo}>{makeLabel(props.inputInfo)}</CLabel>
        </CCol>
        <CCol md="2">
          <CButton
            variant="outline"
            color="info"
            id={props.downloadValue}
            name={props.uploadInfo}
            value={props.downloadValue}
            onClick={props.downloadFile}
          >
            Download scan
      				</CButton>
        </CCol>
        <CCol md="5">
          <CLabel htmlFor={props.uploadInfo}>{`New ${makeLabel(props.uploadInfo)}`}</CLabel>
          <CInputFile id={props.uploadInfo} name={props.uploadInfo} onChange={props.handleFileUpload}
          />
        </CCol>
      </CRow>
    </CFormGroup>
  )
}

export default FoxFormGroupDownloadUpload