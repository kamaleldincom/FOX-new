import React, { Component } from 'react';
import { CContainer, CRow, CCol, CCard, CCardHeader, CCardBody, CCardFooter } from "@coreui/react";
import FoxLoginForm from "../forms/FoxLoginForm"

class FoxLoginCard extends Component {
    render() {
        return (
            <CCard>
                <CCardHeader color='dark' textColor='light'>
                    Login
                </CCardHeader>
                <FoxLoginForm />
            </CCard>
        )
    }
}

export default FoxLoginCard;
