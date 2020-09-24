import React, { Component } from 'react';
import { CContainer, CRow, CCol, CCard, CCardHeader, CCardBody, CCardFooter } from "@coreui/react";
import FoxLoginForm from "../forms/FoxLoginForm"

class FoxLoginCard extends Component {
  render() {
    return (
      <CRow alignHorizontal="center">
        <CCol md="6">
          <FoxLoginForm />
        </CCol>
      </CRow>

    )
  }
}

export default FoxLoginCard;
