import React, { Component } from 'react';
import { CContainer, CRow, CCol, CCard, CCardHeader, CCardBody, CCardFooter } from "@coreui/react";
import FoxLoginForm from "../forms/FoxLoginForm"

class FoxLoginCard extends Component {
    render() {
        return (
            <CContainer fluid={true}>
                <CRow className="mt-5">
                    <CCol sm="4" className="mx-auto align-self-center">
                        <CCard>
                            <CCardHeader color='dark' textColor='light'>
                                Login
                            </CCardHeader>
                            <FoxLoginForm />
                        </CCard>
                    </CCol>
                </CRow>

            </CContainer>

        )
    }
}

export default FoxLoginCard;
