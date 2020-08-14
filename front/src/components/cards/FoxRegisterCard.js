import React, { Component } from 'react';
import { CContainer, CRow, CCol, CCard, CCardHeader, CCardBody, CCardFooter } from "@coreui/react";
import FoxRegisterForm from "../forms/FoxRegisterForm"

class FoxRegisterCard extends Component {
    render() {
        return (
            <CCard>
                <CCardHeader color='dark' textColor='light'>
                    Register
                </CCardHeader>
                <FoxRegisterForm username={this.props.username} />
            </CCard>
        )
    }
}

export default FoxRegisterCard;
