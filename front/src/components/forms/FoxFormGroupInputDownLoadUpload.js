import React from 'react'

import {
  CFormGroup,
  CRow,
  CCol,
  CLabel,
  CInput,
  CInputFile,
  CButton
} from '@coreui/react'

const makeLabel = inputString => {
  return inputString.split("_").map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')
}
const makePlaceholder = inputString => {
  return `Enter ${makeLabel(inputString)} info`
}

const FoxFormGroupInputDownloadUpload = props => {
  return (
    <CFormGroup>
      <CRow >
        <CCol md="5">
          <CLabel htmlFor={props.inputInfo}>{makeLabel(props.inputInfo)}</CLabel>
          <CInput
            id={props.inputInfo}
            name={props.inputInfo}
            placeholder={makePlaceholder(props.inputInfo)}
            value={props.inputValue}
            onChange={props.handleChange}
          />
        </CCol>
        <CCol md="2" className="d-flex align-items-center">
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

export default FoxFormGroupInputDownloadUpload