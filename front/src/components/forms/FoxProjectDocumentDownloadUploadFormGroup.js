import React from 'react'

import {
  CCard,
  CCardBody,
  CFormGroup,
  CRow,
  CCol,
  CLabel,
  CInputFile,
  CButton,
  CLink
} from '@coreui/react'


const FoxProjectDocumentDownLoadUploadFormGroup = props => {
  return (
    <CCard>
      <CCardBody>
        <CFormGroup key={`fg-${props.document.id}`}>

          <CLabel key={`lb-${props.document.id}`} htmlFor={props.document.id}><h5>{props.document.name}</h5> </CLabel>
          {props.document.url_to_doc ?
            <CRow>
              <CCol>
                <CLink
                  key={`dl-${props.document.id}`}
                  href={props.document.url_to_doc}
                  target="_blank"
                  className="btn btn-ghost-primary"
                >Open this document in Google Docs
                </CLink>
              </CCol>
            </CRow>
            :
            <CRow>
              <CCol md="3">
                <CButton
                  variant="outline"
                  color="primary"
                  key={`cb-${props.document.id}`}
                  id={props.document.id}
                  name={props.document.id}
                  value={props.document.filename}
                  onClick={props.downloadFile}
                >Download template for this document
                </CButton>
              </CCol>
              <CCol md="5">
                <CLabel key={`lb-${props.document.id}`} htmlFor={props.document.id}><strong>Upload filled up document:</strong> </CLabel>
                <CInputFile key={`of-${props.document.id}`}
                  id={`file-${props.document.id}`}
                  name={`${props.document.id}`}
                  onChange={props.handleFileUpload}
                />
              </CCol>
            </CRow>
          }
        </CFormGroup>
      </CCardBody>
    </CCard>

  )

}

export default FoxProjectDocumentDownLoadUploadFormGroup