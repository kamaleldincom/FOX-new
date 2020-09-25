import React from 'react'
import {
  CCol,
  CContainer,
  CRow,
} from '@coreui/react'
import { LoginCarousel } from "../carousels"


const AuthContainer = (props) => {
  return (
    <div className="c-app c-default-layout flex-row align-items-center">
      <CContainer fluid>
        <CRow className="login-canvas justify-content-center align-items-center">
          <CCol className="login-left justify-content-center" md="6">
            {props.children}
          </CCol>
          <CCol className="login-right justify-content-center align-items-center" md="6">
            <LoginCarousel />
          </CCol>
        </CRow>
      </CContainer>
    </div>
  )
}

export default AuthContainer
