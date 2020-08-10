import React from 'react'
import {
    CCol,
    CContainer,
    CRow
} from '@coreui/react'
import FoxRegisterCard from "../cards/FoxRegisterCard";



const Register = () => {
    return (
        <div className="c-app c-default-layout flex-row align-items-center">
            <CContainer>
                <CRow className="justify-content-center">
                    <CCol md="6">
                        <FoxRegisterCard />
                    </CCol>
                </CRow>
            </CContainer>
        </div>
    )
}

export default Register
