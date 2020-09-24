import React from 'react'
import {
  CCol,
  CContainer,
  CRow,
} from '@coreui/react'
import FoxLoginCard from "../cards/FoxLoginCard";
import { LoginCarousel } from "../carousels"



const Login = () => {
  return (
    <div className="c-app c-default-layout flex-row align-items-center">
      <CContainer fluid>
        <CRow className="login-canvas justify-content-center align-items-center">
          <CCol className="login-left justify-content-center" md="6">
            <FoxLoginCard />
          </CCol>
          <CCol className="login-right justify-content-center align-items-center" md="6">
            <LoginCarousel />
          </CCol>
        </CRow>
      </CContainer>
    </div>
  )
}

export default Login
