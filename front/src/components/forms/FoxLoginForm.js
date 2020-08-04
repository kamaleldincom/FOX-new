import React, { Component } from 'react';
import { render } from "react-dom";
import { CForm, CFormGroup, CInput, CLabel, CContainer, CRow, CCol } from "@coreui/react";
import DjangoCSRFToken from 'django-react-csrftoken'


class FoxLoginForm extends Component {

  constructor(props) {
    super(props)
    const onLoginSubmit = (e) => {
      e.preventDefault()
      console.log('Worked!')
    }
  }

  render() {
    return (
      <CContainer fluid={true}>
        <CRow className="mt-2 mb-2">
          <CCol sm="8" className="mx-auto">
            <CForm
              onSubmit={(e) => {
                e.preventDefault()
                console.log('Worked!')
                console.log(e.target)
              }
              }
            >
              <DjangoCSRFToken />
              <CFormGroup>
                <CLabel htmlFor="username">Name</CLabel>
                <CInput id="username" name='username' placeholder="Enter your name" required />
              </CFormGroup>
              <CFormGroup>
                <CLabel htmlFor="nf-password">Password</CLabel>
                <CInput
                  type="password"
                  id="password"
                  name="password"
                  placeholder="Enter Password.."
                  required
                />
              </CFormGroup>
              <CFormGroup>
                <CInput type="submit" value="Submit" color="info" />
              </CFormGroup>
            </CForm>
          </CCol>
        </CRow>
      </CContainer >
    )
  }
}

export default FoxLoginForm