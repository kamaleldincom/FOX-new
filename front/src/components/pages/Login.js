import React from 'react'
import {
  CCol,
  CContainer,
  CRow
} from '@coreui/react'
import FoxLoginCard from "../cards/FoxLoginCard";



const Login = () => {
  return (
    <div className="c-app c-default-layout flex-row align-items-center">
      <CContainer>
        <CRow className="justify-content-center">
          <CCol md="6">
            <FoxLoginCard />
          </CCol>
        </CRow>
      </CContainer>
    </div>
  )
}

export default Login
